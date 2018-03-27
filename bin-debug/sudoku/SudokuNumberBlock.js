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
    var SudokuNumberBlock = (function (_super) {
        __extends(SudokuNumberBlock, _super);
        function SudokuNumberBlock() {
            var _this = _super.call(this) || this;
            _this.label = null;
            _this.width = 60;
            _this.height = 60;
            _this.createChildren();
            return _this;
        }
        SudokuNumberBlock.prototype.createChildren = function () {
            var bgBitmap = new egret.Bitmap(RES.getRes("number_bg_png"));
            bgBitmap.x = 0;
            bgBitmap.y = 0;
            this.addChild(bgBitmap);
            this.label = new egret.TextField();
            this.label.text = "1";
            this.label.x = 20;
            this.label.y = 15;
            this.label.verticalAlign = "center";
            this.addChild(this.label);
        };
        return SudokuNumberBlock;
    }(egret.DisplayObjectContainer));
    hong.SudokuNumberBlock = SudokuNumberBlock;
    __reflect(SudokuNumberBlock.prototype, "hong.SudokuNumberBlock");
})(hong || (hong = {}));
