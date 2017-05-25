\documentclass{article}
\usepackage{titlesec}
\usepackage{mathpartir}
\usepackage{stmaryrd}
\usepackage{syntax}
\usepackage{amsmath}
\usepackage[linewidth=0.5pt]{mdframed}

\usepackage{listings}
\lstloadlanguages{Haskell}
\lstset{
    language=Haskell,
    basicstyle=\small\ttfamily,
    flexiblecolumns=false,
    basewidth={0.5em,0.45em},
    literate={+}{{$+$}}1 {/}{{$/$}}1 {*}{{$*$}}1 {=}{{$=$}}1
           {>}{{$>$}}1 {<}{{$<$}}1 {\\}{{$\lambda$}}1
           {\\\\}{{\char`\\\char`\\}}1
           {->}{{$\rightarrow$}}2 {>=}{{$\geq$}}2 {<-}{{$\leftarrow$}}2
           {<=}{{$\leq$}}2 {=>}{{$\Rightarrow$}}2 
           {\ .}{{$\circ$}}2 {\ .\ }{{$\circ$}}2
           {>>}{{>>}}2 {>>=}{{>>=}}2
           {|}{{$\mid$}}1               
}

\lstnewenvironment{code}{\lstset{language=Haskell,basicstyle=\small}}{}

\titleformat*{\section}{\large\bfseries}

\newcommand{\bracketed}[1]{
    \llbracket#1\rrbracket
}

\newcommand{\dangle}[1]{
    \langle#1\rangle
}

\begin{document}
\title{
\textbf{Report on the f-RGN Programming Language\footnote{This is a report 
completed for Comp 193: Directed Study at Tufts University.}}
}
\author{
\textbf{Xuanrui Qi}\\
Department of Computer Science\\
Tufts University\\
\texttt{xuanrui.qi@tufts.edu}\\~\\
\normalsize Supervisor: Dr. Mark A. Sheldon
}
\maketitle

\begin{abstract}
\texttt{f-RGN} is a programming language based on the calculus 
\textbf{F\textsuperscript{RGN}}, described in Fluet, 
Morrisett and Ahmed's paper ``Linear Regions Are All 
You Need'' \cite{Fluet:2006:LRY:2182132.2182134}. It allows for compile-time 
type inference and provides a small number of basic, 
literal types. This report provides the static and 
dynamic semantical rules and a brief overview of the 
language.
\end{abstract}

\section{Introduction}
\texttt{f-RGN} is a functional, statically typed programming language 
designed and presented by this author in this report, 
based on the work in the calculus \textbf{F\textsuperscript{RGN}} presented in 
Fluet, Morrisett and Ahmed's work\cite{Fluet:2006:LRY:2182132.2182134}. 
However, \textbf{F\textsuperscript{RGN}} is not efficiently and 
succintly implementable due to it having a large number of 
constructs that are purely theoretical, and the requirement for explicit
type signatures. Therefore, we have reduced the complexity of 
\textbf{F\textsuperscript{RGN}} by removing some monadic operations and 
limiting polymorphic qualifiers to be compatible with Hindley-Milner style 
type inference. Moreover, since 
\texttt{f-RGN} is meant to be practical, it adds some common 
concrete types to \textbf{F\textsuperscript{RGN}}.

\section{Goals}
In creating this project, we intend to explore the static techniques and 
guarantees for memory safety and the prevention of leaks. We surveyed a 
number of languages, including ATS, Rust, Cyclone, and the calculus 
\textbf{F\textsuperscript{RGN}}, as well as a number of conceptual 
tools, including linear types, separation logic, and region \& effect 
systems. We decided to base our language on 
\textbf{F\textsuperscript{RGN}} because of its simplicity and functional 
purity.  

\section{Motivation}
It is hard to write programs that are memory safe without leaking any 
memory. Traditionally, programming systems have used dynamic methods at 
runtime, such as reference counting or garbage collection, to enforce 
those guarantees; however, garbage collection algorithms can pose a severe 
challenge to performance. The use of regions, which could be 
reasoned about at compile-time, allows programmers to easily write programs
without memory access violations or memory leaks.
\par
In the FX-91 programming language, regions were used as a form of 
memory access guarantee, but it did not go as far as preventing 
memory leaks \cite{gifford1992report}. Tofte and Talpin presented a programming 
language implemented using a stack of regions \cite{Tofte:1994:ITC:174675.177855};
although it did not fully guarantee the lack of memory leaks, it is experimentally 
shown that the memory requirements are much reduced even without garbage collection 
\cite{Tofte:1994:ITC:174675.177855}.

\section{Example Programs}

The following function allocates an integer on a given stack and returns a pointer 
to the integer. It has the type $\mathtt{hnd} \ \varsigma \rightarrow \mathtt{int} \rightarrow 
\mathtt{ref} \ \varsigma \ \mathtt{int}$, where \texttt{s0} is the index of the 
newly created stack. Note that \texttt{h} could not change after \texttt{run-rgn}, as no 
stateful transformations could escape \texttt{run-rgn}; therefore, \texttt{run-rgn} cannot 
leak any memory as well:
\begin{verbatim}    
(lambda h (lambda x (run-rgn (new h 3))))
\end{verbatim}

