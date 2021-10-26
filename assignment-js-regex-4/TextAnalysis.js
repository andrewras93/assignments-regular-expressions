export class TextAnalysis {

    constructor(string) {
        this.string = string
        this.wordList = []
        this.letterFrequency = {}
    }

    setWordList(words) {
        return this.wordList.push(words);
    }

    getTimesUsed(array, key) {
        array.forEach(element => {
            key[element] = (key[element] || 0) + 1;
        });
    }
}