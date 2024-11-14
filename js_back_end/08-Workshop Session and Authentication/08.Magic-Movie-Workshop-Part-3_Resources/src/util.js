function ifNoUserRedirectToHome(req, res) {
    const { user } = req.session;
    if (!user) {
        res.redirect('/');
        return false;
    }
    return true;
}

module.exports = { ifNoUserRedirectToHome };
