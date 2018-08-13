module objects {
    export class Roadblock extends objects.GameObject {
        // private
 
        // public

        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager, "roadblock");
           
            this.Start();
            this.y = 600;
            this.x =  (this.randomInt(0, 3) * 125) + 230;
           // this.scaleX = 0.7;
           // this.scaleY = 0.3;
        }
        // recet object location
        public Reset(): void {
            // this.x = Math.floor((Math.random()* (840-this.width))+this.halfWidth);
            this.y = -this.height;
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
         
            this.x = (this.randomInt(0, 3) * 125) + 230;

            this._dx =0;
            this._dr = 0;
            this.rotation = 0;
        }
        private randomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        /**
         *
         *
         * @memberof Roadblock
         */
        public Move(): void {
            this.y += this._dy;
            this.x += this._dx;
            this.rotation += this._dr
           
        }

      

        


        /**
         *
         *
         * @memberof Roadblock
         */
        public CheckBounds(): void {
            if (this.y >= 700 - this.height) {
                this.Reset();
            }

            // if (this.x <= this.halfWidth + 145) {
            //     this.x = 145 + this.halfWidth;
            // }
        }
        //init var create new object
        public Start(): void {
            this._dy = 4;
            this._dx = 0;
            this._dr = 0;
            
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
        }
        public Update(): void {
            
            this.Move();
            this.CheckBounds();
        }
    }
}