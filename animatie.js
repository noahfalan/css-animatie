const knopje = document.getElementById('knopje');

let vlak = document.querySelector('.vlakje')
let vlak2 = document.querySelector('.vlakje2')
let vlak3 = document.querySelector('.vlakje3')


const schuif = () => {

  vlak.classList.toggle('vlakje--schuif-uit');
  vlak2.classList.toggle('vlakje2--schuif-uit');
  vlak3.classList.toggle('vlakje3--schuif-uit');
}

knopje.addEventListener('click', schuif);
