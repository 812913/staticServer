
var http=require("http");
var fs=require("fs");
var path=require("path");
var url=require("url");
var mimeModule=require("./module/getmime");

var pathName='';
var extname='';
var mime='';
http.createServer(function(req,res){//创建服务器
    pathName=url.parse(req.url).pathname;//去掉get传值
 // console.log(pathName);
    extname=path.extname(pathName);//获取后缀名
   // console.log(extname);

    if(pathName!=="/favicon.ico"){
        if(pathName=="/"){
            pathName="/index.html";
        }
         fs.readFile("./static"+pathName,(error,data)=>{
            if(error){
                fs.readFile("./static/404.html",(error,data404)=>{
                    if(error){
                        console.log(error);
                    }else{
                        res.writeHead(404,{"Content-Type":"text/html;charset='utf-8'"});//设置响应头
                        res.write(data404);
                        res.end();
                    }
                })
            }else{
                mime=mimeModule.getMime(fs,extname);
                res.writeHead(200,{"Content-Type":""+mime+";charset='utf-8'"});//设置响应头
                res.write(data);
                res.end();
            }
        });
    }
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');