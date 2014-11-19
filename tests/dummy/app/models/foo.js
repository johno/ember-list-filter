import DS from 'ember-data';

var Foo = DS.Model.extend({
  aNumber: DS.attr('number'),
  aString: DS.attr('string'),
  anotherString: DS.attr('string')
});

var fixtures = [];

for(var i = 0; i < 1000; i++) {
  fixtures.push({
    id: i,
    aNumber: i*3
  });
}

console.log(fixtures);

Foo.reopenClass({
  FIXTURES: fixtures
});

export default Foo;
