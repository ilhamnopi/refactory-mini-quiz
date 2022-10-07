/**
 * Buatlah sebuah fungsi yang akan menampilkan angka terbesar dan terkecil
 * dalam sebuah array berisi [5,4,6,9,10,60]
 * output terbesar 60 terkecil 5
 */

function maxMin() {
  const arr = [5, 4, 6, 9, 10, 60];
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  console.log(`terbesar ${max}`);
  console.log(`terkecil ${min + 1}`);
}
maxMin();
