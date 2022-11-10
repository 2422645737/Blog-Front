<template>
<div>
    <el-card class="box-card">
        <blog_card v-show="article.type == 'blog'" :article="article"></blog_card>
        <talk_card v-show="article.type == 'talk'" :article="article"></talk_card>
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
.box-card {
    margin-bottom: 10px;
}
/deep/.el-card__body{
    padding:8px
}

</style>