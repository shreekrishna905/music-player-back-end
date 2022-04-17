const HttpStatusCode = require('./HttpStatusCode');
const BaseError = require('./BaseError');
class AccessDenied extends BaseError {
    constructor(description = 'requested resource is denied') {
      super('Access Denied', HttpStatusCode.BAD_REQUEST, description);
    }
}

module.exports = AccessDenied;