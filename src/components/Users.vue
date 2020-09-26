<template>
    <div>
        <ul class="list-group list-group-flush">
            <div v-for="(dado, index) in dados" v-bind:key="index">
                <li class="flex-column list-group-item list-group-item-action list-group-item-info" v-if="index < 5">
                    id: {{dado.id}}, Nome: {{dado.name}}, UserName: {{dado.username}}, Email: {{dado.email}}, 
                    address: {{dado.address.street}}, {{dado.address.suite}}, {{dado.address.city}},
                    {{dado.address.zipcode}}, geo: {{dado.address.geo.lat}}, {{dado.address.geo.lng}}, Phone: {{dado.phone}}, 
                    Website: {{dado.website}}, Company: {{dado.company.name}}, {{dado.company.catchPhrase}}, {{dado.company.bs}}
                </li>
            </div>
        </ul>
        <input type="button" v-on:click="buscar" value="Buscar"/>
    </div>
</template>
<script>

    import axios from 'axios'
    export default {
        name : 'Users',
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
                axios.get('https://jsonplaceholder.typicode.com/users')
                .then(res => {this.mostrar(res)})
                .catch(e => console.error(e));
            }
        }
    }
</script>
<style>
</style>