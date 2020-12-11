<template>
  <div class="container news-box">
    <div class="item title">新闻页</div>

    <div class="item">
      <div class="name">{{userInfo.name}}</div>
      <img :src="userInfo.avatar" alt class="avatar" />
    </div>

    <div class="item">
      <el-button type="primary" @click="getInfo()" :loading="loading">获取用户信息</el-button>
    </div>

    <div class="item">
      <a href="/index.html">
        <el-button type="primary">跳转</el-button>
      </a>
    </div>
  </div>
</template>

<script>
import "@/assets/css/base.scss";
import "@/assets/css/common.scss";
import "./news.scss";

export default {
  name: "news",
  components: {},
  data() {
    return {
      loading: false,
      userInfo: {
        name: "",
        avatar: ""
      }
    };
  },
  methods: {
    getInfo() {
      this.$store
        .dispatch("user/getInfo")
        .then(res => {
          this.userInfo = res;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    }
  }
};
</script>
