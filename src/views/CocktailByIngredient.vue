<template>
	<div>
        <!-- <label for="alcoolName">Your alcohol : </label>
        <input @input="searchDrinks" name="alcoholName"> -->
        <p>Choose your alcohol</p>
        <b-form-group v-for="(item,i) in arrayOfAlcohol" :key="arrayOfAlcohol[i]">
            <b-form-radio @click="searchDrinks" :name="item" :value="item" v-model="testA"></b-form-radio>
            <label :for="item">{{ item }}</label>
        </b-form-group>








        <div v-for="(item, index) in $store.state.resultSearch" :key="index">
            <h2>
                {{ item.strDrink }}
            </h2>
            <img :src="item.strDrinkThumb" height="20%" width="20%">
		</div>
	</div>
</template>

<script>
export default {
    data(){
        return {
            arrayOfAlcohol : ["gin", "vodka", "rum", "tequila", "whiskey"], 
            testA : "",
        }
    },
    methods: {
        searchDrinks(event) {
            this.$store.dispatch('searchByAlcohol', event.target.value)
        }
    }
}
</script>