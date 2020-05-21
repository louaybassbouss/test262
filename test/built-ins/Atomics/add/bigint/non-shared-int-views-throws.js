// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-atomics.add
description: >
  Atomics.add throws when operating on non-sharable integer TypedArrays
includes: [testBigIntTypedArray.js]
features: [ArrayBuffer, Atomics, BigInt, TypedArray]
---*/
const buffer = new ArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 4);

testWithNonShareableBigIntTypedArrayConstructors(function(TA) {
  const view = new TA(buffer);

  assert.throws(TypeError, function() {
    Atomics.add(view, 0, 1n);
  }, `Atomics.add(new ${TA.name}(buffer), 0, 1n) throws TypeError`);
});