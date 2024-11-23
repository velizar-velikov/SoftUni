const notFound = (req, res) => {
    res.locals.pageTitle = 'Not Found';
    res.render('404');
};

module.exports = { notFound };
