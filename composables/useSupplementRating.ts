
export default function (ratings: any) {

    if (ratings != undefined || ratings != null) {
        var numberInarray = ratings.toString().split('.')
        var wholeNumber = numberInarray[0]
        var decimalNumber = numberInarray[1]
        var totalStars = 5
        var starsArr = []
        for (let i = 0; i < wholeNumber; i++) {
            starsArr.push("bi-star-fill")
        }
        if (decimalNumber != undefined) {
            if (decimalNumber >= 5 || decimalNumber <= 9) {
                starsArr.push("bi-star-half")
            }
        }
        for (let i = 0; i < (decimalNumber == undefined ? totalStars : totalStars - 1) - wholeNumber; i++) {
            starsArr.push("bi-star-fill text-light")
        }
        return starsArr
    }

    if (ratings == null){
        var totalStars = 5
        var starsArr = []
        for (let i = 0; i < totalStars; i++) {
            starsArr.push("bi-star-fill text-light")
        }
        return starsArr
    }
}