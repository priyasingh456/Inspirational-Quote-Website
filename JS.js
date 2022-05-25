const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");
let data = "";
let qd = "";

const getNewQuotes = () => {
    let num = Math.floor(Math.random() * 1000);
    qd = data[num];
    quote.innerText = `${qd.text}`;
    (qd.author == null) ? (author.innerText = "unKnown") : (author.innerText = `${qd.author}`);
};

const getQuote = async () => {
    const api = "https://type.fit/api/quotes";
    try{
        let res = await fetch(api);
        data = await res.json(); 
        getNewQuotes();

    } catch(error){}
};

btn.addEventListener('click', getNewQuotes);
getQuote();