module objects {
    export class Explosion extends createjs.Bitmap {
        // private
        private _dy: number;
        // public
        /**
         *Creates an instance of Road.
         * @param {createjs.LoadQueue} assetManager
         * @memberof Road
         */
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager.getResult("explosionImage"));
            this.Start();

           
        }
        /**
         *
         *
         * @memberof Road
         */
        public _checkBounds(): void {
        }
        //init var create new object
        /**
         *
         *
         * @memberof Road
         */
        public Start(): void {
            var that = this;
            setTimeout(function(){
                that.alpha = 0 ;
            
            },100);

            
        }
        /**
         *
         *
         * @memberof Road
         */
        public Update(): void {

        }
        
    }
}