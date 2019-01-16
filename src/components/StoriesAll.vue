<template>
  <div id="storiesAll">
    <h2>All Stories</h2>
    <ul class="list-group">
      <li v-for="(story, index) in stories" class="list-group-item" :key="index">
        {{ story.writer }} said "{{ story.plot }}"
        Story upvotes {{ story.upvotes }}.
        <router-link
          :to="{ name: 'stories.edit', params: { id: story.id }}"
          tag="button" class="btn btn-default" exact>
          Edit
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { store } from '../store.js'

export default {
  data () {
    return {
      stories: store.stories
    }
  },
  mounted () {
    console.log('stories')
  }
}
</script>
