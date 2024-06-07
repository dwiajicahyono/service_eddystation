const fs = require("fs");
const csvParser = require("csv-parser");
const { Sequelize, Op } = require("sequelize");
const fastcsv = require('fast-csv');
const moment = require('moment');
const petengoran = require('../models/petengoran_models')



exports.getOneServicePetengoran = (request, response) => {
    petengoran.findOne({
        order: [['id', 'DESC']],
    })
        .then((result) => {
            response.json(result);
        })
        .catch((error) => {
            response.status(500).json({ error: 'Internal server error' });
        });
};

exports.get10ServicePetengoran = (request, response) => {
    petengoran.findAll({
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
