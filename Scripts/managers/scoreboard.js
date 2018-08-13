var managers;
(function (managers) {
    /**
     *
     *
     * @export
     * @class Scoreboard
     */
    var Scoreboard = /** @class */ (function () {
        /**
         *Creates an instance of Scoreboard.
         * @memberof Scoreboard
         */
        function Scoreboard() {
            this._initialize();
        }
        Object.defineProperty(Scoreboard.prototype, "Lives", {
            //public properties
            /**
             *
             *
             * @type {number}
             * @memberof Scoreboard
             */
            get: function () {
                return this._lives;
            },
            /**
             *
             *
             * @memberof Scoreboard
             */
            set: function (newLives) {
                this._lives = newLives;
                this.LiveLabel.text = "Lives :" + this._lives;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scoreboard.prototype, "Score", {
            get: function () {
                return this._scores;
            },
            /**
             *
             *
             * @memberof Scoreboard
             */
            set: function (newScore) {
                this._scores = newScore;
                this.ScoreLabel.text = "Scores :" + this._scores;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scoreboard.prototype, "HighScore", {
            get: function () {
                return this._highScore;
            },
            /**
             *
             *
             * @memberof Scoreboard
             */
            set: function (newHighScore) {
                this._highScore = newHighScore;
                this.HighScoreLabel.text = "High Score :" + this._highScore;
            },
            enumerable: true,
            configurable: true
        });
        /**
         *
         *
         * @private
         * @memberof Scoreboard
         */
        Scoreboard.prototype._initialize = function () {
            this.LiveLabel = new objects.Label("Lives : 0", "20px", "Consolas", "#FFFF00", 10, 10, false);
            this.ScoreLabel = new objects.Label("Score : 99999", "20px", "Consolas", "#FFFF00", 500, 10, false);
            this.HighScoreLabel = new objects.Label("High Score : 99999", "40px", "Consolas", "#FFFF00", 320, 240, false);
            this.Lives = 5;
            this.Score = 50;
        };
        return Scoreboard;
    }());
    managers.Scoreboard = Scoreboard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map