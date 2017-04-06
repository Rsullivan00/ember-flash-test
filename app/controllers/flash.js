import Ember from 'ember';

export default Ember.Controller.extend({
  flashMessages: Ember.inject.service(),
  store: Ember.inject.service(),

  actions: {
    addFlash() {
      this
        .get('store')
        .createRecord('thing')
        .save()
        .then(() => {
          this.get('flashMessages').success('Flash!')
        })
    }
  }
});
