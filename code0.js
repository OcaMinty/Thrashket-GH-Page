gdjs.PvCCode = {};
gdjs.PvCCode.GDGroundObjects1= [];
gdjs.PvCCode.GDGroundObjects2= [];
gdjs.PvCCode.GDGroundObjects3= [];
gdjs.PvCCode.GDGroundObjects4= [];
gdjs.PvCCode.GDPlayerObjects1= [];
gdjs.PvCCode.GDPlayerObjects2= [];
gdjs.PvCCode.GDPlayerObjects3= [];
gdjs.PvCCode.GDPlayerObjects4= [];
gdjs.PvCCode.GDBallObjects1= [];
gdjs.PvCCode.GDBallObjects2= [];
gdjs.PvCCode.GDBallObjects3= [];
gdjs.PvCCode.GDBallObjects4= [];
gdjs.PvCCode.GDNPCObjects1= [];
gdjs.PvCCode.GDNPCObjects2= [];
gdjs.PvCCode.GDNPCObjects3= [];
gdjs.PvCCode.GDNPCObjects4= [];
gdjs.PvCCode.GDGoalObjects1= [];
gdjs.PvCCode.GDGoalObjects2= [];
gdjs.PvCCode.GDGoalObjects3= [];
gdjs.PvCCode.GDGoalObjects4= [];
gdjs.PvCCode.GDPlayerScoreObjects1= [];
gdjs.PvCCode.GDPlayerScoreObjects2= [];
gdjs.PvCCode.GDPlayerScoreObjects3= [];
gdjs.PvCCode.GDPlayerScoreObjects4= [];
gdjs.PvCCode.GDNpcScoreObjects1= [];
gdjs.PvCCode.GDNpcScoreObjects2= [];
gdjs.PvCCode.GDNpcScoreObjects3= [];
gdjs.PvCCode.GDNpcScoreObjects4= [];
gdjs.PvCCode.GDTeamWonObjects1= [];
gdjs.PvCCode.GDTeamWonObjects2= [];
gdjs.PvCCode.GDTeamWonObjects3= [];
gdjs.PvCCode.GDTeamWonObjects4= [];
gdjs.PvCCode.GDPlayerLightObjects1= [];
gdjs.PvCCode.GDPlayerLightObjects2= [];
gdjs.PvCCode.GDPlayerLightObjects3= [];
gdjs.PvCCode.GDPlayerLightObjects4= [];
gdjs.PvCCode.GDNpcLightObjects1= [];
gdjs.PvCCode.GDNpcLightObjects2= [];
gdjs.PvCCode.GDNpcLightObjects3= [];
gdjs.PvCCode.GDNpcLightObjects4= [];
gdjs.PvCCode.GDTimerObjects1= [];
gdjs.PvCCode.GDTimerObjects2= [];
gdjs.PvCCode.GDTimerObjects3= [];
gdjs.PvCCode.GDTimerObjects4= [];

gdjs.PvCCode.conditionTrue_0 = {val:false};
gdjs.PvCCode.condition0IsTrue_0 = {val:false};
gdjs.PvCCode.condition1IsTrue_0 = {val:false};
gdjs.PvCCode.condition2IsTrue_0 = {val:false};
gdjs.PvCCode.condition3IsTrue_0 = {val:false};
gdjs.PvCCode.conditionTrue_1 = {val:false};
gdjs.PvCCode.condition0IsTrue_1 = {val:false};
gdjs.PvCCode.condition1IsTrue_1 = {val:false};
gdjs.PvCCode.condition2IsTrue_1 = {val:false};
gdjs.PvCCode.condition3IsTrue_1 = {val:false};


gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.PvCCode.GDPlayerObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.PvCCode.GDPlayerObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.PvCCode.GDPlayerObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.PvCCode.GDPlayerObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.PvCCode.GDPlayerObjects1});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects1});
gdjs.PvCCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        gdjs.PvCCode.condition0IsTrue_0.val = true;
        gdjs.PvCCode.GDPlayerObjects2[k] = gdjs.PvCCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDPlayerObjects2.length = k;}if (gdjs.PvCCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        gdjs.PvCCode.condition0IsTrue_0.val = true;
        gdjs.PvCCode.GDPlayerObjects2[k] = gdjs.PvCCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDPlayerObjects2.length = k;}if (gdjs.PvCCode.condition0IsTrue_0.val) {
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

gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDPlayerObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects, false, runtimeScene, false);
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDPlayerObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects, true, runtimeScene, false);
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setGravity(1000);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDPlayerObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects, false, runtimeScene, false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition1IsTrue_0;
gdjs.PvCCode.condition0IsTrue_1.val = false;
gdjs.PvCCode.condition1IsTrue_1.val = false;
{
gdjs.PvCCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.PvCCode.condition0IsTrue_1.val ) {
    gdjs.PvCCode.conditionTrue_1.val = true;
}
}
{
gdjs.PvCCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if( gdjs.PvCCode.condition1IsTrue_1.val ) {
    gdjs.PvCCode.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.PvCCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDBallObjects2 */
/* Reuse gdjs.PvCCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects2[i].setPosition((( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointX("")),(( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointY("")) - 25);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
gdjs.PvCCode.condition2IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDPlayerObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects, false, runtimeScene, false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDPlayerObjects2[i].isFlippedX() ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDPlayerObjects2[k] = gdjs.PvCCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDPlayerObjects2.length = k;}if ( gdjs.PvCCode.condition1IsTrue_0.val ) {
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition2IsTrue_0;
gdjs.PvCCode.condition0IsTrue_1.val = false;
gdjs.PvCCode.condition1IsTrue_1.val = false;
{
gdjs.PvCCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
if( gdjs.PvCCode.condition0IsTrue_1.val ) {
    gdjs.PvCCode.conditionTrue_1.val = true;
}
}
{
gdjs.PvCCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
if( gdjs.PvCCode.condition1IsTrue_1.val ) {
    gdjs.PvCCode.conditionTrue_1.val = true;
}
}
{
}
}
}}
}
if (gdjs.PvCCode.condition2IsTrue_0.val) {
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

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
gdjs.PvCCode.condition2IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDPlayerObjects1Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects1Objects, false, runtimeScene, false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.PvCCode.GDPlayerObjects1[i].isFlippedX()) ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDPlayerObjects1[k] = gdjs.PvCCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.PvCCode.GDPlayerObjects1.length = k;}if ( gdjs.PvCCode.condition1IsTrue_0.val ) {
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition2IsTrue_0;
gdjs.PvCCode.condition0IsTrue_1.val = false;
gdjs.PvCCode.condition1IsTrue_1.val = false;
{
gdjs.PvCCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
if( gdjs.PvCCode.condition0IsTrue_1.val ) {
    gdjs.PvCCode.conditionTrue_1.val = true;
}
}
{
gdjs.PvCCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
if( gdjs.PvCCode.condition1IsTrue_1.val ) {
    gdjs.PvCCode.conditionTrue_1.val = true;
}
}
{
}
}
}}
}
if (gdjs.PvCCode.condition2IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDBallObjects1 */
/* Reuse gdjs.PvCCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects1[i].getBehavior("Physics2").applyForce(50, -(50), (( gdjs.PvCCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects1[0].getPointX("")), (( gdjs.PvCCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects1[0].getPointY("")));
}
}}

}


};gdjs.PvCCode.eventsList1 = function(runtimeScene) {

{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition0IsTrue_0;
gdjs.PvCCode.condition0IsTrue_1.val = false;
gdjs.PvCCode.condition1IsTrue_1.val = false;
{
gdjs.PvCCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Playermode")) == "Local";
if( gdjs.PvCCode.condition0IsTrue_1.val ) {
    gdjs.PvCCode.conditionTrue_1.val = true;
}
}
{
gdjs.PvCCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Playermode")) == "VsCPU";
if( gdjs.PvCCode.condition1IsTrue_1.val ) {
    gdjs.PvCCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.PvCCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PvCCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects2Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects2Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects3Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects3});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects3});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects3Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects3});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects3});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects2Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects3[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects3[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects3[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);

gdjs.PvCCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects3.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects3[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        gdjs.PvCCode.condition0IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects3[k] = gdjs.PvCCode.GDNPCObjects3[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects3.length = k;}if (gdjs.PvCCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDNPCObjects3 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects3[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);

gdjs.PvCCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects3.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects3[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        gdjs.PvCCode.condition0IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects3[k] = gdjs.PvCCode.GDNPCObjects3[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects3.length = k;}if (gdjs.PvCCode.condition0IsTrue_0.val) {
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

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects3Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects3Objects, false, runtimeScene, false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition1IsTrue_0;
gdjs.PvCCode.condition0IsTrue_1.val = false;
gdjs.PvCCode.condition1IsTrue_1.val = false;
{
gdjs.PvCCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.PvCCode.condition0IsTrue_1.val ) {
    gdjs.PvCCode.conditionTrue_1.val = true;
}
}
{
gdjs.PvCCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if( gdjs.PvCCode.condition1IsTrue_1.val ) {
    gdjs.PvCCode.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.PvCCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDBallObjects3 */
/* Reuse gdjs.PvCCode.GDNPCObjects3 */
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects3[i].setPosition((( gdjs.PvCCode.GDNPCObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects3[0].getPointX("")),(( gdjs.PvCCode.GDNPCObjects3.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects3[0].getPointY("")) - 25);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects3);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
gdjs.PvCCode.condition2IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects3Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects3Objects, false, runtimeScene, false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects3.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects3[i].isFlippedX() ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects3[k] = gdjs.PvCCode.GDNPCObjects3[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects3.length = k;}if ( gdjs.PvCCode.condition1IsTrue_0.val ) {
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition2IsTrue_0;
gdjs.PvCCode.condition0IsTrue_1.val = false;
gdjs.PvCCode.condition1IsTrue_1.val = false;
{
gdjs.PvCCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if( gdjs.PvCCode.condition0IsTrue_1.val ) {
    gdjs.PvCCode.conditionTrue_1.val = true;
}
}
{
gdjs.PvCCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if( gdjs.PvCCode.condition1IsTrue_1.val ) {
    gdjs.PvCCode.conditionTrue_1.val = true;
}
}
{
}
}
}}
}
if (gdjs.PvCCode.condition2IsTrue_0.val) {
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

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
gdjs.PvCCode.condition2IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects, false, runtimeScene, false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( !(gdjs.PvCCode.GDNPCObjects2[i].isFlippedX()) ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;}if ( gdjs.PvCCode.condition1IsTrue_0.val ) {
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition2IsTrue_0;
gdjs.PvCCode.condition0IsTrue_1.val = false;
gdjs.PvCCode.condition1IsTrue_1.val = false;
{
gdjs.PvCCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if( gdjs.PvCCode.condition0IsTrue_1.val ) {
    gdjs.PvCCode.conditionTrue_1.val = true;
}
}
{
gdjs.PvCCode.condition1IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if( gdjs.PvCCode.condition1IsTrue_1.val ) {
    gdjs.PvCCode.conditionTrue_1.val = true;
}
}
{
}
}
}}
}
if (gdjs.PvCCode.condition2IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDBallObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects2[i].getBehavior("Physics2").applyForce(50, -(50), (( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointX("")), (( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointY("")));
}
}}

}


};gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects2Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects2Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGroundObjects2Objects = Hashtable.newFrom({"Ground": gdjs.PvCCode.GDGroundObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGroundObjects2Objects = Hashtable.newFrom({"Ground": gdjs.PvCCode.GDGroundObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.PvCCode.GDPlayerObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.PvCCode.GDPlayerObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.eventsList3 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects, false, runtimeScene, false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( !(gdjs.PvCCode.GDNPCObjects2[i].isFlippedX()) ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;}}
if (gdjs.PvCCode.condition1IsTrue_0.val) {
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

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects, false, runtimeScene, false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects2[i].isFlippedX() ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;}}
if (gdjs.PvCCode.condition1IsTrue_0.val) {
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

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.PvCCode.GDGroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.raycastObject(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGroundObjects2Objects, (( gdjs.PvCCode.GDNPCObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects2[0].getPointX("")), (( gdjs.PvCCode.GDNPCObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects2[0].getPointY("")), 0, 100, runtimeScene.getScene().getVariables().get("GroundIntersectX"), runtimeScene.getScene().getVariables().get("GroundIntersectY"), false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;}}
if (gdjs.PvCCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDNPCObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.PvCCode.GDGroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.raycastObject(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGroundObjects2Objects, (( gdjs.PvCCode.GDNPCObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects2[0].getPointX("")), (( gdjs.PvCCode.GDNPCObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects2[0].getPointY("")), 180, 100, runtimeScene.getScene().getVariables().get("GroundIntersectX"), runtimeScene.getScene().getVariables().get("GroundIntersectY"), false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;}}
if (gdjs.PvCCode.condition1IsTrue_0.val) {
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

gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDPlayerObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects, false, runtimeScene, false);
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].returnVariable(gdjs.PvCCode.GDNPCObjects2[i].getVariables().get("HuntingState")).setNumber(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDPlayerObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects, true, runtimeScene, false);
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].returnVariable(gdjs.PvCCode.GDNPCObjects2[i].getVariables().get("HuntingState")).setNumber(gdjs.randomInRange(1, 2));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition0IsTrue_0;
gdjs.PvCCode.conditionTrue_1.val = ((( gdjs.PvCCode.GDNPCObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects2[0].getPointX("")) > (( gdjs.PvCCode.GDBallObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDBallObjects2[0].getPointX("")));
}
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects2[i].getVariableNumber(gdjs.PvCCode.GDNPCObjects2[i].getVariables().get("HuntingState")) == 1 ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;}}
if (gdjs.PvCCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDNPCObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition0IsTrue_0;
gdjs.PvCCode.conditionTrue_1.val = ((( gdjs.PvCCode.GDNPCObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects2[0].getPointX("")) < (( gdjs.PvCCode.GDBallObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDBallObjects2[0].getPointX("")));
}
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects2[i].getVariableNumber(gdjs.PvCCode.GDNPCObjects2[i].getVariables().get("HuntingState")) == 1 ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;}}
if (gdjs.PvCCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDNPCObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition0IsTrue_0;
gdjs.PvCCode.conditionTrue_1.val = ((( gdjs.PvCCode.GDNPCObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects2[0].getPointX("")) > (( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointX("")));
}
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects2[i].getVariableNumber(gdjs.PvCCode.GDNPCObjects2[i].getVariables().get("HuntingState")) == 2 ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;}}
if (gdjs.PvCCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDNPCObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition0IsTrue_0;
gdjs.PvCCode.conditionTrue_1.val = ((( gdjs.PvCCode.GDNPCObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects2[0].getPointX("")) < (( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getPointX("")));
}
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects2[i].getVariableNumber(gdjs.PvCCode.GDNPCObjects2[i].getVariables().get("HuntingState")) == 2 ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;}}
if (gdjs.PvCCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDNPCObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects2.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        gdjs.PvCCode.condition0IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects2[k] = gdjs.PvCCode.GDNPCObjects2[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects2.length = k;}if (gdjs.PvCCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDNPCObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects1);

gdjs.PvCCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDNPCObjects1.length;i<l;++i) {
    if ( gdjs.PvCCode.GDNPCObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        gdjs.PvCCode.condition0IsTrue_0.val = true;
        gdjs.PvCCode.GDNPCObjects1[k] = gdjs.PvCCode.GDNPCObjects1[i];
        ++k;
    }
}
gdjs.PvCCode.GDNPCObjects1.length = k;}if (gdjs.PvCCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDNPCObjects1 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects1.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects1[i].flipX(false);
}
}}

}


};gdjs.PvCCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects, false, runtimeScene, false);
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDNPCObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects, true, runtimeScene, false);
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDNPCObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDNPCObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNPCObjects2[i].getBehavior("PlatformerObject").setGravity(1000);
}
}}

}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Playermode")) == "Local";
}if (gdjs.PvCCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PvCCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Playermode")) == "VsCPU";
}if (gdjs.PvCCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PvCCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.PvCCode.GDPlayerObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects2Objects = Hashtable.newFrom({"NPC": gdjs.PvCCode.GDNPCObjects2});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects3});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGoalObjects3Objects = Hashtable.newFrom({"Goal": gdjs.PvCCode.GDGoalObjects3});
gdjs.PvCCode.asyncCallback12554812 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}
gdjs.PvCCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.PvCCode.asyncCallback12554812(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects3});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGoalObjects3Objects = Hashtable.newFrom({"Goal": gdjs.PvCCode.GDGoalObjects3});
gdjs.PvCCode.asyncCallback12556220 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}
gdjs.PvCCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.PvCCode.asyncCallback12556220(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.asyncCallback12558780 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title Screen", false);
}}
gdjs.PvCCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.PvCCode.asyncCallback12558780(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.asyncCallback12544124 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title Screen", false);
}}
gdjs.PvCCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.PvCCode.asyncCallback12544124(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.PvCCode.GDGoalObjects3);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
gdjs.PvCCode.condition2IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects3Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGoalObjects3Objects, false, runtimeScene, false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDBallObjects3.length;i<l;++i) {
    if ( gdjs.PvCCode.GDBallObjects3[i].getVariableString(gdjs.PvCCode.GDBallObjects3[i].getVariables().get("BallHolder")) == "Player" ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDBallObjects3[k] = gdjs.PvCCode.GDBallObjects3[i];
        ++k;
    }
}
gdjs.PvCCode.GDBallObjects3.length = k;}if ( gdjs.PvCCode.condition1IsTrue_0.val ) {
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition2IsTrue_0;
gdjs.PvCCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12553956);
}
}}
}
if (gdjs.PvCCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.2);
}{runtimeScene.getScene().getVariables().get("PlayerScore").add(1);
}
{ //Subevents
gdjs.PvCCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.PvCCode.GDGoalObjects3);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
gdjs.PvCCode.condition2IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects3Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGoalObjects3Objects, false, runtimeScene, false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDBallObjects3.length;i<l;++i) {
    if ( gdjs.PvCCode.GDBallObjects3[i].getVariableString(gdjs.PvCCode.GDBallObjects3[i].getVariables().get("BallHolder")) == "NPC" ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDBallObjects3[k] = gdjs.PvCCode.GDBallObjects3[i];
        ++k;
    }
}
gdjs.PvCCode.GDBallObjects3.length = k;}if ( gdjs.PvCCode.condition1IsTrue_0.val ) {
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition2IsTrue_0;
gdjs.PvCCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12555620);
}
}}
}
if (gdjs.PvCCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.2);
}{runtimeScene.getScene().getVariables().get("NpcScore").add(1);
}
{ //Subevents
gdjs.PvCCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("PlayerScore")) >= 10;
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
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
gdjs.PvCCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("NpcScore")) >= 10;
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
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
gdjs.PvCCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects3});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGoalObjects3Objects = Hashtable.newFrom({"Goal": gdjs.PvCCode.GDGoalObjects3});
gdjs.PvCCode.asyncCallback12516964 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}
gdjs.PvCCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.PvCCode.asyncCallback12516964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects3});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGoalObjects3Objects = Hashtable.newFrom({"Goal": gdjs.PvCCode.GDGoalObjects3});
gdjs.PvCCode.asyncCallback12538444 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}
gdjs.PvCCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.PvCCode.asyncCallback12538444(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.asyncCallback12512908 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title Screen", false);
}}
gdjs.PvCCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.PvCCode.asyncCallback12512908(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.asyncCallback12494164 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title Screen", false);
}}
gdjs.PvCCode.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.PvCCode.asyncCallback12494164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.eventsList14 = function(runtimeScene) {

{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("NpcScore").setNumber(5);
}{runtimeScene.getScene().getVariables().get("PlayerScore").setNumber(5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.PvCCode.GDGoalObjects3);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
gdjs.PvCCode.condition2IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects3Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGoalObjects3Objects, false, runtimeScene, false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDBallObjects3.length;i<l;++i) {
    if ( gdjs.PvCCode.GDBallObjects3[i].getVariableString(gdjs.PvCCode.GDBallObjects3[i].getVariables().get("BallHolder")) == "Player" ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDBallObjects3[k] = gdjs.PvCCode.GDBallObjects3[i];
        ++k;
    }
}
gdjs.PvCCode.GDBallObjects3.length = k;}if ( gdjs.PvCCode.condition1IsTrue_0.val ) {
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition2IsTrue_0;
gdjs.PvCCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12540356);
}
}}
}
if (gdjs.PvCCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.2);
}{runtimeScene.getScene().getVariables().get("PlayerScore").add(1);
}{runtimeScene.getScene().getVariables().get("NpcScore").sub(1);
}
{ //Subevents
gdjs.PvCCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.PvCCode.GDGoalObjects3);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
gdjs.PvCCode.condition2IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects3Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGoalObjects3Objects, false, runtimeScene, false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDBallObjects3.length;i<l;++i) {
    if ( gdjs.PvCCode.GDBallObjects3[i].getVariableString(gdjs.PvCCode.GDBallObjects3[i].getVariables().get("BallHolder")) == "NPC" ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDBallObjects3[k] = gdjs.PvCCode.GDBallObjects3[i];
        ++k;
    }
}
gdjs.PvCCode.GDBallObjects3.length = k;}if ( gdjs.PvCCode.condition1IsTrue_0.val ) {
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition2IsTrue_0;
gdjs.PvCCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12510244);
}
}}
}
if (gdjs.PvCCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.2);
}{runtimeScene.getScene().getVariables().get("NpcScore").add(1);
}{runtimeScene.getScene().getVariables().get("PlayerScore").sub(1);
}
{ //Subevents
gdjs.PvCCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("PlayerScore")) <= 0;
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
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
gdjs.PvCCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("NpcScore")) <= 0;
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
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
gdjs.PvCCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects3});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGoalObjects3Objects = Hashtable.newFrom({"Goal": gdjs.PvCCode.GDGoalObjects3});
gdjs.PvCCode.asyncCallback12056940 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}
gdjs.PvCCode.eventsList15 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.PvCCode.asyncCallback12056940(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects3Objects = Hashtable.newFrom({"Ball": gdjs.PvCCode.GDBallObjects3});
gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGoalObjects3Objects = Hashtable.newFrom({"Goal": gdjs.PvCCode.GDGoalObjects3});
gdjs.PvCCode.asyncCallback8488532 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}
gdjs.PvCCode.eventsList16 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.PvCCode.asyncCallback8488532(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.asyncCallback11666940 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title Screen", false);
}}
gdjs.PvCCode.eventsList17 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.PvCCode.asyncCallback11666940(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.asyncCallback11669876 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title Screen", false);
}}
gdjs.PvCCode.eventsList18 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.PvCCode.asyncCallback11669876(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.PvCCode.GDGoalObjects3);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
gdjs.PvCCode.condition2IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects3Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGoalObjects3Objects, false, runtimeScene, false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDBallObjects3.length;i<l;++i) {
    if ( gdjs.PvCCode.GDBallObjects3[i].getVariableString(gdjs.PvCCode.GDBallObjects3[i].getVariables().get("BallHolder")) == "Player" ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDBallObjects3[k] = gdjs.PvCCode.GDBallObjects3[i];
        ++k;
    }
}
gdjs.PvCCode.GDBallObjects3.length = k;}if ( gdjs.PvCCode.condition1IsTrue_0.val ) {
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition2IsTrue_0;
gdjs.PvCCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9146740);
}
}}
}
if (gdjs.PvCCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.2);
}{runtimeScene.getScene().getVariables().get("PlayerScore").add(1);
}{runtimeScene.getScene().getVariables().get("NpcScore").setNumber(0);
}
{ //Subevents
gdjs.PvCCode.eventsList15(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects3);
gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.PvCCode.GDGoalObjects3);

gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
gdjs.PvCCode.condition2IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects3Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDGoalObjects3Objects, false, runtimeScene, false);
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.PvCCode.GDBallObjects3.length;i<l;++i) {
    if ( gdjs.PvCCode.GDBallObjects3[i].getVariableString(gdjs.PvCCode.GDBallObjects3[i].getVariables().get("BallHolder")) == "NPC" ) {
        gdjs.PvCCode.condition1IsTrue_0.val = true;
        gdjs.PvCCode.GDBallObjects3[k] = gdjs.PvCCode.GDBallObjects3[i];
        ++k;
    }
}
gdjs.PvCCode.GDBallObjects3.length = k;}if ( gdjs.PvCCode.condition1IsTrue_0.val ) {
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition2IsTrue_0;
gdjs.PvCCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8150836);
}
}}
}
if (gdjs.PvCCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.2);
}{runtimeScene.getScene().getVariables().get("NpcScore").add(1);
}{runtimeScene.getScene().getVariables().get("PlayerScore").setNumber(0);
}
{ //Subevents
gdjs.PvCCode.eventsList16(runtimeScene);} //End of subevents
}

}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("PlayerScore")) >= 4;
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
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
gdjs.PvCCode.eventsList17(runtimeScene);} //End of subevents
}

}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("NpcScore")) >= 4;
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
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
gdjs.PvCCode.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.PvCCode.asyncCallback11632092 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title Screen", false);
}}
gdjs.PvCCode.eventsList20 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.PvCCode.asyncCallback11632092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.asyncCallback7727364 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title Screen", false);
}}
gdjs.PvCCode.eventsList21 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.PvCCode.asyncCallback7727364(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PvCCode.eventsList22 = function(runtimeScene) {

{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Time");
}}

}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Time") >= 180;
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition1IsTrue_0;
gdjs.PvCCode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("PlayerScore")) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("NpcScore")));
}
}}
if (gdjs.PvCCode.condition1IsTrue_0.val) {
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
gdjs.PvCCode.eventsList20(runtimeScene);} //End of subevents
}

}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
gdjs.PvCCode.condition1IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Time") >= 180;
}if ( gdjs.PvCCode.condition0IsTrue_0.val ) {
{
{gdjs.PvCCode.conditionTrue_1 = gdjs.PvCCode.condition1IsTrue_0;
gdjs.PvCCode.conditionTrue_1.val = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("NpcScore")) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("PlayerScore")));
}
}}
if (gdjs.PvCCode.condition1IsTrue_0.val) {
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


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Time") >= 120);
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.PvCCode.GDTimerObjects3);
{for(var i = 0, len = gdjs.PvCCode.GDTimerObjects3.length ;i < len;++i) {
    gdjs.PvCCode.GDTimerObjects3[i].setBBText(gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS.func(runtimeScene, gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Time"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Time") >= 120;
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.PvCCode.GDTimerObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDTimerObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDTimerObjects2[i].setBBText("[outline=#E73C3C]" + gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS.func(runtimeScene, gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Time"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + "[/outline]");
}
}}

}


};gdjs.PvCCode.eventsList23 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.PvCCode.GDTimerObjects1);
{for(var i = 0, len = gdjs.PvCCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.PvCCode.GDTimerObjects1[i].hide();
}
}}

}


};gdjs.PvCCode.eventsList24 = function(runtimeScene) {

{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TeamWon"), gdjs.PvCCode.GDTeamWonObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDTeamWonObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDTeamWonObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDPlayerObjects2Objects, false, runtimeScene, false);
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDBallObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects2[i].returnVariable(gdjs.PvCCode.GDBallObjects2[i].getVariables().get("BallHolder")).setString("Player");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);

gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDBallObjects2Objects, gdjs.PvCCode.mapOfGDgdjs_46PvCCode_46GDNPCObjects2Objects, false, runtimeScene, false);
}if (gdjs.PvCCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PvCCode.GDBallObjects2 */
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects2[i].returnVariable(gdjs.PvCCode.GDBallObjects2[i].getVariables().get("BallHolder")).setString("NPC");
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("PlayerScore"), gdjs.PvCCode.GDPlayerScoreObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDPlayerScoreObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerScoreObjects2[i].setBBText("[outline=#E73C3C]" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("PlayerScore"))) + "[/outline]");
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NpcScore"), gdjs.PvCCode.GDNpcScoreObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDNpcScoreObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNpcScoreObjects2[i].setBBText("[outline=#3CE776]" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("NpcScore"))) + "[/outline]");
}
}}

}


