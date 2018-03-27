module CommonUtils {
    export function getStageHeight(): number {
        return egret.MainContext.instance.stage.stageHeight;
    }

    export function getStageWidth(): number {
        return egret.MainContext.instance.stage.stageWidth;
    }

    export function getStage(): egret.Stage {
        return egret.MainContext.instance.stage;
    }
}