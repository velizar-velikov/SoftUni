const { parseCookie } = require('../util.js');

const homeController = (req, res) => {
    const cookieData = req.headers.cookie;

    let useDark = false;
    if (cookieData) {
        const cookies = parseCookie(cookieData);
        useDark = cookies.theme === 'dark';
    }

    res.render('home', { useDark });
};


module.exports = { homeController };
