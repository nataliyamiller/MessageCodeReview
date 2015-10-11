import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer(params) {
     this.sendAction('saveAnswer', params);
   },

   voteUpAnswer(answer) {
            this.sendAction('voteUpAnswer', answer);
        },
    voteDownAnswer(answer) {
            this.sendAction('voteDownAnswer', answer);
        },

   deleteAnswer(answer) {
       this.sendAction('deleteAnswer', answer);
   },

    deleteQuestion(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('deleteQuestion', question);
      }
    }
  }
});
