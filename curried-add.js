function curriedAdd(total) {
    if(total === undefined) return 0

    return function sumNumbers(num){
        if(num === undefined) return total
        total += num;
        return sumNumbers;
    };
};

module.exports = { curriedAdd };
