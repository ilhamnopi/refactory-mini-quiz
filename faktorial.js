/*
Buatlah sebuah program yang akan menampilkan nilai faktorial dari bilangan yang dimasukkan.
Bilangan faktorial adalah hasil perkalian antara bilangan bulat positif yang kurang dari atau sama dengan n.
Bilangan faktorial biasanya di tulis dengan tanda seru (!).
Sebagai contoh 5! = 5 * 4 * 3 * 2 * 1 = 120.
contoh kedua 7! = 7 * 6 * 5 * 4 * 3 * 2 * 1 = 5040.
 */

function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
console.log(`5! = ${factorialize(5)}`);
console.log(`7! = ${factorialize(7)}`);
