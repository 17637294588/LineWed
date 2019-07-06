<template>
    <div>
            <p>我是父组件，传递消息给子组件,需要传递的消息在下面输入：</p>
            <p><input type="text" v-model="message"/></p>
            <child :message="message"></child>
    </div>
</template>
<script>
import child from './Child'
export default {
    data(){
      return{
        message:''
      }
    },

    components : {
      'child': child
    }
}
</script>