<template>
    <div>
            <input id="chat-message-input" type="text" size="100" v-model="test"><br>
            <button @click="sendmessage">提交</button>
    </div>
</template>
<!-- <script>
    // 生成socket对象    ws://localhost:8000/api/test_socket
    var socket = new WebSocket("");
    socket.onopen = function(){
        console.log('成功连接上websocket')    // 成功连接上websocket
    };

    socket.onmessage = function (e) {
        console.log('返回的message: ' + e.data);//打印服务端返回的数据
        };

    socket.onclose=function(e){
        console.log('关闭websocket'+e);
        socket.close(); //关闭TCP连接
    };

    if (socket.readyState == WebSocket.OPEN){
            socket.onopen();
            }

    window.s = socket;

export default {
    data:function(){
        return{
            test:""
        }
    },
    methods: {
        // 生成socket对象
        sendmessage:function(){
            window.s.send(this.test);

        }
    
    },
}
</script> -->