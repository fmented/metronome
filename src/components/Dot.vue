<template>
  <div class="ma-1">
<!-- 
                <v-progress-circular :size="size+10" value="100" width="5" @click="changeType" :color="$store.state.ringColor"
                class="v-avatar--metronome"
                v-if="playing"
                :style="{
                            animationDuration: animationDuration
                        }"
                >
                <v-avatar
                    :size="size"
                    :color="`${color}`"
                    class="visible"
                >
                </v-avatar>
                </v-progress-circular> -->
                <v-progress-circular :size="size+10" value="100" width="5" @click="changeType" :color="$store.state.ringColor"
                    :class="isPlaying"
                    >
                                <v-avatar
                                    :size="size"
                                    :color="`${color}`"
                                    class="visible"

                                    
                                > 
                                <span :class="`${$store.state.ringColor}--text display-2 `+isPlaying" 
                                v-html="$store.state.beatEntities[$store.state.currentBeatType]"></span>
                </v-avatar>
                </v-progress-circular>


            


      <!-- <v-progress-circular :size="size+10" value="100" width="5" @click="changeType" :color="$store.state.ringColor"
      :class="isPlaying">
      <v-avatar
          :size="size"
          :color="`${color}`"
          class="visible"
      >
      </v-avatar>
      </v-progress-circular> -->
      <audio :src="audio" class="invisible" ref="sound"></audio>
      
      
  </div>
</template>

<script>
export default {
    data(){
        let accent = this.accent
        return{
            vol: this.volume,
            acc: accent,
            playing: false,
        }
    },
    props:{
        accent:{
            type: Boolean,
            default: false
        },
        volume:{
            type: Number,
            default: 70,
        }
    },
    computed:{
        color(){
            if (this.acc){
                return this.$store.state.accentColor
            }
            return this.$store.state.beatColor
        },
        
        audio(){
            return this.acc ? this.$store.getters.audio_accent : this.$store.getters.audio_beat
        },

        isPlaying(){
            if(this.playing){
                return 'visible'
            }
            return 'invisible'
        },
        size(){
            return 50
        },

        animationDuration () {
            return `${this.$playInterval()/1000}s`
        },
        

    },
    methods:{

        changeType(){
            this.acc=!this.acc
        },

        play(){
            this.display(true)
            this.$refs.sound.play()
        },

        stop(time){
            setTimeout(()=>{
                this.display(false)
                if(this.$refs.sound){
                this.$refs.sound.pause()
                this.$refs.sound.currentTime = 0
                }
            },time)
            
        },

        display(s){
            this.playing = s
            this.isPlaying
        },
    }

}
</script>

<style scooped>
.invisible{
    visibility: hidden;
}
.visible{
    visibility: visible;
    opacity: 1;
}
  @keyframes in-fade {
    from {
      visibility: hidden;
    }

    to {
      visibility: visible;
    }
  }
@keyframes out-fade {
    0% {
opacity: 0;    
}

    100% {
    opacity: 1;
    visibility: hidden;
    }
    
  }

  .v-out {
    animation-name: out-fade;
    animation-iteration-count: infinite;
    animation-direction:reverse;
  }


</style>