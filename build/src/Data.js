"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Data {
    constructor(name) {
        this.data = [];
        this.name = name;
    }
    getData() {
        return this.data;
    }
    setData(rawData) {
        const processedData = rawData.split(',');
        this.data = processedData;
    }
}
exports.default = Data;
//# sourceMappingURL=Data.js.map