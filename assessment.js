'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivid = document.getElementById('tweet-area');

function removeAllChildre(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}


assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if (userName.length === 0){
        return;
    }
    removeAllChildren(resultDivided);
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);

    removeAllChildren(tweetDivided);
    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=' + encodeURIComponent('あなたのいいところ') + '%ref_src=twsrc%5Etfw';
    anchor.setAttribute('href', hrefValue);
    anchor.setAttribute('data-text', result);
    anchor.innerText = 'Tweet #あなたのいいところ';
    tweetDivided.appendChild(anchor);

    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweetDivided.appendChild(script);
};

const answers = [
    '{userName}のいいとこ声はです。{userName}の特徴的な声は皆を惹きつけ、心に残ります',
    '{userName}のいいとこはまなざしです。{userName}に見つめられた人は、気になって仕方ないでしょう',
    '{userName}のいいとこは情熱です。{userName}の情熱に周りの人は感化されます',
    '{userName}のいいとこは厳しさです。{userName}の厳しさが物事をいつも成功に導きます。',
    '{userName}のいいとこは知識です。博識な{userName}を多くの人が頼りにしています。',
    '{userName}のいいとこはユニークさです。{userName}だけのその特徴が皆を楽しくされます。',
    '{userName}のいいとこは用心深さです。{userName}だけのその特徴が皆を楽しくさせます',
    '{userName}のいいとこは見た目です。内側から溢れ出る{userName}の良さに皆が気をひかれます。',
    '{userName}のいいとこは決断力です。{userName}がする決断にいつも助けられる人がいます',
    '{userName}のいいとこは思いやりです。{usreName}に気にかけてもらった多くの人が感謝しています。',
    '{userName}のいいとこは感受性です。{userName}が感じたことに皆が共感し、分かりあうことができます',
]


/*
*名前の文字列を渡すと診断結果を返す関数
*@param {string} userName ユーザーの名前
*@return { string } 診断結果
最初の行は、「関数の処理内容」
2行目の@paramは関数の「引数」のこと。
3行目の@returnは関数の「戻り値」のこと。
入力が同じ名前なら同じ診断結果を出力する処理
'ABC'.charCodeAt(0);
名前の全文字のコードの整数値を足し合わせる
足した結果を、診断結果のパターンの数で割った余りを取得する
余りを診断結果の配列の添え字として、診断結果の文字列を取得する

*/

function assessment(userName) {
    let sumOfCharCode = 0;
    for (let i = 0; i < userName.length; i++) {
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }

    const index = sumOfCharCode % answers.length;
    let result = answers[index];

    result = result.replace(/\{userName\}/g, userName);
    return result;
}

console.assert(
    assessmen('太郎') ===
    '太郎のいい所は決断力です。太郎がする決断にいつも助けられる人がいます', '診断結果の分言の特定の部分を名前に置き換える処理が正しくありません。'
);
console.assessment(
    assessment('太郎') === assessment('太郎'), '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
);
