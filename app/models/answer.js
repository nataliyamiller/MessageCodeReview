import DS from 'ember-data';

export default DS.Model.extend({
  answerContent: DS.attr(),
  answerAuthor: DS.attr(),
  date_added: DS.attr(),
  votes: 0,
  question: DS.belongsTo('question', { async: true })
});
