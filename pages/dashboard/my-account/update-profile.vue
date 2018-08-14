<template>
	<div>
		<b-card title="Update Profile">
			<div class='card-text pt-4'>
				<UpdateProfileForm class='m-t-lg' @SUCCESS="onUpdateProfileSuccess" @FAIL="onUpdateProfileFail"></UpdateProfileForm>
			</div>
		</b-card>
	</div>
</template>

<script>
import UpdateProfileForm from "~/components/update_profile/form"
export default { 
	components: { UpdateProfileForm },
	methods: {
		onUpdateProfileSuccess (data) {
			$nuxt.$router.replace('/dashboard')
		},
		onUpdateProfileFail (data) {
			$nuxt.$router.replace('/')
		}
	}
}
</script>