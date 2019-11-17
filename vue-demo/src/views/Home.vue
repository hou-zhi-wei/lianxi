<template>
  <div class="wrap">
    <header></header>
    <main>
      <div v-for="(item,index) in listData"  v-on:click="xiang(item)" :key="index">
        <img :src="item.dataimg" alt />
        <p>{{item.dataname}}</p>
        <p>{{item.datatitle}}</p>
      </div>
      <router-view></router-view>
    </main>
    <footer>
      <router-link to="/Home">首页</router-link>
      <router-link to="/classify">分类</router-link>
      <router-link to="/shopping">购物车</router-link>
      <router-link to="/my">我的</router-link>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      listData: []
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    async getdata() {
      let list = await axios.get("/api/list");
      this.listData = list.data.data;
      console.log(list.data.data);
    },
    xiang(item){
      this.$router.push({path:"/xiangqing",query:item})
    }
  }
};
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  width: 100%;
  height: 50px;
  background: #eee;
}
main {
  flex: 1;
  overflow: hidden;
  overflow: auto;
}
footer {
  width: 100%;
  height: 50px;
  background: #eee;
  display: flex;
  a {
    width: 25%;
    height: 50px;
    text-align: center;
    line-height: 50px;
  }
}
a:hover {
  background: #f00;
}
p {
  text-align: center;
}
img {
  width: 90%;
  margin-left: 5%;
  text-align: center;
}
</style>