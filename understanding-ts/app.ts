// let userInfo: unknown;
// let userName: string;

// userInfo = "Max"
// // userName= userInfo;   //gives error as unknown is not matcheable to string

// if(typeof userInfo === "string"){  //extra check
//   userName=userInfo;
// }

//Ex: 2 Never DT

// function generateError(message: string, code: number): never{
//   throw({                                         //throw will cancel the script (not return anything)
//     message,
//     code
//   })
// }

// generateError("data not available",500);

