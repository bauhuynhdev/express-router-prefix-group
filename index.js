const express = require('express')

express.application.prefix = express.Router.prefix = function (path, middleware = null, configure = null) {
    const router = express.Router()
    if (typeof middleware === "function" && configure === null) {
        configure = middleware
        middleware = []
    }
    configure(router)
    this.use(path, middleware, router)
    return router
};

module.exports = express
