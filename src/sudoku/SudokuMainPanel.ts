module hong {
    export class SudokuMainPanel extends egret.DisplayObjectContainer {
        public board: SudokuBoard = null;
        public constructor() {
            super();
            this.createChildren();
        }

        public createChildren() {
            // 创建背景图
            let bgBitmap: egret.Bitmap = new egret.Bitmap(RES.getRes("main_bg_png"));
            bgBitmap.fillMode = egret.BitmapFillMode.REPEAT;
            bgBitmap.width = 640;
            bgBitmap.height = 1136;
            this.addChild(bgBitmap);

            this.board = new SudokuBoard();
            this.board.x = 50;
            this.board.y = 200;
            this.addChild(this.board);

            let button = new egret.Bitmap(RES.getRes("number_bg_png"));
            button.x = 300;
            button.y = 900;
            this.addChild(button);
            button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showSudoku, this);
        }

        public showSudoku() {
            let puzzle = sudoku.makepuzzle();
            let difficulty = sudoku.ratepuzzle(puzzle, 4);
            console.debug(difficulty);

            this.board.setData(puzzle);
        }
    }
}