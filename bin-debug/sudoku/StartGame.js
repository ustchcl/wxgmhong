var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hong;
(function (hong) {
    var StartGame = (function () {
        function StartGame() {
        }
        StartGame.getInstance = function () {
            if (!this._instance) {
                this._instance = new StartGame();
            }
            return this._instance;
        };
        StartGame.prototype.run = function () {
            this.sudokuPanel = new hong.SudokuMainPanel();
            CommonUtils.getStage().addChild(this.sudokuPanel);
        };
        StartGame._instance = null;
        return StartGame;
    }());
    hong.StartGame = StartGame;
    __reflect(StartGame.prototype, "hong.StartGame");
})(hong || (hong = {}));
