<template>
  <v-app >
        <keyboard-handler @setting="$refs.toolbar.toggle()" @tap="$ref.control.tap()"/>
        <toolbar ref="toolbar"/>
      <dot-display/>
  
    <v-footer>
      <control-bar ref="control" :class="`${background} use-background `"/>
    </v-footer>
    
 
  </v-app>
</template>

<script>
import KeyboardHandler from './components/KeyboardHandler.vue';
import Toolbar from './components/Toolbar';
import DotDisplay from './components/DotDisplay'
import ControlBar from './components/ControlBar'

export default {
  name: 'App',

  components: {
    Toolbar,
    KeyboardHandler,
    DotDisplay,
    ControlBar
  },

  data: () => ({
    //
  }),
  computed:{


    background(){
      if(this.$stereoType({between: [140, 170], is:6/8})) return 'blackmetal'
      if(this.$stereoType({between: [110, 135], like:[7/4, 11/8, 13/8, 15/16]})) return 'mathrock'
      if(this.$stereoType({more: 240, like:[5/4, 8/8]})) return 'grindcore'
      return ''
    }

  },
  methods:{

  },

  mounted(){

  }
};
</script>

<style scoped>

.blackmetal{
  background : url('./assets/metal.png');
}

.grindcore{
  background : url('./assets/grindcore.png');
}

.mathrock{
  background: url('./assets/mathrock.png');
}

.use-background{
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
