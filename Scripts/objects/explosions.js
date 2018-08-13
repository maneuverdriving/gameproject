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
    var Explosion = /** @class */ (function (_super) {
        __extends(Explosion, _super);
        // public
        /**
         *Creates an instance of Road.
         * @param {createjs.LoadQueue} assetManager
         * @memberof Road
         */
        function Explosion(assetManager) {
            var _this = _super.call(this, assetManager.getResult("explosionImage")) || this;
            _this.Start();
            return _this;
        }
        /**
         *
         *
         * @memberof Road
         */
        Explosion.prototype._checkBounds = function () {
        };
        //init var create new object
        /**
         *
         *
         * @memberof Road
         */
        Explosion.prototype.Start = function () {
            var that = this;
            setTimeout(function () {
                that.alpha = 0;
            }, 100);
        };
        /**
         *
         *
         * @memberof Road
         */
        Explosion.prototype.Update = function () {
        };
        return Explosion;
    }(createjs.Bitmap));
    objects.Explosion = Explosion;
})(objects || (objects = {}));
//# sourceMappingURL=explosions.js.map