# next-fsm
> A  finite state machine for next.

## installation
```bash
npm install -S afeiship/next-fsm --registry=https://registry.npm.taobao.org
```

## apis
| api          | params | description            |
| ------------ | ------ | ---------------------- |
| state        | -      | initial state          |
| transitions  | -      | states list            |
| onTransition | -      | When transition change |

## usage
```js
import NxFsm from 'next-fsm';

const fsm = new nx.Fsm({
  state: false,
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
```

## resources
- https://github.com/afeiship
