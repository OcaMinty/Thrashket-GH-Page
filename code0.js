gdjs.PvCCode = {};
gdjs.PvCCode.GDGreenBoxObjects2_1final = [];

gdjs.PvCCode.GDGroundObjects2_1final = [];

gdjs.PvCCode.GDNPCObjects2_1final = [];

gdjs.PvCCode.GDRedBoxObjects2_1final = [];

gdjs.PvCCode.GDGroundObjects1= [];
gdjs.PvCCode.GDGroundObjects2= [];
gdjs.PvCCode.GDGroundObjects3= [];
gdjs.PvCCode.GDGroundObjects4= [];
gdjs.PvCCode.GDGroundObjects5= [];
gdjs.PvCCode.GDGroundObjects6= [];
gdjs.PvCCode.GDUnsolidObjects1= [];
gdjs.PvCCode.GDUnsolidObjects2= [];
gdjs.PvCCode.GDUnsolidObjects3= [];
gdjs.PvCCode.GDUnsolidObjects4= [];
gdjs.PvCCode.GDUnsolidObjects5= [];
gdjs.PvCCode.GDUnsolidObjects6= [];
gdjs.PvCCode.GDRedBoxObjects1= [];
gdjs.PvCCode.GDRedBoxObjects2= [];
gdjs.PvCCode.GDRedBoxObjects3= [];
gdjs.PvCCode.GDRedBoxObjects4= [];
gdjs.PvCCode.GDRedBoxObjects5= [];
gdjs.PvCCode.GDRedBoxObjects6= [];
gdjs.PvCCode.GDGreenBoxObjects1= [];
gdjs.PvCCode.GDGreenBoxObjects2= [];
gdjs.PvCCode.GDGreenBoxObjects3= [];
gdjs.PvCCode.GDGreenBoxObjects4= [];
gdjs.PvCCode.GDGreenBoxObjects5= [];
gdjs.PvCCode.GDGreenBoxObjects6= [];
gdjs.PvCCode.GDPlayerObjects1= [];
gdjs.PvCCode.GDPlayerObjects2= [];
gdjs.PvCCode.GDPlayerObjects3= [];
gdjs.PvCCode.GDPlayerObjects4= [];
gdjs.PvCCode.GDPlayerObjects5= [];
gdjs.PvCCode.GDPlayerObjects6= [];
gdjs.PvCCode.GDBallObjects1= [];
gdjs.PvCCode.GDBallObjects2= [];
gdjs.PvCCode.GDBallObjects3= [];
gdjs.PvCCode.GDBallObjects4= [];
gdjs.PvCCode.GDBallObjects5= [];
gdjs.PvCCode.GDBallObjects6= [];
gdjs.PvCCode.GDNPCObjects1= [];
gdjs.PvCCode.GDNPCObjects2= [];
gdjs.PvCCode.GDNPCObjects3= [];
gdjs.PvCCode.GDNPCObjects4= [];
gdjs.PvCCode.GDNPCObjects5= [];
gdjs.PvCCode.GDNPCObjects6= [];
gdjs.PvCCode.GDGoalObjects1= [];
gdjs.PvCCode.GDGoalObjects2= [];
gdjs.PvCCode.GDGoalObjects3= [];
gdjs.PvCCode.GDGoalObjects4= [];
gdjs.PvCCode.GDGoalObjects5= [];
gdjs.PvCCode.GDGoalObjects6= [];
gdjs.PvCCode.GDPlayerScoreObjects1= [];
gdjs.PvCCode.GDPlayerScoreObjects2= [];
gdjs.PvCCode.GDPlayerScoreObjects3= [];
gdjs.PvCCode.GDPlayerScoreObjects4= [];
gdjs.PvCCode.GDPlayerScoreObjects5= [];
gdjs.PvCCode.GDPlayerScoreObjects6= [];
gdjs.PvCCode.GDNpcScoreObjects1= [];
gdjs.PvCCode.GDNpcScoreObjects2= [];
gdjs.PvCCode.GDNpcScoreObjects3= [];
gdjs.PvCCode.GDNpcScoreObjects4= [];
gdjs.PvCCode.GDNpcScoreObjects5= [];
gdjs.PvCCode.GDNpcScoreObjects6= [];
gdjs.PvCCode.GDTeamWonObjects1= [];
gdjs.PvCCode.GDTeamWonObjects2= [];
gdjs.PvCCode.GDTeamWonObjects3= [];
gdjs.PvCCode.GDTeamWonObjects4= [];
gdjs.PvCCode.GDTeamWonObjects5= [];
gdjs.PvCCode.GDTeamWonObjects6= [];
gdjs.PvCCode.GDTimerObjects1= [];
gdjs.PvCCode.GDTimerObjects2= [];
gdjs.PvCCode.GDTimerObjects3= [];
gdjs.PvCCode.GDTimerObjects4= [];
gdjs.PvCCode.GDTimerObjects5= [];
gdjs.PvCCode.GDTimerObjects6= [];
gdjs.PvCCode.GDPlayerLightObjects1= [];
gdjs.PvCCode.GDPlayerLightObjects2= [];
gdjs.PvCCode.GDPlayerLightObjects3= [];
gdjs.PvCCode.GDPlayerLightObjects4= [];
gdjs.PvCCode.GDPlayerLightObjects5= [];
gdjs.PvCCode.GDPlayerLightObjects6= [];
gdjs.PvCCode.GDNpcLightObjects1= [];
gdjs.PvCCode.GDNpcLightObjects2= [];
gdjs.PvCCode.GDNpcLightObjects3= [];
gdjs.PvCCode.GDNpcLightObjects4= [];
gdjs.PvCCode.GDNpcLightObjects5= [];
gdjs.PvCCode.GDNpcLightObjects6= [];
gdjs.PvCCode.GDMapNameObjects1= [];
gdjs.PvCCode.GDMapNameObjects2= [];
gdjs.PvCCode.GDMapNameObjects3= [];
gdjs.PvCCode.GDMapNameObjects4= [];
gdjs.PvCCode.GDMapNameObjects5= [];
gdjs.PvCCode.GDMapNameObjects6= [];
gdjs.PvCCode.GDRedBarObjects1= [];
gdjs.PvCCode.GDRedBarObjects2= [];
gdjs.PvCCode.GDRedBarObjects3= [];
gdjs.PvCCode.GDRedBarObjects4= [];
gdjs.PvCCode.GDRedBarObjects5= [];
gdjs.PvCCode.GDRedBarObjects6= [];
gdjs.PvCCode.GDGreenBarObjects1= [];
gdjs.PvCCode.GDGreenBarObjects2= [];
gdjs.PvCCode.GDGreenBarObjects3= [];
gdjs.PvCCode.GDGreenBarObjects4= [];
gdjs.PvCCode.GDGreenBarObjects5= [];
gdjs.PvCCode.GDGreenBarObjects6= [];


