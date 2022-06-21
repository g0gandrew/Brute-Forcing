class FailedRegistration extends Error {
    public code: number = 100;

    constructor(message: string) {
        super(message);
    }
}

class FailedAuthentication extends Error {
    public code: number = 101;

    constructor(message: string) {
        super(message);
    }
}

class FailedIntro extends Error {
    public code: number = 102;

    constructor(message: string) {
        super(message);
    }
}


function handleError(e: any) {
    switch (e.constructor.name) {
        case 'FailedAuthentication': {
            console.log(e.message);
            break;
        }
        case 'FailedIntro': {
            console.log(e.message);
            break;
        }
        case 'FailedRegistration': {
            console.log(e.message);
            break;
        }
        default: {
            console.log('Application error! Please update your version if available!');
            setTimeout(() => {
                return 'Application Error';
            }, 5000)
        }
    }
}

/*
100: Failed registration
101: Failed authentication
102: Failed intro
*/


export { FailedAuthentication, FailedRegistration, handleError, FailedIntro }