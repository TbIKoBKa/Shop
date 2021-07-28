function checkNumberLessTen(number) {
    if(number < 10)
        return `0${number}`
    return `${number}`
}

export default function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${checkNumberLessTen(day)}.${checkNumberLessTen(month)}.${year}`
}