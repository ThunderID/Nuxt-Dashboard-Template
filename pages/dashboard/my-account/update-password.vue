<template>
	<div>
		<b-card title="Update Password">
			<div class='card-text pt-4'>
				<Form class='m-t-lg' @SUCCESS="onUpdatePasswordSuccess" @FAIL="onUpdatePasswordFail"></Form>
			</div>
		</b-card>
	</div>
</template>

<script>
import Form from "~/components/update_password/form"
export default { 
	components: { Form },
	methods: {
		onUpdatePasswordSuccess (data) {
			$nuxt.$router.replace('/dashboard')
		},
		onUpdatePasswordFail (data) {
			$nuxt.$router.replace('/')
		}
	}
}
</script>