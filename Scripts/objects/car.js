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
    var Car = /** @class */ (function (_super) {
        __extends(Car, _super);
        // private
        // public
        /**
         *Creates an instance of Car.
         * @param {createjs.LoadQueue} assetManager
         * @memberof Car
         */
        function Car(assetManager) {
            var _this = _super.call(this, assetManager, objects.Game.carselected) || this;
            _this.Start();
            _this.y = 540;
            _this.x = 200;
            return _this;
            //  this.scaleX = 0.4;
            // this.scaleY = 0.4;
        }
        // recet object location
        /**
         *
         *
         * @memberof Car
         */
        Car.prototype.Reset = function () {
        };
        //move objects
        /**
         *
         *
         * @memberof Car
         */
        Car.prototype.Move = function () {
            //Mouse Controls  
            //  this.x  = objects.Game.stage.mouseX;
            console.log("move left : " + objects.Game.keyboardManager.moveLeft);
            //Keyboard Controls
            if (objects.Game.keyboardManager.moveLeft) {
                this.x -= 5;
            }
            if (objects.Game.keyboardManager.moveRight) {
                this.x += 5;
            }
        };
        /**
         *
         *
         * @memberof Car
         */
        Car.prototype.CheckBounds = function () {
            if (this.x >= 700 - this.halfWidth) {
                this.x = 700 - this.halfWidth;
            }
            if (this.x <= this.halfWidth + 145) {
                this.x = 145 + this.halfWidth;
            }
        };
        //init var create new object
        /**
         *
         *
         * @memberof Car
         */
        Car.prototype.Start = function () {
        };
        Car.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        return Car;
    }(objects.GameObject));
    objects.Car = Car;
})(objects || (objects = {}));
//# sourceMappingURL=car.js.map