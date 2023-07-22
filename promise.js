const delay = (milliseconds) => {
    return new Promise((resolve, reject) => {
        if (milliseconds < 0) {
            reject(new Error("Delay time must be a positive number."));
        }
  
        setTimeout(() => {
            resolve(`Operation completed after ${milliseconds} ms.`);
        }, milliseconds);
    });
};

delay(-2000)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
