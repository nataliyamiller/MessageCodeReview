import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    updateQuestion(question) {
      var params = {
        content: this.get('content'),
        questionAuthor: this.get('questionAuthor'),
        description: this.get('description'),
      };
      this.set('content', ''),
      this.set('questionAuthor', ''),
      this.set('description', ''),
      this.set('updateQuestionForm', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
