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

function handleError(e: any) {
    switch (e.constructor.name) {
        case 'FailedAuthentication': {
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
100: Faild registration
101: Faild authentication
*/


export { FailedAuthentication, FailedRegistration, handleError }