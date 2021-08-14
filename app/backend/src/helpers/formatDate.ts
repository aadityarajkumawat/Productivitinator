export function formatDate(date: string): string {
    let formattedString = ''
    formattedString = `${date.substr(3, 2)}-${date.substr(0, 2)}-${date.substr(
        6,
        4,
    )}`
    return formattedString
}
