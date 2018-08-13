module objects {
    export class Barrel extends objects.GameObject {
        // private
        // public
        /**
         *Creates an instance of Barrel.
         * @param {createjs.LoadQueue} assetManager
         * @memberof Barrel
         */
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager, "barrel");
            this.Start();
            this.y = 600;
            this.x =  (this.randomInt(0, 3) * 125) + 230;
          //  this.scaleX = 0.4;
          //  this.scaleY = 0.4;
        }
        // recet object location
        /**
         *
         *
         * @memberof Barrel
         */
        public Reset(): void {
            this.x = this.x = (this.randomInt(0, 3) * 125) + 230;
            this.y = -this.height;
            this._dx =0;
            this._dr = 0;
            this.rotation = 0;

            if(objects.Game.levelSelected=="level1")
            {
                this._dy = 3;
            }
            if(objects.Game.levelSelected=="level2")
            {
                this._dy = 4;
            }
            if(objects.Game.levelSelected=="level3")
            {
                this._dy = 5;
            }
        }

        /**
         *
         *
         * @private
         * @param {*} min
         * @param {*} max
         * @returns
         * @memberof Barrel
         */
        private randomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        //move objects

        /**
         *
         *
         * @memberof Barrel
         */
        public Move(): void {
            this.y += this._dy;
            this.x += this._dx;

        }

        /**
         *
         *
         * @memberof Barrel
         */
        public CheckBounds(): void {
            if (this.y >= 700 - this.height) {
                this.Reset();
            }

            if (this.x <= this.halfWidth + 145) {
                this.x = 145 + this.halfWidth;
                this._dx =-1* this._dx;
            }

            if (this.x >= 700 - this.halfWidth) {
                this.x = 700 - this.halfWidth;
                this._dx =-1* this._dx;
            }
        }
        //init var create new object

        /**
         *
         *
         * @memberof Barrel
         */
        public Start(): void {
            this._dy = 4;
            this._dx = 0;
            this._dr = 0;
           // this._dy = 4;

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

        }
        public Update(): void {
            this.Move();
            this.CheckBounds();
        }
    }
}