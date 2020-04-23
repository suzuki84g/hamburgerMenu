// 現状、ボタンアイコンの実装がなく、押下後のnavリストがいきなり表示されるので、idの付与をjsで操作してビジュアルをやっていく形にする。

const button = document.getElementById('nav-toggle');  // button要素を明示

function btn_click() {
    window.alert('ボタンがクリックされました。');
}

document.getElementById('nav-list');  // 表示されるリスト項目

// #TODO:button押下時の動作
// #TODO:button要素のクラス（＝buttonそのものをtoggleで切り替える）
// #TODO:リスト要素のクラスをtoggleで切り替える
