export default (min, max) =>
    (value) => {
        let wordsCount;
        if (!value.trim()) {
            wordsCount = 0;
        } else {
            wordsCount = value.split(' ').length;
        }

        return wordsCount > min && wordsCount < max;
    }