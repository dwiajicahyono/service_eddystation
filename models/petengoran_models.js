const { Sequelize, Op } = require("sequelize");
// const carbon_config = require('../configs/dataCarbon.config');
require("dotenv").config();

const petengoran_sequelize = new Sequelize(
    process.env.DB,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOSTS,
        dialect: process.env.DIALECT,
        logging: false,
    }
);

const petengoran = petengoran_sequelize.define("service_petengoran", {
    nama: {
        type: Sequelize.STRING,
    },
    tanggalbeli: {
        type: Sequelize.STRING,
    },
    countdown: {
        type: Sequelize.INTEGER,
    },
});
module.exports = petengoran;
