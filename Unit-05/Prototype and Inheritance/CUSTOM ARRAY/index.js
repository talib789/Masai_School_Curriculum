function myarr() {
    Object.defineProperty(this, "length", {
        value: 0,
        writable: true,
        enumerable: false,
    })
    this.length = arguments.length;

    for (let i = 0; i < arguments.length; i++) {
        this[i] = arguments[i]
    }

}
let arr = new myarr(1,2,3,4)
myarr.prototype.push = function (value) {
    this[this.length] = value;
    this.length++
}
myarr.prototype.pop = function () {
    delete this[this.length - 1]
    this.length--
}
myarr.prototype.top = function () {
     let index = this.length-1
     console.log(this[index])

}
myarr.prototype.print = function () {
    console.log(Object.values(this))
}
myarr.prototype.printreverse = function () {
    let reverse = []
    for (let i = this.length - 1; i >= 0; i--) {
        reverse.push(this[i]);   
    }
    console.log(Object.values(reverse))
}
myarr.prototype.sizeofarr = function () {
    console.log(this.length)
}

arr.push(5)
console.log(Object.values(arr))

arr.pop()
console.log(Object.values(arr))
arr.top()
arr.print()
arr.printreverse()
arr.sizeofarr()
