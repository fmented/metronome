<template>
    <v-row align="center" no-gutters 
:style="{backgroundImage: background}"
:class="`use-background ${$store.state.backgroundColor}`"
 >
    <v-col align='center'>
          <v-row no-gutters class="ma-1"  justify='center' >
          <dot ref='dot' :accent="i==0" v-for=" (n,i) in $store.getters.beat_number" :key="i"/>   
      </v-row> 
                <!-- <span class="subheading text-center">{{`${$store.state.beatNum}/${$store.state.currentBeatType}`}}</span> -->
 
      </v-col>

</v-row>

      
</template>

<script>
import Dot from './Dot.vue'
export default {
  components: { Dot },


    data(){
        let item = this.$store.state.beatNum
        return{
            to: [],
            x: undefined,
            init: item

        }
    },


    computed:{

        play(){
            return this.$store.state.play
        },

        background(){
            return this.$store.state.background
        },
        dots(){
            return this.init
        }

    },

    methods:{

        start(){
            let dots = this.$refs.dot
            dots.forEach((d, i )=>{
                if(this.$store.state.play){
                        this.to.push(setTimeout(()=>{
                        d.play()
                        d.stop(this.$stopInterval())
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
        number(){
            return this.$store.state.beatNum
        }

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