import { Sequelize } from "sequelize/types";

const sequelize = new Sequelize('mentorship', 'andrei', 'andrei', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "Europe/Bucharest"
});


export default sequelize;