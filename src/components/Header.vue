// 主要包含网页头部的横幅
<template>
<div class="header-main">
    <!-- logo部分 -->
    <div class="logo">
        烟花易逝
    </div>
    <div class="search-box">
        <el-input placeholder="请输入内容" v-model="input">
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </div>
    <!-- 按钮部分 -->
    <div class="buttons">
        <div class="home-button" @click="to_home">
            <img src="../../public/images/home.png" alt="">
            <a href="">主页</a>
        </div>
        <div class="blog-button" @click="to_blog">
            <img src="../../public/images/blog.png" alt="">
            <a href="">博客</a>
        </div>
        <div class="talk-button" @click="to_talk">
            <img src="../../public/images/talk.png" alt="">
            <a href="">说说</a>
        </div>
        <div class="music-button" @click="to_music">
            <img src="../../public/images/music.png" alt="">
            <a href="">音乐</a>
        </div>
        <div class="read-button" @click="to_read">
            <img src="../../public/images/read.png" alt="">
            <a href="">阅读</a>
        </div>
        <div class="head-image" @click="to_user_home">
            <img src="../../public/images/home.png" alt="">
            <a href="">头像</a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            input:''
        }
    },
    methods:{
        to_home(){
            //主页
            console.log("to_home");
        },
        to_blog(){
            //博客
            console.log("to_home");
        },
        to_talk(){
            //说说
            console.log("to_home");
        },
        to_music(){
            //音乐
            console.log("to_home");
        },
        to_read(){
            //阅读
            console.log("to_home");
        },
        to_user_home(){
            //头像
            console.log("to_home");
        },
    }
}
</script>

<style scoped>
.buttons > div > img{
    width:30px;
    height:30px;
}
.buttons > div > a{
    text-decoration: none;
}
.buttons > div{
    height: 100%;
    width: 16.69%;
    background-color: antiquewhite;
    display: flex;
    justify-content: center;
    align-items: center;
}
.buttons > div:hover{
    background-color: aquamarine;
    cursor: pointer;
}
.el-input{
    margin-top: 10px;
    width: 90%;
    font-size: 19px;
}
.header-main {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.search-box {
    height: 100%;
    background-color: yellow;
    height: 100%;
    width: 40%;
}

.logo {
    background-color: white;
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: center;

    /* 文字格式设置 */
    padding-left: 10px;
    font-size: 29px;

}

.buttons {
    background-color: white;
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
