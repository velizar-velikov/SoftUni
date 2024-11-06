module.exports = {
    homeController: (req, res) => {
        // passing context to handlebars // just an object
        // the {{ user }} is replaced if the context has property "user" with the value of it
        res.render('home', { user: 'Velizar' });
    },
};
