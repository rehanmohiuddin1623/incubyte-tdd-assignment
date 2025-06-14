export const add = (numbers: string) => {
    if (numbers === "") return 0;


    const parts = numbers.split(/[\n,]/);

    return parts.reduce((sum, num) => sum + parseInt(num), 0);
}