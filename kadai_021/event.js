// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
// textというidを持つHTML要素を取得し、定数に代入する
const parentText = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  setTimeout(() => {
  // text要素に「ボタンをクリックしました」というテキストに変更する
  parentText.textContent = 'ボタンをクリックしました';
}, 2000);
});