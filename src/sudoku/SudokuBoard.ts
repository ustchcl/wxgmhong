module hong {
    export class SudokuBoard extends egret.DisplayObjectContainer {
        public blocks = [
            new Array<SudokuNumberBlock>(),
            new Array<SudokuNumberBlock>(),
            new Array<SudokuNumberBlock>(),
            new Array<SudokuNumberBlock>(),
            new Array<SudokuNumberBlock>(),
            new Array<SudokuNumberBlock>(),
            new Array<SudokuNumberBlock>(),
            new Array<SudokuNumberBlock>(),
            new Array<SudokuNumberBlock>()
        ]
        public constructor() {
            super();
            this.createChildren();
        }

        public createChildren() {
            // 添加数字
            for (let i = 0; i < 9; ++i) {
                for (let j = 0; j < 9; ++j) {
                    let numberBlock = new SudokuNumberBlock();
                    numberBlock.x = i * 60 + 1;
                    numberBlock.y = j * 60 + 1;
                    this.addChild(numberBlock);
                    this.blocks[i].push(numberBlock);
                }
            }
        }

        public setData(puzzle: Array<any>) {
            for (let i = 0; i < 9; ++i) {
                for (let j = 0; j < 9; ++j) {
                    if (puzzle[i * 9 + j]) {
                        this.blocks[i][j].label.text = puzzle[i * 9 + j] + "";
                    } else {
                        this.blocks[i][j].label.text = "";
                    }
                }
            }
        }
    }
}