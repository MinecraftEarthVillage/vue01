<template>
  <popup></popup>
  <popup>
    <template v-slot:footer="message">
        {{ message.data.join('------') }}
    </template>
  </popup><br>
  <popup>
    <template v-slot:footer="message">
        {{ message.data.join('*******') }}
    </template>
  </popup>
</template>

<script>
import popup from './popup.vue'
export default {
  components: { popup },

}
</script>

<style>

</style>