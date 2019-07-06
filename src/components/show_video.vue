<template>
    <div>

                <div class="test_two_box">
                        <video
                        id="myVideo"
                        class="video-js"
                        >
                        <!-- :src="'http://192.168.92.128:8000/live/'+miyao+'.m3u8'" -->
                        <source
                            
                        :src="'http://192.168.92.128:8000/live/'+miyao+'.m3u8'"
                           
                        >
          
                      
                        </video>
                    </div>
        
  
                  
               
                    
    </div>
</template>
<script>

    /* eslint-disable */
    export default {
    name: "TestTwo",

    data() {
        return {
            miyao:"",
        };
    },
    created() {
        this.get_id_mes();
    },
    mounted() { 
        
        this.initVideo();
        
    },
    methods: {

        get_id_mes:function(){
            var id = this.$route.query.id
            this.axios({
                url:'http://127.0.0.1:8000/api/chack_type/'+id+'/',
                method:'get'
                }).then(res=>{
                    console.log(res.data.detail_url)
                    alert('请保存直播秘钥-->'+res.data.detail_url)
                        
                    this.miyao = res.data.detail_url
                }).catch(error=>{
                    console.log(error)
            })
        },

        initVideo() {
        //初始化视频方法
        let myPlayer = this.$video(myVideo, {
            //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
            controls: true,
            //自动播放属性,muted:静音播放
            autoplay: "muted",
            //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            preload: "auto",
            //设置视频播放器的显示宽度（以像素为单位）
            width: "1200px",
            //设置视频播放器的显示高度（以像素为单位）
            height: "400px"
        });
        },

      
    }
    };



</script>
<style scoped>

</style>