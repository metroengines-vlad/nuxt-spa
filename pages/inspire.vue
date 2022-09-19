<template>
  <v-row>
    <v-col class="text-center">
      <img
        src="/nuxt-spa/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote v-if="quoteReady" class="blockquote">
        &#8220;{{ quote.content }}&#8221;
        <footer>
          <small>
            <em>&mdash;{{ quote.author }}</em>
          </small>
        </footer>
      </blockquote>

      <button @click="fetch">
        refresh
      </button>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'InspirePage',

  data () {
    return {
      quote: {}
    }
  },

  computed: {
    quoteReady () {
      if (this.quote) {
        return true
      }

      return false
    }
  },

  methods: {
    async fetch () {
      this.quote = await fetch(
        'https://api.quotable.io/random'
      ).then(res => res.json())

      console.log('yoooo!', this.quote)
    }
  }
}
</script>
