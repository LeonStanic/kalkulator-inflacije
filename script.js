function KalkulatorInflacije(){
let stopa_inflacije = document.querySelector('#inflationRate').value;
console.log(stopa_inflacije);
let unesena_vrijednost = document.querySelector('#money').value;
console.log(unesena_vrijednost);
let broj_godina = document.querySelector('#years').value
console.log(broj_godina);
// ----------------
stopa_inflacije = parseFloat(stopa_inflacije);
unesena_vrijednost = parseFloat(unesena_vrijednost);
broj_godina = parseFloat(broj_godina);

// ----------------

let nakon_inflacije = unesena_vrijednost + (unesena_vrijednost*(stopa_inflacije / 100));
for(let i = 1; i<broj_godina; i++){
    nakon_inflacije += nakon_inflacije * (stopa_inflacije /100);
}
let newElement = document.createElement('div');
newElement.className = 'new-value';
newElement.innerText = `Danasnjih ${unesena_vrijednost} eura vrijedi isto kao ${nakon_inflacije} eura za ${broj_godina} godina.`;
document.querySelector('.container').appendChild(newElement);
}