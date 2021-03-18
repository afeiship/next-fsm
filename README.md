# next-fsm
> A finite state machine for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-fsm
```

## apis
| api          | params | description            |
| ------------ | ------ | ---------------------- |
| init         | -      | initial state          |
| transitions  | -      | states list            |
| onTransition | -      | When transition change |
| transition   | -      | Change state directly  |

## usage
```js
import NxFsm from 'next-fsm';

const fsm = new nx.Fsm({
  init: false,
  transitions: [
    { name: 'on', from: false, to: true },
    { name: 'off', from: true, to: false }
  ],
  onTransition: function(inEvent) {
    const { value } = inEvent.target;
    times++;
    console.log('current state:', value);
  }
});

fsm.on();
fsm.off();

fsm.transition('on');
fsm.transition('off');
```

## resources
- https://github.com/afeiship/fsm-notes
- https://github.com/jakesgordon/javascript-state-machine

## license
Code released under [the MIT license](https://github.com/afeiship/next-fsm/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-fsm
[version-url]: https://npmjs.org/package/@jswork/next-fsm

[license-image]: https://img.shields.io/npm/l/@jswork/next-fsm
[license-url]: https://github.com/afeiship/next-fsm/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-fsm
[size-url]: https://github.com/afeiship/next-fsm/blob/master/dist/next-fsm.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-fsm
[download-url]: https://www.npmjs.com/package/@jswork/next-fsm
