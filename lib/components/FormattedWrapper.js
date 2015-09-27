/*!
 * React Native Globalize
 *
 * Copyright 2015 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _reactNative = require('react-native');

var _types = require('../types');

var _globalize = require('../globalize');

var _globalize2 = _interopRequireDefault(_globalize);

var FormattedWrapper = (function (_Component) {
  _inherits(FormattedWrapper, _Component);

  function FormattedWrapper(props) {
    _classCallCheck(this, FormattedWrapper);

    _get(Object.getPrototypeOf(FormattedWrapper.prototype), 'constructor', this).call(this, props);

    if (props.cldr) {
      _globalize2['default'].load(props.cldr);
    }

    if (props.messages) {
      _globalize2['default'].loadMessages(props.messages);
    }

    var instance = new _globalize2['default'](props.locale, props.currency);

    this.state = {
      globalize: instance
    };
  }

  _createClass(FormattedWrapper, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        globalize: this.state.globalize
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return FormattedWrapper;
})(_reactNative.Component);

exports['default'] = FormattedWrapper;

FormattedWrapper.propTypes = _extends({}, _types.globalizePropTypes, {
  cldr: _reactNative.PropTypes.array,
  messages: _reactNative.PropTypes.object
});

FormattedWrapper.defaultProps = {
  locale: 'en',
  currency: 'USD'
};

FormattedWrapper.childContextTypes = {
  globalize: _types.globalizeShape
};
module.exports = exports['default'];