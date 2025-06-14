export const add = (numbers: string) => {
    if (numbers === "") return 0;

    const parts = numbers.split(",");

    return parts.reduce((sum, num) => sum + parseInt(num), 0);
}