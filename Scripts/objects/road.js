var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Road = /** @class */ (function (_super) {
        __extends(Road, _super);
        // public
        /**
         *Creates an instance of Road.
         * @param {createjs.LoadQueue} assetManager
         * @memberof Road
         */
        function Road(assetManager) {
            var _this = _super.call(this, assetManager.getResult("road")) || this;
            _this.Start();
            return _this;
        }
        // recet object location
        /**
         *
         *
         * @private
         * @memberof Road
         */
        Road.prototype._reset = function () {
            this.y = -1452;
        };
        /**
         *
         *
         * @memberof Road
         */
        Road.prototype._move = function () {
            this.y += this._dy;
        };
        /**
         *
         *
         * @memberof Road
         */
        Road.prototype._checkBounds = function () {
            if (this.y >= 0) {
                this._reset();
            }
        };
        //init var create new object
        /**
         *
         *
         * @memberof Road
         */
        Road.prototype.Start = function () {
            //  this._dy = 4;
            if (objects.Game.levelSelected == "level1") {
                this._dy = 3;
            }
            if (objects.Game.levelSelected == "level2") {
                this._dy = 4;
            }
            if (objects.Game.levelSelected == "level3") {
                this._dy = 5;
            }
            this._reset();
        };
        /**
         *
         *
         * @memberof Road
         */
        Road.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        return Road;
    }(createjs.Bitmap));
    objects.Road = Road;
})(objects || (objects = {}));
//# sourceMappingURL=road.js.map