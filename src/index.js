(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  var DEFAULT_OPTIONS = { state: null, transitions: [], onTransition: nx.noop };

  var NxFsm = nx.declare('nx.Fsm', {
    methods: {
      init: function (inOptions) {
        this.options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
        this.state = this.options.init;
        this.transitions = this.options.transitions;
        this.__generateStateExecutor();
      },
      transition: function (inName) {
        var current = this.transitions.find(function (item) {
          return item.name === inName;
        });
        if (this.state === current.from || current.from === '*') {
          var value = current.to;
          this.state = value;
          this.options.onTransition({
            target: {
              name: inName,
              value: value
            }
          });
        }
      },
      __generateStateExecutor: function () {
        var self = this;
        var transitions = this.transitions;
        var names = transitions.map(function (item) {
          return item.name;
        });
        names.forEach(function (name) {
          self[name] = function () {
            self.transition(name);
          };
        });
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxFsm;
  }
})();
