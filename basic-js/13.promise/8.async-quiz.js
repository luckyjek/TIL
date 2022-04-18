
function fetchEgg(chicken){
    return Promise.resolve(`${chicken} => 🥚`);
}
function fryEgg(egg){
    return Promise.resolve(`${egg} => 🍳`)
}
function getChichen() {
    // return Promise.reject(new Error('치킨을 가지고 올 수 없음!'));
    return Promise.resolve(`🌵 => 🐓 `)
}

// async function makeFriedEgg() {
    // const chichen = await getChichen();
    // const fetchegg = await fetchEgg();
    // const fryegg = await fryEgg();
    // return console.log(chichen, fetchegg, fryegg);


    // return getChichen()
    // .catch(() => '🐔' )
    // .then(fetchEgg)
    // .then(fryEgg);
        // .then(console.log)
        // .then((result) => {
        //     console.log(result);
        //     return result;
        // })
// }
async function makeFriedEgg() {
    let chicken;
    try {
        chicken = await getChichen();
    } catch {
        chicken = '🐔';
    }
    const egg = await fetchEgg(chicken);
    return fryEgg(egg);
}

makeFriedEgg()
.then(console.log)

