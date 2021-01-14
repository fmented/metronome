<template>
  <div class="ma-1">
      <v-progress-circular :size="size+10" value="100" width="5" @click="changeType" :color="$store.state.ringColor"
      :class="isPlaying">
      <v-avatar
          :size="size"
          :color="`${color}`"
          class="visible"
      >
      </v-avatar>
      </v-progress-circular>
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
        }
        

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
                this.$refs.sound.pause()
                this.$refs.sound.currentTime = 0
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
}

</style>