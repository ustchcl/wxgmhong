var CommonUtils;
(function (CommonUtils) {
    function getStageHeight() {
        return egret.MainContext.instance.stage.stageHeight;
    }
    CommonUtils.getStageHeight = getStageHeight;
    function getStageWidth() {
        return egret.MainContext.instance.stage.stageWidth;
    }
    CommonUtils.getStageWidth = getStageWidth;
    function getStage() {
        return egret.MainContext.instance.stage;
    }
    CommonUtils.getStage = getStage;
})(CommonUtils || (CommonUtils = {}));
