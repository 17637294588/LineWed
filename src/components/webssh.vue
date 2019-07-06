<template>
    <div class="container">

            <my-terminal :terminal="terminal" ref="xterm"></my-terminal>
    </div>
</template>
<script>
import console from './Console'  // 实现组件间通信
export default {
    data(){
        return{
            mes:'ping',
            terminal:{
                rows: 50,
            }
        }
    },
    mounted() {
        setInterval(this.send_ping,8000)
    },

    methods: {
        send_ping:function(){
            this.$refs.xterm.term.write(this.mes+'Enter')
        }
    },
    // 将父组件连接到子组件
    components:{
        'my-terminal':console
    }
}
</script>
<style scoped>
</style>

<!-- 这是一个父组件，将接受到的信息传给子组件  props 的接受父组件信息 -->