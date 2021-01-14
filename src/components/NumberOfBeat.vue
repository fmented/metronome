<template>
<div>
      <v-row>
      <v-col cols="6">
                <v-subheader>
                    Number of Beat
                  </v-subheader>
                </v-col>

              <v-col cols="6" align="center">             
                          <b v-text="$store.state.beatNum"></b>    
              </v-col>
  </v-row>
  <v-row>
      <v-col cols="6">
              
                </v-col>

              <v-col cols="6">
                  

                       <v-slider
        v-model="$store.state.beatNum"
        track-color="grey"
        :min="$store.state.minBeat"
        :max="$store.state.maxBeat"
      >
        <template v-slot:prepend>
          <v-icon
            @click="decrement"
          >
            mdi-minus
          </v-icon>
        </template>

        <template v-slot:append>
          <v-icon
            @click="increment"
          >
            mdi-plus
          </v-icon>
        </template>
      </v-slider>
                    
              </v-col>
  </v-row>
</div>

</template>

<script>
export default {
    data(){
        return{
        }
    },

    computed:{

    },
    methods:{
        change(e){
            this.$store.commit('changeBeatNum', e)
        },
        decrement(){
            this.$store.commit('decreaseBeatNum')
        },
        increment(){
            this.$store.commit('increaseBeatNum')
        }
    }

}
</script>

<style>

</style>