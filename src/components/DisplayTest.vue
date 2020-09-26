<template>
	<div>
		<!-- <p>You chose {{ $store.state.flavor }}</p> -->
        <!-- <p>{{ $store.state.resultSearch }}</p> -->
		<div v-for="(item, index) in $store.state.resultSearch" :key="index" class="cocktail">
			<img :src="item.strDrinkThumb" height="20%" width="20%">
			<div style="vertical-align : center; width : 100%">
				<h2>
					{{ item.strDrink }}
				</h2>
				<p style="text-align : center">{{ item.strInstructions }}</p>
				<section class="container">
					<div>
						<h3>Ingrédients</h3>
						<p v-for="(i, index) in listIngredientsAndMeasures(item)" :key="index">{{ i.ingredient }} - {{ i.measure }}</p>
					</div>
					<div class="fav">
						<div>
							<a @click.prevent="addfav ( item.strDrink )" href="#">
								<svg width="5em" height="5em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
								</svg>
							</a>
							<p></p>
						</div>
					</div>
				</section>
			</div>
			<p>{{ arrayOfFav }}</p>

		</div>
        
	</div>
</template>

<script>

// import FavCocktail from '@/components/FavCocktail'

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
	data(){
		return {
			arrayOfFav: []
		}
	},
	methods: {
		listIngredientsAndMeasures,
		addfav( fav ){
			if (this.arrayOfFav.indexOf( fav ) > -1) {
				this.arrayOfFav.splice((this.arrayOfFav.indexOf( fav )), 1)
			}
            else {
				this.arrayOfFav.push( fav )
			}
		}
	}
}
</script>

<style scoped>
.cocktail {
	display : flex; 
	flex-direction : row; 
	margin: 20px
}
.container {
	display: flex;
    justify-content: space-around;

}
.fav {
	align-self: center;
}
</style>