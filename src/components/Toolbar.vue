<template>
      <div>
      <v-toolbar
      flat
      dense
      dark
    >
      <v-toolbar-title>
        <span class="subheading">METRONOME</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <setting :dialog="dialog"/>  
    </v-toolbar>
      </div>
</template>

<script>
// import BackroundChooser from './backroundChooser.vue'
// import BeatTypeOption from './BeatTypeOption.vue'
// import ColorOption from './colorOption.vue'
// import NumberOfBeat from './NumberOfBeat.vue'
import Setting from './Setting.vue'
// import SoundOption from './SoundOption.vue'
export default {
  components: { Setting },
    data(){
        return {
            dialog: false
        }
    },
    methods:{
        toggle(){
            this.dialog=!this.dialog
        }
    }

}
</script>

<style>

</style>