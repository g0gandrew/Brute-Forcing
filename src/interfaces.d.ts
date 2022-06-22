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

interface IBruteForceConfig {
    targetURL: string,
    parametersAmount: number,
    urlParameters: Array<string>
}

interface IProcessedTargetURL { 
    targetURL: string,
    parametersAmount: number,
    urlParameters: Array<string>
}


interface IBruteForceURLs {

}

interface IRequestParameterLinkedData {
    [key?: string]: Array<string>
}

interface IDisplayList {
    deelay: boolean
    time: number
}


export { IRegistrationCredentials, IRequestParameterLinkedData, IProcessedTargetURL,  IBruteForceConfig, IQuestionOptions, IUser, IDisplayList }