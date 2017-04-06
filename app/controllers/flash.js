import Ember from 'ember';

export default Ember.Controller.extend({
  flashMessages: Ember.inject.service(),

  actions: {
    addFlash() {
      this.get('flashMessages').success('Flash!')
    }
  }
});
