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
      
      <v-dialog
      v-model="dialog"
      hide-overlay
      dark
      transition="dialog-left-transition"
      fullscreen
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon
        v-bind="attrs"
        v-on="on">
        <v-icon>mdi-cog</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
        >

          <v-toolbar-title>Metronome Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              icon
              @click="dialog=!dialog"
            >
            <v-icon>
              mdi-close
            </v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list
          three-line
          subheader
        >
          <v-subheader>Sound</v-subheader>
          <v-list-item>
            <v-list-item-content>
                <sound-option accent/>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <sound-option/>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-subheader>Beat</v-subheader>
          <v-list-item>
            <v-list-item-content>
                <number-of-beat/>
            </v-list-item-content>
          </v-list-item>
           <v-list-item>
            <v-list-item-content>
                <beat-type-option/>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-subheader>Customize</v-subheader>
          <v-list-item>
            <v-list-item-content>
                <backround-chooser/>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
                <color-option :type="'background'"/>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
                <color-option :type="'accent'"/>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
                <color-option :type="'beat'"/>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
                <color-option :type="'ring'"/>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog> 
    </v-toolbar>
      </div>
</template>

<script>
import BackroundChooser from './backroundChooser.vue'
import BeatTypeOption from './BeatTypeOption.vue'
import ColorOption from './colorOption.vue'
import NumberOfBeat from './NumberOfBeat.vue'
import SoundOption from './SoundOption.vue'
export default {
  components: { BeatTypeOption, NumberOfBeat, SoundOption, BackroundChooser, ColorOption },
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