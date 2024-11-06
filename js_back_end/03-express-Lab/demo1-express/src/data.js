function dataController(req, res) {
    res.json({
        message: 'Hello',
        value: 5,
        count: req.count,
    });
}

module.exports = { dataController };
