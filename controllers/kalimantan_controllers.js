const fs = require("fs");
const csvParser = require("csv-parser");
const { Sequelize, Op } = require("sequelize");
const fastcsv = require('fast-csv');
const moment = require('moment');
const kalimantan = require('../models/kalimantan_models')



exports.getOneServiceKalimantan = (request, response) => {
    kalimantan.findOne({
        order: [['id', 'DESC']],
    })
        .then((result) => {
            response.json(result);
        })
        .catch((error) => {
            response.status(500).json({ error: 'Internal server error' });
        });
};

exports.get10ServiceKalimantan = (request, response) => {
    kalimantan.findAll({
        limit: 10,
        order: [['id', 'DESC']],
    })
        .then((result) => {
            response.json(result);
        })
        .catch((error) => {
            response.status(500).json({ error: 'Internal server error' });
        });
};