It is also possible to access newer regions when we are in an older stack. We assume 
\texttt{h} is a handle to a stack:
\begin{verbatim}
(let-rgn h 
  (write 3 
    (run-rgn (new h 10))))
\end{verbatim}
In the code snippet above, we allocated an integer 10 "above" our current region in the same 
stack, wrote an integer 3 into the region, and destroys the region. This design of 
\texttt{let-rgn} guarantees the absence of memory leaks.

\section{Syntax}
The concrete syntax of \texttt{f-RGN} is defined as following, in Extended 
Backus-Naur form:

\setlength{\grammarindent}{8em} % increase separation between LHS/RHS 
\begin{grammar}
<program> ::= [ <expression> | <definition> ]

<expression> ::= <ident>
\alt <literal>
\alt \texttt{(if} <expression> <expression> <expression>\texttt{)}
\alt \texttt{(lambda} <ident> <expression>\texttt{)}
\alt \texttt{(}<expression> \{<expression>\}\texttt{)}
\alt \texttt{()}
\alt \texttt{(pair} <expression> <expression>\texttt{)}
\alt \texttt{(unpack (}<ident> <ident>\texttt{)} <expression> <expression>\texttt{)}

<literal> ::= <string> | <numeric> | \texttt{\#t} | \texttt{\#f}

<string> ::= \texttt{''}<character>\texttt{''}

<definition> ::= \texttt{(define} <ident> <expression>\texttt{)}
\alt \texttt{(defun} <ident> <ident> <expression>\texttt{)}

<ident> ::= <alpha>, \{ <alpha> | <numeric> | "-_?!" \}

<alpha> ::= \{ "a-z" "A-Z" \}

<numeric> ::= \{ "0-9" \}\\
\end{grammar}

Logically, all functions have only one parameter, as in the $\lambda$-calculus. 
However, syntactic sugar is provided for applying curried functions; 
\texttt{(f x y z)} is equivalent to \texttt{(((f x) y) z)}. Similarly, 
the only definition form involves defining a variable with a value; \texttt{defun} 
is provided as syntactic sugar for \texttt{define}. \texttt{(defun f x e)} is 
equivalent to \texttt{(define f (lambda x e))}.
\par
All definitions must appear at the top level and all 
variables are statically typed; that is, no evaluation of any given expression 
could introduce new variables or eliminate variables from any environment, nor could 
any evaluation alter the environments of types and/or kinds.
\par
Monadic region operations are not given special treatment in the concrete 
syntax; they are considered built-in 
functions of \texttt{f-RGN}. However, the identifiers \texttt{return}, \texttt{then}, 
\texttt{new}, \texttt{read}, \texttt{write}, \texttt{run-rgn}, \texttt{let-rgn}, 
and \texttt{get-hnd}
are considered reserved identifiers and should not be used as names.
\par
Stack indices are explicit in \texttt{f-RGN}. However, they are generated automatically 
during type inference, not by the programmer. The prototype type inferencer use the 
names ``s\#'' for stack indices, where \# is a natural number. Therefore, programmers 
should avoid these names when naming variables.
\par
Currently, \texttt{f-RGN} has no support for defining and/or expanding macros. The 
only way to add new expression forms and syntax sugar is by altering the implementation.

\section{The Region Monad}
There are 9 monadic region operations, \texttt{return}, \texttt{>>=}, 
\texttt{new}, \texttt{read}, \texttt{write}, \texttt{run-rgn}, \texttt{let-rgn}, 
\texttt{new-stack}, and \texttt{get-hnd}. They have the following types:

\begin{mdframed}
\mbox{\texttt{return} : $\forall \varsigma . \ \forall \alpha . \ \alpha \rightarrow 
\mathtt{rgn} \ \varsigma \ \alpha$}\\
\mbox{\texttt{>>=} (\texttt{then}) : $\forall \varsigma . \ \forall \alpha, \beta . \ 
\mathtt{rgn} \ \varsigma \ \alpha \rightarrow (\alpha \rightarrow 
\mathtt{rgn} \ \varsigma \ \beta) \rightarrow \mathtt{rgn} \ \varsigma \ \beta$}\\
\mbox{\texttt{new} : $\forall \varsigma . \ \forall \alpha . \ \mathtt{hnd} \ \varsigma 
\rightarrow \alpha \rightarrow \mathtt{rgn} \ \varsigma \ (\mathtt{ref} \ \varsigma \ 
\alpha)$}\\
\mbox{\texttt{read} : $\forall \varsigma . \ \forall \alpha . \ 
\mathtt{ref} \ \varsigma \ \alpha \rightarrow \mathtt{rgn} \ \varsigma \ \alpha$}\\
\mbox{\texttt{write} : $\forall \varsigma . \ \forall \alpha . \ 
\mathtt{ref} \ \varsigma \ \alpha \rightarrow \alpha \rightarrow 
\mathtt{rgn} \ \varsigma \ \mathtt{unit}$}\\
\mbox{\texttt{run-rgn} : $\forall \varsigma . \ \forall \alpha . \ 
\mathtt{rgn} \ \varsigma \ \alpha \rightarrow \alpha$}\\
\mbox{\texttt{let-rgn} : $\forall \varsigma_1, \varsigma_2 . \ \forall \alpha . \
\mathtt{hnd} \ \varsigma_2 \rightarrow \mathtt{rgn} \ \varsigma_2 \ \alpha \rightarrow
\mathtt{rgn} \ \varsigma_1 \ \alpha$}\\
\mbox{\texttt{new-stack} : $\forall \varsigma . \ \mathtt{hnd} \ \varsigma$}\\
\mbox{\texttt{get-hnd} : $\forall \varsigma . \ \forall \alpha . \ 
\mathtt{rgn} \ \varsigma \ \alpha \rightarrow \mathtt{hnd} \ \varsigma $}
\end{mdframed}
The \texttt{new-stack} and \texttt{get-hnd} operations are not defined in 
\cite{Fluet:2006:LRY:2182132.2182134}, and are our own additions to the language. 
\texttt{new-stack} allocates an empty stack of regions 
and returns a handle to it, while \texttt{get-hnd} takes a region computation and 
returns a handle to the region encapuslated in the computation.

\section{Typing Rules}
The inference rules for \texttt{f-RGN} follows that of 
a Hindley-Milner typed lambda calculus in general, with a few 
additions. Hereafter, we use $\Delta: \epsilon \rightarrow \kappa$ 
to represent an environment of kinds, where $\epsilon$ is either a 
valid type or a stack index, and $\kappa$ is a valid kind; we use 
$\Gamma: x \rightarrow \tau$ to represent an environment of types, 
where $x$ is a valid identifier in \texttt{f-RGN} and $\tau$ a 
valid type.\\

Note that \textit{all well-typed expressions have a type of the kind} * by design. This is 
the reason why \texttt{get-hnd} takes a \texttt{rgn} but never directly a stack - 
stack indices cannot be exposed at the expression level! If they do, type inference 
will be much harder and possibly impossible.

\begin{mdframed}
\mbox{$\kappa ::= \mathtt{STACK} \mid *$}\\
\mbox{$\mathrm{BaseType} ::= \mathtt{unit} \mid \mathtt{int} \mid \mathtt{bool} \mid \mathtt{string}$}
\end{mdframed}

\newpage

\noindent\fbox{$\Delta; \Gamma \vdash e : \tau$}

\begin{mathpar}
\inferrule[Var]
{\Gamma(x) = \tau}{\Delta; \Gamma \vdash x : \tau}\hspace{0.5in}

\inferrule[IfElse]
{\Delta; \Gamma \vdash e_c : \mathtt{bool}\\
 \Delta; \Gamma \vdash e_t : \tau\\
 \Delta; \Gamma \vdash e_f : \tau}
{\Delta; \Gamma \vdash \mathtt{(if \ }e_c \ e_t \ e_f \mathtt{)} :
 \tau}

\inferrule[Lambda]
{\Delta; \Gamma, x : \tau \vdash e : \tau'}
{\Delta, \Gamma \vdash \mathtt{(lambda \ }x \ e \mathtt{)} : 
 \tau \rightarrow \tau'}\hspace{0.5in}
 
\inferrule[App]
{\Delta; \Gamma \vdash e_{1} : \tau \rightarrow \tau'\\
 \Delta; \Gamma \vdash e_{2} : \tau }
{\Delta; \Gamma \vdash \mathtt{(}e_{1} \ e_{2} \mathtt{)} : \tau'}\hspace{0.5in}

\inferrule[Unit]
{ }{\Delta; \Gamma \vdash \mathtt{()} : \mathtt{unit}}

\inferrule[Pair]
{\Delta; \Gamma \vdash e_{1} : \tau_{1}\\
 \Delta; \Gamma \vdash e_{2} : \tau_{2}}
{\Delta; \Gamma \vdash \mathtt{(pair} \ e_{1} \ e_{2} \mathtt{)} : \tau_{1} \times 
 \tau_{2}}

\inferrule[Unpack]
{\Delta; \Gamma \vdash e_{p} : \tau_{1} \times \tau_{2}\\\\
 \Delta; \Gamma, x_{1} : \tau_{1}, x_{2} : \tau_{2} \vdash e : \tau}
{\Delta; \Gamma \vdash \texttt{(let (} x_{1} \ x_{2} \texttt{)} \ e_{p} \ e
 \texttt{)} : \tau}
\end{mathpar}

\section{Type Inference and Its Implementation}
Unlike in the calculus \textbf{F\textsuperscript{RGN}}, there is no need to explicitly 
specify types in the \texttt{f-RGN} programming language. Type inference, 
based on Algorithm R, as described in Turbak, Gifford with Sheldon 
\cite{turbak2008design}, is possible.\\

The type inference rules of \texttt{f-RGN} are as following. The function $inf$ is the 
type inference function, taking an expression, a type environment and a kind environment 
and returning a pair of an inferred type and a type constaint.
\begin{mdframed}
\mbox{$\mathrm{InfA} ::= \tau \mid \mathtt{FAIL}$ is the answer to an inference}\\
\mbox{$inf : e \rightarrow \Gamma \rightarrow \Delta \rightarrow (\tau \times \mathrm{TypeConstraintSet}) $}\\
\mbox{$\tau_1 \doteq \tau_2$ is a constraint that equates $\tau_1$ and $\tau_2$}
\end{mdframed}

\begin{mathpar}
\inferrule[UnitInf]
{}{inf\bracketed{\mathtt{()}} \ \Gamma \ \Delta = \dangle{\mathtt{unit}, \{\}}}

\inferrule[LiteralInf]
{m \text{ is a literal of type } \tau\\
 \tau \in \{\mathtt{int}, \mathtt{string}, \mathtt{bool}\}}
{inf\bracketed{m} \ \Gamma \ \Delta = \dangle{\mathtt{\tau}, \{\}}}

\inferrule[VarInf]
{x \in \mathrm{dom}(\Gamma)}{inf\bracketed{x} \ \Gamma \ \Delta = \dangle{\Gamma(x), \{\}}}\hspace{0.5in}

\inferrule[IfElseInf]
{inf\bracketed{e_c} \ \Gamma \ \Delta = \dangle{\tau_c, TCS_c}\\\\
 inf\bracketed{e_t} \ \Gamma \ \Delta = \dangle{\tau_t, TCS_t}\\\\
 inf\bracketed{e_f} \ \Gamma \ \Delta = \dangle{\tau_f, TCS_f}}
{inf\bracketed{\mathtt{(if \ }e_c \ e_t \ e_f \mathtt{)}} \ \Gamma \ \Delta =
 \dangle{\tau_t, TCS_c \cup TCS_t \cup TCS_f \cup \{\tau_c \doteq \mathtt{bool}, 
 \tau_t \doteq \tau_f\}}}

\inferrule[LambdaInf]
{inf\bracketed{e} \ (\Gamma, x : \tau_x) \ (\Delta, x : *) = \dangle{\tau_e, TCS_e}\\\\
 \tau_x \text{ is a fresh type variable}}
{inf\bracketed{\mathtt{(lambda \ }x \ e \mathtt{)}} \ \Gamma \ \Delta = 
 \dangle{\tau_x \rightarrow \tau_e, TCS_e}}

\inferrule[ApplyInf]
{inf\bracketed{e_1} \ \Gamma \ \Delta = \dangle{\tau_f, TCS_1}\\
 inf\bracketed{e_2} \ \Gamma \ \Delta = \dangle{\tau, TCS_2}\\\\
 \tau' \text{ is a fresh type variable}}
{inf\bracketed{\mathtt{(}e_{1} \ e_{2} \mathtt{)}} \ \Gamma \ \Delta = 
 \dangle{\tau', TCS_1 \cup TCS_2 \cup \{\tau_f \doteq \tau \rightarrow \tau'\} }}

\inferrule[PairInf]
{inf\bracketed{e_1} \ \Gamma  \ \Delta = \dangle{\tau_1, TCS_1}\\\\   
 inf\bracketed{e_2} \ \Gamma  \ \Delta = \dangle{\tau_2, TCS_2}}
{inf\bracketed{\mathtt{(pair} \ e_{1} \ e_{2} \mathtt{)}} \ \Gamma = 
 \dangle{\tau_1 \times \tau_2, TCS_1 \cup TCS_2}}

\inferrule[UnpackInf]
{inf\bracketed{e_p} \ \Gamma  \ \Delta = \dangle{\tau, TCS_1}\\\\
 inf\bracketed{e} \ (\Gamma, x_1: \tau_1, x_2: \tau_2)  \ (\Delta, x_1: *, x_2: *) = \dangle{\tau', TCS_2}\\\\
 \tau_1, \tau_2 \text{ are fresh type variables}}
{inf\bracketed{\texttt{(let (} x_{1} \ x_{2} \texttt{)} \ e_{p} \ e \texttt{)}}
 = \dangle{\tau', TCS_1 \cup TCS_2 \cup \{\tau \doteq \tau_1 \times \tau_2\}}}

\inferrule[ReturnInf]
{inf\bracketed{e} \ \Gamma \ \Delta = \dangle{\tau, TCS}\\
 \varsigma \text{ is a fresh stack index}}
{inf\bracketed{\mathtt{(return \ } e \mathtt{)}} \ \Gamma \ \Delta = 
 \dangle{\mathtt{rgn} \ \varsigma \ \tau, TCS}}
\end{mathpar}

\begin{mathpar}
\inferrule[>>=Inf]
{inf\bracketed{m} \ \Gamma \ \Delta = \dangle{\tau_1, TCS_1}\\
 inf\bracketed{f} \ \Gamma \ \Delta = \dangle{\tau_2, TCS_2}\\
 \varsigma \text{ is a fresh stack index}\\
 \alpha, \beta \text{ are fresh type variables}}
{inf\bracketed{\mathtt{(>>= \ } m \ f \mathtt{)}} \ \Gamma \ \Delta =
 \dangle{\mathtt{rgn} \ \varsigma \ \beta, TCS_1 \cup TCS_2 \cup
 \{\tau_1 \doteq \mathtt{rgn} \ \varsigma \ \alpha,
   \tau_2 \doteq \alpha \rightarrow \mathtt{rgn} \ \varsigma \ \beta \}}}

\inferrule[NewInf]
{inf\bracketed{h} \ \Gamma \ \Delta = \dangle{\tau_1, TCS_1}\\
 inf\bracketed{e} \ \Gamma \ \Delta = \dangle{\tau_2, TCS_2}\\
 \varsigma \text{ is a fresh stack index}}
{inf\bracketed{\mathtt{(new \ } h \ e \mathtt{)}} \ \Gamma \ \Delta = 
 \dangle{\mathtt{rgn} \ \varsigma \ (\mathtt{ref} \ \varsigma \ \tau_2), 
 TCS_1 \cup TCS_2 \cup
 \{\tau_1 \doteq \mathtt{hnd} \ \varsigma\}}}

\inferrule[ReadInf]
{inf\bracketed{p} \ \Gamma \ \Delta = \dangle{\tau, TCS}\\
 \varsigma \text{ is a fresh stack index}\\
 \alpha \text{ is a fresh type variable}}
{inf\bracketed{\mathtt{(read \ } p \mathtt{)}} \ \Gamma \ \Delta = 
 \dangle{\mathtt{rgn} \ \varsigma \ \alpha, TCS \cup \{\tau \doteq \mathtt{ref} \ \varsigma \ \alpha\}}}

\inferrule[WriteInf]
{inf\bracketed{p} \ \Gamma \ \Delta = \dangle{\tau, TCS}\\
 inf\bracketed{e} \ \Gamma \ \Delta = \dangle{\tau', TCS'}\\\\
 \varsigma \text{ is a fresh stack index}}
{inf\bracketed{\mathtt{(write \ } p \ e \mathtt{)}} \ \Gamma \ \Delta 
 = \dangle{\mathtt{rgn} \ \varsigma \ \mathtt{unit},
 TCS \cup TCS' \cup \{\tau \doteq \mathtt{ref} \ \varsigma \ \tau'\}}}

\inferrule[RunRgnInf]
{inf\bracketed{e} \ \Gamma \ \Delta = \dangle{\tau, TCS}\\\\
 \varsigma \text{ is a fresh stack index}\\
 \alpha \text{ is a fresh type variable}}
{inf\bracketed{\mathtt{(run-rgn \ } e \mathtt{)}} \ \Gamma \ \Delta = 
 \dangle{\alpha, TCS \cup \{\tau \doteq \mathtt{rgn} \ \varsigma \ \alpha\}}}

\inferrule[LetRgnInf]
{inf\bracketed{h} \ \Gamma \ \Delta = \dangle{\tau, TCS}\\
 inf\bracketed{m} \ \Gamma \ \Delta = \dangle{\tau', TCS'}\\
 \varsigma_1, \varsigma_2 \text{ are fresh stack indices}\\
 \alpha \text{ is a fresh type variable}}
{inf\bracketed{\mathtt{(let-rgn \ } h \ m \mathtt{)}} \ \Gamma \ \Delta = 
 \dangle{\mathtt{rgn} \ \varsigma_1 \ \alpha, TCS \cup TCS' \cup 
 \{\tau \doteq \mathtt{hnd} \ \varsigma_2, \tau' \doteq \mathtt{rgn} \ \varsigma_2 \ \alpha \}}}

\inferrule[NewStackInf]
{\varsigma \text{ is a fresh stack index}}
{inf\bracketed{\mathtt{new-stack}} \ \Gamma \ \Delta = \dangle{\mathtt{hnd} \ \varsigma, \{\}}}

\inferrule[GetHndInf]
{\inf\bracketed{r} \ \Gamma \ \Delta = \dangle{\tau, TCS}\\
 \varsigma \text{ is a fresh stack index}\\
 \alpha \text{ is a fresh type variable}}
{\inf\bracketed{\mathtt{(get-hnd \ } r \mathtt{)}} \ \Gamma \ \Delta = 
 \dangle{\mathtt{hnd} \ \varsigma}, TCS \cup \{\tau \doteq \mathtt{rgn} \ \varsigma \ \alpha\}}
\end{mathpar}

The type inference algorithm for \texttt{f-RGN} is implemented in Haskell as following. The following 
Haskell packages are required:
\noindent External Haskell pacakges:
\begin{code}
{-# LANGUAGE TypeSynonymInstances #-}
{-# LANGUAGE FlexibleInstances #-}

import qualified Data.Map.Strict as Map
import qualified Data.Set as Set

import Control.Monad.Except
import Control.Monad.Reader
import Control.Monad.State
\end{code}
The data structures associated with type inference are defined as following:
\begin{code}
type TyEnv = Env Type
type KindEnv = Env Kind

type TySubst = Map.Map Id TyTerm
type TyConsSet = Map.Map Type Type
\end{code}
As generating fresh type variables require state, we wrap $inf$ in a state monad:
\begin{code}
inf :: Expr -> TyEnv -> KindEnv -> Inference (Type, TyConsSet)
inf Empty _ _ = return (Unit, Map.empty)
inf (Literal m) _ _ = case m of
                           I _ -> return (Integer, Map.empty)
                           B _ -> return (Bool, Map.empty)
                           S _ -> return (String, Map.empty)
inf (Variable x) tEnv _ = case Map.lookup x tEnv of
                               Nothing -> throwError $ "Unbound variable" ++ x
                               Just ty -> return (ty, Map.empty)
inf (IfElse ec et ef) tEnv kEnv = 
    do
        (tauC, tcsC) <- inf ec tEnv kEnv
        (tauT, tcsT) <- inf et tEnv kEnv
        (tauF, tcsF) <- inf ef tEnv kEnv
        return (tauT, tcsC `Map.union` tcsT `Map.union` tcsF `Map.union`
                           (Map.singleton tauC Bool) `Map.union` 
                           (Map.singleton tauT tauF))
inf (Lambda x e) tEnv kEnv =
    do 
        tauX <- freshTyVar "t"
        let tEnv0 = Map.delete x tEnv
            tEnv' = Map.union tEnv0 (Map.singleton x tauX)
            kEnv' = Map.union kEnv (Map.singleton x Star)
        (tauE, tcsE) <- inf e tEnv' kEnv'
        return (Arrow tauX tauE, tcsE)
inf (Apply e1 e2) tEnv kEnv =
    do
        tau' <- freshTyVar "t"
        (tauF, tcs1) <- inf e1 tEnv kEnv
        (tau,  tcs2) <- inf e2 tEnv kEnv
        return (tau', tcs1 `Map.union` tcs2 `Map.union` (Map.singleton tauF (Arrow tau tau')))
inf (Pair e1 e2) tEnv kEnv =
    do
        (tau1, tcs1) <- inf e1 tEnv kEnv
        (tau2, tcs2) <- inf e2 tEnv kEnv
        return (Product tau1 tau2, tcs1 `Map.union` tcs2)
inf (Unpack (x1, x2) ep e) tEnv kEnv =
    do
        tau1 <- freshTyVar "t"
        tau2 <- freshTyVar "t"
        (tau, tcs1) <- inf ep tEnv kEnv
        let tEnv' = Map.insert x1 tau1 (Map.insert x2 tau2 (Map.delete x1 
                                                            (Map.delete x2 tEnv)))
            kEnv' = Map.insert x1 Star (Map.insert x2 Star kEnv)
        (tau', tcs2) <- inf e tEnv' kEnv'
        return (tau', tcs1 `Map.union` tcs2 `Map.union` (Map.singleton tau (Product tau1 tau2)))
inf (Return e) tEnv kEnv = 
    do
        s <- freshStkIdx "s"
        (tau, tcs) <- inf e tEnv kEnv
        return (Region s tau, tcs)
inf (Then m f) tEnv kEnv = 
    do
        s <- freshStkIdx "s"
        alpha <- freshTyVar "t"
        beta  <- freshTyVar "t"
        (tau1, tcs1) <- inf m tEnv kEnv
        (tau2, tcs2) <- inf f tEnv kEnv
        return (Region s beta, tcs1 `Map.union` tcs2 `Map.union`
                Map.fromList [(tau1, Region s alpha), (tau2, Arrow alpha (Region s beta))])
inf (New h e) tEnv kEnv =
    do
        s <- freshStkIdx "s"
        (tau1, tcs1) <- inf h tEnv kEnv
        (tau2, tcs2) <- inf e tEnv kEnv
        return (Region s (Reference s tau2), tcs1 `Map.union` tcs2 `Map.union`
                (Map.singleton tau1 (Handle s)))
inf (Read p) tEnv kEnv =
    do
        s <- freshStkIdx "s"
        alpha <- freshTyVar "t"
        (tau, tcs) <- inf p tEnv kEnv
        return (Region s alpha, tcs `Map.union` (Map.singleton tau (Reference s alpha)))
inf (Write p e) tEnv kEnv =
    do
        s <- freshStkIdx "s"
        (tau, tcs) <- inf p tEnv kEnv
        (tau', tcs') <- inf e tEnv kEnv
        return (Region s Unit, tcs `Map.union` tcs' `Map.union`
                (Map.singleton tau (Reference s tau')))
inf (RunRgn e) tEnv kEnv = 
    do
        s <- freshStkIdx "s"
        alpha <- freshTyVar "t"
        (tau, tcs) <- inf e tEnv kEnv
        return (alpha, tcs `Map.union` (Map.singleton tau (Region s alpha)))
inf (LetRgn h m) tEnv kEnv =
    do
        s1 <- freshStkIdx "s"
        s2 <- freshStkIdx "s"
        alpha <- freshTyVar "t"
        (tau, tcs) <- inf h tEnv kEnv
        (tau', tcs') <- inf m tEnv kEnv
        return (Region s1 alpha, tcs `Map.union` tcs' `Map.union`
                (Map.fromList [(tau, Handle s2), (tau', Region s2 alpha)]))
inf (NewStk) _ _ =
    do
        s <- freshStkIdx "s"
        return (Handle s, Map.empty)
inf (GetHnd r) tEnv kEnv =
    do
        s <- freshStkIdx "s"
        alpha <- freshTyVar "t"
        (tau, tcs) <- inf r tEnv kEnv
        return (Handle s, tcs `Map.union` (Map.singleton tau (Region s alpha)))
\end{code}

We may then attempt to unify all the typing constraints collected in the 
$inf$ function and infer the types for all variables:
\begin{code}
data UnifySoln = Solution TySubst | Fail
    deriving (Show)

unifyLoop :: TyConsSet -> TySubst -> UnifySoln
unifyLoop tcs subst = 
    let tcs' = Map.toList tcs
    in  case tcs' of 
            [] -> Solution subst
            ((t, t'):rest) ->
                 if eqType t t'
                 then unifyLoop (Map.fromList rest) subst
                 else case (t, t') of
                    (Arrow t1 t2, Arrow t1' t2') -> 
                        unifyLoop (Map.insert t1 t1' (Map.insert t2 t2' (Map.fromList rest))) subst
                    (Product t1 t2, Product t1' t2') ->
                        unifyLoop (Map.insert t1 t1' (Map.insert t2 t2' (Map.fromList rest))) subst
                    (Region s t, Region s' t') ->
                        unifyLoop (Map.insert t t' (Map.fromList rest)) 
                                  (Map.insert s' (Stk s) subst)
                    (Reference s t, Reference s' t') ->
                        unifyLoop (Map.insert t t' (Map.fromList rest))
                                  (Map.insert s' (Stk s) subst)
                    (Handle s, Handle s') ->
                        unifyLoop (Map.fromList rest) (Map.insert s' (Stk s) subst)
                    (TyVar tau, _) ->
                        if freeIn tau t'
                        then Fail
                        else let substT = Map.singleton tau (Type t')
                             in  unifyLoop (Map.fromList (apply substT rest))
                                           (Map.union substT subst)
                    (_, TyVar tau) -> 
                        if freeIn tau t'
                        then Fail
                        else let substT = Map.singleton tau (Type t')
                             in  unifyLoop (Map.fromList (apply substT rest))
                                           (Map.union substT subst)
                    otherwise -> Fail
\end{code}

\section{Further Work}
Several points of potential further work have been identified. Firstly, our 
prototypal type inferencer is a definitional type-inferencer of all rules 
listed above, but no implementation of \texttt{f-RGN} is provided by this 
author. There are a few possible targets of compilation, including C and Rust, 
such that \texttt{f-RGN} could be compiled to in order to run efficiently.
\par Moreover, there are no lists, records, algebraic data types, or 
\texttt{let}-polymorphism in \texttt{f-RGN}. However, they could be 
easily added to an extension of \texttt{f-RGN}, with a more complex type 
inference algorithm.
\par Finally, the greatest virtue of regions are the possibility of parallelization. 
Concurrency and continuation-passing style computational primitives are also a 
possible extension to \texttt{f-RGN}.
\section{Conclusion}
Overall, \texttt{f-RGN} is a promising programming language for creating functional 
programs without memory leaks. By using a stack of regions and encapsulating all 
memory-transforming operations behind a monad, \texttt{f-RGN} effectively hides all 
changes in the memory state --- which are the ultimate causes of memory unsafety and 
memory leaks. Moreover, \texttt{f-RGN} allows type inference using conventional algorithms 
and does not require explicit references to regions, making \texttt{f-RGN} friendly and 
approachable to the programmer.
\section{Lessons Learned}
Through studying type guarantees for memory, I find myself able to reason about type systems in 
a more intuitional fashion, and able to more effectively understand and evaluate arguments 
about the design of type systems. Moreover, since memory is ultimately a form of state, I gained a 
better understanding of states and the manipulation of it using monads and other type-theoretical 
tools (e.g., substructural typing). Finally, through designing and writing rules for \texttt{f-RGN}, 
I find myself more competent at creating sound typing rules and designing type systems.
\section*{Appendix}
The rest of the type inference implementation in Haskell is listed below. The \LaTeX \ source of  
this report is a valid Literate Haskell program; to extract Haskell code use the tool 
\texttt{unlit}.\\

\noindent Data type definitions:
\begin{code}
type Id = String

data Kind = Stack | Star

data TyTerm = Type Type | Stk StackId deriving (Show)

type StackId = Id

data Type = TyVar Id
          | Integer
          | Bool
          | String
          | Arrow Type Type
          | Unit
          | Product Type Type
          | Region StackId Type
          | Reference StackId Type
          | Handle StackId
          deriving (Eq, Ord, Show)

data Expr = Variable Id
          | Literal Value
          | Lambda Id Expr
          | Apply Expr Expr
          | IfElse Expr Expr Expr
          | Empty
          | Pair Expr Expr
          | Unpack (Id, Id) Expr Expr
          | Return Expr
          | Then Expr Expr
          | New Expr Expr
          | Read Expr
          | Write Expr Expr
          | RunRgn Expr
          | LetRgn Expr Expr
          | NewStk
          | GetHnd Expr
          deriving (Eq, Ord, Show)

data Value = I Integer | S String | B Bool deriving (Eq, Ord, Show)

type Env a = Map.Map Id a
\end{code}

\noindent Utility functions for types:
\begin{code}
eqType :: Type -> Type -> Bool
eqType (TyVar x) (TyVar y) = x == y
eqType Integer Integer = True
eqType Bool Bool = True
eqType String String = True
eqType Unit Unit = True
eqType (Arrow t1 t1') (Arrow t2 t2') = (eqType t1 t2) && (eqType t1' t2')
eqType (Product t1 t2) (Product t1' t2') = (eqType t1 t1') && (eqType t2 t2')
eqType (Region s1 t1) (Region s2 t2) = (s1 == s2) && (eqType t1 t2)
eqType (Reference s1 t1) (Reference s2 t2) = (s1 == s2) && (eqType t1 t2)
-- Note that this is actually not true, but here for the sake of simplicity.
-- As long as s1 < s2 or vice versa, hnd s1 and hnd s2 are equal types
eqType (Handle s1) (Handle s2) = (s1 == s2)
eqType _ _ = False

ftv :: Type -> Set.Set Id
ftv (TyVar x) = Set.singleton x
ftv Integer = Set.empty
ftv Bool = Set.empty
ftv String = Set.empty
ftv Unit = Set.empty
ftv (Arrow t1 t2) = Set.union (ftv t1) (ftv t2) 
ftv (Product t1 t2) = Set.union (ftv t1) (ftv t2)
ftv (Region s t) = Set.insert s (ftv t)
ftv (Reference s t) = Set.insert s (ftv t)
ftv (Handle s) = Set.singleton s

freeIn :: Id -> Type -> Bool
freeIn x tau = Set.member x (ftv tau)

class Substs a where
    apply :: TySubst -> a -> a

instance Substs Type where
    apply subst (TyVar x) = case Map.lookup x subst of
                                 Nothing -> TyVar x
                                 Just (Type t)  -> t
                                 -- This shouldn't happen!
                                 Just (Stk s) -> TyVar x
    apply subst (Arrow t1 t2) = Arrow (apply subst t1) (apply subst t2)
    apply subst (Product t1 t2) = Product (apply subst t1) (apply subst t2)
    apply subst (Region s t) = case Map.lookup s subst of
                                   Nothing -> Region s (apply subst t)
                                   Just (Stk s') -> Region s' (apply subst t)
                                   -- Bad! Shouldn't happen
                                   Just _ -> Region s (apply subst t)
    apply subst (Reference s t) = case Map.lookup s subst of
                                      Nothing -> Reference s (apply subst t)
                                      Just (Stk s') -> Reference s' (apply subst t)
                                      -- Bad! Shouldn't happen
                                      Just _ -> Reference s (apply subst t)
    apply subst (Handle s) = case Map.lookup s subst of
                                  Nothing -> Handle s
                                  Just (Stk s') -> Handle s'
                                  -- Bad! Shouldn't happen
                                  Just _ -> Handle s

instance Substs a => Substs [a] where
    apply subst = map (apply subst)

instance Substs a => Substs (a, a) where
    apply subst (a, b) = (apply subst a, apply subst b)

instance Substs TyConsSet where
    apply subst tcs = Map.fromList (map (apply subst) tcs')
        where tcs' = Map.toList tcs
\end{code}

\noindent Preserving monadic state in $inf$:
\begin{code}
data InfEnv = InfEnv {}
data InfState = InfState {infSupply :: Int, 
                          infStkSupply :: Int,
                          infSubst  :: TySubst}

type Inference a = ExceptT String (ReaderT InfEnv (StateT InfState IO)) a

runInf :: Inference a -> IO (Either String a, InfState)
runInf t = 
    do
        (result, st) <- runStateT (runReaderT (runExceptT t) initInfEnv) initInfState
        return (result, st)
    where
        initInfEnv = InfEnv{}
        initInfState = InfState{infSupply = 0, infStkSupply = 0, infSubst = Map.empty}

freshTyVar :: String -> Inference Type
freshTyVar prefix = 
    do s <- get
       put s{infSupply = infSupply s + 1}
       return (TyVar (prefix ++ show (infSupply s)))

freshStkIdx :: String -> Inference StackId
freshStkIdx prefix = 
    do s <- get
       put s{infStkSupply = infStkSupply s + 1}
       return (prefix ++ show (infStkSupply s))
\end{code}

\bibliographystyle{acm}
\bibliography{report}

\end{document}

% Local Variables:
% mode: latex
% mmm-classes: literate-haskell-latex
% End: