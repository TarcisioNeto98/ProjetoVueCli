import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/*var Pessoa = function(nome, pokemon){
  this.nome = nome;
  this.pokemon = pokemon;

  this.mostrar = function(){
    alert(this.nome + " " + this.pokemon);
  }
}*/

new Vue({
  render: h => h(App)
}).$mount('#app')
