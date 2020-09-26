<template>
	<div>
        <!-- <label for="alcoolName">Your alcohol : </label>
        <input @input="searchDrinks" name="alcoholName"> -->
        <ResultIngr />
	</div>
</template>

<script>

import ResultIngr from '@/components/ResultIngr.vue'

export default {

    components: {
        ResultIngr,
    }

}
</script>