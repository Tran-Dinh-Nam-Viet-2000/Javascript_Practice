const AGE = 4;
const NAME = "NAM VIET";

function showMessage(a, b){
    console.log(a + b);
}

function showName(name){
    console.log(name);
}

export default showMessage;
export {showName};
export {AGE as MY_AGE, NAME};