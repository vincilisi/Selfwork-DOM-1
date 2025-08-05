// Lavora con il DOM:
// crea una pagina HTML con 3 paragrafi e 3 bottoni. 
// Il primo bottone dovra’ cambiare il colore del testo dei paragrafi in modo casuale.
// ogni paragrafo dovra' avere un colore diverso. 
// il secondo dovra’ rendere il testo dei paragrafi in grassetto. 
// il terzo dovra’ far scomparire e ricomparire i paragrafi.

// TIPS:
// ricordati della proprieta’ display: none in CSS!
// i colori su CSS sono formati da R, G e B. Quindi puoi settare un colore random semplicemente randomizzando questi tre valori e mettendoli insieme. Scopri come.


function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function cambiaColori() {
  const paragrafi = document.querySelectorAll('.Para');
  paragrafi.forEach(p => {
    p.style.color = getRandomColor();
  });
}
document.addEventListener('DOMContentLoaded', () => {
  const bottone = document.querySelector('.cambia-colore');
  bottone.addEventListener('click', cambiaColori);
});

function grassetto() {
  const paragrafi = document.querySelectorAll('.Para');
  paragrafi.forEach(p => {
    p.style.fontWeight = 'bold';
  });
}
document.addEventListener('DOMContentLoaded', () => {
  const botton = document.querySelector('.grassetto');
  botton.addEventListener('click', grassetto);

})
function scompari() {
  const paragrafi = document.querySelectorAll('.Para');
  paragrafi.forEach(p => {
    if (p.style.display === 'none') {
      p.style.display = '';
    } else {
      p.style.display = 'none';
    }
  });
}
document.addEventListener('DOMContentLoaded', () => {
  const bottoni = document.querySelector('.fantasma');
  bottoni.addEventListener('click', scompari);

})
