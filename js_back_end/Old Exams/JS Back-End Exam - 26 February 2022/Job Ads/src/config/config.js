module.exports = {
    host: process.env.APP_HOST,
    port: process.env.APP_PORT,
    db_port: process.env.DB_PORT,
    protocol: process.env.APP_PROTOCOL,
    base_url: `${process.env.APP_PROTOCOL || 'http'}://${process.env.APP_HOST || 'localhost'}:${process.env.APP_PORT || '3000'}`,
    db_connection: `mongodb://${process.env.APP_HOST || 'localhost'}:${process.env.DB_PORT || '27017'}/jobAds`,
    cookie_name: `${process.env.COOKIE_NAME || 'authToken'}`,
    secret: `${process.env.SECRET || 'magic secret'}`,
    tokenExpTime: `${process.env.TOKEN_EXPIRATION_TIME || '2h'}`,
    saltRounds: `${process.env.SALT_ROUNDS || '5'}`,
};
