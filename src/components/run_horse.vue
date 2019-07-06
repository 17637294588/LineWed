<template>
    <div>
            <div id="app">
                  
                    <h3 v-html="message"></h3>
                    <button @click="start">开始</button>
                    <button @click="stop">停止</button>
                </div>
        
    </div>
</template>
<script>
export default {
    data:function(){
        return{
            message: "这是一个跑马灯",
            sT: null, // 定时器实例
        
        }
    },
    methods: {
        work:function(){
        
                    
                
            this.message = this.message.substring(1) + this.message[0] 
            // 循环定时器所作的事情
            },
        start(){
            if (this.sT==null) { // 判断此时是否已有定时器开启
                console.log("开启定时器")
                this.sT = setInterval(this.work,400)
            } else {
                console.log("已经开启 不在开启")
            }

        },
        stop(){ // 关闭定时器 设置定时器变量为null
            console.log("关闭定时器")
            clearInterval(this.sT)
            this.sT = null
        }
    },
}
</script>