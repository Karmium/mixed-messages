const listForCompliments = ['being supported by you', 'helping you', 'huggin you', 'making you laugh', 'when you kiss me on the forehead','your eyes', 'your hair', 'your nose', 'your smile', 'your butt', 'your boobs', 'your body', 'your laughter', 'your humour', 'your way of thinking', 'your walk', 'your voice', 'your legs', 'your feet', 'your calves', 'your collarbone', 'your food', 'your care', 'your passion'];
const listForNegative = ['dealing with your bullshit', 'speaking to you', 'when you sob annoyingly', 'when you make fun of me', 'spending time with you', 'your mumbling', 'your stupid ideas', 'your jokes', 'your fat ass', 'your relatives', 'your movie taste', 'the music you listen to'];
const synonymsForLike = ['like', 'love', 'fancy'];
const synonymsForDislike = ['dislike', 'hate', 'can\'t stand', 'detest'];



const randomSentence = () => {
    let randCompliment = listForCompliments[Math.floor(Math.random()*listForCompliments.length)];
    let randNegative = listForNegative[Math.floor(Math.random()*listForNegative.length)];
    let randLike = synonymsForLike[Math.floor(Math.random()*synonymsForLike.length)];
    let randDislike = synonymsForDislike[Math.floor(Math.random()*synonymsForDislike.length)];

    return `I ${randLike} ${randCompliment} but I ${randDislike} ${randNegative}.`
};

console.log(randomSentence());