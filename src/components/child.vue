<template>
    <div>
            <p>我是子组件，接收来自父组件的信息：{{message}}</p>
    </div>
</template>
<script>
export default {
    props: ['message'],
}
</script>

<!-- // 这是一个子组件，将要接受父组件 falter 的值 -->