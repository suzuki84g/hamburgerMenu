// 現状、ボタンアイコンの実装がなく、押下後のnavリストがいきなり表示されるので、idの付与をjsで操作してビジュアルをやっていく形にする。

const button = document.getElementById('nav-toggle');  // button要素
const navList = document.getElementById('nav-list');  // nav-listを取得

function btn_click() {
    // TODO:button押下時の動作を記述
    // window.alert('ボタンがクリックされました。');  // 試し
    navList.classList.toggle('hidden');  // `hidden`classをtoggleで切り替える
};


// #TODO:button押下時の正しい動作
// #TODO:button要素のクラス（＝buttonそのものをtoggleで切り替える）
// #TODO:リスト要素のクラスをtoggleで切り替える


// TODO:nav-listとhiddenをbutton押下で切り替える

