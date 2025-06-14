export const add = (numbers: string) => {
    if (numbers === "") return 0;

    return numbers
        .split(",")
        .map(n => parseInt(n))
        .reduce((sum, n) => sum + (isNaN(n) ? 0 : n), 0);
}