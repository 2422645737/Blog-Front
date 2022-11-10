<template>
    <div>
        <Card v-for="(item,index) in article" :key="index" :article="item"></Card>
    </div>
</template>

<script>
import Card from './Card.vue'
export default {
    name:'Main',
    data(){
        return {
            article:[
                {type:'blog',id:0,tag:['音乐','生活'],cover:'https://gd-hbimg.huaban.com/f8e4669b1681703ac5697a119ef51e17f7d0872f551e8c-bT5Ut8',title:'Java内存管理'},
                {type:'blog',id:1,tag:['美术','生活'],cover:'https://gd-hbimg.huaban.com/f8e4669b1681703ac5697a119ef51e17f7d0872f551e8c-bT5Ut8',title:'Mysql优化'},
                {type:'blog',id:2,tag:['爱情','生活'],cover:'https://gd-hbimg.huaban.com/f8e4669b1681703ac5697a119ef51e17f7d0872f551e8c-bT5Ut8',title:'JVM调优'},
                {type:'talk',id:3},
            ]
        }
    },
    components:{
        Card
    }

}
</script>

<style>

</style>