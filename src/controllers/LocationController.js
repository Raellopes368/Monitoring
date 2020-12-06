class LocationController {
  store(req, res) {
    return res.json({
      ok: true,
    });
  }

  index(req, res) {
    return res.json({
      ok: true,
    });
  }
}
module.exports = new LocationController();
