/**
 * @author: @AngularClass
 */

switch (process.env.FORMAT) {
  case 'umd':
    module.exports = require('./config/webpack.config.umd');
    break;
  case 'dllplugin':
    module.exports = require('./config/webpack.config.dllplugin');
  case 'both':
  default:
    module.exports = [
      require('./config/webpack.config.umd'),
      require('./config/webpack.config.dllplugin')
    ];
}
