module hong {
    export class StartGame {
        private static _instance: StartGame = null;

        public static getInstance(): StartGame {
            if (!this._instance) {
                this._instance = new StartGame();
            }
            return this._instance;
        }

        private constructor() {

        }

        public run() {
            let sudokuPanel = new SudokuMainPanel();
            CommonUtils.getStage().addChild(sudokuPanel);
        }
    }
}