module.exports = {
    aboutController: (req, res) => {
        const { user } = req.session;
        res.render('about', { user, title: 'About Page' });
    },
};
