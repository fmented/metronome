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
                  :items="item"
                  label="Select"
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
        let type = this.type
        let color

        if (type=='ring') color = this.$store.state.ringColor
        if (type=='beat') color = this.$store.state.beatColor
        if (type=='accent') color = this.$store.state.accentColor
        if (type=='background') color = this.$store.state.backgroundColor

        return{
            item: this.$store.state.color,
            select: color,
        }
    },
    props:{
        type : String
    },

    computed:{
        text(){
            return this.type.replace(this.type[0], this.type[0].toUpperCase()) + ' Color'
        }
    },

    methods:{
        change(){
                if (this.type=='ring') this.$store.commit('changeRingColor', this.select)
                if (this.type=='beat') this.$store.commit('changeBeatColor', this.select)
                if (this.type=='accent') this.$store.commit('changeAccentColor', this.select)
                if (this.type=='background') this.$store.commit('changeBackgroundColor', this.select)
        }
    }

}
</script>

<style>

</style>