/*
 * var text_name = block.getFieldValue('NAME');
 * var number_name = block.getFieldValue('NAME');
 * var angle_name = block.getFieldValue('NAME');
 * var dropdown_name = block.getFieldValue('NAME');
 * var checkbox_name = block.getFieldValue('NAME') == 'TRUE';
 * var colour_name = block.getFieldValue('NAME');
 * var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
 * var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
 * var statement_name = Blockly.JavaScript.statementToCode(block, 'statement');
 *
 * For statement: return code
 * For output: return [code, Blockly.JavaScript.ORDER_ATOMIC];
 */


'use strict';

goog.provide('Blockly.JavaScript.sensorkit');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['sensorkit_get_value'] = function (block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    if (pin.startsWith('Pin')) {
        var getValue = '.value'
    }
    else if (pin.startsWith('ADC')) {
        var getValue = '.read'
    }

    var code = '';
    code += pin + getValue + '()';
    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['sensorkit_led_set_value'] = function (block) { //digital pin number
    var pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);
    var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += pin + '.value(' + value + ')\n';
    //code += GPio17.value(1)
    return code;
};

Blockly.JavaScript['sensorkit_pin_switch'] = function (block) { //digital pin number
    var pin_switch = block.getFieldValue('pin_switch');

    var code = '';
    code += pin_switch;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};



Blockly.JavaScript['sensorkit_pin_colour'] = function (block) { //digital pin number
    var colour = block.getFieldValue('colour');

    var code = '';
    code += colour;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Blockly.JavaScript['sensorkit_pin_dual_color_led'] = function(block) { //digital pin number
//     var dual_color = block.getFieldValue('dounle_led');

//     var code = '';
//     code += dual_color;
//     return [code, Blockly.JavaScript.ORDER_ATOMIC];
// };

Blockly.JavaScript['sensorkit_active_buzzer_set_value'] = function (block) { //digital pin number
    var SIG = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);
    var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += SIG + '.value(' + value + ')\n';
    return code;
};

Blockly.JavaScript['sensorkit_passive_buzzer_set_value'] = function (block) { //digital pin number
    var SIG = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);
    var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += SIG + '.value(' + value + ')\n';
    return code;
};


Blockly.JavaScript['sensorkit_rgb_set_value'] = function (block) { //digital pin number
    var pin_r = Blockly.JavaScript.valueToCode(block, 'R', Blockly.JavaScript.ORDER_ATOMIC);
    var pin_g = Blockly.JavaScript.valueToCode(block, 'G', Blockly.JavaScript.ORDER_ATOMIC);
    var pin_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
    var color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
    color = color.replace('#', '').replace("'", '').replace("'", '');
    var r = parseInt('0x' + color.slice(0, 2));
    var g = parseInt('0x' + color.slice(2, 4));
    var b = parseInt('0x' + color.slice(4, 6));

    var code = '';
    code += pin_r + '.pulse_width(' + r + ')\n';
    code += pin_g + '.pulse_width(' + g + ')\n';
    code += pin_b + '.pulse_width(' + b + ')\n';
    return code;
};

Blockly.JavaScript['sensorkit_autoflash_set_value'] = function (block) { //digital pin number
    var R = Blockly.JavaScript.valueToCode(block, 'R', Blockly.JavaScript.ORDER_ATOMIC);
    var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += R + '.value(' + value + ')\n';
    return code;
};

Blockly.JavaScript['sensorkit_relay_set_value'] = function (block) { //digital pin number
    var SIG = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);
    var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += SIG + '.value(' + value + ')\n';
    return code;
};

Blockly.JavaScript['sensorkit_laser_set_value'] = function (block) { //digital pin number
    var SIG = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);
    var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);

    if (value == "0") {
        value = '1';
    } else {
        value = '0';
    }
    var code = '';
    code += SIG + '.value(' + value + ')\n';
    return code;
};

Blockly.JavaScript['sensorkit_dual_color_led_set_value'] = function (block) { //digital pin number
    var pin_r = Blockly.JavaScript.valueToCode(block, 'R', Blockly.JavaScript.ORDER_ATOMIC);
    var pin_g = Blockly.JavaScript.valueToCode(block, 'G', Blockly.JavaScript.ORDER_ATOMIC);
    var color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
    var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);

    Blockly.JavaScript.definitions_['import_modules_DualColorLED'] = 'from modules import DualColorLED';

    var code = '';
    code += 'DualColorLED(' + pin_r + ', ' + pin_g + ').' + color + 'value(' + value + ')\n'


    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensorkit_button_get_value'] = Blockly.JavaScript['sensorkit_get_value']

Blockly.JavaScript['sensorkit_potentiometer_get_value'] = Blockly.JavaScript['sensorkit_get_value']

Blockly.JavaScript['sensorkit_sound_get_value'] = Blockly.JavaScript['sensorkit_get_value']

Blockly.JavaScript['sensorkit_tiltswitch_get_value'] = Blockly.JavaScript['sensorkit_get_value']

