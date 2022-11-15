<template>
<div class="main_page">
    <el-container>
        <el-header>
            <Header></Header>
        </el-header>
        <el-container>
            <el-aside>
            </el-aside>
            <el-main>
            </el-main>
        </el-container>
    </el-container>
</div>
</template>

<script>
import Header from './Header.vue'
import Aside from './Aside.vue'
export default {
    name: 'Read',
    components:{
        Header,
        Aside,
    }
}
</script>

<style scoped>
.el-container{
    height: 100%;
}
.main_page{
    height: 100%;
}
.el-header{
    padding-left: 0px;
    padding-right: 0px;
    background-color: red;
}
.el-aside{
    background-color: green;
    height: 100%;
    width: 400px !important;
}
.el-main{
    background-color: pink;
}
</style>
