const crypto = require("crypto");

class HMACGenerator {
  static generateHMAC(key, message) {
    return crypto.createHmac("sha256", key).update(message).digest("hex");
  }
}

module.exports = HMACGenerator;
