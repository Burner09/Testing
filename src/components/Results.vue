<template>
  <h2>Reaction time - {{ score }} ms</h2>
  <h4 class="rank">{{ rank }}</h4>
</template>

<script>
export default {
  props: ['score'],
  data() {
    return {
      rank: null
    }
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "Ninja Fingers"
    } else if (this.score < 400) {
      this.rank = 'Rapid Reflexes'
    } else {
      this.rank = 'Snail Pace...'
    }
  }

}
</script>

<style>
  .rank {
    color: #0faf87;
  }
</style>