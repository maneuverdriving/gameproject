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
    var Barrel = /** @class */ (function (_super) {
        __extends(Barrel, _super);
        // private
        // public
        /**
         *Creates an instance of Barrel.
         * @param {createjs.LoadQueue} assetManager
         * @memberof Barrel
         */
        function Barrel(assetManager) {
            var _this = _super.call(this, assetManager, "barrel") || this;
            _this.Start();
            _this.y = 600;
            _this.x = (_this.randomInt(0, 3) * 125) + 230;
            return _this;
            //  this.scaleX = 0.4;
            //  this.scaleY = 0.4;
        }
        // recet object location
        /**
         *
         *
         * @memberof Barrel
         */
        Barrel.prototype.Reset = function () {
            this.x = this.x = (this.randomInt(0, 3) * 125) + 230;
            this.y = -this.height;
            this._dx = 0;
            this._dr = 0;
            this.rotation = 0;
            if (objects.Game.levelSelected == "level1") {
                this._dy = 3;
            }
            if (objects.Game.levelSelected == "level2") {
                this._dy = 4;
            }
            if (objects.Game.levelSelected == "level3") {
                this._dy = 5;
            }
        };
        /**
         *
         *
         * @private
         * @param {*} min
         * @param {*} max
         * @returns
         * @memberof Barrel
         */
        Barrel.prototype.randomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        //move objects
        /**
         *
         *
         * @memberof Barrel
         */
        Barrel.prototype.Move = function () {
            this.y += this._dy;
            this.x += this._dx;
        };
        /**
         *
         *
         * @memberof Barrel
         */
        Barrel.prototype.CheckBounds = function () {
            if (this.y >= 700 - this.height) {
                this.Reset();
            }
            if (this.x <= this.halfWidth + 145) {
                this.x = 145 + this.halfWidth;
                this._dx = -1 * this._dx;
            }
            if (this.x >= 700 - this.halfWidth) {
                this.x = 700 - this.halfWidth;
                this._dx = -1 * this._dx;
            }
        };
        //init var create new object
        /**
         *
         *
         * @memberof Barrel
         */
        Barrel.prototype.Start = function () {
            this._dy = 4;
            this._dx = 0;
            this._dr = 0;
            // this._dy = 4;
            if (objects.Game.levelSelected == "level1") {
                this._dy = 3;
            }
            if (objects.Game.levelSelected == "level2") {
                this._dy = 4;
            }
            if (objects.Game.levelSelected == "level3") {
                this._dy = 5;
            }
        };
        Barrel.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        return Barrel;
    }(objects.GameObject));
    objects.Barrel = Barrel;
})(objects || (objects = {}));
//# sourceMappingURL=barrel.js.map