// const multer = require("multer")
// const path = require('path')
// const storage = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,path.join(__dirname,"../public/profileImages"),function(error,success){
//             if(error){
//                 console.log(error);
//             }
//         })
//     },
//     filename:function(req,file,cb){
//         const name = Date.now()+"-"+file.originalname;
//         cb(null,name,function(error,success){
//             if(error){
//                 console.log(error);
//             }
//         })
//     }
// })
// const upload = multer({storage:storage})

