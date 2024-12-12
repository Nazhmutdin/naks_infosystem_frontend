import { type AxiosError } from "axios"
import { authenticateErrorHandler, updateTokensErrorHandler, authPageErrorHandler } from "./funcs"


type ErrorHandlerFunction = (error: AxiosError) => void

interface ErrorHandlerMany {
    [key: string]: ErrorHandlerFunction
}

export interface ResponseData {
    code?: string
}

export class ExceptionHandlerRegistry{
    private handlers = new Map<string, ErrorHandlerFunction>()

    constructor(handlers?: ErrorHandlerMany){
        if (handlers !== undefined) this.registerMany(handlers)
    }

    register(key: string, handler: ErrorHandlerFunction) {
        this.handlers.set(key, handler)
        return this
    }

    unregister(key: string) {
        this.handlers.delete(key)
        return this
    }

    find(key: string): ErrorHandlerFunction | undefined {
        return this.handlers.get(key)
    }

    registerMany(handlers: ErrorHandlerMany) {
        for (const [key, value] of Object.entries(handlers)){
            this.register(key, value)
        }

        return this
    }

    handleError(
        seek: string,
        error: AxiosError
    ): void {
        const handler = this.find(String(seek))

        if (handler) {
            handler(error)
        }
    }
}


export const ServiceExcptionHandlers = {
    access_token_expired: authenticateErrorHandler,
    refresh_token_expired: updateTokensErrorHandler,
    refresh_token_revoked: authPageErrorHandler,
    access_token_cookie_not_found: authenticateErrorHandler,
    refresh_token_cookie_not_found: authPageErrorHandler
}