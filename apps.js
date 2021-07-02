function clicked() {
    console.log("hello world");
    let quotes = ["One day, in retrospect, the years of struggle will strike you as the most beautiful. Sigmund Freud",'“Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.”',"In every man’s heart there is a secret nerve that answers to the vibrations of beauty. Christopher Morley", "“We must not allow other people’s limited perceptions to define us.”", "“Do what you can, with what you have, where you are.”"]
    
    let quotes_random = quotes[Math.floor(Math.random() * quotes.length)]; 
    document.getElementById('output').innerHTML = quotes_random;
}
