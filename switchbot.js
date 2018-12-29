'use strict';

var SwitchBot = {
    'name': 'SwitchBot',
    'id': 'switchbot',
    'modules': {
        "switchbot-s1": {
            'id': 0,
            'name': 'Switchbot S1',
            'blocks': ['<block type="switchbot_s1_get_value"><value name="port"></value></block >'],
            'img': 'distance_sensor.png',
            'pins': null
        },
    }
};