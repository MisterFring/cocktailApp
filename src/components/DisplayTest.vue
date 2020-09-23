<template>
	<div>
		<p>You chose {{ $store.state.flavor }}</p>
        <!-- <p>{{ $store.state.resultSearch }}</p> -->
		<div v-for="(item, index) in $store.state.resultSearch" :key="index">
			<h2>
			{{ item.strDrink }}
			</h2>
			<p><img :src="item.strDrinkThumb" height="20%" width="20%">{{ item.strInstructions }}</p>

		</div>
        
	</div>
</template>