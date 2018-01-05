//
//  CalendarManager.m
//  emp_man
//
//  Created by Himel Nag Rana on 1/3/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "CalendarManager.h"
#import <React/RCTLog.h>

@implementation CalendarManager

RCT_EXPORT_MODULE(EmpManCalendarManager);   // for naming the module as CalendarManager just use `RCT_EXPORT_MODULE();`

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
