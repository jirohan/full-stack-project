const Config= {
    ENVIRONMENT:"dev",
    DB: {
        PROTOCOL: "mongodb",
        HOST: "127.0.0.1",
        NAME: "note-management",
        USER: "",
        PWD: "",
        PORT: 27017
    },
    JWT_SECRET: "1234rohan"
}

module.exports = Config;