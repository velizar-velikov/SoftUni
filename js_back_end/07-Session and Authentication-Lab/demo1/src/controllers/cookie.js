module.exports = {
    setCookie: (req, res) => {
        res.setHeader('Set-Cookie', 'my-cookie=hello; HttpOnly; Secure');
        res.redirect('/');
    },
    getCookie: (req, res) => {
        const cookie = req.headers.cookie;
        res.render('get');
    },
};
