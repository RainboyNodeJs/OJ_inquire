// require 类
/* 
 * Rq = rainboy request
 *
 * */

var http = require('http');

var Rq = function(url,cb) {

    this.options = {
        host: 'cojs.tk',
        port: 80,
        path: '/cogs/user/detail.php?uid=963',
        method: 'GET'
    };

    this.chunk = [];
    this.bufferLength = 0;
};



Rq.prototype.req = function(opt){
    opt = opt || this.options;
    
    /* 封装 request */
    var req = http.request(options,function(res){
        res.on('data',function(data){
            //console.log('BODY: ' +cb);
            this.bufferLength += data.length;
            chunk.push(data);
        });

        res.on('end',function(){
            /* 把chunck 转换 成对应的编码 */
            Buffer.concat(chunk,this.bufferLength);
        
        });
    });

    req.on('error',function(e){
        console.log('proble with request:'+e.message);
    });

    req.end();
};




