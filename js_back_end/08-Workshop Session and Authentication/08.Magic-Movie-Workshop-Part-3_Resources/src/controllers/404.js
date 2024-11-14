module.exports = {
    notFound: (req, res) => {
        const { user } = req.session;
        res.render('404', { user });
    },
};
