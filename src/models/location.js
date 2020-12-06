const { model, Schema } = require('mongoose');

const LocatinSchema = new Schema(
  {
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
module.exports = model('Location', LocatinSchema);
