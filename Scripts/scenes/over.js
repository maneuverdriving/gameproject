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
var scenes;
(function (scenes) {
    var OverScene = /** @class */ (function (_super) {
        __extends(OverScene, _super);
        /**
         *Creates an instance of OverScene.
         * @param {createjs.LoadQueue} assetManager
         * @memberof OverScene
         */
        function OverScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        /**
         *
         *
         * @private
         * @memberof OverScene
         */
        OverScene.prototype._backButtonClick = function () {
            objects.Game.currentScene = config.Scene.START;
        };
        OverScene.prototype.Init = function () {
        };
        OverScene.prototype.Start = function () {
            this._overLabel = new objects.Label("Game over", '60px', "Consolas", "#FF0000", 250, 100);
            this._backButton = new objects.Button(this.assetManager, "backButton", 650, 100);
            this._lastImage = new createjs.Bitmap(this.assetManager.getResult("welcomeImage"));
            this._lastImage.scaleX = 0.68;
            this._lastImage.scaleY = 0.8;
            this.Main();
        };
        OverScene.prototype.Main = function () {
            this.addChild(this._lastImage);
            this.addChild(this._overLabel);
            this.addChild(this._backButton);
            this._backButton.on("click", this._backButtonClick);
        };
        OverScene.prototype.Update = function () {
        };
        OverScene.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        return OverScene;
    }(objects.Scene));
    scenes.OverScene = OverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map