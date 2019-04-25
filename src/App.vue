<template>
  <div id="app">
   	<CountdownTimer 

        :film = "featuredFilm"
        :endDate = "featuredFilm.releaseDate"
        :ticketsUrl = "MovieList.featuredFilm.tickets_url"
        :timerIsLarge = "true"
        :shadowColor = "MovieList.featuredFilm.shadow_color"

    >
      
      <template v-slot:navbar>
        <NavigationBar></NavigationBar>
      </template>

    </CountdownTimer>

    <div id = "next-timer" class="small-timer-wrapper">
      
      <CountdownTimer 

            :film = "subFilm"
            :endDate = "subFilm.releaseDate"
            :ticketsUrl = "MovieList.otherFeatured.tickets_url"
            :timerIsLarge = "false"
            :shadowColor = "MovieList.otherFeatured.shadow_color"

        >
        </CountdownTimer>
    </div>

  	<h2 class = "page-name" id = "timeline-main">
  		Timeline
  	</h2>

   	<Timeline></Timeline>

  </div>
</template>

<script>
import CountdownTimer from './components/CountdownTimer.vue';
import NavigationBar from './components/NavigationBar.vue';
import Timeline from './components/Timeline.vue';

import MovieList from './data/movies.js';

export default {
  name: 'app',
  
  data () {
    return {

        MovieList: MovieList,

        featuredFilm: MovieList.movieList.find( (m, i) => { 
            return m.id === MovieList.featuredFilm.id 
        } ),

        subFilm: MovieList.movieList.find( (m, i) => { 
            return m.id === MovieList.otherFeatured.id
        } )
    }
  },

  methods: {
    
  },

  components: {
  	CountdownTimer,
    NavigationBar,
  	Timeline
  }
}
</script>

<style lang="scss">

</style>
