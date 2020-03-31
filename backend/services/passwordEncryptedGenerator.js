const Sha256 = require('crypto-js/sha256');

/**
 * Return the default password encrypted, defined on the .env file
 * OR
 * Return the string encrypted
 * @param passToEncrypt
 * @returns {*}
 */
export const generateEncryptedPassword = passToEncrypt => {
  if (passToEncrypt) {
    return (Sha256(passToEncrypt));
  }

  return (Sha256(process.env.PASSWORD_ENCRYPTED_FAKER));
};
