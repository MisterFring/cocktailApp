<template>
	<div>
		<p>You chose {{ $store.state.flavor }}</p>
        <!-- <p>{{ $store.state.resultSearch }}</p> -->
		<div v-for="(item, index) in $store.state.resultSearch" :key="index" class="cocktail">
			<img :src="item.strDrinkThumb" height="20%" width="20%">
			<div style="vertical-align : center; width : 100%">
				<h2>
					{{ item.strDrink }}
				</h2>
				<p style="text-align : center">{{ item.strInstructions }}</p>
				<h3>Ingrédients</h3>
				<p v-for="(i, index) in listIngredientsAndMeasures(item)" :key="index">{{ i.ingredient }} - {{ i.measure }}</p>
			</div>

		</div>
        
	</div>
</template>

<script>

function listIngredientsAndMeasures (cocktail = Object) {
	const arrayOfIngredientsAndMeasures = [];
	console.log(cocktail);
	for (const key of Object.keys(cocktail)) {
		if (key.indexOf('strIngredient') > -1 ) {
			if (cocktail[key] != null && cocktail[key] != "") {
				const measure = key.replace('strIngredient', 'strMeasure');
				arrayOfIngredientsAndMeasures.push({ingredient : cocktail[key], measure : cocktail[measure]});
			}
		}
	}
	return arrayOfIngredientsAndMeasures;
}
export default {
	methods: {
		listIngredientsAndMeasures,
	}
}
</script>

<style scoped>
.cocktail {
	display : flex; 
	flex-direction : row; 
	margin: 20px
}
</style>