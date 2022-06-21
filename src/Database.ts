import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('mentorship', 'andrei', 'andrei', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "Europe/Bucharest"
});


export default sequelize;