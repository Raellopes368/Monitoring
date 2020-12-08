const Location = require('../models/location');
const { sendMessage } = require('../../websocket');

class LocationController {
  async store(req, res) {
    const { latitude, longitude } = req.body;
    console.log({ latitude, longitude });
    const location = await Location.create({
      latitude,
      longitude,
    });
    sendMessage('new', {
      lat: latitude,
      lng: longitude,
    });

    return res.json(location);
  }

  async index(req, res) {
    const {
      day = new Date().getDate(),
      month = new Date().getMonth() + 1,
      initMonth = new Date().getMonth() - 1,
      year = new Date().getFullYear(),
    } = req.query;

    const locations = await Location.find({
      $and: [
        {
          createdAt: {
            $gte: new Date(year, initMonth, day),
            $lte: new Date(year, month, day),
          },
        },
      ],
    });
    return res.json(locations);
  }

  async show(req, res) {
    const location = await Location.findOne({}).sort({ createdAt: -1 });
    return res.json(location);
  }
}
module.exports = new LocationController();
