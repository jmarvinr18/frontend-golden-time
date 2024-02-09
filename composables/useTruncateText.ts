
export default function (text: any, numberOfCharcters: number = 150) {
    if (text != undefined) {
        var st = text.substring(0, numberOfCharcters)
        if (text.length <= numberOfCharcters) {
            return st
        } else {
            return st + "..."
        }

    }
}