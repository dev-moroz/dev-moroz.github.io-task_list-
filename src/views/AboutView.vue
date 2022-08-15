<template>
  <div class="about flex flex-center column item-center">
      <q-card-section class="descriptoin q-ma-sm">
      <h4>About this app</h4>
      <h3></h3>
      <p>
        <strong>Descriptoin</strong> <br>
        This test application is designed to track tasks <br>
        You can add, remove, change and mark task <br>
        First paragraphe is header, next paragraphes is description task
      </p>
      <h3></h3>
      <p>
        <strong>Techology:</strong> <br>
        🔥 Google firebase <br>
        🔥 Framework Quasare <br>
        ✅ Vuex <br>
        ✅ Router <br>
      </p>
    </q-card-section>
  </div>
</template>

<style lang="scss">
.about{
  height: 100%;

  .descriptoin{
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
  }

  p{
    font-size: 1.2em;
  }

}
</style>