export const add = (numbers: string) => {
    if (numbers === "") return 0;

    let delimiter = /[\n,]/;
    let numberString = numbers;

    if (numbers.startsWith("//")) {
        const match = numbers.match(/^\/\/(.)\n([\s\S]*)$/);
        if (match) {
            delimiter = new RegExp(`[${match[1]}]`);
            numberString = match[2];
        }
        else {
            throw new Error("Invalid delimiter");
        }
    }

    const newNumbers = numberString.split(delimiter).map(n => parseInt(n));

    const negativeNumbers = newNumbers.filter(n => n < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed: ${negativeNumbers.join(",")}`);
    }

    return newNumbers.reduce((sum, n) => sum + n, 0);
}