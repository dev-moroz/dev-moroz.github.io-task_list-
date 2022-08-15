<template>
  <div class="home flex flex-center column" :style="$store.getters.tasks.length ? '' : 'height: 80vh'">
    <AppInput class="flex row flex-center"/>
    <AppTask class="flex row flex-center" />
  </div>
</template>

<script>
import AppInput from '@/components/AppInput.vue'
import AppTask from '@/components/AppTask.vue'

export default {
  name: 'HomeView',
  components: {
    AppInput,
    AppTask,
  },
}
</script>
