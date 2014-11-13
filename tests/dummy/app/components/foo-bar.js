import Ember from 'ember';

export default Ember.Component.extend({
  object: null,

  aString: function() {
    console.log(this.get('object'));
    return this.get('object').get('aString');
  }.property('object')
});
