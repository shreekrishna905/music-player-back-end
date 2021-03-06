
class BaseError extends Error {
    
    constructor(name, httpCode, description) {
      super(description);
      Object.setPrototypeOf(this, new.target.prototype);
      this.name = name;
      this.httpCode = httpCode;
      this.description = description;
      Error.captureStackTrace(this);
    }
}

module.exports = BaseError;