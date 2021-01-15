import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    audio:{
      accent:[
        {name:'Accent 1', source: require('../assets/audio/accent1.webm')},
        {name:'Accent 2', source: require('../assets/audio/accent2.webm')},
      ],
      beat:[
        {name:'Beat 1', source: require('../assets/audio/beat1.webm')},
        {name:'Beat 2', source: require('../assets/audio/beat2.webm')},
      ],
    },

    accent: 0,
    beat: 0,
    tempo: 120,

    beatType:[
      1, 2, 4, 8, 16, 32, 64
    ],

    minBeat:1,
    maxBeat:69,

    minTempo:1,
    maxTempo:400,
    // dotted: false,
    currentBeatType: 4,
    beatNum: 4,

    // displayAlign: [
    //   {name:'Left', val:'start'},
    //   {name:'Center', val:'center'},
    //   {name:'Right', val:'end'}
    // ],

    play: false,

    background: undefined,

    color: [
      'blue', 'red', 'grey', 'white', 'purple', 'pink', 'indigo', 'cyan', 'teal',
      'green', 'lime', 'yellow', 'amber', 'orange', 'brown', 'black'
    ],

    beatColor : 'red',
    accentColor : 'indigo',
    ringColor : 'grey',
    backgroundColor : 'black'






  },
  mutations: {
    changeAudioAccent (state, e) {
      localStorage.setItem('as', e)
      state.accent=e
    },

    playMetronome(state){
      state.play=true
    },

    stopMetronome(state){
      state.play=false
    },

    toggleMetronome(state){
      state.play=!state.play
    },

    changeAudioBeat (state, e){
      localStorage.setItem('bs', e)
      state.beat=e
    },


    changeBeatNum(state, e){
      state.beatNum = e
      localStorage.setItem('n', e)
    },

    increaseBeatNum(state){
      if(state.beatNum<state.maxBeat) state.beatNum++
      localStorage.setItem('n', state.beatNum)
    },

    decreaseBeatNum(state){
      if(state.beatNum>state.minBeat) state.beatNum--
      localStorage.setItem('n', state.beatNum)
    },

    changeTempo(state, e){
      state.tempo = e
      localStorage.setItem('t', e)

    },

    increaseTempo(state){
      if(state.tempo<state.maxTempo) state.tempo++
      localStorage.setItem('t', state.tempo)

    },

    decreaseTempo(state){
      if(state.tempo>state.minTempo) state.tempo--
      localStorage.setItem('t', state.tempo)
    },

    changeTempoFromTap(state, e){
      state.tempo = Math.floor((state.beatNum/e*1000*60)/state.beatNum)
      localStorage.setItem('t', state.tempo)
    },

    changeBeatType(state, e){
      state.currentBeatType = e
      localStorage.setItem('d', e)
    },

    changeBackground(state, e){
      state.background = e
    },
    changeBackgroundColor(state, e){
      localStorage.setItem('bc', e)
      state.backgroundColor = e
    },
    changeRingColor(state, e){
      localStorage.setItem('rc', e)
      state.ringColor = e
    },
    changeAccentColor(state, e){
      localStorage.setItem('dac', e)
      state.accentColor = e
    },
    changeBeatColor(state, e){
      localStorage.setItem('dbc', e)
      state.beatColor = e
    }



  },
  getters:{
    audio_accent(state){
      return state.audio.accent[state.accent].source
    },
    current_accent(state){
      return state.audio.accent[state.accent]
    },
    get_accent_list(state){
      let x = state.audio.accent
      x.forEach((i, d)=>i.num = d )
      return x
    },
    current_beat(state){
      return state.audio.beat[state.beat]
    },
    audio_beat(state){
      return state.audio.beat[state.beat].source
    },
    bpm(state){
      return state.tempo/60
    },
    use_dot(state){
      return state.currentBeatType / 2
    },
    play_interval(state, getters){
      if(state.dotted){
        return 1000 / getters.bpm / (state.currentBeatType+getters.use_dot)
      }
      return 1000 / getters.bpm / state.currentBeatType
    },
    stop_interval(getters){
      return getters.play_interval / 2
    },
    loop_interval(state, getters){
      return getters.play_interval * state.beatNum
    },

  }
})