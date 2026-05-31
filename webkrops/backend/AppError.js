class AppError extends Error {
    constructor(err, message) {
        super(message)
        this.err = err
        this.message = message
    }
}

module.exports=AppError