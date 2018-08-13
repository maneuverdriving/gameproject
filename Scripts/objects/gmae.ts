module objects{
    /**
     *
     *
     * @export
     * @class Game
     */
    export class Game{
        public static stage : createjs.Stage;
        public static assetManager : createjs.LoadQueue
        public static currentScene : number;
        public static keyboardManager:managers.Keyboard;
        public static scoreboard :managers.Scoreboard;
        public static carselected:string;
        public static levelSelected:string;
                

    }
}