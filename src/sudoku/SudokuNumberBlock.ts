module hong {
    export class SudokuNumberBlock extends egret.DisplayObjectContainer {
        public label: egret.TextField = null;
        public constructor() {
            super();

            this.width = 60;
            this.height = 60;
            this.createChildren();
        }

        public createChildren() {
            let bgBitmap = new egret.Bitmap(RES.getRes("number_bg_png"));
            bgBitmap.x = 0;
            bgBitmap.y = 0;
            this.addChild(bgBitmap);

            this.label = new egret.TextField();
            this.label.text = "1";
            this.label.x = 20;
            this.label.y = 15;
            this.label.verticalAlign = "center";
            this.addChild(this.label);
        }
    }
}