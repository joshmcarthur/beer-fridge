import Ember from 'ember';

export default Ember.Component.extend({
  text: "",
  truncateAt: 150,
  displayAll: false,
  truncatedText: Ember.computed("text", function() {
    return this.get("text").substr(0, this.get("truncateAt"));
  }),
  actions: {
    showOrHide() {
      this.toggleProperty("displayAll");
    }
  }
});
