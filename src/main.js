import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.mixin({
  mounted(){
    let a = localStorage.getItem('bg')
    if (a) return this.$store.commit('changeBackground', a) 

  },

  methods:{
    $playInterval(){
      return (1000/(this.$store.state.tempo/60))/(this.$store.state.currentBeatType/4)
    },

    $stopInterval(){
        return (1000/(this.$store.state.tempo/60))/(this.$store.state.currentBeatType/4)/2
    },

    $loopInterval(){
        return this.$store.state.beatNum*this.$playInterval()
    },

    $stop(){
      this.$store.commit('stopMetronome')
    },

    $start(){
      this.$store.commit('playMetronome')
    },

    $whenPlaying(param){
      if(this.$store.state.play){
        this.$stop()
        this.$store.commit(...param)
        setTimeout(this.$start,50)
      }
      else this.$store.commit(...param)
    },

    $stereoType(x){ 
      let func = {
        'is': this.time_is,
        'like': this.time_like,
        'between': this.tempo_between,
        'more': this.tempo_more,
        'less': this.tempo_less
      }

      let equal = arr => arr.every(v=>v===true)

      let a = []

      for (let [key, val] of Object.entries(x)){
        let res = func[key](val)
        a.push(res)
      }

      return equal(a)
    },

    tempo_between(a){
      let tempo = this.$store.state.tempo
      return tempo >= a[0] && tempo <= a[1]
    },

    tempo_more(a){
      let tempo = this.$store.state.tempo
      return tempo > a
    }
    ,
    tempo_less(a){
      let tempo = this.$store.state.tempo
      return tempo < a
    },


    time_is(a){
      return a == this.$store.state.beatNum/this.$store.state.currentBeatType
    },

    time_like(a){
      for(let i = 0; i<a.length; i++){
        if (a[i]==this.$store.state.beatNum/this.$store.state.currentBeatType) return true
      }
      return false
    },

    changeBackground(data){
      let x = `url("${data}")`
      localStorage.setItem('bg', x)
      this.$store.commit('changeBackground', x)
    },

    removeBackground(){
      localStorage.removeItem('bg')
      this.$store.commit('changeBackground', undefined)
    },

  }
})

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
