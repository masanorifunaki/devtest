# 初期設定
```
mkdir フォルダ名 # フォルダを作る
cd フォルダ名 # 作ったフォルダへ移動する
git clone git@github.com:masanorifunaki/devtest.git # クローンする
npm install # npmをインストールする
git checkout # ブランチを変更する
```
# 運用フロー
* ブランチを切って作業する。
* masterブランチはマージ専用にする。
* 作業完了後、masterブランチに対してプルリクエストを送る
# Jadeの使い方について
以下参照
[Jade について。](https://gist.github.com/japboy/5402844)
## CSS JS ファイルの読み込み方法
```
style
  include パス
script
  include パス
```
## 外部ファイルの読み込みは絶対パスで指定
```
script(src="https://platform.twitter.com/widgets.js" charset="utf-8")
link(rel="stylesheet",href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous")
```
## id classの記述方法
```
div#id名      // => <div id="id名"></div>　
div.class名   // => <div class="class名">
```

