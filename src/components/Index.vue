<template>
    <div>
        <h3>首页</h3>
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
    
    
    <div class="row">
        <div class="col-md-9 layout-body">
            
    <div class="content">
        <div class="row course-cates">
            <div class="col-md-1 course-cates-title">类别：</div>
            <div class="col-md-11 course-cates-content">
                <a class="active" href="/courses/?course_type=all&amp;tag=all">全部</a>
                <a class="" href="/courses/?course_type=all&amp;tag=all&amp;fee=free">免费</a>
                <a class="" href="/courses/?course_type=all&amp;tag=all&amp;fee=limited">限免</a>
              
            </div>
        </div>
        <div class="row course-cates">
            <div class="col-md-1 course-cates-title">标签：</div>
            <div class="col-md-11 course-cates-content">
                <a class="active" href="/courses/?course_type=all&amp;fee=all">全部</a>
                <!-- href="/courses/?course_type=all&amp;tag=Python&amp;fee=all" -->
                    <a @click="check_cate(i.id)" class="" v-for="i in cate_list">
                        {{i.name}}
                    </a>
                
                    
                
            </div>
        </div>
    </div>
    <div class="content position-relative">
        <ul class="nav nav-tabs" role="tablist">
            <li class="active"><a href="/courses/?course_type=all&amp;tag=all&amp;fee=all">已上线</a></li>
            <li class=""><a href="/courses/?status=preview" class="stat-event" data-stat="preview_course">即将上线</a></li>
        </ul>
        <div class="clearfix"></div>
        <div class="courses-sort">
            <a  href="/courses/?course_type=all&amp;tag=all&amp;fee=all&amp;order=latest">最新</a>
            /
            <a  href="/courses/?course_type=all&amp;tag=all&amp;fee=all&amp;order=hotest">最热</a>
        </div>
        <div class="search-result"></div>
        <div class="row">
        
            
            


<div class="col-md-4 col-sm-6  course"  v-for="c in course_list">
        <!-- <a :href="'http://127.0.0.1:8080/#/detail?goods_sid='+sku.id"> -->
    <a class="course-box" :href="'http://127.0.0.1:8080/show?id='+c.id">
       
        <div class="sign-box">
            
            
            
            <i class="fa fa-star-o course-follow pull-right"
                data-follow-url="/courses/63/follow"
                data-unfollow-url="/courses/63/unfollow"  style="display:none"  ></i>
            
        </div>
        <div class="course-img">
            
            <img :src="c.image">
            
        </div>
        
        <div class="course-body">
            <span class="course-title" data-toggle="tooltip" data-placement="bottom" title="新手指南之玩转实验楼">{{c.name}}</span>
        </div>
        <div class="course-footer">
			<span class="course-per-num pull-left">
                <i class="fa fa-users"></i>
                
                {{c.watched}}
                
			</span>
            
                
            
        </div>
   
    </a>
</div>

            
            


            
        
        
        </div> 
        

<nav class="pagination-container">
    <ul class="pagination">
        
        <li class="disabled">
            <a href="#" aria-label="Previous">
                <span aria-hidden="true">上一页</span>
            </a>
        </li>
        
        
        
        <li class="active">
            <a href="/courses/?course_type=all&amp;tag=all&amp;fee=all&amp;page=1">1</a>
        </li>
        
        
        
        <li class="">
            <a href="/courses/?course_type=all&amp;tag=all&amp;fee=all&amp;page=2">2</a>
        </li>
        
        
        
        <li class="">
            <a href="/courses/?course_type=all&amp;tag=all&amp;fee=all&amp;page=3">3</a>
        </li>
        
        
        
        <li class="">
            <a href="/courses/?course_type=all&amp;tag=all&amp;fee=all&amp;page=4">4</a>
        </li>
        
        
        
        <li class="">
            <a href="/courses/?course_type=all&amp;tag=all&amp;fee=all&amp;page=5">5</a>
        </li>
        
        
        
        <li>
            <a href='#'>...</a>
        </li>
        
        
        
        <li class="">
            <a href="/courses/?course_type=all&amp;tag=all&amp;fee=all&amp;page=24">24</a>
        </li>
        
        
        
        <li class="">
            <a href="/courses/?course_type=all&amp;tag=all&amp;fee=all&amp;page=25">25</a>
        </li>
        
        
        
        <li class="">
            <a aria-label="Next" href="/courses/?course_type=all&amp;tag=all&amp;fee=all&amp;page=2">
                <span aria-hidden="true">下一页</span>
            </a>
        </li>
        
    </ul>
</nav>


    </div>

        </div>
        <div class="col-md-3 layout-side">
            
	



