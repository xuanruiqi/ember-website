import Route from '@ember/routing/route';
import {htmlSafe} from '@ember/string';

function formatBibtexBlock(str) {
    return htmlSafe('<pre>\n' + str + '\n</pre>');
}

let uglyBibtex = 
{
SHT2018:
`
@misc{QiSeniorThesis2018,
  author = {Qi, Xuanrui (Ray)},
  title = {Memory Tracing for Object-Oriented and Functional Programming},
  year = {2018},
  note = {Senior honors thesis, Tufts University},
}
`
}

export default Route.extend({
    model() {
        return [
            {
                abbrev: "Senior Honors Thesis 2018 (in progress)",
                citation: "Xuanrui (Ray) Qi. 2018. Garbage Collection Tracing for Object-Oriented and Functional \
                Programming. Senior Honors Thesis, Tufts University.",
                bibtex: formatBibtexBlock(uglyBibtex["SHT2018"]),
                notes: "Committee: Sam Guyer (chair), Kathleen Fisher"
            }
        ];
    }
});
