<template>
    <div style="margin-top:50px;">
           <!-- tabbar -->
      <nav class="mui-bar mui-bar-tab">
			<router-link to="/" class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/fenlei" class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
				<span class="mui-tab-label">分类</span>
			</router-link>
			<router-link to="/shopping" class="mui-tab-item" href="#tabbar-with-contact" @click.native="verify_login('/shopping')">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="/mymessage" class="mui-tab-item" href="#tabbar-with-map" @click.native="verify_login('/shopping')">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
    <!-- tabbar  end -->
    </div>
</template>
<script>
export default {
	data(){
		return {
			phone:"",
		}
	},
	methods:{
		verify_login(e){
            var url="http://127.0.0.1:3000/verify"
            this.axios.get(url).then((resu)=>{
								// console.log(resu)
								if(resu.data==""){
									this.$router.push("/login?url="+e)
								}else{
									// 保存手机号
									this.phone=resu.data
									// console.log(this.phone)
								}
            })
        }
	},
	created(){
		var link=document.getElementsByClassName("mui-tab-item");
		for(var item of link){
			item.style.background="red"
			item.onclick=()=>{
				document.getElementsByClassName("mui-active")[0].className=""
				item.className="mui-active";
			}
		}
	}
}
</script>

