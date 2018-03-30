module hong {
    export class SudokuMainPanel extends egret.DisplayObjectContainer {
        public board: SudokuBoard = null;
        public textFieldArray: Array<egret.TextField> = [
            new egret.TextField(),
            new egret.TextField(),
            new egret.TextField(),
            new egret.TextField(),
            new egret.TextField(),
            new egret.TextField(),
            new egret.TextField(),
            new egret.TextField(),
            new egret.TextField(),
        ]

        private shape: egret.Shape;
        public constructor() {
            super();
            this.shape = new egret.Shape();
            this.createChildren();
        }

        public createChildren() {
            // 创建背景图
            // let bgBitmap: egret.Bitmap = new egret.Bitmap(RES.getRes("main_bg_png"));
            // bgBitmap.fillMode = egret.BitmapFillMode.REPEAT;
            // bgBitmap.width = 640;
            // bgBitmap.height = 1136;
            // this.addChild(bgBitmap);

            // this.board = new SudokuBoard();
            // this.board.x = 50;
            // this.board.y = 200;
            // this.addChild(this.board);

            // let button = new egret.Bitmap(RES.getRes("number_bg_png"));
            // button.x = 300;
            // button.y = 900;
            // this.addChild(button);
            // button.touchEnabled = true;
            // button.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.showSudoku, this);


            let shape = this.shape;
            shape.x = 0;
            shape.y = 0;
            this.addChild(shape)
            shape.graphics.beginFill(0xf4f7f4, 1);
            shape.graphics.lineStyle(1, 0x000000);
            shape.graphics.drawRect(-1, -1, 642, 1138);
            shape.graphics.endFill();

            // 2
            shape.graphics.beginFill(0xd9edf2, 1);
            shape.graphics.lineStyle(0, 0x030603);
            shape.graphics.drawRect(44 + 184, 200 + 2, 184, 184);
            shape.graphics.endFill();

            shape.graphics.beginFill(0xd9edf2, 1);
            shape.graphics.lineStyle(0, 0x030603);
            shape.graphics.drawRect(44 + 184, 204 + 184 * 2, 184, 184);
            shape.graphics.endFill();

            shape.graphics.beginFill(0xd9edf2, 1);
            shape.graphics.lineStyle(0, 0x030603);
            shape.graphics.drawRect(42, 204 + 184, 184, 184);
            shape.graphics.endFill();

            shape.graphics.beginFill(0xd9edf2, 1);
            shape.graphics.lineStyle(0, 0x030603);
            shape.graphics.drawRect(44 + 184 * 2, 204 + 184, 184, 184);
            shape.graphics.endFill();

            shape.graphics.lineStyle(2, 0x030603);
            shape.graphics.drawRoundRect(40, 200, 558, 558, 12, 12);


            shape.graphics.lineStyle(2, 0x030603);
            for (let i = 1; i < 9; ++i) {
                shape.graphics.moveTo(40, 200 + 62 * i);
                shape.graphics.lineTo(598, 200 + 62 * i);
            }
            for (let i = 1; i < 9; ++i) {
                shape.graphics.moveTo(40 + 62 * i, 200);
                shape.graphics.lineTo(40 + 62 * i, 200 + 558);
            }

            this.board = new SudokuBoard();
            this.board.x = 40;
            this.board.y = 200;
            this.addChild(this.board);

            let button = new egret.Bitmap(RES.getRes("number_bg_png"));
            button.x = 300;
            button.y = 900;
            this.addChild(button);
            button.touchEnabled = true;
            button.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.showSudoku, this);

            for (let i = 0; i < 9; ++i) {
                this.textFieldArray[i].textColor = 0x000000;
                this.textFieldArray[i].text = "" + i;
                this.textFieldArray[i].x = i * 60 + 40;
                this.addChild(this.textFieldArray[i]);
            }
        }

        public showSudoku() {
            let puzzle = sudoku.makepuzzle();
            let difficulty = sudoku.ratepuzzle(puzzle, 4);
            console.debug(difficulty);

            this.board.setData(puzzle);
        }
    }
}