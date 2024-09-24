

export class SessionStorageService {
    public get isAuthenticated() {
        return sessionStorage.getItem("isAuthenticated") == "true"
    }

    public set isAuthenticated(value: boolean) {
        if (value) {
            sessionStorage.setItem("isAuthenticated", "true")
        } else {
            sessionStorage.setItem("isAuthenticated", "false")
        }
    }
}
