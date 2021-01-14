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
      if(this.$stereoType({between: [85,100], like:[3/4, 4/4]})) return 'pop'
      if(this.$stereoType({between: [140, 170], is:6/8})) return 'metal'
      if(this.$stereoType({between: [110, 135], like:[7/4, 11/8, 13/8, 15/16]})) return 'mathrock'
      if(this.$stereoType({between: [128, 135], is:4/4})) return 'rock'
      if(this.$stereoType({more: 240})) return 'grindcore'

      return ''
    }

  },
  methods:{

  },

  // mounted(){
  //   this.$refs.main.$el.style.paddingTop= window.getComputedStyle(this.$refs.appbar.$el)['height']

  //    console.log(this.$refs.appbar.$el.style.height); 
  // }
};
</script>

<style scoped>
.pop{
  background : url('./assets/pop.png');
}

.metal{
  background : url('./assets/metal.png');
}

.grindcore{
  background : url('./assets/grindcore.png');
}

.rock{
  background : url('./assets/rock.png');
}

.mathrock{
  background: url('./assets/mathrock.png');
}

.use-background{
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
