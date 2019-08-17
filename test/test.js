(function() {
  var nx = require('next-js-core2');
  var NxFsm = require('../src/next-fsm');

  describe('NxFsm.methods', function() {
    test('component: switch', function() {
      var times = 0;
      var fsm = new NxFsm({
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
      expect(fsm.state).toBe(true);
      fsm.off();
      expect(fsm.state).toBe(false);
      expect(times).toBe(2);
    });

    test('component: wizard', () => {
      var fsm = new NxFsm({
        init: 0,
        transitions: [
          { name: 'step1', from: 0, to: 1 },
          { name: 'step2', from: 1, to: 2 },
          { name: 'step3', from: 2, to: 3 },
          { name: 'reset', from: '*', to: 0 }
        ],
        onTransition: function(inEvent) {
          const { value } = inEvent.target;
          console.log('current state:', value);
        }
      });

      fsm.step1();
      expect(fsm.state).toBe(1);
      fsm.step2();
      expect(fsm.state).toBe(2);
      fsm.step3();
      expect(fsm.state).toBe(3);
      fsm.reset();
      expect(fsm.state).toBe(0);
    });
  });
})();
