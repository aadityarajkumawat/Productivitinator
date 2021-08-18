export function formatDate(date: string): string {
    let formattedString = ''
    formattedString = `${date.substr(3, 2)}-${date.substr(0, 2)}-${date.substr(
        6,
        4,
    )}`
    return formattedString
}

export function getNumberOfDays(date1: string, date2: string): number {
    let lastDateObject = new Date(formatDate(date1))
    let timeAssignedObject = new Date(formatDate(date2))

    var differenceInTime =
        timeAssignedObject.getTime() - lastDateObject.getTime()
    var differenceInDays = differenceInTime / (1000 * 3600 * 24)
    return differenceInDays
}
