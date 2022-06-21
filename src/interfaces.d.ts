interface RegistrationCredentials {
    username: string,
    password: string,
    ip: string
}

interface QuestionOptions {
    clearConsole?: boolean,
}

export { RegistrationCredentials, QuestionOptions }