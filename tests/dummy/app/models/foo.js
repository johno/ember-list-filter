import DS from 'ember-data';

var Foo = DS.Model.extend({
  aNumber: DS.attr('number'),
  aString: DS.attr('string'),
  anotherString: DS.attr('string')
});

Foo.reopenClass({
  FIXTURES: [{
    id: 1,
    aNumber: 123,
    aString: 'blah',
    anotherString: 'another blah'
  }, {
    id: 2,
    aNumber: 222,
    aString: 'blah',
    anotherString: '222222 another blah'
  }]
});

export default Foo;
