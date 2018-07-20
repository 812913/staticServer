// exports.getMime=function(extname){//获取后缀名的方法
//     switch(extname){
//         case '.html':
//             return 'text/html';
//         case '.css':
//             return 'text/css';
//         case '.js':
//             return 'text/javascript';
//         default:
//             return 'text/html';
    
//     }
// }

exports.getMime=function(fs,extname){
    // fs.readFile("./mime.json",(error,data)=>{//3,1,2
    //     console.log(1);
    //     if(error){
    //         console.log(error);
    //         return false;
    //     }else{
    //         console.log(2);
    //          var Mimes=JSON.parse(data.toString());
    //         return Mimes[extname]||'text/html';
    //     }
    // })
    //     console.log(3);

    var data=fs.readFileSync('./mime.json');//同步读取，注意文件路径，该文件被services.js引入时，直接将该文件的所有内容引过去，则目录会出错
    var Mimes=JSON.parse(data.toString());
     return Mimes[extname]||'text/html';

}