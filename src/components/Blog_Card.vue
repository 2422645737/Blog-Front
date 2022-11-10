<template>
<div>
    <div class="title">
        {{article.title}}
    </div>
    <div class="tag" v-show="article.type == 'blog'">
        <!-- 文章标签 -->
        <el-tag type="info" v-for="(item,index) in article.tag" :key="index">{{item}}</el-tag>
    </div>
    <div class="cover">
        <!-- 封面 -->
        <img :src="article.cover" alt="">
        封面
    </div>
    <div class="summary">
        摘要
    </div>
    <div class="footer">
        <!-- 底部横幅内容 -->
        底部横幅
    </div>
</div>
</template>

<script>
export default {
    name: 'blog_card'

}
</script>

<style>

</style>
