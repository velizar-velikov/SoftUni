const { parseCookie } = require('../util.js');

const homeController = (req, res) => {
    const cookieData = req.headers.cookie;

    const cookies = parseCookie(cookieData);
    const useDark = cookies.theme === 'dark';

    req.session.message = 'hello';

    res.render('home', { useDark });
};

module.exports = { homeController };
