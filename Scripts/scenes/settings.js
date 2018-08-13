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
    var Settings = /** @class */ (function (_super) {
        __extends(Settings, _super);
        // constructors
        function Settings(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        /**
         * Start method is called at the start of the class
         *
         * @memberof Instructions
         */
        Settings.prototype.Start = function () {
            this._welcomeImage = new createjs.Bitmap(this.assetManager.getResult("welcomeImage"));
            this._welcomeImage.scaleX = 0.68;
            this._welcomeImage.scaleY = 0.8;
            this._gameNameLabel = new objects.Label("Settings", "30px", "Arial", "#6x6x00", 400, 30, true);
            this._backButton = new objects.Button(this.assetManager, "backButton", 300, 520);
            this._selectCarLabel = new objects.Label("Choose your car :", "20px", "Arial", "#FF0000", 150, 100, true);
            this._selectCarImage1 = new createjs.Bitmap(this.assetManager.getResult("car"));
            this._selectCarImage1.x = 300;
            this._selectCarImage1.y = 100;
            this._selectCarImage1.rotation = 90;
            this._selectCarImage2 = new createjs.Bitmap(this.assetManager.getResult("car6"));
            this._selectCarImage2.x = 400;
            this._selectCarImage2.y = 100;
            this._selectCarImage2.rotation = 90;
            this._selectCarImage3 = new createjs.Bitmap(this.assetManager.getResult("car3"));
            this._selectCarImage3.x = 500;
            this._selectCarImage3.y = 100;
            this._selectCarImage3.rotation = 90;
            this._selectCarImage4 = new createjs.Bitmap(this.assetManager.getResult("car5"));
            this._selectCarImage4.x = 600;
            this._selectCarImage4.y = 100;
            this._selectCarImage4.rotation = 90;
            this._selectedCarLabel = new objects.Label("Selected Car : ", "20px", "Arial", "#FF0000", 170, 150, true);
            this._levelLabel = new objects.Label("Choose Level : ", "20px", "Arial", "#FF0000", 170, 230, true);
            this._level1Image = new createjs.Bitmap(this.assetManager.getResult("level1"));
            this._level1Image.x = 250;
            this._level1Image.y = 200;
            this._level2Image = new createjs.Bitmap(this.assetManager.getResult("level2"));
            this._level2Image.x = 400;
            this._level2Image.y = 200;
            this._level3Image = new createjs.Bitmap(this.assetManager.getResult("level3"));
            this._level3Image.x = 550;
            this._level3Image.y = 200;
            this._selectedLevel = new objects.Label("Selected Level : ", "20px", "Arial", "#FF0000", 170, 300, true);
            this.showSelectedCar();
            this.showSelectedLevel();
            this.Main();
        };
        /**
         *Update method is called when stage of scene is updated.
         *
         * @memberof Instructions
         */
        Settings.prototype.Update = function () {
            // this._background.Update();
            var bounds = this._selectCarImage1.getBounds();
            this._selectCarImage1.regX = bounds.width / 2;
            this._selectCarImage1.regY = bounds.height / 2;
            bounds = this._selectCarImage2.getBounds();
            this._selectCarImage2.regX = bounds.width / 2;
            this._selectCarImage2.regY = bounds.height / 2;
            bounds = this._selectCarImage3.getBounds();
            this._selectCarImage3.regX = bounds.width / 2;
            this._selectCarImage3.regY = bounds.height / 2;
            bounds = this._selectCarImage4.getBounds();
            this._selectCarImage4.regX = bounds.width / 2;
            this._selectCarImage4.regY = bounds.height / 2;
        };
        /**
         *Reset method is called while restarting the state of scene
         *
         * @memberof Instructions
         */
        Settings.prototype.Reset = function () {
        };
        /**
         *Destroy method is called while scene is destroyed
         *
         * @memberof Instructions
         */
        Settings.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        /**
         *All the objects used in this scene are added in this method to scene.
         *This is the main method of class.
         *
         * @memberof Instructions
         */
        Settings.prototype.Main = function () {
            console.log("Starting - START SCENE");
            //this.addChild(this._ocean);
            this.addChild(this._welcomeImage);
            this.addChild(this._gameNameLabel);
            this.addChild(this._selectCarLabel);
            this.addChild(this._selectCarImage1);
            this.addChild(this._selectCarImage2);
            this.addChild(this._selectCarImage3);
            this.addChild(this._selectCarImage4);
            this.addChild(this._selectedCarLabel);
            this.addChild(this._selectedCarImage);
            this.addChild(this._levelLabel);
            this.addChild(this._level1Image);
            this.addChild(this._level2Image);
            this.addChild(this._level3Image);
            this.addChild(this._selectedLevel);
            this.addChild(this._selectedLevelImage);
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                objects.Game.currentScene = config.Scene.START;
                this.showSelectedCar();
            }, this);
            this._selectCarImage1.on("click", function () {
                objects.Game.carselected = "car";
                this.showSelectedCar();
            }, this);
            this._selectCarImage2.on("click", function () {
                objects.Game.carselected = "car6";
                this.showSelectedCar();
            }, this);
            this._selectCarImage3.on("click", function () {
                objects.Game.carselected = "car3";
                this.showSelectedCar();
            }, this);
            this._selectCarImage4.on("click", function () {
                objects.Game.carselected = "car5";
                this.showSelectedCar();
            }, this);
            this._level1Image.on("click", function () {
                objects.Game.levelSelected = "level1";
                this.showSelectedLevel();
            }, this);
            this._level2Image.on("click", function () {
                objects.Game.levelSelected = "level2";
                this.showSelectedLevel();
            }, this);
            this._level3Image.on("click", function () {
                objects.Game.levelSelected = "level3";
                this.showSelectedLevel();
            }, this);
        };
        Settings.prototype.showSelectedCar = function () {
            this._selectedCarImage = new createjs.Bitmap(this.assetManager.getResult(objects.Game.carselected));
            this._selectedCarImage.x = 330;
            this._selectedCarImage.y = 140;
            this._selectedCarImage.rotation = 90;
            this.addChild(this._selectedCarImage);
        };
        Settings.prototype.showSelectedLevel = function () {
            this._selectedLevelImage = new createjs.Bitmap(this.assetManager.getResult(objects.Game.levelSelected));
            this._selectedLevelImage.x = 250;
            this._selectedLevelImage.y = 270;
            this.addChild(this._selectedLevelImage);
        };
        return Settings;
    }(objects.Scene));
    scenes.Settings = Settings;
})(scenes || (scenes = {}));
//# sourceMappingURL=settings.js.map