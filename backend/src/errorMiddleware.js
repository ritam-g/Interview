class AppError extends Error {
    constructor(message, sc) {
        super(message)
        this.statusCode = sc
    }
}

module.exports = AppError