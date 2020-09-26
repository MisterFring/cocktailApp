<template>
    <div>
        <p>Choose your alcohol</p>
        <div v-for="(item,i) in arrayOfAlcohol" :key="arrayOfAlcohol[i]" class="form-check">
            <input @click="searchDrinks" type="radio" :id="i" :name="item" :value="item" v-model="testA" class="form-check-input">
            <label :for="item" class="form-check-label">{{ item }}</label>
        </div>
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
    },
}
</script>