export default function formatPrice(price){
    let prevPrice = price
    let formats = Array.of(1_000_000, 1000)
    let result = formats.reduce((res, curFormat) => {
        let item = Math.trunc(prevPrice / curFormat)
        prevPrice -= item * curFormat
        res += item === 0 ? '' : `${item} `
        return res;
    }, '')
    result += prevPrice % formats[formats.length-1];
    return `${result} ₴`
}