<template>
    <div>
        <ul class="list-group list-group-flush">
            <div v-for="(dado, index) in dados" v-bind:key="index">
                <li class="flex-column list-group-item list-group-item-action list-group-item-info" v-if="dado.id % 2 === 0">
                    PostID: {{dado.postId}}, Id: {{dado.id}}, Name: {{dado.name}}, Email: {{dado.email}}, Body: {{dado.body}}
                </li>
            </div>
        </ul>
        <input type="button" v-on:click="buscar" value="Buscar Comments"/>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name : 'Comments',
        data: function(){
            return {
                dados: []
            }
        },
        methods: {
            mostrar: function(res){
                this.dados = res.data;
            },
            buscar: function(){
                axios.get('https://jsonplaceholder.typicode.com/comments')
                .then(res => {this.mostrar(res)})
                .catch(e => console.error(e));
            }
        }
    }
</script>
<style>
</style>