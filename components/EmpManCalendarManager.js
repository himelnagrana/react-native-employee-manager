/**
 * This exposes the native EmpManCalendarManager module as a JS module. This has a
 * function 'addEvent' which takes the following parameters:
 *
 * 1. String name: A string for event name
 * 2. string location: A string for event location
 */

import { NativeModules } from "react-native";

module.exports = NativeModules.EmpManCalendarManager;
