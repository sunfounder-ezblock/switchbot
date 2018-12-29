/*
 * var text_name = block.getFieldValue('NAME');
 * var number_name = block.getFieldValue('NAME');
 * var angle_name = block.getFieldValue('NAME');
 * var dropdown_name = block.getFieldValue('NAME');
 * var checkbox_name = block.getFieldValue('NAME') == 'TRUE';
 * var colour_name = block.getFieldValue('NAME');
 * var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
 * var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
 * var statement_name = Blockly.Python.statementToCode(block, 'statement');
 *
 * For statement: return code
 * For output: return [code, Blockly.Python.ORDER_ATOMIC];
 */

'use strict';

goog.provide('Blockly.Python.switchbot');

goog.require('Blockly.Python');


Blockly.Python['switchbot_s1_get_value'] = function(block) {
    var mac = Blockly.Python.valueToCode(block, 'mac', Blockly.Python.ORDER_ATOMIC);
    var value = block.getFieldValue('value');

    Blockly.Python.definitions_['import_modules_switchbot'] = 'from switchbot import SwitchBot';

    var code = '';
    code += 'SwitchBot(' + mac + ').write(' + value + ')\n';
    return code;
};