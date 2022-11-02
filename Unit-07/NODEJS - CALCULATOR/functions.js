const add = (a = 0, b = 0) => {
    return (+a) + (+b)
}
const sub = (a = 0, b = 0) => {
    return (+a) - (+b)
}
const mult = (a = 1, b = 1) => {
    return (+a) * (+b)
}
const divide = (a = 1, b = 1) => {
    return (+a) / (+b)
}

const sin = (a = 1) => {
    return Math.sin(+a)
}

const cos = (a) => {
    return Math.cos(+a)
}

const tan = (a = 1) => {
    return Math.tan(+a)
}
const test = (a = 1) => {
    console.log(a)
}

module.exports = { add, sub, mult, divide, sin, cos, tan, test }