// function myCallBack(text: string) {
//   console.log("inside myCallback " + text);
// }
// function callingFunction(initialText: string,
//   callback: (text: string) => void)
// {
//   callback(initialText);
// }
// callingFunction("myText", myCallBack);
function add(num) {
    console.log(num);
    return num;
}
function multiply(num, fn) {
    fn(num);
}
multiply(2, add);
