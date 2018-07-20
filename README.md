# staticServer
使用Node搭建一个静态服务器

## 介绍
使用HTTP模块、URL模块、Path模块、Fs模块创建了一个静态服务器。  
其中，使用HTTP模块创建了一个静态服务器，使用URL模块的`url.parse`去掉get传值，使用Path模块的`path.extname`获取后缀名，使用Fs模块读取文件，根据请求地址的`pathname`读取相应文件并写出，根据后缀返回相应的`Content.Type`

## 遇到问题: 
（1） 在getmime.js中读取`mime.json`时应该使用`fs.readFileSync`同步同步读取  
（2）在getmime.js中使用`fs.readFileSync`同步读取`mime.json`时的路径错误  
因为getmime.js要被引入到services.js中，所以getmime.js中的地址应相对于services.js进行设置

## 使用:  
`node services`