<template>
  <div class="search container">
  <Content />
  </div>
</template>

<script>
// @ is an alias to /src
import Content from '@/components/Content.vue'
    
export default {
  name: 'Search',
  components: {
    Content
  }
}
</script>
