class WordsCounter {
  count(phrase) {
    const wordsCount = {};
    const words = phrase
      .toLowerCase()
      .trim()
      .replace(/\n+|\t+|\s+/, " ")
      .split(" ");

    words.forEach(word => {
      if (typeof wordsCount[word] !== "number") {
        wordsCount[word] = 0;
      }

      wordsCount[word]++;
    });

    return wordsCount;
  }
}

module.exports = WordsCounter;
