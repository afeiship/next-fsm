(function() {
  var nx = require('next-js-core2');
  var NxFsm = require('../src/next-fsm');

  describe('NxFsm.methods', function() {
    test('init', function() {
      var times = 0;
      var fsm = new nx.Fsm({
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
      expect(fsm.state).toBe(true);
      fsm.off();
      expect(fsm.state).toBe(false);
      expect(times).toBe(2);
    });
  });
})();
