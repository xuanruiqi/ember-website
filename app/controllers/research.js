import Controller from '@ember/controller';

export default Controller.extend({
    showingPopup: false,
    actions: {
        showBibtex() {
            this.toggleProperty('showingBibTeX');
        },
        showAbstract() {
            this.toggleProperty('showingAbstract');
        }
    }
});
