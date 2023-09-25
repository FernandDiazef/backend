const apiResponseSuccess = (data, message, code) => {
     return {
        message: message,
        data: data,
        status: code,
        error: null
    };
};

const apiResponseError = (error, message, code) => {
    return {
        message: message,
        data: null,
        status: code,
        error: error?.stack
    }
};

module.exports = { apiResponseSuccess, apiResponseError };
