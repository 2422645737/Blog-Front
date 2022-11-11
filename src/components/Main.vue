<template>
<div>
    <Card v-for="(item,index) in articles" :key="index" :article="item"></Card>
    <el-pagination background layout="prev, pager, next" :total="pageInfo.total" @current-change="current_change">
    </el-pagination>
</div>
</template>

<script>
import Card from './Card.vue'
export default {
    name: 'Main',
    data() {
        return {
            pageInfo: {
                current: 1,
                size: 10,
                total: 0
            },
            articles: [{
                    type: 'blog',
                    id: 0,
                    comment_number: 300,
                    like_number: 100,
                    quantity: 14,
                    publish_time: '2022-05-19 20:12:21',
                    summary: '这是一段----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------很长的摘要',
                    tag: ['音乐', '生活'],
                    cover: 'https://gd-hbimg.huaban.com/f8e4669b1681703ac5697a119ef51e17f7d0872f551e8c-bT5Ut8',
                    title: 'Java内存管理'
                },
                {
                    type: 'blog',
                    id: 1,
                    comment_number: 300,
                    like_number: 100,
                    quantity: 14,
                    publish_time: '2022-05-19 20:12:21',
                    summary: '这是一段很长的摘要',
                    tag: ['美术', '生活'],
                    cover: 'https://gd-hbimg.huaban.com/f8e4669b1681703ac5697a119ef51e17f7d0872f551e8c-bT5Ut8',
                    title: 'Mysql优化'
                },
                {
                    type: 'blog',
                    id: 2,
                    comment_number: 300,
                    like_number: 100,
                    quantity: 14,
                    publish_time: '2022-05-19 20:12:21',
                    summary: '这是一段很长的摘要',
                    tag: ['爱情', '生活'],
                    cover: 'https://gd-hbimg.huaban.com/f8e4669b1681703ac5697a119ef51e17f7d0872f551e8c-bT5Ut8',
                    title: 'JVM调优'
                },
                {
                    type: 'blog',
                    id: 4,
                    comment_number: 300,
                    like_number: 100,
                    quantity: 14,
                    publish_time: '2022-05-19 20:12:21',
                    summary: '这是一段很长的摘要',
                    tag: ['爱情', '生活'],
                    cover: '',
                    title: '数据结构与算法'
                },
                // {
                //     type: 'talk',
                //     id: 5,
                //     comment_number: 300,
                //     like_number: 100,
                //     quantity: 14,
                //     publish_time: '2022-05-19 20:12:21',
                //     content: '这是我日记的内容',
                //     images: ['https://gd-hbimg.huaban.com/f8e4669b1681703ac5697a119ef51e17f7d0872f551e8c-bT5Ut8', 'https://gd-hbimg.huaban.com/f8e4669b1681703ac5697a119ef51e17f7d0872f551e8c-bT5Ut8', 'https://gd-hbimg.huaban.com/f8e4669b1681703ac5697a119ef51e17f7d0872f551e8c-bT5Ut8']
                // },
            ]
        }
    },
    components: {
        Card
    },
    methods: {
        getPage(current, size) {
            this.$http.get("article/articles?current=" + current + "&size=" + size).then(
                response => {
                    console.log(response.data);
                    this.articles = response.data.data.articles.records;
                    this.pageInfo.total = response.data.data.articles.total;
                    console.log(this.articles);
                }, error => {
                    console.log(error.message);
                }
            )

        },
        current_change(val) { //页面跳转事件
            console.log('当前页' + val);
            //重新发送请求，请求新的分页数据
            this.getPage(val,this.pageInfo.size);
        }

    },
    created() {
        this.$http.get("article/articles?current=1&size=10").then(
            response => {
                console.log(response.data);
                this.articles = response.data.data.articles.records;
                this.pageInfo.total = response.data.data.articles.total;
                console.log(this.articles);
            }, error => {
                console.log(error.message);
            }
        )
    }

}
</script>

<style>

</style>
