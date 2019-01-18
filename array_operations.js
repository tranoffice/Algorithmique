const T = [0, 1, 2, 3, 4];
//
function foisTrois(n) {
    return 3 * n;
}
function addTous(a, b) {
    return a + b;
}


console.log("initial Array :");
console.log(T);
// map
console.log("MAP :");
const T_map = T.map(x => foisTrois(x));
console.log(T_map);

// reduce
// A retenir : T.reduce( (acc, elt) => retoure_nouvelle_valeur_acc, acc_initiale  )
console.log("REDUCE :");
const T_reduce = T.reduce((acc,x) => acc + x, 10);
console.log(T_reduce);

// MAP with REDUCE
console.log("MAP with REDUCE :");
const T_map_reduce = T.reduce((acc,x) => [...acc, foisTrois(x)], []);
// ici l'accumulateur est un tableau, initial = [] et on concatène au fur et à mesure ....
console.log(T_map_reduce);

// FILTER with REDUCE
console.log("FILTER with REDUCE :");
// filter les éléments supérieur à 2 ( exemple ici )
const T_filter_reduce = T.reduce((acc,x) => x>2 ? [...acc, x] : acc, []);
// ici l'accumulateur est un tableau, initial = [] et on concatène au fur et à mesure ....
console.log(T_filter_reduce);

// Slice : (extraire une portion du tableau : de .. à position avant ..)
// !! T origine n'est pas modifié
console.log("Slice :");
const T_slice = T.slice(0,3);
console.log(T_slice);
console.log(T);

// Splice pour enlever : ( à la position ..(parm1) je retire ..(parm2) éléments )
// !! attention - retourne la portion enlevée - T origine est modifiée
console.log("Splice remove :");
const T_slice_remove = T.splice(2,2);
console.log(T_slice_remove);
console.log(T);

// Splice pour ajouter : ( à la position ..(parm1) je ne retire rien ..(parm2) et j'ajoute après cette potiion les éléments  .... )
// !! attention - retourne la portion enlevée - T origine est modifiée
console.log("Splice add :");
console.log(T);
const T_slice_add = T.splice(1, 0, "a", "b", "c");
console.log(T_slice_add);
console.log(T);
