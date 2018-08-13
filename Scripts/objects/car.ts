module objects {
    export class Car extends objects.GameObject {
        // private
        // public
        /**
         *Creates an instance of Car.
         * @param {createjs.LoadQueue} assetManager
         * @memberof Car
         */
        constructor(assetManager: createjs.LoadQueue) {            
            super(assetManager, objects.Game.carselected);
            this.Start();
            this.y = 540;
            this.x = 200;
          //  this.scaleX = 0.4;
           // this.scaleY = 0.4;
        }
        // recet object location
        /**
         *
         *
         * @memberof Car
         */
        public Reset(): void {

        }
        //move objects
        /**
         *
         *
         * @memberof Car
         */
        public Move(): void {
            //Mouse Controls  
            //  this.x  = objects.Game.stage.mouseX;


            console.log("move left : " + objects.Game.keyboardManager.moveLeft);

            //Keyboard Controls
            if (objects.Game.keyboardManager.moveLeft) { this.x -= 5; }

            if (objects.Game.keyboardManager.moveRight) { this.x += 5; }


        }

        /**
         *
         *
         * @memberof Car
         */
        public CheckBounds(): void {
            if (this.x >= 700 - this.halfWidth) {
                this.x = 700 - this.halfWidth;
            }

            if (this.x <= this.halfWidth + 145) {
                this.x = 145 + this.halfWidth;
            }
        }
        //init var create new object
        /**
         *
         *
         * @memberof Car
         */
        public Start(): void {

        }
        public Update(): void {
            this.Move();
            this.CheckBounds();
        }
    }
}