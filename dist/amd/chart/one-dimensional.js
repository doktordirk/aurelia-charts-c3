define(['exports', './c3-chart'], function (exports, _c3Chart) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.OneDimensional = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var OneDimensional = exports.OneDimensional = function (_C3Chart) {
    _inherits(OneDimensional, _C3Chart);

    function OneDimensional() {
      _classCallCheck(this, OneDimensional);

      return _possibleConstructorReturn(this, _C3Chart.apply(this, arguments));
    }

    OneDimensional.prototype.calculateSettings = function calculateSettings() {
      var _this2 = this;

      var columns = this.data.map(function (dataset, index, data) {
        var name = _this2.dimensions.name ? _this2.dimensions.name(dataset, index, data) : index;

        return [name].concat(dataset.map(_this2.dimensions[0].value));
      });

      this.settings = { columns: columns };

      return this.settings;
    };

    return OneDimensional;
  }(_c3Chart.C3Chart);
});