const HttpStatusCode = require('./HttpStatusCode');
const BaseError = require('./BaseError');
class HTTP404Error extends BaseError {
    constructor(description = 'resource not found') {
      super('NOT FOUND', HttpStatusCode.NOT_FOUND, description);
    }
}

module.exports = HTTP404Error;