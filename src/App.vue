<template>
  <div id="app">
   	<CountdownTimer 

        v-on:set-modal-meta = "setModalMeta"

        :film = "featuredFilm"
        :endDate = "featuredFilm.releaseDate"
        :ticketsUrl = "MovieList.featuredFilm.tickets_url"
        :timerIsLarge = "true"

    >
      
      <template v-slot:navbar>
        <NavigationBar></NavigationBar>
      </template>

    </CountdownTimer>

    <div id = "next-timer" class="small-timer-wrapper">
      
      <CountdownTimer 

            v-on:set-modal-meta = "setModalMeta"

            :film = "subFilm"
            :endDate = "subFilm.releaseDate"
            :ticketsUrl = "MovieList.otherFeatured.tickets_url"
            :timerIsLarge = "false"

        >
        </CountdownTimer>
    </div>

  	<h2 class = "page-name" id = "timeline-main">
  		Timeline
  	</h2>

   	<Timeline v-on:set-modal-meta = "setModalMeta"></Timeline>

    <TrailerModal 

      :selectedMovie = "selectedMovie" 
      :startPlaying = "trailerIsPlaying"
      v-on:hide-player = "hidePlayer()"

    ></TrailerModal>
  </div>
</template>

<script>
import CountdownTimer from './components/CountdownTimer.vue';
import NavigationBar from './components/NavigationBar.vue';
import TrailerModal from './components/TrailerModal.vue';
import Timeline from './components/Timeline.vue';

import MovieList from './data/movies.js';

export default {
  name: 'app',
  
  data () {
    return {

        MovieList: MovieList,

        selectedMovie: this.countDownFilm,

        trailerIsPlaying: false,

        featuredFilm: MovieList.movieList.find( (m, i) => { 
            return m.id === MovieList.featuredFilm.id 
        } ),

        subFilm: MovieList.movieList.find( (m, i) => { 
            return m.id === MovieList.otherFeatured.id
        } )
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
    NavigationBar,
  	Timeline
  }
}
</script>

<style lang="scss">

</style>
