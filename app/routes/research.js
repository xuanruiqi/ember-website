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
  title = {Elephant Tracks II: Practical and Extensible Memory Tracing},
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
                citation: "Xuanrui (Ray) Qi. 2018. Elephant Tracks II: Practical and Extensible Memory Tracing. \
                Senior Honors Thesis, Tufts University.",
                bibtex: formatBibtexBlock(uglyBibtex["SHT2018"]),
                pdf: "senior_thesis.pdf",
                notes: "Committee: Sam Guyer (chair), Kathleen Fisher"
            }
        ];
    }
});
