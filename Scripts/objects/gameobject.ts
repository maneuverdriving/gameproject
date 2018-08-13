 module objects{
     export  class GameObject extends createjs.Bitmap{
         // private
         public _dx :number;
         public _dy :number;
         public _dr :number;

         // public
         public width :number;
         public height :number;
         public halfWidth:number;
         public halfHeight :number;
         public isColliding :boolean;
         public  ignoreCollision:boolean; 
         

         /**
          *Creates an instance of GameObject.
          * @param {createjs.LoadQueue} assetManager
          * @param {string} imageString
          * @memberof GameObject
          */
         constructor( assetManager:createjs.LoadQueue,  imageString : string ){
             super(assetManager.getResult( imageString));
             this.name  = imageString;
             this._initialize();
           //  this.regX = this.getBounds().width * 0.5
           //  this.regY = this.getBounds().height * 0.5
            
            
           }
         //private
         /**
          *
          *
          * @private
          * @memberof GameObject
          */
         private _initialize():void{
             
                  this.width = this.getBounds().width;
                  this.height = this.getBounds().height;
                this.halfWidth = this.width * 0.5;
                this.halfHeight = this.height * 0.5;
                this.regX = this.halfWidth;
                this.regY = this.halfHeight;
                this.isColliding = false ;
                this.ignoreCollision = false;
         }
         // public
         /**
          *
          *
          * @memberof GameObject
          */
         public Start():void{

         }
         
         public Update():void{

         }
         public Reset():void{

         }
         public Move():void{

         }
         public Rotate():void{

        }
         public CheckBounds():void{

         }

     }
 }