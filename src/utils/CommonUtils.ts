module CommonUtils {
    export function getStageHeight() {
        return egret.MainContext.instance.stage.stageHeight;
    }

    export function getStageWidth() {
        return egret.MainContext.instance.stage.stageWidth;
    }

    export function getStage(): egret.Stage {
        return egret.MainContext.instance.stage;
    }
}