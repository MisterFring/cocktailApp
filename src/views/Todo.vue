<template>
	<div>
	    <input
	      @keypress.enter="addTodo(newTodo)"
	      v-model="newTodo"
	      type="text"
	      placeholder="Create a new to-do..."
	    />
	    <!-- <button type="submit"></button> -->
    
		<ul>
			<li v-for="(item, index) in items" :key="index">
				<input type="checkbox">
				{{item}}
				<button @click.prevent="deleteTodo(index)">X</button>
			</li>
		</ul>
	</div>
</template>

<script>

export default {
	data(){
		return {
			items: [
				"test1", "test2", "test3"
			],
			newTodo: "",
		}
	},
	methods: {
	    addTodo(newTodo) {
	      this.items.push(newTodo);
	      this.newTodo = "";
	    },
	    deleteTodo(i){
	    	this.items.splice(i, 1);
	    }


  	}
}
</script>