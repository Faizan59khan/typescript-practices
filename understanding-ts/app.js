// let userInfo: unknown;
// let userName: string;
// userInfo = "Max"
// // userName= userInfo;   //gives error as unknown is not matcheable to string
// if(typeof userInfo === "string"){  //extra check
//   userName=userInfo;
// }
//Ex: 2 Never DT
function generateError(message, code) {
    throw ({
        message: message,
        code: code
    });
}
generateError("data not available", 500);
