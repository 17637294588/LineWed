<template>
    <div>   
        
        <div class="clearfix course-infobox-header">
                <h4 class="pull-left course-infobox-title">
                        
                        <span>{{course.name}}</span>
                        
                    </h4>
        </div>
        <div class="course-infobox-content">
                <p>摘要：{{course.discrib}}</p>
                
        </div>

          <button @click="open_comment">我要评论</button>
      

         <!-- 评论显示区 -->
         <h2>评论区</h2>
         <ul class="list-group">
                 <li class="list-group-item" v-model="up">
                     <span style="color:red;font-size: 16px"></span>
                     <button>回复</button>
                </li>
                <li class="list-group-item" v-model="down" v-show="is_show">
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:red;font-size: 14px">
                            
                        </span>
                 </li>
               
         </ul>
         <p>&nbsp;</p>
         <div v-show="is_show_container">
        <!-- 工具栏容器 -->
        <div id="toolbar-container"></div>
        
        <!-- 编辑器容器 -->
        <div id="editor">
            <p></p>
        </div>  
        <button @click="sub_content">提交</button>
        
      </div>
       
    </div>
</template>




<script>
    import CKEditor from '@ckeditor/ckeditor5-build-decoupled-document'
    import '@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn'
export default {
  data() {
    return {
      editor:null,//编辑器实例
      course:"",
      up:"",
      down:"",
      is_show:true,
      is_show_container:false,
      user:"",
     
   
    }
  },
  mounted() {
     this.initCKEditor()
     this.get_class_mes()
     this.setData(contentVal)
  },
   methods: {
      initCKEditor() {
        CKEditor.create(document.querySelector('#editor'), {
            
            language: 'zh-cn',
          ckfinder: {
            uploadUrl: 'http://127.0.0.1:8000/api/upload_img/'
            //后端处理上传逻辑返回json数据,包括uploaded(选项true/false)和url两个字段
          }
        }).then(editor => {
          const toolbarContainer = document.querySelector('#toolbar-container');
          toolbarContainer.appendChild(editor.ui.view.toolbar.element);
          this.editor = editor //将编辑器保存起来，用来随时获取编辑器中的内容等，执行一些操作
        }).catch(error => {
          console.error(error);
        });
     },

     // 获取课程数据
     get_class_mes:function(){
        var id = this.$route.query.id
        this.axios({
        url:'http://127.0.0.1:8000/api/get_course_detail/'+id+'/',
        method:'get'
        }).then(res=>{
            console.log(res.data)
            this.course = res.data.mes
        }).catch(error=>{
            console.log(error)
    })
     },
    
     // 提交评论
     sub_content:function(){
      var id = this.$route.query.id
      var data = this.editor.getData()
      alert(data)
      var zipFormData = new FormData()
      zipFormData.append('content',data)
      zipFormData.append('kecheng',id)
   
      
     },

     // 打开评论框
     open_comment:function(){
       this.is_show_container = true
       
     }
  }
}

</script>