var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var hong;
(function (hong) {
    var SudokuBoard = (function (_super) {
        __extends(SudokuBoard, _super);
        function SudokuBoard() {
            var _this = _super.call(this) || this;
            _this.blocks = [
                new Array(),
                new Array(),
                new Array(),
                new Array(),
                new Array(),
                new Array(),
                new Array(),
                new Array(),
                new Array()
            ];
            _this.createChildren();
            return _this;
        }
        SudokuBoard.prototype.createChildren = function () {
            // 添加数字
            for (var i = 0; i < 9; ++i) {
                for (var j = 0; j < 9; ++j) {
                    var numberBlock = new hong.SudokuNumberBlock();
                    numberBlock.x = i * 60 + 1;
                    numberBlock.y = j * 60 + 1;
                    this.addChild(numberBlock);
                    this.blocks[i].push(numberBlock);
                }
            }
        };
        SudokuBoard.prototype.setData = function (puzzle) {
            for (var i = 0; i < 9; ++i) {
                for (var j = 0; j < 9; ++j) {
                    if (puzzle[i * 9 + j]) {
                        this.blocks[i][j].label.text = puzzle[i * 9 + j] + "";
                    }
                    else {
                        this.blocks[i][j].label.text = "";
                    }
                }
            }
        };
        return SudokuBoard;
    }(egret.DisplayObjectContainer));
    hong.SudokuBoard = SudokuBoard;
    __reflect(SudokuBoard.prototype, "hong.SudokuBoard");
})(hong || (hong = {}));
