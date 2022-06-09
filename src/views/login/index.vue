<template>
  <div class="login-container">
    <h3 class="page-title">Login Page</h3>
    <div class="input-area">
      <div class="indet">Login {{ loginFormData.flag }}</div>
      <p>
        <label>账号</label>
        <input type="text" v-model="loginId" />
      </p>
      <p>
        <label>密码</label>
        <input type="password" v-model="loginPwd" />
      </p>
      <label class="name-select">选择登录身份</label>
      <select v-model="userFlag">
        <option
          v-for="(item, index) in userLists"
          :key="index"
          :value="item.name"
        >
          {{ item.name }}
        </option>
      </select>
      <p class="btn">
        <button type="success" @click="loginHandle">登录</button>
        <button @click="registerHandle">注册</button>
      </p>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const router = useRouter();

    const loginId = ref("");
    const loginPwd = ref("");
    const userFlag = ref("");

    // 选择的身份信息
    const userLists = [
      { name: "admin" },
      { name: "useri" },
      { name: "userii" },
    ];

    // mounted
    onMounted(() => console.log("mounted"));

    const loginHandle = () => router.push({ name: "Introduce" });

    return {
      // loginFormatData
      loginId,
      loginPwd,
      userFlag,
      userLists,
      // fun
      loginHandle,
    };
  },
};
</script>

<style>
</style>