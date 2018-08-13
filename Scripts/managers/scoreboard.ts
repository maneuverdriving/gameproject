module managers {
    /**
     *
     *
     * @export
     * @class Scoreboard
     */
    export class Scoreboard {
        private _lives: number;
        private _scores: number;
        private _highScore: number;

        //public instance variables
        public LiveLabel: objects.Label;
        public ScoreLabel: objects.Label;
        public HighScoreLabel: objects.Label;

        //public properties
        /**
         *
         *
         * @type {number}
         * @memberof Scoreboard
         */
        get Lives(): number {
            return this._lives;
        }

        /**
         *
         *
         * @memberof Scoreboard
         */
        set Lives(newLives: number) {
            this._lives = newLives;
            this.LiveLabel.text = "Lives :" + this._lives;
        }
        get Score(): number {
            return this._scores;
        }
        /**
         *
         *
         * @memberof Scoreboard
         */
        set Score(newScore: number) {
            this._scores = newScore;
            this.ScoreLabel.text = "Scores :" + this._scores;
        }
        get HighScore(): number {
            return this._highScore;
        }
        /**
         *
         *
         * @memberof Scoreboard
         */
        set HighScore(newHighScore: number) {
            this._highScore = newHighScore;
            this.HighScoreLabel.text = "High Score :" + this._highScore;
        }

        /**
         *Creates an instance of Scoreboard.
         * @memberof Scoreboard
         */
        constructor() {
            this._initialize();
        }
        /**
         *
         *
         * @private
         * @memberof Scoreboard
         */
        private _initialize(): void {
            this.LiveLabel = new objects.Label("Lives : 0", "20px", "Consolas", "#FFFF00", 10, 10, false);
            this.ScoreLabel = new objects.Label("Score : 99999", "20px", "Consolas", "#FFFF00", 500, 10, false);
            this.HighScoreLabel = new objects.Label("High Score : 99999", "40px", "Consolas", "#FFFF00", 320, 240, false);

            this.Lives = 5;
            this.Score = 50;

        }


    }
}

