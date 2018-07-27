import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    papers : service('paper-list'),

    paper_list () {
        return this.get('papers').papers;
    } ,

    model(params) {
        return this.get('papers').papers[params.paper_id];    
    }
});
