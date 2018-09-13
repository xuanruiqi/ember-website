import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    papers : service('paper-list'),

    model() {
        return this.get('papers').papers;
    }
});
