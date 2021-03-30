const sayName = () => {
    console.log('Hello there Ed');
};

const sayAddress = () => {
    console.log('Johnson Street');
};

module.exports.sayName = sayName;
module.exports.sayAddress = sayAddress;