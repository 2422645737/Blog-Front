<template>
<div class="aside-main">

    <div class="wh-info">
        <div class="avatar">
            <img src="../../public/images/head.jpg" alt="">
            
        </div>
        <div class="username">
            <p>我是宵宫的狗</p>
        </div>
        <div class="signature">
            <p>烟花易逝，人情长存</p>
        </div>
        <div class="my-social">
            我的联系方式
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Aside'

}
</script>

<style scoped>
.username{
    background-color: aquamarine;
}
.signature{
    background-color:aqua;
}
.avatar > img{
    background-repeat: no-repeat;
    height: 150px;
    width: 150px;
    border-radius: 75px;
}
.avatar{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; 
    height: 50%;
    background-color: red;
}
.wh-info{
    background-color: antiquewhite;
    width: 100%;
    height: 450px;
}
</style>
