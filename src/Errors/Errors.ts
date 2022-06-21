import { closeApplication } from "../Helpers";

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

class WrongAnswer extends Error {
    public code: number = 103;

    constructor(message: string) {
        super(message);
    }
    
}

function handleDBError(e: any) {

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
        case 'WrongAnswer':  {
            console.log('Wrong answer!')
            setTimeout(() => {               
                 closeApplication(74);
            }, 5000);
            break;
        }
        default: {
            console.log('Application error! Please update your version if available!');
            setTimeout(() => {
                closeApplication(70);
            }, 5000)
        }
    }
}

/*
100: Failed registration
101: Failed authentication
102: Failed intro
103: Wrong answer to Question Function
*/


export { FailedAuthentication, WrongAnswer, FailedRegistration, handleError, FailedIntro }