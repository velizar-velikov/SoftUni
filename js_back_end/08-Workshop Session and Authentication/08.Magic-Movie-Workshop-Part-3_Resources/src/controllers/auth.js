module.exports = {
    login: {
        get: (req, res) => {
            res.render('login');
        },
        post: (req, res) => {},
    },
    register: {
        get: (req, res) => {
            res.render('register');
        },
        post: (req, res) => {},
    },
    logout: (req, res) => {},
};
