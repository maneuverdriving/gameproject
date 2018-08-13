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
    var LevelChange = /** @class */ (function (_super) {
        __extends(LevelChange, _super);
        /**
         *Creates an instance of OverScene.
         * @param {createjs.LoadQueue} assetManager
         * @memberof LevelChange
         */
        function LevelChange(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        /**
         *
         *
         * @private
         * @memberof LevelChange
         */
        LevelChange.prototype._backButtonClick = function () {
            objects.Game.currentScene = config.Scene.START;
        };
        LevelChange.prototype.Init = function () {
        };
        LevelChange.prototype.Start = function () {
            if (objects.Game.levelSelected == "level3") {
                this._congratulationsLabel = new objects.Label("Congratulations! You have passed " + objects.Game.levelSelected + ".", '24px', "Consolas", "#FF0000", 250, 30);
                this._overLabel = new objects.Label("Game Finished! Restart from Level 1 : ", '18px', "Consolas", "#FF0000", 250, 100);
                this._nextLevelImage = new createjs.Bitmap(this.assetManager.getResult("RestartButton"));
                this._nextLevelImage.x = 650;
                this._nextLevelImage.y = 90;
            }
            else {
                this._congratulationsLabel = new objects.Label("Congratulations! You have passed " + objects.Game.levelSelected + ".", '24px', "Consolas", "#FF0000", 250, 30);
                this._overLabel = new objects.Label("Go to Next Level : ", '26px', "Consolas", "#FF0000", 250, 100);
                this._nextLevelImage = new createjs.Bitmap(this.assetManager.getResult("nextButton"));
                this._nextLevelImage.x = 520;
                this._nextLevelImage.y = 90;
            }
            this._backButton = new objects.Button(this.assetManager, "backButton", 380, 500);
            this._lastImage = new createjs.Bitmap(this.assetManager.getResult("welcomeImage"));
            this._lastImage.scaleX = 0.68;
            this._lastImage.scaleY = 0.8;
            this.Main();
        };
        LevelChange.prototype.Main = function () {
            this.addChild(this._lastImage);
            this.addChild(this._congratulationsLabel);
            this.addChild(this._overLabel);
            this.addChild(this._nextLevelImage);
            this._nextLevelImage.on("click", function () {
                if (objects.Game.levelSelected == "level1") {
                    objects.Game.levelSelected = "level2";
                }
                else if (objects.Game.levelSelected == "level2") {
                    objects.Game.levelSelected = "level3";
                }
                else if (objects.Game.levelSelected == "level3") {
                    objects.Game.levelSelected = "level1";
                }
                objects.Game.currentScene = config.Scene.PLAY;
            }, this);
            this.addChild(this._backButton);
            this._backButton.on("click", this._backButtonClick);
        };
        LevelChange.prototype.Update = function () {
        };
        return LevelChange;
    }(objects.Scene));
    scenes.LevelChange = LevelChange;
})(scenes || (scenes = {}));
//# sourceMappingURL=levelchange.js.map