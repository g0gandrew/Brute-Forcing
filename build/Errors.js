"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FailedAuthentication = void 0;
class FailedAuthentication extends Error {
    constructor(message) {
        super(message);
        this.code = 100;
    }
}
exports.FailedAuthentication = FailedAuthentication;
//# sourceMappingURL=Errors.js.map