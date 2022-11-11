<template>
<div>
    <div class="title">
        {{article.title}}
    </div>
    <hr>
    <div class="tag" v-show="article.type == 'blog'">
        <!-- 文章标签 -->
        <el-tag type="info" v-for="(item,index) in article.tags" :key="index">{{item}}</el-tag>
    </div>
    <div class="cover">
        <!-- 封面 -->
        <img v-show = "article.cover !== ''" :src="article.cover" alt="">
        <div class="summary">{{article}}</div>
    </div>
    <div class="footer" v-if="article">
        <!-- 底部横幅内容 -->
        <div class="footer_time">{{article.publish_time}}</div>
        <div class="fill"></div>
        <div class="footer_count" v-if="article.quantity">
            <img src="../../public/images/article_icon/count.png" alt="">
            阅读:{{article.quantity}}
        </div>
        <div class="footer_like" v-if="article.likes">
            <img src="../../public/images/article_icon/like.png" alt="">
            点赞:{{article.likes.length}}
        </div>
        <div class="footer_comment" v-if="article.comments">
            <img src="../../public/images/article_icon/comment.png" alt="">
            评论:{{article.comments.length}}
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'blog_card',
    props:['article'],
    mounted(){
    },
    data(){
        return {
            summary_max_length: 400,   //摘要最长字数
        }
    }

}
</script>

<style scoped>
/* 封面样式 */
.cover{
    background-color: blanchedalmond;
    display: flex;
    justify-content: left;
}
.cover > img{
    background-repeat: no-repeat;
    width: 70px;
    height: 70px;
}
/* 文章标题样式 */
.title{
    font-size: 19px;
    text-align: left;
}

/* 标签样式 */
.el-tag{
    margin-right: 10px;
    color: black;
    border-radius: 13px;

}
/* 标签样式 */
.tag{
    /* background-color: green; */
    text-align: left;
    padding-bottom: 7px;
}
/* 摘要样式 */
.summary{
    text-align: left;
}
/* 底部内容样式 */
.footer{
    padding-top: 8px;
    display: flex;
    justify-content: left;
}
.footer > div {
    margin-left: 10px;
    text-align: left;
    display: flex;
    justify-content: left;
    align-items: center;
}
.footer > div > img{
    width:20px;
    height: 20px;
    margin-right: 5px;
}
.footer_time{
    width: 20%;
    margin-left: 0px !important;
}
.footer_count{
    width: 15%;
}
.footer_like{
    width: 15%;
    margin-left: 20px;
}
.footer_comment{
    width: 15%;
    margin-left: 20px;
}
.fill{
    width: 20%;
}
</style>
