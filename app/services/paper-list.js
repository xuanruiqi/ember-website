import Service from '@ember/service';

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
`@misc{QiSeniorThesis2018,
  author = {Qi, Xuanrui (Ray)},
  title = {Elephant Tracks II: Practical, Extensible Memory Tracing},
  year = {2018},
  note = {Senior honors thesis, Tufts University},
}
`,
JSSST2018:
`@inproceedings{JSSST2018,
  author = {Affeldt, Reynald and Garrigue, Jacques and Qi, Xuanrui and Tanaka, Kazunari},
  title = {Proving Tree Algorithms for Succinct Data Structures},
  booktitle = {Proceedings of the 35th Conference of the Japan Society for Software Science and 
  Technology},
  series = {JSSST 2018},
  year = {2018},
  location = {Osaka, Japan},
  publisher = {JSSST},
  address = {Tokyo, Japan}
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
    `,
    JSSST2018:
    `
    Succinct data structures give space efficient representations of large
    amounts of data without sacrificing performance. In order to do that
    they rely on cleverly designed data representations and algorithms.
    We present here the formalization in Coq/MathComp of two different
    succinct tree algorithms. One is the Level-Order Unary Degree Sequence
    (aka LOUDS), which encodes the structure of a tree in breadth first
    order as a sequence of bits, where access operations can be defined in
    terms of Rank and Select, which work in constant time for static bit
    sequences. The other represents dynamic bit sequences as binary
    red-black trees, where Rank and Select present a low logarithmic
    overhead compared to their static versions, and with efficient Insert
    and Delete. The two can be stacked to provide a dynamic representation
    of dictionaries for instance. While both representations are
    well-known, we believe this to be their first formalization and
    a needed step towards provably-safe implementations of big data.
    `
};

export default Service.extend({
    papers: undefined,
    
    init() {
        this._super(...arguments);
        this.set('papers', [
                {
                    id: '0',
                    abbrev: "Senior Honors Thesis 2018",
                    title: "Elephant Tracks II: Practical, Extensible Memory Tracing",
                    authors: "Xuanrui (Ray) Qi",
                    citation: htmlSafe("<b>Xuanrui (Ray) Qi</b>. 2018.  \
                    Senior Honors Thesis, Tufts University."),
                    citationFull: htmlSafe("<b>Xuanrui (Ray) Qi</b>. 2018.  \
                    Elephant Tracks II: Practical, Extensible Memory Tracing. Senior Honors Thesis, Tufts University."),
                    abstract: formatPBlock(abstracts["SHT2018"]),
                    rawBibtex: uglyBibtex["SHT2018"],
                    bibtex: formatBibtexBlock(uglyBibtex["SHT2018"]),
                    extras: [
                        {type: "PDF", url: "assets/papers/senior_thesis.pdf"},
                        {type: "Slides", url: "assets/papers/senior_thesis_slides.pdf"}],
                    notes: "Committee: Sam Guyer (chair), Kathleen Fisher",
                },
                {
                    id: '1',
                    abbrev: "JSSST 2018",
                    title: "Proving Tree Algorithms for Succint Data Structures",
                    altTitle: "簡潔データ構造における木構造アルゴリズムの形式証明について",
                    authors: htmlSafe("Reynald Affeldt, Jacques Garrigue, <b>Xuanrui Qi</b>, and Kazunari Tanaka"),
                    citation: htmlSafe("Reynald Affeldt, Jacques Garrigue, <b>Xuanrui Qi</b>, and Kazunari Tanaka. 2018. \
                    In <i>Proceedings of the 35th Conference \
                    of the Japan Society for Software Science and Technology (JSSST 2018)</i>. <i>Forthcoming</i>."),
                    citationFull: htmlSafe("Reynald Affeldt, Jacques Garrigue, <b>Xuanrui Qi</b>, and Kazunari Tanaka. 2018. \
                    Proving Tree Algorithms for Succint Data Structures. In <i>Proceedings of the 35th Conference \
                    of the Japan Society for Software Science and Technology (JSSST 2018)</i>. <i>Forthcoming</i>."),
                    abstract: formatPBlock(abstracts["JSSST2018"]),
                    rawBibtex: uglyBibtex["JSSST2018"],
                    bibtex: formatBibtexBlock(uglyBibtex["JSSST2018"]),
                    notes: htmlSafe("non-refereed conference proceedings")
                }
                
        ]);
    }
            
});
