<template>
  <div id="edit">
    <h3>Editing</h3>
    <form>
      <div class="form-group col-md-offset-2 col-md-8">
        <input class="form-control" v-model="story.plot" value="story.plot">
      </div>
      <div class="form-group col-md-12">
        <button @click="saveChanges(story)" class="btn btn-success">
          Save Changes
        </button>
        <button @click="goBack" class="btn btn-default">
          Go Back
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { store } from '../store.js'

export default {
  data () {
    return {
      story: {}
    }
  },
  props: ['id'],
  methods: {
    goBack () {
      this.$router.back();
    },
    isTheOne (story) {
      return story.id === this.id
    },
    saveChanges (story) {
      console.log('Saved!')
      this.$router.push({ name: 'stories' })
    }
  },
  mounted () {
    console.log('edit')
    this.story = store.stories.find((story) => this.isTheOne(story))
  }
}
</script>
