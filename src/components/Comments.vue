<template>
    <ul class="list-group list-group-flush">
        <div v-for="(dado, index) in dados" v-bind:key="index">
            <li class="flex-column list-group-item list-group-item-action list-group-item-info" v-if="index < 5">
                Nome: {{dado}}
            </li>
        </div>
    </ul>
</template>
<script>
    export default {
        name : 'Comments',
        props: ['dados']
    }
</script>
<style>
</style>