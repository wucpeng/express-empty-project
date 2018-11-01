/**
 * Created by wucpeng on 17/09/16.
 * @module hzt/tool/schedule
 */

'use strict';
const _ = require('underscore');
const schedule = require('node-schedule');
const ut = require('./logUt.js').getLogger();

exports.doSomethingInMasterProcess = ()=> {
    //ut.debug('doSomethingInMasterProcess');
    master5MinuteProcess();
    master5SecondProcess();
};


exports.doSomethingInWorkerProcess = ()=> {
    //ut.debug('doSomethingInWorkerProcess');
};

let master5MinuteProcess = ()=> {
    let rule = new schedule.RecurrenceRule();
    rule.minute = [1,6,11,16,21,26,31,36,41,46,51,56];
    let job = schedule.scheduleJob(rule, ()=> {
        ut.debug('master5MinuteProcess');
    });
    return job;
};

let master5SecondProcess = ()=> {
    let rule = new schedule.RecurrenceRule();
    rule.second = [1,6,11,16,21,26,31,36,41,46,51,56];
    let job = schedule.scheduleJob(rule, ()=> {
        ut.debug('master5SecondProcess');
    });
    return job;
};
