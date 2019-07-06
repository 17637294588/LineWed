<template>
    <div>
        
    </div>
</template>
<script>
    export default {
        
    
        mounted() {
        setInterval(this.send,8000)
    
    },
    methods: {  
        send:function(){
            // 生成socket对象    ws://localhost:8000/api/test_websocket
    var socket = new WebSocket("ws://127.0.0.1:8000/api/test_websocket");
    socket.onopen = function(){
        
        console.log('成功连接上websocket')    // 成功连接上websocket
    };

    socket.onmessage = function (e) {
        var data = JSON.parse(e.data)
        alert('现在时间：'+data.DateNow)
        console.log('返回的message: ' + e.data);//打印服务端返回的数据
        };

    socket.onclose=function(e){
        console.log('关闭websocket'+e);
        socket.close(); //关闭TCP连接
    };

    if (socket.readyState == WebSocket.OPEN){
            socket.onopen();
        }
        }
    },
}

   

    

</script>