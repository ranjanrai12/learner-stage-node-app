// const geoCode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data);
//     },2000)
    
// }

// geoCode('california', (data) => {
//     console.log(data);
// });

const add = (a, b, callback) => {
    setTimeout(() => {
        const sum = a+b;
        callback(sum)
    }, 2000)
}

add(1,4, (sum) => {
    console.log(sum);
    
});
