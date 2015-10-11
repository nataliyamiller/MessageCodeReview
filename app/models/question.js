import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  questionAuthor: DS.attr(),
  description: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
