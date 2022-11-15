
const newError = (status, message, errors) => {
    const err = new Error();
    err.statusCode = status;
    err.message = message;
    err.errors = errors;

    return err;
}

module.exports = newError;