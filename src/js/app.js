// Application:

var App = Em.Application.create({

  LOG_TRANSITIONS: true

});

// Router:

App.Router.map(function() {
  this.route('koblenz');
  this.route('neuwied');
});


// Controllers:

App.KoblenzController = Em.Controller.extend({

  date: function() {
    return moment().format('MMMM Do, YYYY');
  }.property()

});

App.NeuwiedController = Em.Controller.extend({

  init: function() {
    this.tick();
  },

  tick: function() {
		var self = this;

		this.set('clock', moment.utc());

		setTimeout(function() {
			self.tick();
		}, 1000);
	},

  time: function() {
    var clock = this.get('clock');

    if (!Em.isNone(clock)) {
      return clock.format('HH:mm:ss');
    }
  }.property('clock')

});

// Views:

App.ApplicationView = Em.View.extend({

  didInsertElement: function() {
    this.$().css({ opacity: 0.0, top: '-20px' }).velocity({ opacity: 1.0, top: '0px' }, { duration: 500 });
  }

});

App.KoblenzView = Em.View.extend({

  classNames: ['city'],

  didInsertElement: function() {
    this.$().css({ opacity: 0.0, left: '-20px' }).velocity({ opacity: 1.0, left: '0px' }, { duration: 500 });
  }

});

App.NeuwiedView = Em.View.extend({

  classNames: ['city'],

  didInsertElement: function() {
    this.$().css({ opacity: 0.0, left: '20px' }).velocity({ opacity: 1.0, left: '0px' }, { duration: 500 });
  }

});
