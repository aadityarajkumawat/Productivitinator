function isSingleDigit(x: number) {
    return x < 10
}

export function buildDateString(date: Date) {
    let dateString = ''

    let dateNumber = isSingleDigit(date.getDate())
        ? `0${date.getDate()}`
        : date.getDate().toString() // -> 09

    let month = isSingleDigit(date.getMonth() + 1)
        ? `0${date.getMonth() + 1}`
        : (date.getMonth() + 1).toString() // -> 02

    let year = date.getFullYear().toString() // -> 2021

    dateString = `${dateNumber}-${month}-${year}`
    return dateString
}
