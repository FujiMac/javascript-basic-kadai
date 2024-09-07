
// 変数numに0～19までのランダムな整数を代入する
num = Math.floor(Math.random() * 20);

// 変数numの値を出力する（確認用）
console.log(num);

// 変数numの値が3の倍数かつ5の倍数のとき
if (num%3 === 0 && num%5 === 0) {
  console.log('3と5の倍数です');
}
 // 変数numの値が3の倍数のとき
 else if (num%3 === 0) {
   console.log('3の倍数です');
 }
// 変数numの値が5の倍数のとき
 else if (num%5 === 0) {
  console.log('5の倍数です');
}
// それ以外のとき
else {
  console.log(num);
}
