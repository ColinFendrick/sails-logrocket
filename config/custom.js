/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */

module.exports.custom = {
  baseUrl: 'http://localhost:1337',
  emailProofTokenTTL: 24 * 60 * 60 * 1000, // 24 hours
  passwordResetTokenTTL: 24 * 60 * 60 * 1000, // 24 hours
};
