<template>
    <div>
        <!-- 顶部 -->
        <header class="container">
            <span class="mui-icon mui-icon-arrowleft" @click="fn"></span>
            <span>购物车</span>
            <span>编辑全部</span>
        </header>
        <!-- body -->
        <div class="container2">
            <div class="title mui-input-row mui-checkbox mui-left">
                <input type="checkbox" class="check lef">
                <span>海尔乐家旗舰店</span>
            </div>
            <div class="goods mui-input-row mui-checkbox mui-left">
                <!-- 1.kuang -->
                <input type="checkbox" name="1" class="check lef" style="margin-top:2.4rem">
                <!-- 2.img -->
                <img src="https://img.lecuntao.com/data/upload/shop/store/goods/723/2016/06/14/723_05192388081634870_360.jpg" alt="">
                <!-- 3。div -->
                <div class="check_main">
                    <p>VJJB V1金属双动圈HIFI发烧耳机入耳式魔音重低音通用耳塞式手机 v1不带唛</p>
                    <span class="goods_choose">
                        <span>版本</span>
                        <span>v1不带唛</span>
                    </span>
                    <div class="goods_price">
                        <div class="goods_price_left">
                            <span>￥198.00</span>
                            <span>￥99.00</span>
                        </div>
                        <div class="godos_price_right">
                            <span @click="count(-1)">-</span>
                            <span>{{num}}</span>
                            <span @click="count(1)">+</span>
                        </div>
                    </div>
                </div>
            
            </div>
            <!--结算块  -->
            <div class=" mui-input-row mui-checkbox mui-left pay">
                <div class="pay_l">
                    <input type="checkbox" style="margin-left:-1rem;margin-top:0.4rem">
                    <span style="margin-left:2.5rem">全选</span>
                </div>
            </div>
        </div>
        <tabbar></tabbar>
    </div>
</template>
<script>
import tabbar from "./tabbar.vue"
export default {
    data(){
        return {
            url:"/shopping",
            num:1
        }
    },
    methods:{
        verify_login(){
            var url="http:/127.0.0.1:3000/verify"
            this.axios.get(url).then((resu)=>{
                console.log(resu.data)
            })
        },
        count(e){
            this.num+=e;
            if(this.num<=0){
                this.num=1;
            }
        },
        fn(){
            window.history.go(-1)
        }
    },
    created(){

    },
    components:{
		tabbar
	}
}
</script>
<style scoped>
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;        
    }
    input.lef{
        margin-left: -1rem;
    }
    .container{
        width:100%;
        font-size: 18px;
        height:3rem;
        background:#fff;    
        line-height: 3em;
        color:#4c4c4c;
        display:flex;
        justify-content: space-between;
        border-bottom: 0.08rem solid #ccc;
    }
    .container span:first-child{
        margin-left: 0.5rem;
        margin-top:0.8rem;
    }
    .container span:last-child{
        margin-right:0.5rem;
    }
    .container2>div:first-child{
        width:100%;
        height:2.5rem;
        background:#fff;
        line-height: 2.5rem;
        position: relative;
    }
    .check{
        width:1.4rem;
        height:1.4rem;
        background:#fff;
        margin-top:0.1rem;
        margin-left:0.3rem;
    }
    .title>span{
        margin-top:1rem;
        position: absolute;
        top:-1rem;
        left:3rem;
    }
    .goods{
        width:100%;
        height:7.4rem;
        background:#f8f8f8;
        display:flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 0.3rem;
    }
    .goods>img{
        width:5.5rem;
        height:5.5rem;
    }
    .check_main{
        width:14rem;
        height:5.5rem;
    }
    .check_main>p{
        width:100%;
        height:2rem;
        line-height: 1rem;
        color:#333;
        font-size: 0.8rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .goods_choose{
        width:100%;
        height:0.5rem;
        font-size: 0.8rem;
        color:#808080;
        margin-left:.0.1rem;
        display: inline-block;
    }
    .goods_price{
        font-size: 0.8rem;
        display: flex;
        justify-content: space-around;
    }
    .goods_price_left{
        width:50%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items:flex-start;
    }
    .goods_price_left>span:first-child{
        height:0.9rem;
        font-size: 0.5rem;
        color:#808080;
        display: inline-block;
        text-decoration:line-through
    }
    .goods_price_left>span:last-child{
    font-size: 1.3rem;
    color:red;
    display: inline-block;
    }
    .godos_price_right{
        width:50%;
        float:right;
        text-align:right;
    }
    .godos_price_right>span{
        width:2rem;
        height:2rem;
        line-height: 2rem;
        background:#f0f0f0;
        display:inline-block;
        text-align:center;
    }
    .pay{
        width:100%;
        height:3rem;
        line-height: 3rem;
        background:#fff;
        position:fixed;
        left:0;
        bottom:3.2rem;    
    }
    .pay_l{
        float:left;
        font-size: 0.9rem;
        width:72%;
    }
</style>