<div class="panel panel-default panel-userinfo">
    <div class="panel-body body-userinfo">
        <div class="media userinfo-header">
            <div class="media-left">
                <div class="user-avatar">
                    
                     <a class="avatar" href="#sign-modal"  data-toggle="modal" data-sign="signin">
                         <img class="circle" src="../../static/img/logo-grey.png">
                     </a>
                      
                </div>
             </div>
            <div class="media-body">
                
                 <span class="media-heading username">欢迎来到实验楼</span>
                 <p class="vip-remain">做实验，学编程</p>
                 
            </div>
        </div> 
        
        <div class="row userinfo-data">
            
            <hr>
            <div class="btn-group-lr">
            <a href="#sign-modal" type="button" class="btn btn-success col-md-5 col-xs-6 login-btn" data-toggle="modal" data-sign="signin">登录</a>
            <a href="#sign-modal" type="button" class="btn btn-success col-md-5 col-xs-6 col-md-offset-1 register-btn" data-toggle="modal" data-sign="signup">注册</a>
            </div>
            
        </div>
        
        <div class="userinfo-footer row">
            <div class="col-md-6 col-xs-6 pos-left">
                
                <a href="#sign-modal" data-toggle="modal" data-sign="signin"><span class="glyphicon glyphicon-bookmark"></span> 加入私有课</a>
                
            </div>
            <div class="col-md-6 col-xs-6 pos-right">
                <a href="/contribute" target="_blank"><span class="glyphicon glyphicon-send"></span> 我要投稿</a>
            </div>

            <div id="join-private-course" class="modal fade words-ctrl" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">加入私有课</h4>
                        </div>
                        <div class="modal-body">
                            <div style="margin:15px 0; font:16px;">输入教师提供的私有课程码可以加入教师的私有课程。</div>
                            <form id="private-course-form" method="POST" action="/courses/join">
                                <div class="form-group">
                                    <label for="code">邀请码</label>
                                    <input class="form-control" id="code" name="code" type="text" value="">
                                    <input name="_csrf_token" type=hidden value="1483780974##87f89328c5616669f00302a263fe9061bb852818">
                                </div>
                            </form>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                            <button type="button" class="btn btn-primary" onclick="document.getElementById('private-course-form').submit();">确定</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="sidebox">
    
	<div class="sidebox-header">
		<h4 class="sidebox-title">最热路径</h4>
	</div>
	<div class="sidebox-body course-content side-list-body">
        <a href="/paths/python"><img style="width:25px;height:25px" src="../../static/img/1471513769430.png"> Python 研发工程师</a>
        <a href="/paths/bigdata"><img style="width:25px;height:25px" src="../../static/img/1471513926288.png"> 大数据工程师</a>
        <a href="/paths/cpp"><img style="width:25px;height:25px" src="../../static/img/1471513793360.png"> C++ 研发工程师</a>
        <a href="/paths/security"><img style="width:25px;height:25px" src="../../static/img/1471513867033.png"> 信息安全工程师</a>
        <a href="/paths/linuxsys"><img style="width:25px;height:25px" src="../../static/img/1471514004752.png"> Linux 运维工程师</a>
	</div>
    
</div>

<div class="side-image side-qrcode">
    <img src="../../static/img/ShiyanlouQRCode.png">
    <div class="side-image-text">关注公众号，手机看教程</div>
</div>

        </div>
    </div>
