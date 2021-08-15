export function delay<T>(returned: T, time: number = 2000) {
    let promise = new Promise<T>((res) => {
        setTimeout(() => {
            res(returned)
        }, time)
    })
    return promise
}
