const crypto = require("crypto");

class KeyGenerator {
  static generateKey() {
    return crypto.randomBytes(32).toString("hex"); // 256-bit key
  }
}

module.exports = KeyGenerator;
