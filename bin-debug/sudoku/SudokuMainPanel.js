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
    var SudokuMainPanel = (function (_super) {
        __extends(SudokuMainPanel, _super);
        function SudokuMainPanel() {
            var _this = _super.call(this) || this;
            _this.board = null;
            _this.createChildren();
            return _this;
        }
        SudokuMainPanel.prototype.createChildren = function () {
            // 创建背景图
            var bgBitmap = new egret.Bitmap(RES.getRes("main_bg_png"));
            bgBitmap.fillMode = egret.BitmapFillMode.REPEAT;
            bgBitmap.width = 640;
            bgBitmap.height = 1136;
            this.addChild(bgBitmap);
            this.board = new hong.SudokuBoard();
            this.board.x = 50;
            this.board.y = 200;
            this.addChild(this.board);
            var button = new egret.Bitmap(RES.getRes("number_bg_png"));
            button.x = 300;
            button.y = 900;
            this.addChild(button);
            button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showSudoku, this);
        };
        SudokuMainPanel.prototype.showSudoku = function () {
            var puzzle = sudoku.makepuzzle();
            var difficulty = sudoku.ratepuzzle(puzzle, 4);
            console.debug(difficulty);
            this.board.setData(puzzle);
        };
        return SudokuMainPanel;
    }(egret.DisplayObjectContainer));
    hong.SudokuMainPanel = SudokuMainPanel;
    __reflect(SudokuMainPanel.prototype, "hong.SudokuMainPanel");
})(hong || (hong = {}));
