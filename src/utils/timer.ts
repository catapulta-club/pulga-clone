export const secondsToTime = (secounds: number) => {
    return new Date(secounds * 1000).toISOString().substr(11,8)
}