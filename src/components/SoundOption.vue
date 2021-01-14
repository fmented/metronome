<template>
  <v-row>
      <v-col cols="6">
                <v-subheader>
                    {{text}}
                  </v-subheader>
                </v-col>

              <v-col cols="6">
                <v-select
                  v-model="select"
                  :items="list"

                  :label="select"
                  persistent-hint
                  single-line
                  @change="change"
                ></v-select>
              </v-col>
  </v-row>
</template>

<script>
export default {
    data(){
        let accent = this.accent
        return{
            item: accent ? this.$store.state.audio.accent : this.$store.state.audio.beat,
            select: accent ? this.$store.state.audio.accent[this.$store.state.accent].name : this.$store.state.audio.beat[this.$store.state.beat].name,
            text: accent ? 'Accent Sound' : 'Beat Sound'
        }
    },
    props:{
        accent:{
            type: Boolean,
            default: false
        }
    },
    computed:{
        list(){
            let l = []
            this.item.forEach(i => {
                l.push(i.name) 
            });
            return l
        }
    },
    methods:{
        change(){
            let l = this.list
            let x = l.indexOf(this.select)
            this.accent ? this.$store.commit('changeAudioAccent', x) : this.$store.commit('changeAudioBeat', x)
        }
    },


}
</script>

<style>

</style>