<template>
<div>
    <el-card class="box-card">
        <blog_card></blog_card>
    </el-card>
</div>
</template>

<script>
import blog_card from './Blog_Card.vue'
import talk_card from './Talk_Card.vue'
export default {
    name: 'Card',
    components:{
        blog_card,
        talk_card
    },
    props: ['article']
}
</script>

<style lang="less" scoped>
/* 标签样式 */
.el-tag{
    margin-right: 10px;
    color: black;
    border-radius: 13px;

}
/* 文章标题样式 */
.title{
    background-color: red;
    font-size: 19px;
    text-align: left;
}

/* 标签样式 */
.tag{
    /* background-color: green; */
    text-align: left;
}
/* 封面样式 */
.cover{
    background-color: blanchedalmond;
}
.cover > img{
    background-repeat: no-repeat;
    width: 60px;
    height: 60px;
}
/* 摘要样式 */
.summary{
    background-color: aqua;
}
.footer{
    background-color: chartreuse;
}
.box-card {
    margin-bottom: 10px;
}
/deep/.el-card__body{
    padding:8px
}

</style>