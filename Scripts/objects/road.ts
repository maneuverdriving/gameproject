module objects {
    export class Road extends createjs.Bitmap {
        // private
        public _dy: number;
        // public
        /**
         *Creates an instance of Road.
         * @param {createjs.LoadQueue} assetManager
         * @memberof Road
         */
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager.getResult("road"));

            

            this.Start();

        }
        // recet object location
        /**
         *
         *
         * @private
         * @memberof Road
         */
        private _reset(): void {
            this.y = -1452;
        }
        /**
         *
         *
         * @memberof Road
         */
        public _move(): void {
            this.y += this._dy;

        }
        /**
         *
         *
         * @memberof Road
         */
        public _checkBounds(): void {
            if (this.y >= 0) {
                this._reset();
            }
        }
        //init var create new object
        /**
         *
         *
         * @memberof Road
         */
        public Start(): void {
          //  this._dy = 4;
          if(objects.Game.levelSelected=="level1")
            {
                    this._dy=3;
            }
            if(objects.Game.levelSelected=="level2")
            {
                this._dy=4;
            }
            if(objects.Game.levelSelected=="level3")
            {
                this._dy=5;
            }
            this._reset();
        }
        /**
         *
         *
         * @memberof Road
         */
        public Update(): void {
            this._move();
            this._checkBounds();
        }
    }
}