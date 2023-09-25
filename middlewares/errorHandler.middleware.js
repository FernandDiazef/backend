const { apiResponseError } = require("../utils/responsers.utils");

const errorAsyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        next(error);
    };
};

const errorHandler = (error, req, res, next) => {
        if (error) {
            res.status(error.status || 500).json(apiResponseError(error, error.message, error.status || 500));
        };
        next();
};

module.exports = { errorAsyncHandler, errorHandler };
