const emoji = require("emoji-emotion");

const sentence = process.argv.slice(2);

function replaceWords(sentence){
    let newArr = [];
    for(word of sentence){
        if (isEmoji(word)){
            newArr.push(emojiFinder(word))
        }else{
            newArr.push(word);
        }
    }
    return newArr.join(' ');
}

function isEmoji(word){
    const emojiwords = emoji.map(x => x.name);//.filter(y => y = word);
    if (emojiwords.includes(word)){
        return true;
    }
    return false;
}

function emojiFinder(word){
    const emojiEntry = emoji.filter(x => x.name == word);
    return emojiEntry[0].emoji;
}

console.log(replaceWords(sentence));