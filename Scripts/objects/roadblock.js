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
    var Roadblock = /** @class */ (function (_super) {
        __extends(Roadblock, _super);
        // private
        // public
        function Roadblock(assetManager) {
            var _this = _super.call(this, assetManager, "roadblock") || this;
            _this.Start();
            _this.y = 600;
            _this.x = (_this.randomInt(0, 3) * 125) + 230;
            return _this;
            // this.scaleX = 0.7;
            // this.scaleY = 0.3;
        }
        // recet object location
        Roadblock.prototype.Reset = function () {
            // this.x = Math.floor((Math.random()* (840-this.width))+this.halfWidth);
            this.y = -this.height;
            if (objects.Game.levelSelected == "level1") {
                this._dy = 3;
            }
            if (objects.Game.levelSelected == "level2") {
                this._dy = 4;
            }
            if (objects.Game.levelSelected == "level3") {
                this._dy = 5;
            }
            this.x = (this.randomInt(0, 3) * 125) + 230;
            this._dx = 0;
            this._dr = 0;
            this.rotation = 0;
        };
        Roadblock.prototype.randomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        /**
         *
         *
         * @memberof Roadblock
         */
        Roadblock.prototype.Move = function () {
            this.y += this._dy;
            this.x += this._dx;
            this.rotation += this._dr;
        };
        /**
         *
         *
         * @memberof Roadblock
         */
        Roadblock.prototype.CheckBounds = function () {
            if (this.y >= 700 - this.height) {
                this.Reset();
            }
            // if (this.x <= this.halfWidth + 145) {
            //     this.x = 145 + this.halfWidth;
            // }
        };
        //init var create new object
        Roadblock.prototype.Start = function () {
            this._dy = 4;
            this._dx = 0;
            this._dr = 0;
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
        };
        Roadblock.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        return Roadblock;
    }(objects.GameObject));
    objects.Roadblock = Roadblock;
})(objects || (objects = {}));
//# sourceMappingURL=roadblock.js.map