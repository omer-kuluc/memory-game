let data = [1, 2, 3, 4, 5, 6, 7, 8];
data = data.concat(data);

// bu kodu her zaman diziyi (listeyi) karıştırmak için kullanabiliriz
// shuffle
data.sort(function () {
  // Math.random() -> 0.000001 ile 0.999999 arasında rastgele bir sayı üretir
  return Math.random() - 0.5;
});

const gameContainer = document.querySelector('.game');
for (const x of data) {
  gameContainer.innerHTML += `<div class="game-item">${x}</div>`;
}

// elementleri js ile ekrana basın
// <div class="game-item">3</div>

// const btn = document.querySelector('.lightBtn');

// btn.addEventListener('click', function() {
//   if(this.innerText === 'Aç') {
//     this.innerText = 'Kapa';
//   } else {
//     this.innerText = 'Aç';
//   }

//   this.classList.toggle('lightBtn-on');
// });

const items = document.querySelectorAll('.game-item');
// console.log(items);

/**
 * eğer querySelector dersek doğrudan elementi getirir
 * querySelectorAll dersek elementlerin olduğu bir dizi getirir
 * bu sebeple querySelector'de addEventListener çalışırken
 * querySelectorAll'da dizi olduğu için doğrudan addEventListener
 * yazılmaz.
 * Onun yerine döngü ile tüm elemanlara tek tek erişip 
 * addEventListener yazarız
 */

// eğer for-of içinde tanımlasaydık. 16 kez aynı tanımı yapmış olurduk.
// gerek var mı? hayır..
function handleItemClick() {
  // if(this.classList.contains('game-item-active')) {
  //   this.classList.remove('game-item-active');
  // } else {
  //   this.classList.add('game-item-active')
  // }

  // toggle - eğer yoksa ekler, varsa kaldırır
  this.classList.toggle('game-item-active');
}

// 16 kere çalışacak
for (const item of items) {
  // item her seferinde sıradan bize tek tek game-item'ları getirecek
  item.addEventListener('click', handleItemClick);
}