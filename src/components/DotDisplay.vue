<template>
<v-row align="center" no-gutters 
:style="{backgroundImage: background}"
:class="`use-background ${$store.state.backgroundColor}`"
 >
    <v-col align='center'>
          <v-row no-gutters class="ma-1"  justify='center' >
          <dot ref='dot' :accent="i==0" v-for="(n, i) in $store.state.beatNum" :key="i"/>   
      </v-row>  
      </v-col>
</v-row>
      
</template>

<script>
import Dot from './Dot.vue'
export default {
  components: { Dot },


    data(){
        return{
            to: [],
            x: undefined,
        }
    },


    computed:{

        play(){
            return this.$store.state.play
        },

        background(){
            return this.$store.state.background
        }



    },

    methods:{

        start(){
            let dots = this.$refs.dot
            dots.forEach((d, i )=>{
                if(this.$store.state.play){
                        this.to.push(setTimeout(()=>{
                        d.play()
                        d.stop(this.$stopInterval()-this.$stopInterval()/15)
                    }, i*this.$playInterval()))
                }
 
            })
        },

        loop(){
            this.start()
            this.x = setInterval(() => {
                this.start()
            }, this.$loopInterval());
        },

        stop(){
            this.cancel()
            clearInterval(this.x)
        },

        cancel(){
            this.to.forEach(i => {
                clearTimeout(i)
            });
            this.to = []
        },

        action(val){
            if(val){
                return this.loop()
            }
            return this.stop()
        },

    },

    watch:{
        play(val) {
            this.action(val)
        }
    },




}
</script>

<style scooped>
.use-background{
    background-repeat: no-repeat;
    background-size: 100% 100%;
}


</style>