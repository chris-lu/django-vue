<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { logoutView, whoamiView } from '../services/authService'

const router = useRouter()
const name = ref('')

const handleLogout = async () => {
    await logoutView(router)
}

onMounted(() => {
    whoamiView(name)
})
</script>

<template>
	<div class="row">
		<div class="col-md-8 mx-auto">
			<div class="d-flex justify-content-between mb-5">
				<h1>Hello, {{ name }}</h1>
				<button type="submit" class="btn btn-outline-primary" @click="handleLogout">
					Logout
				</button>
			</div>
			<div class="row">
				<div class="col-md-12">
					<h1 class="display-4 mt-5">
						This is {{ name }}'s home page!!
					</h1>
				</div>
			</div>
		</div>
	</div>
</template>