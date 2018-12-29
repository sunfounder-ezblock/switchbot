/*
  Input:
    .appendDummyInput
    .appendStatementInput
    .appendValueInput
 
  Field:
    .appendField(Blockly.Msg.MODULE_BLOCKNAME_TITLE1)
    .appendField(new Blockly.FieldTextInput("DEFAULT"), "NAME")
    .appendField(new Blockly.FieldNumber(DEFAULT, MIN, MAX), "NAME")
    .appendField(new Blockly.FieldAngle(90), "NAME")
    .appendField(new Blockly.FieldDropdown(Blockly.Constants.MODULE.XXX), "NAME")
    .appendField(new Blockly.FieldCheckbox("TRUE"), "NAME");
    .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
    .appendField(new Blockly.FieldVariable("item"), "NAME");
    .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"));
 
  Type:
    .setCheck(null)
    .setCheck("Boolean")
    .setCheck("Number")
    .setCheck("String")
    .setCheck("Array")
    .setCheck("CUSTOM")
    .setCheck(["Boolean", "Number"])
 
  this.setInputsInline(false);
  this.setOutput(true, TYPE);
  this.setPreviousStatement(true, TYPE);
  this.setNextStatement(true, TYPE);
  this.setColour(Blockly.Constants.MODULE.RGB);
  this.setTooltip(Blockly.Msg.MODULE_BLOCKNAME_TOOLTIP);
  this.setHelpUrl('');
 */

goog.provide('Blockly.Blocks.switchbot'); // Deprecated
goog.provide('Blockly.Constants.SwitchBot');

goog.require('Blockly.Blocks');
goog.require('Blockly.Msg');

Blockly.Constants.SwitchBot.RGB = '#58ce6a';
Blockly.Blocks.switchbot.RGB = Blockly.Constants.SwitchBot.RGB;

Blockly.Constants.SwitchBot.value = [
    ["ON", "'on'"],
    ["OFF", "'off'"],
];

Blockly.Blocks['switchbot_s1_get_value'] = {
    init: function init() {
        this.appendValueInput("mac")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.SWITCHBOT_S1_TITLE1);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.SWITCHBOT_S1_TITLE2)
            .appendField(new Blockly.FieldDropdown(Blockly.Constants.SwitchBot.value), "value");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Constants.SwitchBot.RGB);
        this.setTooltip(Blockly.Msg.SWITCHBOT_S1_TOOLTIP);
        this.setHelpUrl('');
    }
};