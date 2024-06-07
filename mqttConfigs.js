const mqtt = require('mqtt');
const kalimantan = require('./models/kalimantan_models');
const petengoran = require('./models/petengoran_models')
require('dotenv').config();

const options = {
    username: process.env.USERNAMEMQTT,
    password: process.env.PASSWORDMQTT
};

const initMqttClient = () => {
    const client = mqtt.connect(process.env.LINKMQTT, options);

    client.on('connect', () => {
        console.log("Terhubung ke MQTT Broker");
        client.subscribe(process.env.TOPIC_KALIMANTAN, (err) => {
            if (err) {
                console.error("Error subscribing to topic:", err);
            } else {
                console.log("1. MQTT terhubung pada: ", process.env.TOPIC_KALIMANTAN);
            }
        });
    });

    client.on('connect', () => {
        console.log("Terhubung ke MQTT Broker");
        client.subscribe(process.env.TOPIC_PETENGORAN, (err) => {
            if (err) {
                console.error("Error subscribing to topic:", err);
            } else {
                console.log("2. MQTT terhubung pada: ", process.env.TOPIC_PETENGORAN);
            }
        });
    });

    client.on('message', async (topic, message) => {
        if (topic === process.env.TOPIC_KALIMANTAN) {
            try {
                const jsonData = JSON.parse(message.toString());

                await kalimantan.create({
                    nama: jsonData.nama,
                    tanggalbeli: jsonData.tanggalbeli,
                    countdown: jsonData.countdown,
                });
                console.log(`Data dari ${process.env.TOPIC_KALIMANTAN} dimasukkan ke database!`);
            } catch (err) {
                console.error("Error during message handling:", err);
            }
        }
    });
    client.on('message', async (topic, message) => {
        if (topic === process.env.TOPIC_PETENGORAN) {
            try {
                const jsonData = JSON.parse(message.toString());

                await petengoran.create({
                    nama: jsonData.nama,
                    tanggalbeli: jsonData.tanggalbeli,
                    countdown: jsonData.countdown,
                });
                console.log(`Data dari ${process.env.TOPIC_PETENGORAN} dimasukkan ke database!`);
            } catch (err) {
                console.error("Error during message handling:", err);
            }
        }
    });

    return client;
};

module.exports = initMqttClient;
