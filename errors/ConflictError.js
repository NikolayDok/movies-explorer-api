const CONFLICT_CODE = 409;

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = CONFLICT_CODE;
  }
}

module.exports = ConflictError;
