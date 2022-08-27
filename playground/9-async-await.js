// async method always return the promise


const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject("Number must be Non-Negative");
            }
            resolve(a + b);
        }, 2000);
    });
}

const doWork = async () => {
    const sum = await add(1, 4);
    const sum2 = await add(sum, 3);
    const sum3 = await add(sum2, 32);
    return sum3;
}

doWork().then((result) => {
    console.log("Result: ", result);
}).catch((err) => {
    console.log("Error: ", err);
});