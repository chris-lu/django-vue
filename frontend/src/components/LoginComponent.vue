<script setup>
import { reactive, onMounted } from "vue"
import { useRouter } from 'vue-router'
import { loginView, sessionView } from '../services/authService'

const router = useRouter()

const formData = reactive({
  username: '',
  password: ''
})

const handleSubmit = async () => {
  await loginView(formData, router)
}

onMounted(() => {
  sessionView(router, true);
})
</script>

<template>
  <form @submit.prevent="handleSubmit" autocomplete="false">
    <div class="mb-3">
      <label for="exampleInputUsername1" class="form-label">Username</label>
      <input type="text" class="form-control" id="exampleInputUsername1" v-model="formData.username"
        aria-describedby="usernameHelp" />
      <div id="usernameHelp" class="form-text">We'll never share your username with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" v-model="formData.password" />
    </div>
    <button type="submit" class="btn btn-outline-primary mt-3">Login</button>
  </form>
</template>

<style scoped></style>