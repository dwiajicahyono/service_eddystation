"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbkalimantan = require('./models/kalimantan_models');
const dbpetengoran = require('./models/petengoran_models')
const route = require('./routes/user.routes');
const mqttClient = require('./mqttConfigs');  // Impor konfigurasi MQTT



const app = express();


// menghidupkan mqtt
mqttClient()



const corsOptions = {
    origin: '*',
};

// apply the CORS options
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());



// if you run again and don't wanna lose your data
dbkalimantan.sequelize.sync();
dbpetengoran.sequelize.sync();





// Pertama, atur middleware untuk file statis
app.use(express.static('public'));
app.use('/api', route);

app.use('/', cors(), (req, res) => {
    res.status(404);
    res.send('POWERED BY DWI AJI| You Can Try in ROOT');
});

// set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on  http://localhost:${PORT}.`);
});

