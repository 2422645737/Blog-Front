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
        <img v-show = "article.cover !== ''" :src="article.cover" alt="">
        <div class="summary">{{article.summary}}</div>
    </div>
    <div class="footer">
        <!-- 底部横幅内容 -->
        <div class="footer_time">{{article.publish_time}}</div>
        <div class="fill"></div>
        <div class="footer_count">
            <img src="../../public/images/article_icon/count.png" alt="">
            阅读:{{article.count}}
        </div>
        <div class="footer_like">
            <img src="../../public/images/article_icon/like.png" alt="">
            点赞:{{article.like_number}}
        </div>
        <div class="footer_comment">
            <img src="../../public/images/article_icon/comment.png" alt="">
            评论:{{article.comment_number}}
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'blog_card',
    props:['article'],
    data(){
        return {
            summary_max_length: 400   //摘要最长字数
        }
    }

}
</script>

<style>
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
    background-color: red;
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
}
/* 摘要样式 */
.summary{
    background-color: aqua;
    text-align: left;
}
/* 底部内容样式 */
.footer{
    background-color: chartreuse;
    display: flex;
    justify-content: left;
}
.footer > div {
    margin-left: 10px;
    display: flex;
    justify-content: left;
    align-items: center;
}
.footer > div > img{
    width:20px;
    height: 20px;
    margin-right: 5px;
}
.footer > .footer_time{
    background-color: red;
    margin-left: 2px;
}
.footer > .footer_count{
    background-color: green;
}
.footer > .footer_like{
    background-color: yellow;
    margin-left: 20px;
}
.footer > .footer_comment{
    background-color:aqua;
    margin-left: 20px;
}
.footer > .fill{
    width: 60%;
}
</style>
