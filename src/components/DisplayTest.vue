<template>
	<div>
		<p>You chose {{ $store.state.flavor }}</p>
        <p>{{ $store.state.resultSearch }}</p>
        <p><img :src="$store.state.resultSearch.drinks[0].strDrinkThumb"></p>
	</div>
</template>