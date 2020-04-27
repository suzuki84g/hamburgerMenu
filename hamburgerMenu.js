// 現状、ボタンアイコンの実装がなく、押下後のnavリストがいきなり表示されるので、idの付与をjsで操作してビジュアルをやっていく形にする。

const button = document.getElementById('nav-toggle');  // button要素
const icon = document.getElementById('hamburger-icon');  // icon
const navList = document.getElementById('nav-list');  // nav-listを取得

button.onclick = () => {
    // button押下時の動作を記述
    navList.classList.toggle('hidden');  // `hidden`classをtoggleで切り替える
    icon.classList.toggle('fa-bars');  // 初期ON
    icon.classList.toggle('fa-times');  // 初期OFF
};
