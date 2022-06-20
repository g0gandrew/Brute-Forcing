import { Sequelize } from "sequelize/types";

const sequelize = new Sequelize('securitate', 'andrei', 'andrei', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "Europe/Bucharest"
});


export default sequelize;