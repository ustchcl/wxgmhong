module hong {
    export class SudokuMainPanel extends egret.DisplayObjectContainer {
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
        }
    }
}