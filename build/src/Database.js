"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("sequelize/types");
const sequelize = new types_1.Sequelize('securitate', 'andrei', 'andrei', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "Europe/Bucharest"
});
exports.default = sequelize;
//# sourceMappingURL=Database.js.map