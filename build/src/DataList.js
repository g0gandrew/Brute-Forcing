"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
class DataList {
    constructor() {
        this.lists = [];
    }
    getList() {
        return this.lists;
    }
    insertData(data) {
        this.lists.push(data);
    }
    clean() {
        this.lists = [];
    }
}
exports.default = DataList;
//# sourceMappingURL=DataList.js.map