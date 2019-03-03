<template>
  <div id="app">
   	<CountdownTimer :endDate = "countDownFilm.releaseDate" 
      :film = "countDownFilm" 
      v-on:set-modal-meta = "setModalMeta"
      :ticketsUrl = "'https://www.fandango.com/captain-marvel-2019-188283/movie-times'"
    ></CountdownTimer>

  	<h2 class = "page-name" id = "timeline-main">
  		Timeline
  	</h2>

   	<Timeline v-on:set-modal-meta = "setModalMeta"></Timeline>

    <TrailerModal :selectedMovie = "selectedMovie" 
      :startPlaying = "trailerIsPlaying"

      v-on:hide-player = "hidePlayer()"
    ></TrailerModal>
  </div>
</template>

<script>
import CountdownTimer from './components/CountdownTimer.vue';
import TrailerModal from './components/TrailerModal.vue';
import Timeline from './components/Timeline.vue';

export default {
  name: 'app',
  
  data () {
    return {

        countDownFilm: {
          id: 1,
          name: 'Captain Marvel',
          releaseDate: 'March 8, 2019',
          trailerUrl: 'https://www.youtube.com/watch?v=0LHxvxdRnYc',
          poster: 'cpt-marvel.jpg'
        },

        selectedMovie: this.countDownFilm,

        trailerIsPlaying: false
    }
  },

  methods: {
    setModalMeta: function (val) {

      this.selectedMovie = val.selectedMovie;
      this.trailerIsPlaying = val.trailerIsPlaying;
    },

    hidePlayer: function () {
        if ( this.trailerIsPlaying == false ) {
          return;
        }

        this.trailerIsPlaying = false;
      },
  },

  components: {
  	CountdownTimer,
    TrailerModal,
  	Timeline
  }
}
</script>

<style lang="scss">

</style>
