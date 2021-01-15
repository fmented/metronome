<template>
  <div></div>
</template>

<script>
export default {
    props:{
      read:{
        type: String,
        default: ''
      }
    },
    mounted(){
    let v = this
    window.addEventListener('keydown', function(e){
      if(v.read==''){
          if(e.key == ' '){
            v.$store.state.play ? v.$stop() : v.$start()
          }
          if(e.key == 'p'|| e.key == 'P'){
            v.$emit('setting')
          }
          if(e.key == 'Enter'){
            v.$emit('tap')
          }
          if(e.key == 'ArrowLeft'){
            v.$whenPlaying(['decreaseTempo'])
          }
          if(e.key == 'ArrowRight'){
            v.$whenPlaying(['increaseTempo'])
          }
          if(e.key == 'ArrowUp'){
            v.$whenPlaying(['increaseBeatNum'])
          }
          if(e.key == 'ArrowDown'){
            v.$whenPlaying(['decreaseBeatNum'])
          }
          if(e.key == '1'){
            v.$whenPlaying(['changeBeatType', 1])
          }
          if(e.key == '!'){
            v.$whenPlaying(['changeBeatType', 16])
          }
          if(e.key == '2'){
            v.$whenPlaying(['changeBeatType', 2])
          }
          if(e.key == '4'){
            v.$whenPlaying(['changeBeatType', 4])
          }
          if(e.key == '6'){
            v.$whenPlaying(['changeBeatType', 64])
          }
          if(e.key == '8'){
            v.$whenPlaying(['changeBeatType', 8])
          }

          if(e.key == '3'){
            v.$whenPlaying(['changeBeatType', 32])
          }
      }
      else if(v.read==e.key){
        v.$emit('handle', e.key)
      }
      
    })
  },


}
</script>

<style>

</style>