gdjs.PvCCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("PlayerScore")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("NpcScore")));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").setMaxSpeed(400);
}
}{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setMaxSpeed(300);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("PlayerScore")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("NpcScore")));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(400);
}
}{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects1.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(300);
}
}}

}


};gdjs.PvCCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("ComebackToggle"), true);
if (isConditionTrue_0) {

{ //Subevents
gdjs.PvCCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.PvCCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TeamWon"), gdjs.PvCCode.GDTeamWonObjects2);
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Crystal Pass", 0, 0);
}{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects2[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.PvCCode.GDPlayerObjects2});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.PvCCode.GDPlayerObjects2});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDPlayerObjects4Objects = Hashtable.newFrom({"Player": gdjs.PvCCode.GDPlayerObjects4});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects4Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects4});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects4Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects4});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDPlayerObjects4Objects = Hashtable.newFrom({"Player": gdjs.PvCCode.GDPlayerObjects4});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects4Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects4});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects4Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects4});
gdjs.PvCCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("RedBar"), gdjs.PvCCode.GDRedBarObjects4);
{for(var i = 0, len = gdjs.PvCCode.GDRedBarObjects4.length ;i < len;++i) {
    gdjs.PvCCode.GDRedBarObjects4[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects4);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDPlayerObjects4Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects4Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects4Objects) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22165964);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDPlayerObjects4 */
{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects4[i].returnVariable(gdjs.PvCCode.GDPlayerObjects4[i].getVariables().get("ChargeDistance")).setNumber(20);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects4);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDPlayerObjects4Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects4Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects4Objects) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDPlayerObjects4 */
gdjs.copyArray(runtimeScene.getObjects("RedBar"), gdjs.PvCCode.GDRedBarObjects4);
{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects4[i].returnVariable(gdjs.PvCCode.GDPlayerObjects4[i].getVariables().get("ChargeDistance")).add(1);
}
}{for(var i = 0, len = gdjs.PvCCode.GDRedBarObjects4.length ;i < len;++i) {
    gdjs.PvCCode.GDRedBarObjects4[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("RedBar"), gdjs.PvCCode.GDRedBarObjects3);
{for(var i = 0, len = gdjs.PvCCode.GDRedBarObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDRedBarObjects3[i].getBehavior("Resizable").setHeight(5);
}
}{for(var i = 0, len = gdjs.PvCCode.GDRedBarObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDRedBarObjects3[i].getBehavior("Resizable").setWidth((gdjs.RuntimeObject.getVariableNumber(((gdjs.PvCCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.PvCCode.GDPlayerObjects3[0].getVariables()).get("ChargeDistance"))) / 1.5);
}
}{for(var i = 0, len = gdjs.PvCCode.GDRedBarObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDRedBarObjects3[i].setCenterPositionInScene((( gdjs.PvCCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects3[0].getCenterXInScene()),(( gdjs.PvCCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects3[0].getCenterYInScene()) - 50);
}
}}

}


};gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.PvCCode.GDPlayerObjects3});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects3});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects3});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.PvCCode.GDPlayerObjects3});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects3});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.PvCCode.GDPlayerObjects2});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("ChargeToggleRed"), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("RedBar"), gdjs.PvCCode.GDRedBarObjects3);
{for(var i = 0, len = gdjs.PvCCode.GDRedBarObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDRedBarObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects3[i].returnVariable(gdjs.PvCCode.GDPlayerObjects3[i].getVariables().get("ChargeDistance")).setNumber(100);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("ChargeToggleRed"), true);
if (isConditionTrue_0) {

{ //Subevents
gdjs.PvCCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDPlayerObjects3Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects3Objects) == 1;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDBallObjects3 */
/* Reuse gdjs.PvCCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects3[i].setY(gdjs.PvCCode.GDBallObjects3[i].getY() - (32));
}
}{for(var i = 0, len = gdjs.PvCCode.GDBallObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects3[i].setPosition((( gdjs.PvCCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects3[0].getPointX("")),(( gdjs.PvCCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects3[0].getPointY("")) - 20);
}
}{for(var i = 0, len = gdjs.PvCCode.GDBallObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects3[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}{for(var i = 0, len = gdjs.PvCCode.GDBallObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects3[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDPlayerObjects3Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.PvCCode.GDPlayerObjects3[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDPlayerObjects3[k] = gdjs.PvCCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.PvCCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDBallObjects3 */
/* Reuse gdjs.PvCCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects3[i].setY(gdjs.PvCCode.GDBallObjects3[i].getY() - (32));
}
}{for(var i = 0, len = gdjs.PvCCode.GDBallObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects3[i].getBehavior("Physics2").applyForce(-(((gdjs.RuntimeObject.getVariableNumber(((gdjs.PvCCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.PvCCode.GDPlayerObjects3[0].getVariables()).get("ChargeDistance"))) / 2)), -(((gdjs.RuntimeObject.getVariableNumber(((gdjs.PvCCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.PvCCode.GDPlayerObjects3[0].getVariables()).get("ChargeDistance"))) / 2)), (( gdjs.PvCCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects3[0].getPointX("")), (( gdjs.PvCCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects3[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDPlayerObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.PvCCode.GDPlayerObjects2[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDPlayerObjects2[k] = gdjs.PvCCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDBallObjects2 */
/* Reuse gdjs.PvCCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects2[i].getBehavior("Physics2").applyForce(((gdjs.RuntimeObject.getVariableNumber(((gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.PvCCode.GDPlayerObjects2[0].getVariables()).get("ChargeDistance"))) / 2), -(((gdjs.RuntimeObject.getVariableNumber(((gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.PvCCode.GDPlayerObjects2[0].getVariables()).get("ChargeDistance"))) / 2)), (( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointX("")), (( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointY("")));
}
}}

}


};gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.PvCCode.GDPlayerObjects2});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.PvCCode.GDPlayerObjects1});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects1});
gdjs.PvCCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDPlayerObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDPlayerObjects2[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDPlayerObjects2[k] = gdjs.PvCCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDBallObjects2 */
/* Reuse gdjs.PvCCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects2[i].getBehavior("Physics2").applyForce(-(50), -(50), (( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointX("")), (( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDPlayerObjects1Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.PvCCode.GDPlayerObjects1[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDPlayerObjects1[k] = gdjs.PvCCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.PvCCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDBallObjects1 */
/* Reuse gdjs.PvCCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects1[i].getBehavior("Physics2").applyForce(50, -(50), (( gdjs.PvCCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects1[0].getPointX("")), (( gdjs.PvCCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects1[0].getPointY("")));
}
}}

}


};gdjs.PvCCode.eventsList6 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDPlayerObjects2[k] = gdjs.PvCCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDPlayerObjects2[k] = gdjs.PvCCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects2[i].flipX(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDPlayerObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setGravity(1000);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDPlayerObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("AutoToggleRed"), false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.PvCCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("AutoToggleRed"), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedBar"), gdjs.PvCCode.GDRedBarObjects1);
{for(var i = 0, len = gdjs.PvCCode.GDRedBarObjects1.length ;i < len;++i) {
    gdjs.PvCCode.GDRedBarObjects1[i].hide();
}
}
{ //Subevents
gdjs.PvCCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.PvCCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Playermode")) == "Local";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Playermode")) == "VsCPU";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.PvCCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects2Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects2});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects2Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects2});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects3Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects3});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects3});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects3Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects3});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects3});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects5Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects5});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects5Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects5});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects5Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects5});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects5Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects5});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects5Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects5});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects5Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects5});
gdjs.PvCCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GreenBar"), gdjs.PvCCode.GDGreenBarObjects5);
{for(var i = 0, len = gdjs.PvCCode.GDGreenBarObjects5.length ;i < len;++i) {
    gdjs.PvCCode.GDGreenBarObjects5[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects5Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects5Objects) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22191996);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDNPCObjects5 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects5.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects5[i].returnVariable(gdjs.PvCCode.GDNPCObjects5[i].getVariables().get("ChargeDistance")).setNumber(20);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects5);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects5Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects5Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects5Objects) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenBar"), gdjs.PvCCode.GDGreenBarObjects5);
/* Reuse gdjs.PvCCode.GDNPCObjects5 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects5.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects5[i].returnVariable(gdjs.PvCCode.GDNPCObjects5[i].getVariables().get("ChargeDistance")).add(1);
}
}{for(var i = 0, len = gdjs.PvCCode.GDGreenBarObjects5.length ;i < len;++i) {
    gdjs.PvCCode.GDGreenBarObjects5[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GreenBar"), gdjs.PvCCode.GDGreenBarObjects4);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects4);
{for(var i = 0, len = gdjs.PvCCode.GDGreenBarObjects4.length ;i < len;++i) {
    gdjs.PvCCode.GDGreenBarObjects4[i].getBehavior("Resizable").setHeight(5);
}
}{for(var i = 0, len = gdjs.PvCCode.GDGreenBarObjects4.length ;i < len;++i) {
    gdjs.PvCCode.GDGreenBarObjects4[i].getBehavior("Resizable").setWidth((gdjs.RuntimeObject.getVariableNumber(((gdjs.PvCCode.GDNPCObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.PvCCode.GDNPCObjects4[0].getVariables()).get("ChargeDistance"))) / 1.5);
}
}{for(var i = 0, len = gdjs.PvCCode.GDGreenBarObjects4.length ;i < len;++i) {
    gdjs.PvCCode.GDGreenBarObjects4[i].setCenterPositionInScene((( gdjs.PvCCode.GDNPCObjects4.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects4[0].getCenterXInScene()),(( gdjs.PvCCode.GDNPCObjects4.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects4[0].getCenterYInScene()) - 50);
}
}}

}


};gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects4Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects4});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects4Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects4});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects4Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects4});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects4Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects4});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects4Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects4});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects3Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects3});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects3});
gdjs.PvCCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("ChargeToggleGreen"), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenBar"), gdjs.PvCCode.GDGreenBarObjects4);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects4);
{for(var i = 0, len = gdjs.PvCCode.GDGreenBarObjects4.length ;i < len;++i) {
    gdjs.PvCCode.GDGreenBarObjects4[i].hide();
}
}{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects4.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects4[i].returnVariable(gdjs.PvCCode.GDNPCObjects4[i].getVariables().get("ChargeDistance")).setNumber(100);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("ChargeToggleGreen"), true);
if (isConditionTrue_0) {

{ //Subevents
gdjs.PvCCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects4);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects4Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects4Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects4Objects) == 1;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDBallObjects4 */
/* Reuse gdjs.PvCCode.GDNPCObjects4 */
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects4[i].setY(gdjs.PvCCode.GDBallObjects4[i].getY() - (32));
}
}{for(var i = 0, len = gdjs.PvCCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects4[i].setPosition((( gdjs.PvCCode.GDNPCObjects4.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects4[0].getPointX("")),(( gdjs.PvCCode.GDNPCObjects4.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects4[0].getPointY("")) - 20);
}
}{for(var i = 0, len = gdjs.PvCCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects4[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}{for(var i = 0, len = gdjs.PvCCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects4[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects4);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects4Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects4Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects4.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects4[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDNPCObjects4[k] = gdjs.PvCCode.GDNPCObjects4[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDBallObjects4 */
/* Reuse gdjs.PvCCode.GDNPCObjects4 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects4);
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects4[i].setY(gdjs.PvCCode.GDBallObjects4[i].getY() - (32));
}
}{for(var i = 0, len = gdjs.PvCCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects4[i].getBehavior("Physics2").applyForce(-(((gdjs.RuntimeObject.getVariableNumber(((gdjs.PvCCode.GDNPCObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.PvCCode.GDNPCObjects4[0].getVariables()).get("ChargeDistance"))) / 2)), -(((gdjs.RuntimeObject.getVariableNumber(((gdjs.PvCCode.GDNPCObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.PvCCode.GDNPCObjects4[0].getVariables()).get("ChargeDistance"))) / 2)), (( gdjs.PvCCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects4[0].getPointX("")), (( gdjs.PvCCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects4[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects3Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects3.length;i<l;++i) {
    if ( !(gdjs.PvCCode.GDNPCObjects3[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDNPCObjects3[k] = gdjs.PvCCode.GDNPCObjects3[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDBallObjects3 */
/* Reuse gdjs.PvCCode.GDNPCObjects3 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects3[i].getBehavior("Physics2").applyForce(((gdjs.RuntimeObject.getVariableNumber(((gdjs.PvCCode.GDNPCObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.PvCCode.GDNPCObjects3[0].getVariables()).get("ChargeDistance"))) / 2), -(((gdjs.RuntimeObject.getVariableNumber(((gdjs.PvCCode.GDNPCObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.PvCCode.GDNPCObjects3[0].getVariables()).get("ChargeDistance"))) / 2)), (( gdjs.PvCCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects3[0].getPointX("")), (( gdjs.PvCCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects3[0].getPointY("")));
}
}}

}


};gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects3Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects3});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects3});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects2Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects2});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects3Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects3.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects3[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDNPCObjects3[k] = gdjs.PvCCode.GDNPCObjects3[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDBallObjects3 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects3[i].getBehavior("Physics2").applyForce(-(50), -(50), (( gdjs.PvCCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects3[0].getPointX("")), (( gdjs.PvCCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects3[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( !(gdjs.PvCCode.GDNPCObjects2[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDBallObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects2[i].getBehavior("Physics2").applyForce(50, -(50), (( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointX("")), (( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointY("")));
}
}}

}


};gdjs.PvCCode.eventsList11 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects3[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects3[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects3[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects3.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects3[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDNPCObjects3[k] = gdjs.PvCCode.GDNPCObjects3[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDNPCObjects3 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects3[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects3.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects3[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDNPCObjects3[k] = gdjs.PvCCode.GDNPCObjects3[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDNPCObjects3 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects3[i].flipX(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects3Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects3Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDNPCObjects3 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects3[i].getBehavior("PlatformerObject").setGravity(1000);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects3Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDNPCObjects3 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects3[i].getBehavior("PlatformerObject").setGravity(1500);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("AutoToggleGreen"), false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.PvCCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("AutoToggleGreen"), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenBar"), gdjs.PvCCode.GDGreenBarObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDGreenBarObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDGreenBarObjects2[i].hide();
}
}
{ //Subevents
gdjs.PvCCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects2Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects2});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects2Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects2});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDGroundObjects3Objects = Hashtable.newFrom({"Ground": gdjs.PvCCode.GDGroundObjects3});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDRedBoxObjects3Objects = Hashtable.newFrom({"RedBox": gdjs.PvCCode.GDRedBoxObjects3});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDGreenBoxObjects3Objects = Hashtable.newFrom({"GreenBox": gdjs.PvCCode.GDGreenBoxObjects3});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDGroundObjects3Objects = Hashtable.newFrom({"Ground": gdjs.PvCCode.GDGroundObjects3});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDRedBoxObjects3Objects = Hashtable.newFrom({"RedBox": gdjs.PvCCode.GDRedBoxObjects3});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDGreenBoxObjects3Objects = Hashtable.newFrom({"GreenBox": gdjs.PvCCode.GDGreenBoxObjects3});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.PvCCode.GDPlayerObjects2});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.PvCCode.GDPlayerObjects2});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.eventsList12 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( !(gdjs.PvCCode.GDNPCObjects2[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDBallObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects2[i].getBehavior("Physics2").applyForce(50, -(50), (( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointX("")), (( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects2[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDBallObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects2[i].getBehavior("Physics2").applyForce(-(50), -(50), (( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointX("")), (( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointY("")));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);
gdjs.PvCCode.GDGreenBoxObjects2.length = 0;

gdjs.PvCCode.GDGroundObjects2.length = 0;

gdjs.PvCCode.GDRedBoxObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.PvCCode.GDGreenBoxObjects2_1final.length = 0;
gdjs.PvCCode.GDGroundObjects2_1final.length = 0;
gdjs.PvCCode.GDNPCObjects2_1final.length = 0;
gdjs.PvCCode.GDRedBoxObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.PvCCode.GDGroundObjects3);
gdjs.copyArray(gdjs.PvCCode.GDNPCObjects2, gdjs.PvCCode.GDNPCObjects3);

isConditionTrue_1 = gdjs.evtTools.object.raycastObject(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDGroundObjects3Objects, (( gdjs.PvCCode.GDNPCObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects3[0].getPointX("")), (( gdjs.PvCCode.GDNPCObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects3[0].getPointY("")), 0, 100, runtimeScene.getScene().getVariables().get("GroundIntersectX"), runtimeScene.getScene().getVariables().get("GroundIntersectY"), false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.PvCCode.GDGroundObjects3.length; j < jLen ; ++j) {
        if ( gdjs.PvCCode.GDGroundObjects2_1final.indexOf(gdjs.PvCCode.GDGroundObjects3[j]) === -1 )
            gdjs.PvCCode.GDGroundObjects2_1final.push(gdjs.PvCCode.GDGroundObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.PvCCode.GDNPCObjects3.length; j < jLen ; ++j) {
        if ( gdjs.PvCCode.GDNPCObjects2_1final.indexOf(gdjs.PvCCode.GDNPCObjects3[j]) === -1 )
            gdjs.PvCCode.GDNPCObjects2_1final.push(gdjs.PvCCode.GDNPCObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.PvCCode.GDNPCObjects2, gdjs.PvCCode.GDNPCObjects3);

gdjs.copyArray(runtimeScene.getObjects("RedBox"), gdjs.PvCCode.GDRedBoxObjects3);
isConditionTrue_1 = gdjs.evtTools.object.raycastObject(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDRedBoxObjects3Objects, (( gdjs.PvCCode.GDNPCObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects3[0].getPointX("")), (( gdjs.PvCCode.GDNPCObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects3[0].getPointY("")), 0, 100, runtimeScene.getScene().getVariables().get("GroundIntersectX"), runtimeScene.getScene().getVariables().get("GroundIntersectY"), false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.PvCCode.GDNPCObjects3.length; j < jLen ; ++j) {
        if ( gdjs.PvCCode.GDNPCObjects2_1final.indexOf(gdjs.PvCCode.GDNPCObjects3[j]) === -1 )
            gdjs.PvCCode.GDNPCObjects2_1final.push(gdjs.PvCCode.GDNPCObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.PvCCode.GDRedBoxObjects3.length; j < jLen ; ++j) {
        if ( gdjs.PvCCode.GDRedBoxObjects2_1final.indexOf(gdjs.PvCCode.GDRedBoxObjects3[j]) === -1 )
            gdjs.PvCCode.GDRedBoxObjects2_1final.push(gdjs.PvCCode.GDRedBoxObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("GreenBox"), gdjs.PvCCode.GDGreenBoxObjects3);
gdjs.copyArray(gdjs.PvCCode.GDNPCObjects2, gdjs.PvCCode.GDNPCObjects3);

isConditionTrue_1 = gdjs.evtTools.object.raycastObject(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDGreenBoxObjects3Objects, (( gdjs.PvCCode.GDNPCObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects3[0].getPointX("")), (( gdjs.PvCCode.GDNPCObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects3[0].getPointY("")), 0, 100, runtimeScene.getScene().getVariables().get("GroundIntersectX"), runtimeScene.getScene().getVariables().get("GroundIntersectY"), false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.PvCCode.GDGreenBoxObjects3.length; j < jLen ; ++j) {
        if ( gdjs.PvCCode.GDGreenBoxObjects2_1final.indexOf(gdjs.PvCCode.GDGreenBoxObjects3[j]) === -1 )
            gdjs.PvCCode.GDGreenBoxObjects2_1final.push(gdjs.PvCCode.GDGreenBoxObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.PvCCode.GDNPCObjects3.length; j < jLen ; ++j) {
        if ( gdjs.PvCCode.GDNPCObjects2_1final.indexOf(gdjs.PvCCode.GDNPCObjects3[j]) === -1 )
            gdjs.PvCCode.GDNPCObjects2_1final.push(gdjs.PvCCode.GDNPCObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.PvCCode.GDGreenBoxObjects2_1final, gdjs.PvCCode.GDGreenBoxObjects2);
gdjs.copyArray(gdjs.PvCCode.GDGroundObjects2_1final, gdjs.PvCCode.GDGroundObjects2);
gdjs.copyArray(gdjs.PvCCode.GDNPCObjects2_1final, gdjs.PvCCode.GDNPCObjects2);
gdjs.copyArray(gdjs.PvCCode.GDRedBoxObjects2_1final, gdjs.PvCCode.GDRedBoxObjects2);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDNPCObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);
gdjs.PvCCode.GDGreenBoxObjects2.length = 0;

gdjs.PvCCode.GDGroundObjects2.length = 0;

gdjs.PvCCode.GDRedBoxObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.PvCCode.GDGreenBoxObjects2_1final.length = 0;
gdjs.PvCCode.GDGroundObjects2_1final.length = 0;
gdjs.PvCCode.GDNPCObjects2_1final.length = 0;
gdjs.PvCCode.GDRedBoxObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.PvCCode.GDGroundObjects3);
gdjs.copyArray(gdjs.PvCCode.GDNPCObjects2, gdjs.PvCCode.GDNPCObjects3);

isConditionTrue_1 = gdjs.evtTools.object.raycastObject(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDGroundObjects3Objects, (( gdjs.PvCCode.GDNPCObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects3[0].getPointX("")), (( gdjs.PvCCode.GDNPCObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects3[0].getPointY("")), 180, 100, runtimeScene.getScene().getVariables().get("GroundIntersectX"), runtimeScene.getScene().getVariables().get("GroundIntersectY"), false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.PvCCode.GDGroundObjects3.length; j < jLen ; ++j) {
        if ( gdjs.PvCCode.GDGroundObjects2_1final.indexOf(gdjs.PvCCode.GDGroundObjects3[j]) === -1 )
            gdjs.PvCCode.GDGroundObjects2_1final.push(gdjs.PvCCode.GDGroundObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.PvCCode.GDNPCObjects3.length; j < jLen ; ++j) {
        if ( gdjs.PvCCode.GDNPCObjects2_1final.indexOf(gdjs.PvCCode.GDNPCObjects3[j]) === -1 )
            gdjs.PvCCode.GDNPCObjects2_1final.push(gdjs.PvCCode.GDNPCObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.PvCCode.GDNPCObjects2, gdjs.PvCCode.GDNPCObjects3);

gdjs.copyArray(runtimeScene.getObjects("RedBox"), gdjs.PvCCode.GDRedBoxObjects3);
isConditionTrue_1 = gdjs.evtTools.object.raycastObject(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDRedBoxObjects3Objects, (( gdjs.PvCCode.GDNPCObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects3[0].getPointX("")), (( gdjs.PvCCode.GDNPCObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects3[0].getPointY("")), 180, 100, runtimeScene.getScene().getVariables().get("GroundIntersectX"), runtimeScene.getScene().getVariables().get("GroundIntersectY"), false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.PvCCode.GDNPCObjects3.length; j < jLen ; ++j) {
        if ( gdjs.PvCCode.GDNPCObjects2_1final.indexOf(gdjs.PvCCode.GDNPCObjects3[j]) === -1 )
            gdjs.PvCCode.GDNPCObjects2_1final.push(gdjs.PvCCode.GDNPCObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.PvCCode.GDRedBoxObjects3.length; j < jLen ; ++j) {
        if ( gdjs.PvCCode.GDRedBoxObjects2_1final.indexOf(gdjs.PvCCode.GDRedBoxObjects3[j]) === -1 )
            gdjs.PvCCode.GDRedBoxObjects2_1final.push(gdjs.PvCCode.GDRedBoxObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("GreenBox"), gdjs.PvCCode.GDGreenBoxObjects3);
gdjs.copyArray(gdjs.PvCCode.GDNPCObjects2, gdjs.PvCCode.GDNPCObjects3);

isConditionTrue_1 = gdjs.evtTools.object.raycastObject(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDGreenBoxObjects3Objects, (( gdjs.PvCCode.GDNPCObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects3[0].getPointX("")), (( gdjs.PvCCode.GDNPCObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects3[0].getPointY("")), 180, 100, runtimeScene.getScene().getVariables().get("GroundIntersectX"), runtimeScene.getScene().getVariables().get("GroundIntersectY"), false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.PvCCode.GDGreenBoxObjects3.length; j < jLen ; ++j) {
        if ( gdjs.PvCCode.GDGreenBoxObjects2_1final.indexOf(gdjs.PvCCode.GDGreenBoxObjects3[j]) === -1 )
            gdjs.PvCCode.GDGreenBoxObjects2_1final.push(gdjs.PvCCode.GDGreenBoxObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.PvCCode.GDNPCObjects3.length; j < jLen ; ++j) {
        if ( gdjs.PvCCode.GDNPCObjects2_1final.indexOf(gdjs.PvCCode.GDNPCObjects3[j]) === -1 )
            gdjs.PvCCode.GDNPCObjects2_1final.push(gdjs.PvCCode.GDNPCObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.PvCCode.GDGreenBoxObjects2_1final, gdjs.PvCCode.GDGreenBoxObjects2);
gdjs.copyArray(gdjs.PvCCode.GDGroundObjects2_1final, gdjs.PvCCode.GDGroundObjects2);
gdjs.copyArray(gdjs.PvCCode.GDNPCObjects2_1final, gdjs.PvCCode.GDNPCObjects2);
gdjs.copyArray(gdjs.PvCCode.GDRedBoxObjects2_1final, gdjs.PvCCode.GDRedBoxObjects2);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDNPCObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDPlayerObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].returnVariable(gdjs.PvCCode.GDNPCObjects2[i].getVariables().get("HuntingState")).setNumber(2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].returnVariable(gdjs.PvCCode.GDNPCObjects2[i].getVariables().get("HuntingState")).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDPlayerObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "AI", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].returnVariable(gdjs.PvCCode.GDNPCObjects2[i].getVariables().get("HuntingState")).setNumber(gdjs.randomInRange(1, 2));
}
}{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.PvCCode.GDNPCObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects2[0].getPointX("")) > (( gdjs.PvCCode.GDBallObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDBallObjects2[0].getPointX("")));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects2[i].getVariableNumber(gdjs.PvCCode.GDNPCObjects2[i].getVariables().get("HuntingState")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDNPCObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.PvCCode.GDNPCObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects2[0].getPointX("")) < (( gdjs.PvCCode.GDBallObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDBallObjects2[0].getPointX("")));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects2[i].getVariableNumber(gdjs.PvCCode.GDNPCObjects2[i].getVariables().get("HuntingState")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDNPCObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.PvCCode.GDNPCObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects2[0].getPointX("")) > (( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointX("")));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects2[i].getVariableNumber(gdjs.PvCCode.GDNPCObjects2[i].getVariables().get("HuntingState")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDNPCObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.PvCCode.GDNPCObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects2[0].getPointX("")) < (( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointX("")));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects2[i].getVariableNumber(gdjs.PvCCode.GDNPCObjects2[i].getVariables().get("HuntingState")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDNPCObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDNPCObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects1.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDNPCObjects1[k] = gdjs.PvCCode.GDNPCObjects1[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDNPCObjects1 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects1.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects1[i].flipX(false);
}
}}

}


};gdjs.PvCCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDNPCObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDNPCObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").setGravity(1000);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Playermode")) == "Local";
if (isConditionTrue_0) {

{ //Subevents
gdjs.PvCCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Playermode")) == "VsCPU";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenBar"), gdjs.PvCCode.GDGreenBarObjects1);
{for(var i = 0, len = gdjs.PvCCode.GDGreenBarObjects1.length ;i < len;++i) {
    gdjs.PvCCode.GDGreenBarObjects1[i].hide();
}
}
{ //Subevents
gdjs.PvCCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.PvCCode.GDPlayerObjects2});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects2Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects2});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects3});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDGoalObjects3Objects = Hashtable.newFrom({"Goal": gdjs.PvCCode.GDGoalObjects3});
gdjs.PvCCode.asyncCallback22231268 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}
gdjs.PvCCode.eventsList14 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.PvCCode.asyncCallback22231268(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects3});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDGoalObjects3Objects = Hashtable.newFrom({"Goal": gdjs.PvCCode.GDGoalObjects3});
gdjs.PvCCode.asyncCallback22232676 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}
gdjs.PvCCode.eventsList15 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.PvCCode.asyncCallback22232676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.asyncCallback22235316 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}
gdjs.PvCCode.eventsList16 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.PvCCode.asyncCallback22235316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.asyncCallback22236932 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}
gdjs.PvCCode.eventsList17 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.PvCCode.asyncCallback22236932(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.PvCCode.GDGoalObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects3Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDGoalObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDBallObjects3.length;i<l;++i) {
    if ( gdjs.PvCCode.GDBallObjects3[i].getVariableString(gdjs.PvCCode.GDBallObjects3[i].getVariables().get("BallHolder")) == "Player" ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDBallObjects3[k] = gdjs.PvCCode.GDBallObjects3[i];
        ++k;
    }
}
gdjs.PvCCode.GDBallObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22230412);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.2);
}{runtimeScene.getScene().getVariables().get("PlayerScore").add(1);
}
{ //Subevents
gdjs.PvCCode.eventsList14(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.PvCCode.GDGoalObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects3Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDGoalObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDBallObjects3.length;i<l;++i) {
    if ( gdjs.PvCCode.GDBallObjects3[i].getVariableString(gdjs.PvCCode.GDBallObjects3[i].getVariables().get("BallHolder")) == "NPC" ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDBallObjects3[k] = gdjs.PvCCode.GDBallObjects3[i];
        ++k;
    }
}
gdjs.PvCCode.GDBallObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22232076);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.2);
}{runtimeScene.getScene().getVariables().get("NpcScore").add(1);
}
{ //Subevents
gdjs.PvCCode.eventsList15(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("PlayerScore")) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("WinningScore"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("TeamWon"), gdjs.PvCCode.GDTeamWonObjects3);
{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects3[i].setString("Red Team Wins!");
}
}{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects3[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects3[i].activateBehavior("PlatformerObject", false);
}
}
{ //Subevents
gdjs.PvCCode.eventsList16(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("NpcScore")) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("WinningScore"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("TeamWon"), gdjs.PvCCode.GDTeamWonObjects3);
{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects3[i].setString("Green Team Wins!");
}
}{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects3[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects3[i].activateBehavior("PlatformerObject", false);
}
}
{ //Subevents
gdjs.PvCCode.eventsList17(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("PlayerScore")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("WinningScore")));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("NpcScore")) == 0);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("GoldUnlocked"), true);
}}

}


};gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects3});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDGoalObjects3Objects = Hashtable.newFrom({"Goal": gdjs.PvCCode.GDGoalObjects3});
gdjs.PvCCode.asyncCallback22243332 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}
gdjs.PvCCode.eventsList19 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.PvCCode.asyncCallback22243332(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects3});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDGoalObjects3Objects = Hashtable.newFrom({"Goal": gdjs.PvCCode.GDGoalObjects3});
gdjs.PvCCode.asyncCallback22245412 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}
gdjs.PvCCode.eventsList20 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.PvCCode.asyncCallback22245412(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.asyncCallback22247044 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}
gdjs.PvCCode.eventsList21 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.PvCCode.asyncCallback22247044(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.asyncCallback22249452 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}
gdjs.PvCCode.eventsList22 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.PvCCode.asyncCallback22249452(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.eventsList23 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("NpcScore").setNumber(Math.round((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("WinningScore")) / 2)));
}{runtimeScene.getScene().getVariables().get("PlayerScore").setNumber(Math.round((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("WinningScore")) / 2)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.PvCCode.GDGoalObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects3Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDGoalObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDBallObjects3.length;i<l;++i) {
    if ( gdjs.PvCCode.GDBallObjects3[i].getVariableString(gdjs.PvCCode.GDBallObjects3[i].getVariables().get("BallHolder")) == "Player" ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDBallObjects3[k] = gdjs.PvCCode.GDBallObjects3[i];
        ++k;
    }
}
gdjs.PvCCode.GDBallObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22242252);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.2);
}{runtimeScene.getScene().getVariables().get("PlayerScore").add(1);
}{runtimeScene.getScene().getVariables().get("NpcScore").sub(1);
}
{ //Subevents
gdjs.PvCCode.eventsList19(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.PvCCode.GDGoalObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects3Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDGoalObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDBallObjects3.length;i<l;++i) {
    if ( gdjs.PvCCode.GDBallObjects3[i].getVariableString(gdjs.PvCCode.GDBallObjects3[i].getVariables().get("BallHolder")) == "NPC" ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDBallObjects3[k] = gdjs.PvCCode.GDBallObjects3[i];
        ++k;
    }
}
gdjs.PvCCode.GDBallObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22244268);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.2);
}{runtimeScene.getScene().getVariables().get("NpcScore").add(1);
}{runtimeScene.getScene().getVariables().get("PlayerScore").sub(1);
}
{ //Subevents
gdjs.PvCCode.eventsList20(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("PlayerScore")) <= 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("TeamWon"), gdjs.PvCCode.GDTeamWonObjects3);
{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects3[i].setString("Green Team Wins!");
}
}{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects3[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects3[i].activateBehavior("PlatformerObject", false);
}
}
{ //Subevents
gdjs.PvCCode.eventsList21(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("NpcScore")) <= 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TeamWon"), gdjs.PvCCode.GDTeamWonObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects2[i].setString("Red Team Wins!");
}
}{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects2[i].activateBehavior("PlatformerObject", false);
}
}
{ //Subevents
gdjs.PvCCode.eventsList22(runtimeScene);} //End of subevents
}

}


};gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects3});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDGoalObjects3Objects = Hashtable.newFrom({"Goal": gdjs.PvCCode.GDGoalObjects3});
gdjs.PvCCode.asyncCallback22252020 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}
gdjs.PvCCode.eventsList24 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.PvCCode.asyncCallback22252020(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects3});
gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDGoalObjects3Objects = Hashtable.newFrom({"Goal": gdjs.PvCCode.GDGoalObjects3});
gdjs.PvCCode.asyncCallback22254076 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}
gdjs.PvCCode.eventsList25 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.PvCCode.asyncCallback22254076(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.asyncCallback22255916 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}
gdjs.PvCCode.eventsList26 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.PvCCode.asyncCallback22255916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.asyncCallback22257540 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}
gdjs.PvCCode.eventsList27 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.PvCCode.asyncCallback22257540(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.eventsList28 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.PvCCode.GDGoalObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects3Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDGoalObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDBallObjects3.length;i<l;++i) {
    if ( gdjs.PvCCode.GDBallObjects3[i].getVariableString(gdjs.PvCCode.GDBallObjects3[i].getVariables().get("BallHolder")) == "Player" ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDBallObjects3[k] = gdjs.PvCCode.GDBallObjects3[i];
        ++k;
    }
}
gdjs.PvCCode.GDBallObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22250940);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.2);
}{runtimeScene.getScene().getVariables().get("PlayerScore").add(1);
}{runtimeScene.getScene().getVariables().get("NpcScore").setNumber(0);
}
{ //Subevents
gdjs.PvCCode.eventsList24(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.PvCCode.GDGoalObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects3Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDGoalObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDBallObjects3.length;i<l;++i) {
    if ( gdjs.PvCCode.GDBallObjects3[i].getVariableString(gdjs.PvCCode.GDBallObjects3[i].getVariables().get("BallHolder")) == "NPC" ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDBallObjects3[k] = gdjs.PvCCode.GDBallObjects3[i];
        ++k;
    }
}
gdjs.PvCCode.GDBallObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22252932);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.2);
}{runtimeScene.getScene().getVariables().get("NpcScore").add(1);
}{runtimeScene.getScene().getVariables().get("PlayerScore").setNumber(0);
}
{ //Subevents
gdjs.PvCCode.eventsList25(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("PlayerScore")) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("WinningScore"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("TeamWon"), gdjs.PvCCode.GDTeamWonObjects3);
{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects3[i].setString("Red Team Wins!");
}
}{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects3[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects3[i].activateBehavior("PlatformerObject", false);
}
}
{ //Subevents
gdjs.PvCCode.eventsList26(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("NpcScore")) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("WinningScore"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TeamWon"), gdjs.PvCCode.GDTeamWonObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects2[i].setString("Green Team Wins!");
}
}{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects2[i].activateBehavior("PlatformerObject", false);
}
}
{ //Subevents
gdjs.PvCCode.eventsList27(runtimeScene);} //End of subevents
}

}


};gdjs.PvCCode.asyncCallback22263164 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}
gdjs.PvCCode.eventsList29 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.PvCCode.asyncCallback22263164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.asyncCallback22266508 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}
gdjs.PvCCode.eventsList30 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.PvCCode.asyncCallback22266508(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.eventsList31 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TeamWon"), gdjs.PvCCode.GDTeamWonObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDPlayerObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDBallObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects2[i].returnVariable(gdjs.PvCCode.GDBallObjects2[i].getVariables().get("BallHolder")).setString("Player");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDBallObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_9546PvCCode_9546GDNPCObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDBallObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects2[i].returnVariable(gdjs.PvCCode.GDBallObjects2[i].getVariables().get("BallHolder")).setString("NPC");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PlayerScore"), gdjs.PvCCode.GDPlayerScoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.PvCCode.GDTimerObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDPlayerScoreObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerScoreObjects2[i].setBBText("[outline=#E73C3C]" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("PlayerScore"))) + "[/outline]" + gdjs.evtTools.string.newLine());
}
}{for(var i = 0, len = gdjs.PvCCode.GDPlayerScoreObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerScoreObjects2[i].setPosition((( gdjs.PvCCode.GDTimerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDTimerObjects2[0].getAABBLeft()),(( gdjs.PvCCode.GDTimerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDTimerObjects2[0].getY()));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NpcScore"), gdjs.PvCCode.GDNpcScoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.PvCCode.GDTimerObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDNpcScoreObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNpcScoreObjects2[i].setBBText("[outline=#3CE776]" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("NpcScore"))) + "[/outline]" + gdjs.evtTools.string.newLine());
}
}{for(var i = 0, len = gdjs.PvCCode.GDNpcScoreObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNpcScoreObjects2[i].setPosition((( gdjs.PvCCode.GDTimerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDTimerObjects2[0].getAABBRight()) - 30,(( gdjs.PvCCode.GDTimerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDTimerObjects2[0].getY()));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Gamemode")) == "Classic";
if (isConditionTrue_0) {

{ //Subevents
gdjs.PvCCode.eventsList18(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Gamemode")) == "Lives";
if (isConditionTrue_0) {

{ //Subevents
gdjs.PvCCode.eventsList23(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Gamemode")) == "Combo";
if (isConditionTrue_0) {

{ //Subevents
gdjs.PvCCode.eventsList28(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Time");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Time") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("TimerTime")));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.PvCCode.GDTimerObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDTimerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDTimerObjects2[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.PvCCode.GDTimerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDTimerObjects2[i].setString(gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("TimerTime")) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Time"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Time") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("TimerTime"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.PvCCode.GDTimerObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDTimerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDTimerObjects2[i].setColor("208;2;27");
}
}{for(var i = 0, len = gdjs.PvCCode.GDTimerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDTimerObjects2[i].setString("00:00");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Time") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("TimerTime"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("PlayerScore")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("NpcScore")));
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TeamWon"), gdjs.PvCCode.GDTeamWonObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects2[i].setString("Red Team Wins!");
}
}{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects2[i].activateBehavior("PlatformerObject", false);
}
}
{ //Subevents
gdjs.PvCCode.eventsList29(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Time") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("TimerTime"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("NpcScore")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("PlayerScore")));
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("TeamWon"), gdjs.PvCCode.GDTeamWonObjects1);
{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects1.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects1.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects1[i].setString("Green Team Wins!");
}
}{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects1.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}
{ //Subevents
gdjs.PvCCode.eventsList30(runtimeScene);} //End of subevents
}

}


};gdjs.PvCCode.eventsList32 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.setWindowSize(runtimeScene, 1450, 800, false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);
gdjs.copyArray(runtimeScene.getObjects("NpcLight"), gdjs.PvCCode.GDNpcLightObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerLight"), gdjs.PvCCode.GDPlayerLightObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDPlayerLightObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerLightObjects2[i].setCenterPositionInScene((( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getCenterXInScene()),(( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.PvCCode.GDNpcLightObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNpcLightObjects2[i].setCenterPositionInScene((( gdjs.PvCCode.GDNPCObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects2[0].getCenterXInScene()),(( gdjs.PvCCode.GDNPCObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects2[0].getCenterYInScene()));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects2[i].setAnimationName(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("BallSkin")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDBallObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDBallObjects2[i].isCurrentAnimationName("Invis") ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDBallObjects2[k] = gdjs.PvCCode.GDBallObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDBallObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDBallObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects2[i].activateBehavior("LightObstacleBehavior", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDBallObjects2.length;i<l;++i) {
    if ( !(gdjs.PvCCode.GDBallObjects2[i].isCurrentAnimationName("Invis")) ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDBallObjects2[k] = gdjs.PvCCode.GDBallObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDBallObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDBallObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects2[i].activateBehavior("LightObstacleBehavior", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDBallObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDBallObjects2[i].isCurrentAnimationName("Gold") ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDBallObjects2[k] = gdjs.PvCCode.GDBallObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDBallObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDBallObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects2[i].setLayer("AboveLight");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PvCCode.GDBallObjects1.length;i<l;++i) {
    if ( !(gdjs.PvCCode.GDBallObjects1[i].isCurrentAnimationName("Gold")) ) {
        isConditionTrue_0 = true;
        gdjs.PvCCode.GDBallObjects1[k] = gdjs.PvCCode.GDBallObjects1[i];
        ++k;
    }
}
gdjs.PvCCode.GDBallObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.PvCCode.GDBallObjects1 */
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects1[i].setLayer("");
}
}}

}


};gdjs.PvCCode.eventsList33 = function(runtimeScene) {

{


gdjs.PvCCode.eventsList1(runtimeScene);
}


{


gdjs.PvCCode.eventsList2(runtimeScene);
}


{


gdjs.PvCCode.eventsList7(runtimeScene);
}


{


gdjs.PvCCode.eventsList13(runtimeScene);
}


{


gdjs.PvCCode.eventsList31(runtimeScene);
}


{


gdjs.PvCCode.eventsList32(runtimeScene);
}


};

gdjs.PvCCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PvCCode.GDGroundObjects1.length = 0;
gdjs.PvCCode.GDGroundObjects2.length = 0;
gdjs.PvCCode.GDGroundObjects3.length = 0;
gdjs.PvCCode.GDGroundObjects4.length = 0;
gdjs.PvCCode.GDGroundObjects5.length = 0;
gdjs.PvCCode.GDGroundObjects6.length = 0;
gdjs.PvCCode.GDUnsolidObjects1.length = 0;
gdjs.PvCCode.GDUnsolidObjects2.length = 0;
gdjs.PvCCode.GDUnsolidObjects3.length = 0;
gdjs.PvCCode.GDUnsolidObjects4.length = 0;
gdjs.PvCCode.GDUnsolidObjects5.length = 0;
gdjs.PvCCode.GDUnsolidObjects6.length = 0;
gdjs.PvCCode.GDRedBoxObjects1.length = 0;
gdjs.PvCCode.GDRedBoxObjects2.length = 0;
gdjs.PvCCode.GDRedBoxObjects3.length = 0;
gdjs.PvCCode.GDRedBoxObjects4.length = 0;
gdjs.PvCCode.GDRedBoxObjects5.length = 0;
gdjs.PvCCode.GDRedBoxObjects6.length = 0;
gdjs.PvCCode.GDGreenBoxObjects1.length = 0;
gdjs.PvCCode.GDGreenBoxObjects2.length = 0;
gdjs.PvCCode.GDGreenBoxObjects3.length = 0;
gdjs.PvCCode.GDGreenBoxObjects4.length = 0;
gdjs.PvCCode.GDGreenBoxObjects5.length = 0;
gdjs.PvCCode.GDGreenBoxObjects6.length = 0;
gdjs.PvCCode.GDPlayerObjects1.length = 0;
gdjs.PvCCode.GDPlayerObjects2.length = 0;
gdjs.PvCCode.GDPlayerObjects3.length = 0;
gdjs.PvCCode.GDPlayerObjects4.length = 0;
gdjs.PvCCode.GDPlayerObjects5.length = 0;
gdjs.PvCCode.GDPlayerObjects6.length = 0;
gdjs.PvCCode.GDBallObjects1.length = 0;
gdjs.PvCCode.GDBallObjects2.length = 0;
gdjs.PvCCode.GDBallObjects3.length = 0;
gdjs.PvCCode.GDBallObjects4.length = 0;
gdjs.PvCCode.GDBallObjects5.length = 0;
gdjs.PvCCode.GDBallObjects6.length = 0;
gdjs.PvCCode.GDNPCObjects1.length = 0;
gdjs.PvCCode.GDNPCObjects2.length = 0;
gdjs.PvCCode.GDNPCObjects3.length = 0;
gdjs.PvCCode.GDNPCObjects4.length = 0;
gdjs.PvCCode.GDNPCObjects5.length = 0;
gdjs.PvCCode.GDNPCObjects6.length = 0;
gdjs.PvCCode.GDGoalObjects1.length = 0;
gdjs.PvCCode.GDGoalObjects2.length = 0;
gdjs.PvCCode.GDGoalObjects3.length = 0;
gdjs.PvCCode.GDGoalObjects4.length = 0;
gdjs.PvCCode.GDGoalObjects5.length = 0;
gdjs.PvCCode.GDGoalObjects6.length = 0;
gdjs.PvCCode.GDPlayerScoreObjects1.length = 0;
gdjs.PvCCode.GDPlayerScoreObjects2.length = 0;
gdjs.PvCCode.GDPlayerScoreObjects3.length = 0;
gdjs.PvCCode.GDPlayerScoreObjects4.length = 0;
gdjs.PvCCode.GDPlayerScoreObjects5.length = 0;
gdjs.PvCCode.GDPlayerScoreObjects6.length = 0;
gdjs.PvCCode.GDNpcScoreObjects1.length = 0;
gdjs.PvCCode.GDNpcScoreObjects2.length = 0;
gdjs.PvCCode.GDNpcScoreObjects3.length = 0;
gdjs.PvCCode.GDNpcScoreObjects4.length = 0;
gdjs.PvCCode.GDNpcScoreObjects5.length = 0;
gdjs.PvCCode.GDNpcScoreObjects6.length = 0;
gdjs.PvCCode.GDTeamWonObjects1.length = 0;
gdjs.PvCCode.GDTeamWonObjects2.length = 0;
gdjs.PvCCode.GDTeamWonObjects3.length = 0;
gdjs.PvCCode.GDTeamWonObjects4.length = 0;
gdjs.PvCCode.GDTeamWonObjects5.length = 0;
gdjs.PvCCode.GDTeamWonObjects6.length = 0;
gdjs.PvCCode.GDTimerObjects1.length = 0;
gdjs.PvCCode.GDTimerObjects2.length = 0;
gdjs.PvCCode.GDTimerObjects3.length = 0;
gdjs.PvCCode.GDTimerObjects4.length = 0;
gdjs.PvCCode.GDTimerObjects5.length = 0;
gdjs.PvCCode.GDTimerObjects6.length = 0;
gdjs.PvCCode.GDPlayerLightObjects1.length = 0;
gdjs.PvCCode.GDPlayerLightObjects2.length = 0;
gdjs.PvCCode.GDPlayerLightObjects3.length = 0;
gdjs.PvCCode.GDPlayerLightObjects4.length = 0;
gdjs.PvCCode.GDPlayerLightObjects5.length = 0;
gdjs.PvCCode.GDPlayerLightObjects6.length = 0;
gdjs.PvCCode.GDNpcLightObjects1.length = 0;
gdjs.PvCCode.GDNpcLightObjects2.length = 0;
gdjs.PvCCode.GDNpcLightObjects3.length = 0;
gdjs.PvCCode.GDNpcLightObjects4.length = 0;
gdjs.PvCCode.GDNpcLightObjects5.length = 0;
gdjs.PvCCode.GDNpcLightObjects6.length = 0;
gdjs.PvCCode.GDMapNameObjects1.length = 0;
gdjs.PvCCode.GDMapNameObjects2.length = 0;
gdjs.PvCCode.GDMapNameObjects3.length = 0;
gdjs.PvCCode.GDMapNameObjects4.length = 0;
gdjs.PvCCode.GDMapNameObjects5.length = 0;
gdjs.PvCCode.GDMapNameObjects6.length = 0;
gdjs.PvCCode.GDRedBarObjects1.length = 0;
gdjs.PvCCode.GDRedBarObjects2.length = 0;
gdjs.PvCCode.GDRedBarObjects3.length = 0;
gdjs.PvCCode.GDRedBarObjects4.length = 0;
gdjs.PvCCode.GDRedBarObjects5.length = 0;
gdjs.PvCCode.GDRedBarObjects6.length = 0;
gdjs.PvCCode.GDGreenBarObjects1.length = 0;
gdjs.PvCCode.GDGreenBarObjects2.length = 0;
gdjs.PvCCode.GDGreenBarObjects3.length = 0;
gdjs.PvCCode.GDGreenBarObjects4.length = 0;
gdjs.PvCCode.GDGreenBarObjects5.length = 0;
gdjs.PvCCode.GDGreenBarObjects6.length = 0;

gdjs.PvCCode.eventsList33(runtimeScene);

return;

}

gdjs['PvCCode'] = gdjs.PvCCode;
