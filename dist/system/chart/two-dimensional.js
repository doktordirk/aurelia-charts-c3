'use strict';

System.register(['./c3-chart'], function (_export, _context) {
  "use strict";

  var C3Chart, TwoDimensional;

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

  return {
    setters: [function (_c3Chart) {
      C3Chart = _c3Chart.C3Chart;
    }],
    execute: function () {
      _export('TwoDimensional', TwoDimensional = function (_C3Chart) {
        _inherits(TwoDimensional, _C3Chart);

        function TwoDimensional() {
          _classCallCheck(this, TwoDimensional);

          return _possibleConstructorReturn(this, _C3Chart.apply(this, arguments));
        }

        TwoDimensional.prototype.calculateSettings = function calculateSettings() {
          var _this2 = this;

          var columns = [];
          var xs = {};

          this.data.forEach(function (dataset, index) {
            var name = _this2.dimensions.name ? _this2.dimensions.name(dataset, index, _this2.data) : index;
            var yKey = name;
            var xKey = 'x' + yKey;

            xs[yKey] = xKey;
            columns = columns.concat([[yKey].concat(dataset.map(_this2.dimensions[1].value)), [xKey].concat(dataset.map(_this2.dimensions[0].value))]);
          });

          this.settings = { columns: columns, xs: xs };

          return this.settings;
        };

        return TwoDimensional;
      }(C3Chart));

      _export('TwoDimensional', TwoDimensional);
    }
  };
});