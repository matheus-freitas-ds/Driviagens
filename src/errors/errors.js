function notFound(resource = "Item") {
    return {
        type: "notFound",
        message: `${resource} not found!`
    }
}

function conflict(resource = "item") {
    return {
        type: "conflict",
        message: `This ${resource} has already been added!`
    }
}

function equalCities() {
    return {
        type: "conflict",
        message: `The origin and the destination can't be the same!`
    }
}

function wrongData() {
    return {
        type: "wrongData",
        message: `The fields are wrong!`
    }
}

function invalidFlightDate() {
    return {
        type: "wrongData",
        message: `Flight date needs to be greater than today!`
    }
}

function invalidTravelDate() {
    return {
        type: "wrongData",
        message: `bigger-date needs to be greater than smaller-date!`
    }
}

function invalidTravelDateAmount() {
    return {
        type: "badRequest",
        message: `bigger-date or smaller-date not found!`
    }
}

function tooManyResults() {
    return {
        type: "tooManyResults",
        message: `Exceeded 10 travels limit`
    }
}

export const errors = {
    notFound,
    conflict,
    wrongData,
    equalCities,
    invalidFlightDate,
    invalidTravelDate,
    invalidTravelDateAmount,
    tooManyResults
}