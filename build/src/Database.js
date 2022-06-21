"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('mentorship', 'andrei', 'andrei', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "Europe/Bucharest"
});
exports.default = sequelize;
//# sourceMappingURL=Database.js.map