// 現状、ボタンアイコンの実装がなく、押下後のnavリストがいきなり表示されるので、idの付与をjsで操作してビジュアルをやっていく形にする。

const button = document.getElementById('nav-toggle');  // button要素
const navList = document.getElementById('nav-list');  // nav-listを取得

function btn_click() {
    // button押下時の動作を記述
    navList.classList.toggle('hidden');  // `hidden`classをtoggleで切り替える
    // TODO:アイコンを変更する記載
};
