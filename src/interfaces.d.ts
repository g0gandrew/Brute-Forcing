interface IRegistrationCredentials {
    username: string,
    password: string,
    ip: string
}

interface IQuestionOptions {
    clearConsole?: boolean,
}

interface IUser {
    registration: Function,
    authentication: Function
}

interface IDisplayList {
    deelay: boolean
}


export { IRegistrationCredentials, IQuestionOptions, IUser, IDisplayList}