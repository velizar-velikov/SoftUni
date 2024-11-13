module.exports = {
    useLight: (req, res) => {
        res.setHeader('Set-Cookie', 'theme=light');
        res.redirect('/');
    },
    useDark: (req, res) => {
        res.setHeader('Set-Cookie', 'theme=dark');
        res.redirect('/');
    },
};
