<template>
        <div>
            <nav class="navbar navbar-default navbar-fixed-top header">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#header-navbar-collapse" aria-expanded="false">
                        <span class="sr-only">实验楼</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="../index.html">
                        <img src="../../static/img/logo_03.png">
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="header-navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li class="dropdown active">
                            <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">
                                课程
                                <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="active" href="../courses/index.html" >全部课程</a></li>
                                <li><a class="" href="../courses/index.html?status=preview" >即将上线</a></li>
                                <li><a class="" href="../developer/index.html">开发者</a></li>
                            </ul>
                        </li>
                        <li class="">
                            <a href="../paths/index.html">路径</a>
                        </li>
                        <li class="">
                            <a href="../questions/index.html">讨论区</a>
                        </li>
                        <li class=" bootcamp new-nav logo-1111">
                            <a href="../bootcamp/index.html">训练营</a>
                            
                        </li>
                        <li class=" new-nav logo-1111">
                            <a href="../vip/index.html">会员</a>
                            
                        </li>
                        
                    </ul>
        
                    
                    <div class="navbar-right btns">
                        <a class="btn btn-default navbar-btn sign-in" data-sign="signin" href="#sign-modal" data-toggle="modal">登录</a>
                        <a class="btn btn-default navbar-btn sign-up" data-sign="signup" href="#sign-modal" data-toggle="modal">注册</a>
                    </div>
                    
        
                    <form class="navbar-form navbar-right" action="../search" method="get" role="search">
                        <div class="form-group">
                            <input type="text" class="form-control" name="search" autocomplete="off" placeholder="搜索 课程/问答">
                        </div>
                    </form>
                </div>
            </div>
        </nav>
        
        
        
        
        
        
        <div class="container layout layout-margin-top">
            
        <ol class="breadcrumb">
            <li><a href="/courses/">全部课程</a></li>
            
            <li>
            
            <a href="/courses/?tag=Linux">Linux</a>
            
            </li>
            
            <li class="active">
                <a href="/courses/1">
                Linux 基础入门（新版）
                </a>
            </li>
        </ol>
        
            <div class="row">
                <div class="col-md-9 layout-body">
                    
            
            
        
            <div class="side-image side-image-mobile">
                <img src="https://dn-simplecloud.shiyanlou.com/ncn1.jpg?imageView2/0/h/300">
            </div>
            <div class="content course-infobox">
                <div class="clearfix course-infobox-header">
                    <h4 class="pull-left course-infobox-title">
                        
                        <span>{{course.name}}</span>
                        
                    </h4>
                    <div class="pull-right course-infobox-follow"
                        data-follow-url="/courses/1/follow"
                        data-unfollow-url="/courses/1/unfollow">
                        <span class="course-infobox-followers">{{course.learned}}</span>
                        <span>人关注</span>
                        
                        <i class="fa fa-star-o" data-next="/login?next=%2Fcourses%2F1"></i>
                        
                    </div>
                </div>
                <div class="clearfix course-infobox-body">
                    <div class="course-infobox-content">
                    <p>{{course.discrib}}</p>
                    
                    </div>
                    
                    <div class="course-infobox-progress">
                        
                        
                            
                            <div class="course-progress-new"></div>
                            
                        
                        
                            <div class="course-progress-new"></div>
                        
                            <div class="course-progress-new"></div>
                        
                        
                        <span>(0/17)</span>
                    </div>
                    
                    
                    
        
                    
                        <div class="pull-right course-infobox-price">
                        
                        </div>
                    
                </div>
                
                <div class="clearfix course-infobox-footer">
                    
                    <div class="pull-right course-infobox-learned">{{course.watched}} 人学过</div>
                </div>
                
            </div>
        
        
        <div class="content">
                <ul class="nav nav-tabs" role="tablist">
                    
                    <li role="presentation" class="active">
                        <a href="#labs" aria-controls="labs" role="tab" data-toggle="tab">实验列表</a>
                    </li>
                    
                    <li role="presentation">
                        <a href="#comments" class="stat-event" aria-controls="comments" role="tab" data-stat="course_comment" data-toggle="tab">课程评论(1194)</a>
                        <a @click="show_comment(course.id)">跳去评论页</a>
                    </li>
                    <li role="presentation">
                        <a href="#reports" class="stat-event" data-stat="course_report" aria-controls="reports" role="tab" data-toggle="tab">实验报告(3417)</a>
                    </li>
                    <li role="presentation">
                        <a href="#questions" class="stat-event" data-stat="course_question" aria-controls="questions" role="tab" data-toggle="tab">实验问答(1108)</a>
                    </li>
                </ul>
               
           
            <div class="tab-content" v-for="chapter in chapter_list">   
                <div role="tabpanel" class="tab-pane active" id="labs">
            
            <ul>
            <div class="lab-item ">
            <div class="lab-item-status">
                
                    <img src="../../static/img/lab-not-ok.png">
                
            </div>
          <div class="lab-item-index">{{chapter.name}}</div>


            <div class="lab-item-title" data-toggle="tooltip" data-placement="bottom" title="Linux下软件安装">
                
            </div>
            
            <div class="pull-right lab-item-ctrl">
                
                    
                    
                        
                    
                
            </div>
        </div>
        <li v-for="j in chapter.xiaojie" style="list-style-type:none;">
            <div class="lab-item ">
                    <span>{{j.order_id}}</span>
                    <div class="lab-item-index">
                    <a href="javascript:" @click="change_type(j.id)">
                        <span style="font: size 16;">{{j.name}}</span>
                    </a>
                </div>
                   
        
                    <div class="lab-item-title" data-toggle="tooltip" data-placement="bottom" title="Linux下软件安装">
                        
                    </div>
                    
                    <div class="pull-right lab-item-ctrl">
                        
                            
                            
                                
                            
                        
                    </div>
                </div>
        </li>
           
        
    </ul>
        
            
        
            
                    </div>
                    
        
        
                </div>
        </div>
            
        
        
                </div>
        <div class="col-md-3 layout-side">
                    
            <div class="side-image side-image-pc">
                <img src="../../static/img/ncn1.jpg?imageView2/0/h/300">
            </div>
            
        
        
            
                
        <div class="sidebox mooc-teacher">
            <div class="sidebox-header mooc-header">
                <h4 class="sidebox-title">课程教师</h4>
            </div>
            <div class="sidebox-body mooc-content">
                <a href="/user/20406" target="_blank">
                  <img src="../../static/img/Linux&c.png">
                </a>
                <div class="mooc-info">
                    <div class="name"><strong>Edward</strong> </div>
                    
                    <div class="courses">共发布过<strong>18</strong>门课程</div>
                </div>
                <div class="mooc-extra-info">
                    <div class="word long-paragraph">
                        资深程序员，5年Linux运维、企业级开发经验及数据库实战和教学经验。
                    </div>
                </div>
            </div>
            <div class="sidebox-footer mooc-footer">
                <a href="/teacher/20406" target="_blank">查看老师的所有课程 ></a>
            </div>
        </div>
        
            
            
            
            <div class="side-image">
            <a href="/vip" target="_blank">
                <img src="../../static/img/banner-vip.png">
            </a>
            </div>
            
            
            
            
            
            <div class="sidebox adv-course">
                <div class="sidebox-header">
                    <h4 class="sidebox-title">进阶课程</h4>
                </div>
                <div class="sideobx-body course-content">
                    
                    <a href="/courses/204">实用Linux Shell编程</a>
                    
                    <a href="/courses/2">Vim编辑器</a>
                    
                    <a href="/courses/68">Linux命令实例练习</a>
                    
                </div>
            </div>
            
            
            
        
                </div>
            </div>
        </div>
        
        
        
        
        
        </div>
        </template>
       <script>
       export default {
           data:function(){
               return{
                course:"",
                chapter_list:"",
       
               }
           },
           mounted() {
               this.get_course()
           },
           methods: {
            get_course:function(){
                var id = this.$route.query.id
                this.axios({
                url:'http://127.0.0.1:8000/api/get_course_detail/'+id+'/',
                method:'get'
                }).then(res=>{
                    console.log(res.data)
                    if(res.data.code==200){
                        this.course = res.data.mes
                        this.chapter_list = res.data.chapter_list
                      
                    }else{
                        alert(res.data.mes)
                    }
                    
                }).catch(error=>{
                    console.log(error)
            })
            },

            change_type:function(id){
                var r = this.$router
                this.axios({
                url:'http://127.0.0.1:8000/api/chack_type/'+id+'/',
                method:'get'
                }).then(res=>{
                    console.log(res.data)
                    if(res.data.choices==1){
                        r.push({'path':"/show_video?id="+id})
                      
                    }else{
                        alert('录播')
                    }
                    
                }).catch(error=>{
                    console.log(error)
            })
            },

            // 跳去评论页
            show_comment:function(id){
                var r = this.$router
                r.push({'path':"/ckenitor?id="+id})
            }
           },
       }
       </script>