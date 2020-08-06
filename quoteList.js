function getQuote() {
    const quotes = [
        "Hey panini head, are you listening to me?",
        "This is a really tough decision cause you`re both crap.",
        "Honestly, chimichanga... chimi chuck it in the bin.",
        "I'm Gordon Ramsay, for goodness sake: people know I'm volatile.",
        "For what we're about to eat, may the Lord make us truly not vomit.",
        "I have never ever, ever, ever met someone I believe in as little as you."
    ];
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    return quotes[quoteIndex];
}

module.exports = {
    getQuote
}