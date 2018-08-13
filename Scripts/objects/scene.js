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
    var Scene = /** @class */ (function (_super) {
        __extends(Scene, _super);
        //private 
        /**
         *Creates an instance of Scene.
         * @param {createjs.LoadQueue} assetManager
         * @memberof Scene
         */
        function Scene(assetManager) {
            var _this = _super.call(this) || this;
            _this.assetManager = assetManager;
            return _this;
        }
        /**
         *
         *
         * @memberof Scene
         */
        Scene.prototype.Init = function () {
        };
        /**
         *
         *
         * @memberof Scene
         */
        Scene.prototype.Main = function () {
        };
        /**
         *
         *
         * @memberof Scene
         */
        Scene.prototype.Start = function () {
        };
        Scene.prototype.Update = function () {
        };
        Scene.prototype.Destroy = function () {
        };
        return Scene;
    }(createjs.Container));
    objects.Scene = Scene;
})(objects || (objects = {}));
//# sourceMappingURL=scene.js.map