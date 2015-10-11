import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  questionAuthor: DS.attr(),
  description: DS.attr(),
  answerSorting: ['votes:desc'],
  sortedAnswers: Ember.computed.sort('answers', 'answerSorting'),
  answers: DS.hasMany('answer', { async: true })
});
