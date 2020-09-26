<template>
    <div>
        <ul class="list-group list-group-flush">
            <div v-for="(dado, index) in dados" v-bind:key="index">
                <li class="flex-column list-group-item list-group-item-action list-group-item-info" v-if="dado.userId === 1 && dado.completed">
                    UserId: {{dado.userId}}, Id: {{dado.id}}, Title: {{dado.title}}, Completed: {{dado.completed}}
                </li>
            </div>
        </ul>
        <input type="button" v-on:click="buscar" value="Buscar Todos">
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name : 'Todos',
        data: function(){
            return {
                dados:[]
            }
        },
        methods: {
            mostrar: function(res){
                this.dados = res.data;
            },
            buscar: function(){
                axios.get('https://jsonplaceholder.typicode.com/todos')
                .then(res => {this.mostrar(res)})
                .catch(e => console.error(e));
            }
        }
    }
</script>
<style>
</style>