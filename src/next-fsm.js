(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var DEFAULT_OPTIONS = { state: null, transitions: [], onTransition: nx.noop };

  var NxFsm = nx.declare('nx.Fsm', {
    methods: {
      init: function(inOptions) {
        this.options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
        this.state = this.options.state;
        this.transitions = this.options.transitions;
      },
      transition: function(inName) {
        var current = this.transitions.find(function(item) {
          return item.name === inName;
        });
        if (this.state === current.from) {
          var value = current.to;
          this.state = value;
          this.options.onTransition({
            target: {
              value: value
            }
          });
        }
      },
      __generateStateExecutor: function() {
        var self = this;
        var transitions = this.transitions;
        var names = transitions.map(function(item) {
          return item.name;
        });
        names.forEach(function(name) {
          self[name] = function() {
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
