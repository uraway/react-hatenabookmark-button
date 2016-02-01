# react-hatenabookmark-button
Simple React components for HatenaBookmark Button.

## インストール Install
```
npm install --save react-hatenabookmark-button
```

## 使用例 example
```javascript
import { HatenabookmarkButton } from 'react-hatenabookmark-button';

class App extends React.Component {
  render() {
    let url = "https://github.com";
    let layout = "simple-balloon";

    return (
      <HatenabookmarkButton url={url} layout={layout} />
    );
  }
}
```

## プロパティ props

### url
シェアしたいページのURLを指定してください｡ デフォルトではボタンが設置されたページのURLを取得します｡
The URL you want to share. The default value is the URL of the page where you put the button on.

### title
ブックマーク時に表示されるタイトルを自由に設定することができます｡
The title which display when the page is bookmarked.

### layout
ボタンのレイアウトを以下から選択してください｡
The button layout. Choose from the followings.

###### デフォルト default
![](http://i.imgur.com/AuKmG2o.png)

###### simple-balloon
![](http://i.imgur.com/0fHSBhG.png)

###### standard-balloon
![](http://i.imgur.com/2166oFC.png)


MIT licensed
