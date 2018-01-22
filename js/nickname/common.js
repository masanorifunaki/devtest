(function () {
  'use strict';
  const userNameInput = document.getElementById('userName');
  const createButton = document.getElementById('createNickname');
  const resultDivided = document.getElementById('resultArea');
  const tweetDivided = document.getElementById('tweetArea');

  // ニックネーム一覧
  // todo: 定義ファイルに移動
  const nicknameList = [
    '筋肉オタク',
    '博士',
  ];


  /**start==================== イベント ====================*/

  createButton.onclick = () => {
    removeAllChildren(resultDivided);
    const userName = userNameInput.value;
    if (userName.length === 0) { // 名前が空の時は処理を終了する
      return;
    }

    // ニックネーム表示エリア
    const paragrah = document.createElement('p');
    const nickname = getNickname(userName);
    let result = userName + 'のニックネームは「' + nickname + '」です。';
    paragrah.innerText = result;
    resultDivided.appendChild(paragrah);

    // ツイートエリアの作成
    removeAllChildren(tweetDivided);
    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=' +
      encodeURIComponent('あなたのいいところ') +
      '&ref_src=twsrc%5Etfw';
    anchor.setAttribute('href', hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text', result);
    anchor.innerText = '#あなたのいいところ をツイートする';
    tweetDivided.appendChild(anchor);

    twttr.widgets.load();
  };

  /**end==================== イベント ====================*/


  /**start==================== 関数 ====================*/


  /**
   * ニックネーム一覧からランダムでニックネームを取得
   * 
   * @return {string} ニックネーム
   */
  let getNickname = function() {
    // リストからランダムでニックネームを選定
    let nickname = nicknameList[Math.floor(Math.random() * nicknameList.length)];

    return nickname;
  }


  /*
   *　指定した要素の子どもを全てを削除する
   * @param {HTMLElement} element HTMLの要素
   */
  let removeAllChildren = function(element) {
    while (element.firstChild) { // 子どもの要素があるかぎり削除
      element.removeChild(element.firstChild);
    }
  }

  /**end==================== 関数 ====================*/

})();