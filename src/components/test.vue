<template>
    <div>
        <button @click="fn">clickMe</button>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return {}
    },
    methods:{
        fn1(){
            var url="http://127.0.0.1:3000/ltc?phone=123&upwd=456"
            this.axios.get(url).then(result=>{
              console.log(result.data)
              Toast(result.data.msg)
            })
        },
        fn(){
            var url="http://127.0.0.1:3000/ltc?phone=123&upwd=456"
            this.axios.post(url).then(result=>{
              console.log(result.data)
              Toast(result.data.msg)
            })
        }
    }
}
</script>