Blockly.JavaScript['sensorkit_reedswitch_get_value'] = Blockly.JavaScript['sensorkit_get_value']

Blockly.JavaScript['sensorkit_photointerrupter_get_value'] = Blockly.JavaScript['sensorkit_get_value']

Blockly.JavaScript['sensorkit_raindetection_get_value'] = Blockly.JavaScript['sensorkit_get_value']

Blockly.JavaScript['sensorkit_temperature_get_value'] = Blockly.JavaScript['sensorkit_get_value']

Blockly.JavaScript['sensorkit_photoresistor_get_value'] = Blockly.JavaScript['sensorkit_get_value']

Blockly.JavaScript['sensorkit_irobstacle_get_value'] = Blockly.JavaScript['sensorkit_get_value']

Blockly.JavaScript['sensorkit_flame_get_value'] = function (block) {
    var SIGSIG = Blockly.JavaScript.valueToCode(block, 'SIGSIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    var code = SIGSIG + '.value()';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensorkit_touchswitch_get_value'] = function (block) {
    var SIG = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    var code = SIG + '.value()';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensorkit_ds18b20_get_value'] = function (block) {
    var SIG = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    var code = SIG + '.value()';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensorkit_rotary_encoder_get_value'] = function (block) {
    var SIG = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    var code = SIG + '.value()';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensorkit_tracking_get_value'] = function (block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    var code = pin + '.value()';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensorkit_ultrasonic_get_value'] = function (block) {
    var pin_trig = Blockly.JavaScript.valueToCode(block, 'Trig', Blockly.JavaScript.ORDER_ATOMIC);
    var pin_echo = Blockly.JavaScript.valueToCode(block, 'Echo', Blockly.JavaScript.ORDER_ATOMIC);

    Blockly.JavaScript.definitions_['import_modules_ultrasonicranging'] = 'from modules import Ultrasonicranging';
    var code = '';
    var code = 'Ultrasonicranging(' + pin_trig + ',' + pin_echo + ').value()\n'
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensorkit_flame_get_value'] = function (block) {
    var DO = Blockly.JavaScript.valueToCode(block, 'DO', Blockly.JavaScript.ORDER_ATOMIC);
    var AO = Blockly.JavaScript.valueToCode(block, 'AO', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    var code = 'FlameSensor(' + DO + ',' + AO + ').DO.value()\n'
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensorkit_gassensor_get_value'] = function (block) {
    var DO = Blockly.JavaScript.valueToCode(block, 'DO', Blockly.JavaScript.ORDER_ATOMIC);
    var AO = Blockly.JavaScript.valueToCode(block, 'AO', Blockly.JavaScript.ORDER_ATOMIC);

    Blockly.JavaScript.definitions_['import_modules_gassensor'] = 'from modules import Gassensor';

    var code = '';
    var code = 'Gassensor(' + DO + ',' + AO + ').DO.value()\n'
    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['sensorkit_analoghallswitch_get_value'] = Blockly.JavaScript['adGetValue'];

Blockly.JavaScript['sensorkit_hallswitch_get_value'] = function (block) {
    var SIG = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    Blockly.JavaScript.definitions_['import_modules_hallswitch'] = 'from modules import HallSwitch';
    var code = '';

    code += SIG + '.value()';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensorkit_analogtemperature_get_value'] = function (block) {
    var DO = Blockly.JavaScript.valueToCode(block, 'DO', Blockly.JavaScript.ORDER_ATOMIC);
    var AO = Blockly.JavaScript.valueToCode(block, 'AO', Blockly.JavaScript.ORDER_ATOMIC);

    Blockly.JavaScript.definitions_['import_modules_analogtemperature'] = 'from modules import AnalogTemperature';

    var code = '';
    var code = 'AnalogTemperature(' + DO + ',' + AO + ').DO.value()\n'
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensorkit_thermistor_get_value'] = function (block) {
    var SIG = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    Blockly.JavaScript.definitions_['import_modules_thermistor'] = 'from modules importh Termistor';
    var code = '';

    code += SIG + '.value()';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensorkit_joystick_get_value'] = function (block) {
    var X = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
    var Y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
    var BT = Blockly.JavaScript.valueToCode(block, 'BT', Blockly.JavaScript.ORDER_ATOMIC);

    Blockly.JavaScript.definitions_['import_modules_joystick'] = 'from modules import Joystick';

    var code = '';
    var code = 'Joystick(' + X + ',' + Y + ',' + BT + ').direction()\n'
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensorkit_dht11_get_value'] = function (block) {
    var SIG = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    Blockly.JavaScript.definitions_['import_modules_dht11'] = 'from modules importh DHT11';

    var code = '';
    var code = '"humidity: %s %%,  Temperature: %s C°" % DHT11(' + SIG + ').read()\n'
    return [code, Blockly.JavaScript.ORDER_NONE];
};