{



}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Gamemode")) == "Classic";
}if (gdjs.PvCCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PvCCode.eventsList9(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Gamemode")) == "Lives";
}if (gdjs.PvCCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PvCCode.eventsList14(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("Gamemode")) == "Combo";
}if (gdjs.PvCCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PvCCode.eventsList19(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("TimerToggle"), true);
}if (gdjs.PvCCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PvCCode.eventsList22(runtimeScene);} //End of subevents
}

}


{


gdjs.PvCCode.condition0IsTrue_0.val = false;
{
gdjs.PvCCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("TimerToggle"), false);
}if (gdjs.PvCCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PvCCode.eventsList23(runtimeScene);} //End of subevents
}

}


};gdjs.PvCCode.eventsList25 = function(runtimeScene) {

{


{
{gdjs.evtTools.window.setWindowSize(runtimeScene, 1450, 800, false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.PvCCode.GDNPCObjects2);
gdjs.copyArray(runtimeScene.getObjects("NpcLight"), gdjs.PvCCode.GDNpcLightObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.PvCCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerLight"), gdjs.PvCCode.GDPlayerLightObjects2);
{for(var i = 0, len = gdjs.PvCCode.GDPlayerLightObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDPlayerLightObjects2[i].setPosition((( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getCenterXInScene()),(( gdjs.PvCCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDPlayerObjects2[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.PvCCode.GDNpcLightObjects2.length ;i < len;++i) {
    gdjs.PvCCode.GDNpcLightObjects2[i].setPosition((( gdjs.PvCCode.GDNPCObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects2[0].getCenterXInScene()),(( gdjs.PvCCode.GDNPCObjects2.length === 0 ) ? 0 :gdjs.PvCCode.GDNPCObjects2[0].getCenterYInScene()));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.PvCCode.GDBallObjects1);
{for(var i = 0, len = gdjs.PvCCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.PvCCode.GDBallObjects1[i].setAnimationName(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("BallSkin")));
}
}}

}


};gdjs.PvCCode.eventsList26 = function(runtimeScene) {

{


gdjs.PvCCode.eventsList1(runtimeScene);
}


{


gdjs.PvCCode.eventsList4(runtimeScene);
}


{


gdjs.PvCCode.eventsList24(runtimeScene);
}


{


gdjs.PvCCode.eventsList25(runtimeScene);
}


};

gdjs.PvCCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PvCCode.GDGroundObjects1.length = 0;
gdjs.PvCCode.GDGroundObjects2.length = 0;
gdjs.PvCCode.GDGroundObjects3.length = 0;
gdjs.PvCCode.GDGroundObjects4.length = 0;
gdjs.PvCCode.GDPlayerObjects1.length = 0;
gdjs.PvCCode.GDPlayerObjects2.length = 0;
gdjs.PvCCode.GDPlayerObjects3.length = 0;
gdjs.PvCCode.GDPlayerObjects4.length = 0;
gdjs.PvCCode.GDBallObjects1.length = 0;
gdjs.PvCCode.GDBallObjects2.length = 0;
gdjs.PvCCode.GDBallObjects3.length = 0;
gdjs.PvCCode.GDBallObjects4.length = 0;
gdjs.PvCCode.GDNPCObjects1.length = 0;
gdjs.PvCCode.GDNPCObjects2.length = 0;
gdjs.PvCCode.GDNPCObjects3.length = 0;
gdjs.PvCCode.GDNPCObjects4.length = 0;
gdjs.PvCCode.GDGoalObjects1.length = 0;
gdjs.PvCCode.GDGoalObjects2.length = 0;
gdjs.PvCCode.GDGoalObjects3.length = 0;
gdjs.PvCCode.GDGoalObjects4.length = 0;
gdjs.PvCCode.GDPlayerScoreObjects1.length = 0;
gdjs.PvCCode.GDPlayerScoreObjects2.length = 0;
gdjs.PvCCode.GDPlayerScoreObjects3.length = 0;
gdjs.PvCCode.GDPlayerScoreObjects4.length = 0;
gdjs.PvCCode.GDNpcScoreObjects1.length = 0;
gdjs.PvCCode.GDNpcScoreObjects2.length = 0;
gdjs.PvCCode.GDNpcScoreObjects3.length = 0;
gdjs.PvCCode.GDNpcScoreObjects4.length = 0;
gdjs.PvCCode.GDTeamWonObjects1.length = 0;
gdjs.PvCCode.GDTeamWonObjects2.length = 0;
gdjs.PvCCode.GDTeamWonObjects3.length = 0;
gdjs.PvCCode.GDTeamWonObjects4.length = 0;
gdjs.PvCCode.GDPlayerLightObjects1.length = 0;
gdjs.PvCCode.GDPlayerLightObjects2.length = 0;
gdjs.PvCCode.GDPlayerLightObjects3.length = 0;
gdjs.PvCCode.GDPlayerLightObjects4.length = 0;
gdjs.PvCCode.GDNpcLightObjects1.length = 0;
gdjs.PvCCode.GDNpcLightObjects2.length = 0;
gdjs.PvCCode.GDNpcLightObjects3.length = 0;
gdjs.PvCCode.GDNpcLightObjects4.length = 0;
gdjs.PvCCode.GDTimerObjects1.length = 0;
gdjs.PvCCode.GDTimerObjects2.length = 0;
gdjs.PvCCode.GDTimerObjects3.length = 0;
gdjs.PvCCode.GDTimerObjects4.length = 0;

gdjs.PvCCode.eventsList26(runtimeScene);

return;

}

gdjs['PvCCode'] = gdjs.PvCCode;
