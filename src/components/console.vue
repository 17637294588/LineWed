<template>
    <div>
        <div class="console" id="terminal">{{mes}}</div>
    </div>
</template>

<script>
import { Terminal } from 'xterm'
import * as fit from 'xterm/lib/addons/fit/fit'
import * as attach from 'xterm/lib/addons/attach/attach'

Terminal.applyAddon(attach) 
Terminal.applyAddon(fit)
export default {
    name: 'Console',
  // props:接受父组件的数据
  props: {
    terminal: {
      type: Object,
      default: {},
      
    }
  },
  data () {
    return {
      term: null,
      terminalSocket: null,
      
    }
  },

  methods: {
      // 连接 webSocket
    runRealTerminal () {
      console.log('webSocket 连接成功')
    },
    errorRealTerminal (e) {
      console.log(e)
      console.log('报错')
    },
    closeRealTerminal () {
      console.log('webSocket 关闭')
    }
  },
  mounted() {
      // 获取 id=terminal 的div
    let terminalContainer = document.getElementById('terminal')

    // 初始化 xterm Terminal对象
    this.term = new Terminal(this.terminal)
    // 将最初的 div 放进到 xterm对象里
    this.term.open(terminalContainer)


    // 创建 webscket    ws://127.0.0.1:3000/terminals/
    this.terminalSocket = new WebSocket('ws://127.0.0.1:8000/api/terminals')
    this.terminalSocket.onopen = this.runRealTerminal     // 触动连接函数，显示连接
    this.terminalSocket.onclose = this.closeRealTerminal  // 触动关闭函数
    this.terminalSocket.onerror = this.errorRealTerminal  // 触动报错函数 
    
    this.term.attach(this.terminalSocket)  //attach：将已有的窗口关联到 websocket上
  },
  beforeDestroy () {
    this.terminalSocket.close()
    this.term.destroy()
  }

}
</script>


 <!-- 这是个子组件（页面终端窗口），将这个组件嵌套到父组件 WebSSH 里，WebSSH 接受到的数据将传给这个子组件 -->