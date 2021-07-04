function clicked() {
    console.log("hello world");
    let quotes = ["One day, in retrospect, the years of struggle will strike you as the most beautiful. (Sigmund Freud)",
        '“Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind. (Bernard M. Baruch)”',
        "In every man’s heart there is a secret nerve that answers to the vibrations of beauty.( Christopher Morley)",
        "“We must not allow other people’s limited perceptions to define us.(Virginia Satir)”",
        "Genius is one percent inspiration and ninety-nine percent perspiration. (Thomas Edison)",
        "Difficulties increase the nearer we get to the goal. (Johann Wolfgang von Goethe)",
        "Fate is in your hands and no one elses. (Byron Pulsifer)",
        "Be the chief but never the lord. (Lao Tzu)",
        "Nothing happens unless first we dream. (Carl Sandburg)",
    ]

    let quotes_random = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('output').innerHTML = quotes_random;
}
