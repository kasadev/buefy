let uid = 0

export function getUid() {
    uid++
    return uid.toString(10)
}
