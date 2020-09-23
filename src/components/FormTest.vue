<template>
	<div>
		<label for="flavor">Favorite ice cream flavor ? </label>
		<input @input="changed" name="flavor"><br />
        <label for="cocktailName">Your cocktail : </label>
        <input @input="test" name="cocktailName">
	</div>
</template>

<script>
export default {
    methods: {
        changed(event) {
            this.$store.commit('change', event.target.value)
        },
        test(event){
            this.$store.dispatch('searchByName', event.target.value)
        }

    }
}
</script>