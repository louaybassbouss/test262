// Copyright (C) 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-temporal.plaintime.prototype.tozoneddatetime
description: If a calendar's fields() method returns a field named 'constructor', PrepareTemporalFields should throw a RangeError.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const calendar = TemporalHelpers.calendarWithExtraFields(['constructor']);
const arg = {year: 2023, month: 5, monthCode: 'M05', day: 1, calendar: calendar};
const instance = new Temporal.PlainTime(12, 34, 56, 987, 654, 321);

assert.throws(RangeError, () => instance.toZonedDateTime({ plainDate: arg, timeZone: "UTC" }));
