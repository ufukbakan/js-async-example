function doit(sec) {
    const startTime = Date.now();
    console.log(`This will return result after ${sec} seconds`);
    const isConditionFulfilled = (now) => now - startTime > sec * 1000;

    return new Promise((resolve, reject) => {
        const waitForCondition = ()=>{
            const now = new Date();
            isConditionFulfilled(now.getTime()) ? resolve(`Completed ${now}`) : setTimeout(waitForCondition, 50);
        }
        waitForCondition();
    })
}

function main() {
    console.log(`Started at ${new Date()}`);
    Promise.allSettled([doit(1), doit(2), doit(3)]).then(values => {
        console.log(values);
    });
}

main();
