const { parseCookie } = require('../util.js');

const sessions = {};

const setSession = (req, res) => {
    const id = getId();
    sessions[id] = { visits: 0 };
    res.setHeader('Set-Cookie', `sessionId=${id}; HttpOnly; Secure`);
    res.redirect('/get-session');
};

const getSession = (req, res) => {
    const cookieData = req.headers.cookie;
    const cookies = parseCookie(cookieData);

    const sessionId = cookies.sessionId;
    const session = sessions[sessionId];

    if (session) {
        console.log(session);
        session.visits++;
    } else {
        console.log('Anonymous user');
    }

    res.render('session', { visits: session?.visits || 0 });
};

function getId() {
    return 'xxxx-xxxx'.replace(/x/g, () => ((Math.random() * 16) | 0).toString(16));
}

module.exports = {
    setSession,
    getSession,
};
