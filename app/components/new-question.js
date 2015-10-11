import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var params = {
        content: this.get('content'),
        questionAuthor: this.get('questionAuthor'),
        description: this.get('description'),
      };
      this.set('content', ''),
      this.set('questionAuthor', ''),
      this.set('description', ''),
      this.set('addNewQuestion', false),
      this.sendAction('saveQuestion', params);
    }
  }
});
