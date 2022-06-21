"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FailedIntro = exports.handleError = exports.FailedRegistration = exports.FailedAuthentication = void 0;
class FailedRegistration extends Error {
    constructor(message) {
        super(message);
        this.code = 100;
    }
}
exports.FailedRegistration = FailedRegistration;
class FailedAuthentication extends Error {
    constructor(message) {
        super(message);
        this.code = 101;
    }
}
exports.FailedAuthentication = FailedAuthentication;
class FailedIntro extends Error {
    constructor(message) {
        super(message);
        this.code = 102;
    }
}
exports.FailedIntro = FailedIntro;
function handleError(e) {
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
            }, 5000);
        }
    }
}
exports.handleError = handleError;
//# sourceMappingURL=Errors.js.map