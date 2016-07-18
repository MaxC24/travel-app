require('babel-polyfill');

var chai = require('chai');
var chaiEnzyme = reauire('chai-enzyme');

chai.use(chaiEnzyme())

var context = require.context('./src', true, /\.spec\.js/);
context.keys().forEach(context);