module hong {
    export class StartGame {
        private static _instance: StartGame = null;
        public sudokuPanel: SudokuMainPanel;

        public static getInstance(): StartGame {
            if (!this._instance) {
                this._instance = new StartGame();
            }
            return this._instance;
        }

        private constructor() {

        }

        public run() {
            this.sudokuPanel = new SudokuMainPanel();
            CommonUtils.getStage().addChild(this.sudokuPanel);
        }
    }
}