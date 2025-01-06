import { a1, a2 } from 'a';
import { b1, b2 } from 'b';

import { c1, c2 } from './c';

a1;
a2;
b1;
b2;
c1;
c2;

export const a = 'single quote';
export const b = `template literal ${a}`;

// import/no-default-export off
export default function () {
  return 'sample';
}

while (a) {
  // tab width 2
}

export const d = {
  bar: 'baz',
};

export const col = '01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567';
