const Config={
    ENVIRONMENT: "dev",
    SMTP: {
        HOST: "smtp.mailtrap.io",
        PORT: "465",
        USER: "19001ee05dbe47",
        PASS: "7b3047f62d91ae",
        FROM: "noreply@test.com",
        TLS: false
    },
    DB: {
        PROTOCOL: "mongodb",
        HOST: "127.0.0.1",
        NAME: "ecommerce",
        USER: "",
        PWD: "",
        PORT: 27017
    },
    JWT_SECRET: "rohan123"
}

module.exports = Config;

//ekchoti lekhea pugcha