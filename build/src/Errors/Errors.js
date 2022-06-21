"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FailedIntro = exports.handleError = exports.FailedRegistration = exports.WrongAnswer = exports.FailedAuthentication = void 0;
const Helpers_1 = require("../Helpers");
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
class WrongAnswer extends Error {
    constructor(message) {
        super(message);
        this.code = 103;
    }
}
exports.WrongAnswer = WrongAnswer;
function handleDBError(e) {
}
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
        case 'WrongAnswer': {
            console.log('Wrong answer!');
            setTimeout(() => {
                (0, Helpers_1.closeApplication)(74);
            }, 5000);
            break;
        }
        default: {
            console.log('Application error! Please update your version if available!');
            setTimeout(() => {
                (0, Helpers_1.closeApplication)(70);
            }, 5000);
        }
    }
}
exports.handleError = handleError;
//# sourceMappingURL=Errors.js.map