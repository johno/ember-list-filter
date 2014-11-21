import DS from 'ember-data';
import faker from 'faker';

var Foo = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string')
});

var fixtures = [];

for(var i = 0; i < 1000; i++) {
  fixtures.push({
    id: i,
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    email: 'example' + i +'@example.com'
  });
}

Foo.reopenClass({
  FIXTURES: fixtures
});

export default Foo;
