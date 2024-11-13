import { isAxiosError, type AxiosError } from "axios"


interface HttpData {
    code: string
    detail?: string
    status: number
}


type THttpError = Error | AxiosError | null


interface ErrorHandlerObject {
    after?(error?: THttpError, options?: ErrorHandlerObject): void
    before?(error?: THttpError, options?: ErrorHandlerObject): void
    message?: string
}


interface ErrorHandlerMany {
    [key: string]: ErrorHandler
}


function isErrorHandlerObject(value: any): value is ErrorHandlerObject {
    if (typeof value === 'object') {
      return ['message', 'after', 'before', 'notify'].some((k) => k in value)
    }
    return false
}


type ErrorHandlerFunction = (error?: THttpError) => ErrorHandlerObject | boolean | undefined
type ErrorHandler = ErrorHandlerFunction | ErrorHandlerObject | string


export class ExceptionHandlerRegistry{
    private handlers = new Map<string, ErrorHandler>()

    constructor(handlers?: ErrorHandlerMany){
        if (handlers !== undefined) this.registerMany(handlers)
    }

    register(key: string, handler: ErrorHandler) {
        this.handlers.set(key, handler)
        return this
    }

    unregister(key: string) {
        this.handlers.delete(key)
        return this
    }

    find(key: string): ErrorHandler | undefined {
        return this.handlers.get(key)
    }

    registerMany(handlers: ErrorHandlerMany) {
        for (const [key, value] of Object.entries(handlers)){
            this.register(key, value)
        }

        return this
    }

    handleError(
        seek: (string | undefined)[] | string,
        error: THttpError
    ): boolean {
        if (Array.isArray(seek)) {
            return seek.some((key) => {
                if (key !== undefined) return this.handleError(String(key), error)
            })
        }

        const handler = this.find(String(seek))

        if (!handler) {
            return false
        } else if (typeof handler === 'string') {
            return this.handleErrorObject(error, { message: handler })
        } else if (typeof handler === 'function') {
            const result = handler(error)
            if (isErrorHandlerObject(result)) return this.handleErrorObject(error, result)
            return !!result
        } else if (isErrorHandlerObject(handler)) {
            return this.handleErrorObject(error, handler)
        }
        return false
    }

    handleErrorObject(error: THttpError, options: ErrorHandlerObject = {}) {
        options?.before?.(error, options)
        return true
    }

    resposeErrorHandler(error: THttpError) {
        if (error === null) throw new Error('Unrecoverrable error!! Error is null!')
        if (isAxiosError(error)) {
            const response = error?.response
            const data = response?.data as HttpData
            const result = this.handleError(data.code, error)

            if (!result) {
                if (data?.code && data?.detail) {
                    return this.handleErrorObject(error, {
                        message: data?.detail,
                    })
                }
            }
        } else if (error instanceof Error) {
            return this.handleError(error.name, error)
        }

        throw error
    }
}