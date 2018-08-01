import Controller from '@ember/controller';
import { computed } from '@ember/object';


export default Controller.extend({
    showingPopup: false,
    actions: {
        showBibtex() {
            this.toggleProperty('showingBibTeX');
        },
        showAbstract() {
            this.toggleProperty('showingAbstract');
        }
    },

    reverse: computed('model.[]', function(){
        return this.get('model').toArray().reverse();
    })
});
