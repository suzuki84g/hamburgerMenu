// 現状、ボタンアイコンの実装がなく、押下後のnavリストがいきなり表示されるので、idの付与をjsで操作してビジュアルをやっていく形にする。


function btn_click() {
    // button押下時の動作を記述
    window.alert('ボタンがクリックされました。');
};

const button = document.getElementById('nav-toggle');  // button要素
const navList = document.getElementById('nav-list');  // リスト要素 #WIP:liを含む形で記述が必要

// #TODO:button押下時の正しい動作
// #TODO:button要素のクラス（＝buttonそのものをtoggleで切り替える）
// #TODO:リスト要素のクラスをtoggleで切り替える
