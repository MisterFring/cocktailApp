<template>
	<div>
		<form @submit.prevent="handleSubmit">
			Login : <br />
			Email : 
			<input type="email" v-model="email"><br />
			Password : 
			<input type="password" v-model="password"><br />
			<button type="submit">login now</button>
		</form>
		<p>{{email}}</p>
		<p>{{password}}</p>
	</div>
</template>

<script>

export default {
	data(){
		return {
			email : "test@abc.fr",
			password : "",
		}
	},
	methods: {
		handleSubmit(){
			alert('login \nemail : '+ this.email)
		}
	}
}
</script>
