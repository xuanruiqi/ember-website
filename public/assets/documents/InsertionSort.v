Extraction Language Ocaml.

Require Import List.
Require Import ZArith.
Require Import Bool.
Require Import Omega.
Require Import Permutation.
Require Extraction.
Require Coq.extraction.ExtrOcamlZBigInt.

Extract Inductive bool => "bool" [ "true" "false" ].
Extract Inductive list => "list" [ "[]" "(::)" ].

Fixpoint insert (x : Z) (xs : list Z) :=
  match xs with
  | nil => x :: nil
  | hd::tl => if (x <=? hd)%Z then x::hd::tl else hd::insert x tl
  end.

Fixpoint insertion_sort (xs : list Z) :=
  match xs with
  | nil => nil
  | hd::tl => insert hd (insertion_sort tl)
  end.

Inductive sorted : list Z -> Prop :=
| sorted_nil : sorted nil
| sorted_1 : forall x,
    sorted (x::nil)
| sorted_inductive : forall x y tl,
    (x <= y)%Z -> sorted (y::tl) -> sorted (x::y::tl).

(* A note of style: since Coq proofs are intended to be read in an 
   interactive proof environment, usually there are little comments 
   to explain the proof. However, with an interactive proof 
   environment like CoqIDE or Proof General, one can easily step 
   through each step in the proof and see the internal "proof state" *)

(* A lemma: insertion into a sorted list produces a sorted list *)
Lemma insertion_returns_sorted: forall x xs, sorted xs -> sorted (insert x xs).
Proof.
  intros. induction xs; simpl.
  - apply sorted_1.
  - case_eq (x <=? a)%Z.
    + intros. simpl. apply Z.leb_le in H0.
      destruct xs; simpl.
      * apply sorted_inductive. auto. auto.
      * case_eq (x <=? z)%Z.
        { intros. apply Z.leb_le in H1.
          apply sorted_inductive. auto. auto. }
        { intros. apply Z.leb_gt in H1.
          apply sorted_inductive. auto. auto. }
    + intros. apply Z.leb_gt in H0.
      destruct xs; simpl.
      * apply sorted_inductive. firstorder. apply sorted_1.
      * case_eq (x <=? z)%Z.
        { intros. apply Z.leb_le in H1.
          apply sorted_inductive. firstorder.
          apply sorted_inductive. auto. inversion H.
          auto. }
        { intros. apply Z.leb_gt in H1.
          apply sorted_inductive. inversion H.
          auto. replace (z :: insert x xs) with (insert x (z::xs)).
          inversion H. apply IHxs in H6. auto.
          simpl. case_eq (x <=? z)%Z. intros.
          apply Z.leb_le in H2. omega.
          intros. auto. }
Qed.
          
          
(* Now, time for the real theorem *)
Theorem insertion_sort_sorted: forall xs, sorted (insertion_sort xs).
Proof.
  intros xs. induction xs.
  - simpl. apply sorted_nil. (* An empty list is trivially sorted; base case *)
  - simpl. apply insertion_returns_sorted. auto.
Qed.


(* Extra: proof that the output of our insertion sort is a permutation of
   the input *)
(* Again, a lemma: inserting into a list and appending to a list produce 
   a pair of permutations. *)
Lemma insert_perm: forall x xs, Permutation (x::xs) (insert x xs).
Proof.
  intros x xs. induction xs.
  - simpl. reflexivity.
  - simpl. case_eq (x <=? a)%Z.
    + intros. reflexivity.
    + intros. apply Z.leb_gt in H.
      assert (Hxa: Permutation (x :: a :: xs) (a :: x :: xs)).
      { apply perm_swap. }
      rewrite Hxa. rewrite IHxs.
      apply Permutation_refl.
Qed.
      
Theorem insertion_sort_permutation: forall xs, Permutation xs (insertion_sort xs).
Proof.
  intros xs. induction xs.
  - simpl. apply perm_nil.
  - simpl. assert (Hasort: Permutation (a :: xs) (a :: insertion_sort xs)).
    { rewrite perm_skip with (l := xs) (l' := insertion_sort xs).
      apply Permutation_refl. auto. }
    apply perm_trans with (l := (a :: xs)) (l' := (a :: insertion_sort xs))
                          (l'' := (insert a (insertion_sort xs))).
    auto. apply insert_perm.
Qed.

Extraction "insertion_sort.ml" insertion_sort.