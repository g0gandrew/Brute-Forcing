"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { createConnection } = require('mysql2/promise');
const databaseConfig = {
    host: 'localhost',
    user: 'root',
    password: 'Mobileapp!?',
    database: 'social-app'
};
const connection = createConnection(databaseConfig);
exports.default = connection;
//# sourceMappingURL=Database.js.map