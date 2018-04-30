import Route from '@ember/routing/route';
import {htmlSafe} from '@ember/string';

function formatBibtexBlock(str) {
    return htmlSafe('<pre>\n' + str + '\n</pre>');
}

function formatPBlock(str) {
    return htmlSafe('<p>' + str + '</p>');
}

let uglyBibtex = 
{
SHT2018:
`
@misc{QiSeniorThesis2018,
  author = {Qi, Xuanrui (Ray)},
  title = {Elephant Tracks II: Practical, Extensible Memory Tracing},
  year = {2018},
  note = {Senior honors thesis, Tufts University},
}
`
};

let abstracts = 
{
    SHT2018:
    `
    This thesis presents a new tool for memory tracing, Elephant Tracks II.
    Elephant Tracks II (or ET2) is a portable, modular and extensible memory
    tracing tool designed for practical memory tracing of garbage-collected
    programs, producing precise traces of the program’s heap operations, including
    allocation, pointer mutation, procedure entry & exit, and object deaths,
    using the Merlin algorithm (Hertz et al., 2006) to compute death times.
    Unlike all previous tools, however, ET2 is capable to support multiple programming
    languages by decoupling the tracing phase and the death time
    computation phase. We describe the high-level design and low-level implementation
    strategies employed to support this extensibility and portability.
    In this thesis, we also present new algorithms and implementation techniques
    developed as part of the Elephant Tracks II project, as well as an overview
    of the applications of memory tracing.
    `
}

export default Route.extend({
    model() {
        return [{
                abbrev: "Senior Honors Thesis 2018",
                citation: "Xuanrui (Ray) Qi. 2018. Elephant Tracks II: Practical, Extensible Memory Tracing. \
                Senior Honors Thesis, Tufts University.",
                abstract: formatPBlock(abstracts["SHT2018"]),
                rawBibtex: uglyBibtex["SHT2018"],
                bibtex: formatBibtexBlock(uglyBibtex["SHT2018"]),
                pdf: "senior_thesis.pdf",
                notes: "Committee: Sam Guyer (chair), Kathleen Fisher",
            }]
        }
});
