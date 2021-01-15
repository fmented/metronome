<template>
    <v-row no-gutters align="end" class="ma-1" >
      <v-col>  
        <v-container>
          <v-row
        class="ma-2"
        justify="space-between"
        align="center"
      >
        <v-col class="text-left grey--text text--lighten-2">
          <v-row>
            <div 
          :class="first_tap==0?'':'tap-active'"
          @click="tap"
          >
            <span
            :class="`display-3 font-weight-light unselectable`"
            v-text="$store.state.tempo"
          ></span>
          <span class="subheading font-weight-light ml-2 text--grey">BPM</span>
          </div>
          
          <v-fade-transition>
            <v-avatar
              v-if="$store.state.play"
              :color="color"
              :style="{
                animationDuration: animationDuration
              }"
              class="mb-1 ml-2 v-avatar--metronome"
              size="20"
            ></v-avatar>
          </v-fade-transition>
          </v-row>
          
        </v-col>
        <v-col class="text-right">
          <v-btn
            :color="color"
            dark
            depressed
            fab
            @click="changeState"
          >
            <v-icon large :color="color=='white'?'black':'white'">
              {{ $store.state.play ? 'mdi-stop' : 'mdi-play' }}
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>

         <v-slider
        v-model="$store.state.tempo"
        :color="color"
        track-color="grey lighten-2"
        :min="$store.state.minTempo"
        :max="$store.state.maxTempo"
        @change="changeTempo"
      >
        <template v-slot:prepend>
          <v-icon
            :color="color"
            @click="decrement"
          >
            mdi-minus
          </v-icon>
        </template>

        <template v-slot:append>
          <v-icon
            :color="color"
            @click="increment"
          >
            mdi-plus
          </v-icon>
        </template>
      </v-slider>

        </v-container>  
      </v-col>
    </v-row> 
</template>

<script>
export default {
    data(){
        return{
            first_tap: false,
            }
    },

    // props:{
    //     playing: {
    //         type: Boolean,
    //         default: false
    //     }

    // },

    computed:{
        tempo(){
            return this.$store.state.tempo
        },

        // play(){
        //   return this.$store.state.play
        // },

        color () {
        // if (this.$store.state.tempo < 100) return 'indigo'
        // if (this.$store.state.tempo < 125) return 'teal'
        // if (this.$store.state.tempo < 140) return 'green'
        // if (this.$store.state.tempo < 175) return 'orange'
        return this.$store.state.color[Math.floor(this.$store.state.tempo/this.$store.state.color.length)%this.$store.state.color.length]
        },

        animationDuration () {
            return `${this.$playInterval()/1000}s`
        },


    },

    methods:{

        changeState(){
          this.$store.state.play ? this.stop() : this.start()
        },

        stop(){
          this.$store.commit('stopMetronome')
        },

        start(){
          this.$store.commit('playMetronome')
        },

        tap(){
            if(this.first_tap == 0){
            this.first_tap = performance.now()
            }
            else{
                this.$stop()
                let x = performance.now() - this.first_tap
                this.$store.commit('changeTempoFromTap', x)
                this.first_tap = 0
                setTimeout(this.$start, 50)
            }

        },

        decrement () {
                
                this.$whenPlaying(['decreaseTempo'])
                
            },

        increment () {
                this.$whenPlaying(['increaseTempo'])
            },

        changeTempo(x){
            this.$whenPlaying(['changeTempo', x])      
        },
    }

}
</script>

<style scoped>

  @keyframes metronome-example {
    from {
      transform: scale(0);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-name: metronome-example;
    animation-iteration-count: infinite;
    animation-direction:reverse;
  }

  .unselectable{
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
  }

  .tap-active{
    background-color: #555;
  }
</style>