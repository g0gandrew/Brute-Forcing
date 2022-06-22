"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
class DataList {
    constructor() {
        this.data = [];
    }
    getList() {
        return this.data;
    }
    insertData(data) {
        this.data.push(data);
    }
    clean() {
        this.data = [];
    }
}
exports.default = DataList;
//# sourceMappingURL=DataList.js.map