export function ifDataFound(data: any, fetching: boolean) {
    if (!fetching && data && data[Object.keys(data)[0]]) {
        return true
    } else return false
}
