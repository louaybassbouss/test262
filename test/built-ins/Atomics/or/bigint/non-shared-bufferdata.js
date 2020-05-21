// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-atomics.or
description: >
  Atomics.or will operate on TA when TA.buffer is not a SharedArrayBuffer
features: [ArrayBuffer, Atomics, BigInt, TypedArray]
---*/
const i64a = new BigInt64Array(new ArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 4));
assert.sameValue(Atomics.or(i64a, 0, 1n), 0n, 'Atomics.or(i64a, 0, 1n) returns 0n');
assert.sameValue(Atomics.load(i64a, 0), 1n, 'Atomics.load(i64a, 0) returns 1n');