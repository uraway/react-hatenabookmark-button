# react-hatenabookmark-button
Simple React components for HatenaBookmark Button.

## インストール
```
npm install --save react-hatenabookmark-button
```

## 使用例
```javascript
import HatenabookmarkButton from 'react-hatenabookmark-button';

class App extends React.Component {
  render() {
    let url = "https://github.com";
    let style = "simple-balloon";

    return (
      <HatenabookmarkButton url={url} style={style} />
    );
  }
}
```

## プロパティ

### url
ブックマークボタンを設置するページのURLを設定してください｡

### title
ブックマーク時に表示されるタイトルを自由に設定することができます｡

### style
ボタンのスタイルを以下から選択してください｡

###### デフォルト
![](http://i.imgur.com/AuKmG2o.png)

###### simple-balloon
![](http://i.imgur.com/0fHSBhG.png)

###### standard-balloon
![](http://i.imgur.com/2166oFC.png)


MIT licensed