</div>


	<div class="modal fade" id="invite-user" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title">邀请好友，双方都可获赠实验豆！</h4>
				</div>
				<div class="modal-body">
                    
                        <p><h4><a href="#sign-modal" data-toggle="modal" data-sign="signin">登录</a>后邀请好友注册，您和好友将分别获赠3个实验豆！</h4></p>
                    
					<div id="msg-modal"></div>
				</div>
			</div>
		</div>
	</div>

	<div class="modal fade" id="flash-message" tabindex="-1" role="dialog">
		<div class="modal-dialog" rolw="document">
		</div>
	</div>
	<div class="modal fade" id="modal-message" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title">注意</h4>
				</div>
				<div class="modal-body">
				</div>
				<div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary confirm" data-dismiss="modal">确定</button>
				</div>
			</div>
		</div>
	</div>
    

    
    

	
		
			
		
	

    <div class="modal fade" id="sign-modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
            <button type="button" class="close-modal" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <div class="modal-body">
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active">
                        <a href="#signin-form" aria-controls="signin-form" role="tab" data-toggle="tab">登录</a>
                    </li>
                    <li role="presentation">
                        <a href="#signup-form" aria-controls="signup-form" role="tab" data-toggle="tab">注册</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active" id="signin-form">
                        <form action="/login" method="post">
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i class="fa fa-envelope" style="margin:0;"></i>
                                    </div>
                                    <input type="email" name="login" class="form-control" placeholder="请输入邮箱">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i class="fa fa-lock" style="margin:0;"></i>
                                    </div>
                                    <input type="password" name="password" class="form-control" placeholder="请输入密码">
                                </div>
                            </div>
                            <div class="form-inline verify-code-item" style="display:none;">
                                <div class="form-group">
                                    <div class="input-group">
                                        <input type="text" name="captcha_v" class="form-control" placeholder="请输入验证码">
                                    </div>
                                </div>
                                <img class="verify-code" src="" source="https://www.shiyanlou.com/captcha.gif">
                            </div>
                            <div class="form-group remember-login">
                                <input name="remember" type="checkbox" value="y"> 下次自动登录
                                <a class="pull-right" href="../reset_password/index.html">忘记密码？</a>
                            </div>
                            <div class="form-group">
                                <input class="btn btn-primary" name="submit" type="submit" value="进入实验楼">
                            </div>
                            <div class="form-group widget-signin">
                                <span>快速登录</span>
                                <a href="/auth/qq?next="><i class="fa fa-qq"></i></a>
                                <a href="/auth/weibo?next="><i class="fa fa-weibo"></i></a>
                                <a href="/auth/weixin?next="><i class="fa fa-weixin"></i></a>
                                <a href="/auth/github?next="><i class="fa fa-github"></i></a>
                                <a href="/auth/renren?next="><i class="fa fa-renren"></i></a>
                            </div>
                            <div class="form-group error-msg">
                                <div class="alert alert-danger" role="alert"></div>
                            </div>
                        </form>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="signup-form">
                        <form action="/register" method="post">
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i class="fa fa-envelope" style="margin:0;"></i>
                                    </div>
                                    <input type="email" name="email" class="form-control" placeholder="请输入邮箱">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i class="fa fa-lock" style="margin:0;"></i>
                                    </div>
                                    <input type="password" name="password" class="form-control" placeholder="请输入密码">
                                </div>
                            </div>
                            <div class="form-inline">
                                <div class="form-group">
                                    <div class="input-group">
                                        <input type="text" name="captcha_v" class="form-control" placeholder="请输入验证码">
                                    </div>
                                </div>
                                <img class="verify-code" src="" source="https://www.shiyanlou.com/captcha.gif">
                            </div>
                            <div class="form-group">
                                <input class="btn btn-primary" name="submit" type="submit" value="注册">
                            </div>
                            <div class="form-group agree-privacy">
                                注册表示您已经同意我们的<a href="../privacy/index.html" target="_blank">隐私条款</a>
                            </div>
                            <div class="form-group widget-signup">
                                <span>快速注册</span>
                                <a href="/auth/qq?next="><i class="fa fa-qq"></i></a>
                                <a href="/auth/weibo?next="><i class="fa fa-weibo"></i></a>
                                <a href="/auth/weixin?next="><i class="fa fa-weixin"></i></a>
                                <a href="/auth/github?next="><i class="fa fa-github"></i></a>
                                <a href="/auth/renren?next="><i class="fa fa-renren"></i></a>
                            </div>
                            <div class="form-group error-msg">
                                <div class="alert alert-danger" role="alert"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


    <div id="base-data"
        
        
            data-flash="false"
            
        
        
        data-is-login=false
        
        data-is-jwt=true
        data-socket-url="wss://comet.shiyanlou.com"
        data-msg-user=""
        data-msg-system=""
    ></div>

    <div id="jinja-data"
        data-loginurl="/login"
        data-private-course-url="/courses/join"
        data-site-type="0">
    </div> 
    </div>
</template>
<script>
export default {
    data:function(){
        return{
            cate_list:"",
            course_list:"",
        }
    },
    mounted() {
        this.get_cate()
        this.get_course()
    },
    methods: {
        get_cate:function(){
            this.axios({
                url:'http://127.0.0.1:8000/api/get_cate_mes/',
                method:'get'
            }).then(res=>{
                if(res.data.code==200){
                    this.cate_list = res.data.mes
                }else{
                    alert(res.data.mes)
                }
            }).catch(error=>{
                console.log(error)
            })
        },
        get_course:function(){
            this.axios({
                url:'http://127.0.0.1:8000/api/get_course_mes/',
                method:'get'
                }).then(res=>{
                if(res.data.code==200){
                    console.log(res.data)
                    this.course_list = res.data.mes
                }else{
                    alert(res.data.mes)
                }
                }).catch(error=>{
                console.log(error)
            })
        },
        check_cate:function(cid){
            this.axios({
                url:'http://127.0.0.1:8000/api/change_cate/'+cid+'/',
                method:'get'
                }).then(res=>{
                    this.course_list = res.data.mes
                }).catch(error=>{
                    console.log(error)
            })
        }
    },
}
</script>
