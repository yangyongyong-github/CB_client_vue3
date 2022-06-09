<template>
  <div class="top-banner-component">
    <div @click="toIntroducePage">
      <img class="bank-logo" src="@/assets/bk-logo.png" alt="chinaOfBank" />
    </div>
    <div class="middle">
      <!-- 占位 用来显示 TopTip -->
    </div>
    <!-- login-info  -->
    <div class="login-info">
      <a v-if="isLoading">Loading...</a>
      <template v-else-if="userData">
        <span>{{ userData.name }}</span> <br />
        <div>
          {{ identShowFilter(userData.flag) }}
        </div>
        <button @click="loginOut">
          <!-- 注销 -->
          loginOut
        </button>
      </template>
      <router-link v-else to="/login">
        <div class="log-tips">
          <!-- 请先登录 -->
          <span class="log-span"> 请先登录！ </span>
        </div>
      </router-link>
    </div>

    <!-- right btns -->
    <div class="right-btns">
      <div class="line">
        <button>返回</button>
        <button>首页</button>
      </div>
      <button class="btn-lang">切换语言</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const isLoading = false;
    const userData = null;
    // {
    //   name: "yangxiang",
    //   flag: "useri",
    // };

    const toIntroducePage = () => router.push({ name: "Introduce" });
    const loginOut = () => router.push("/");

    /**
     * filters 也被移除，这里使用函数传参代替
     */
    const identShowFilter = (value) => {
      if (!value) {
        return;
      }
      if (value === "useri") {
        return "贷款用户 Loan ";
      } else if (value === "admin") {
        return "管理员 Admin";
      } else if (value === "userii") {
        return "存款用户 Deposit";
      } else {
        return "身份未知 unkonw";
      }
    };

    return {
      isLoading,
      userData,
      // fun
      toIntroducePage,
      identShowFilter,
      loginOut,
    };
  },
};
</script>

<style lang='scss'>
@import url("./index.scss");
</style>