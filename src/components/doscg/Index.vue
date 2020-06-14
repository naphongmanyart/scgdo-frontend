<template>
  <div class="d-flex flex-row justify-content-center align-items-center body-content">
    <div v-for="(item, index) in api" :key="index">
      <b-card
        :title="item.name"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2 mr-2 ml-2"
      >
        <b-button :href="item.url" variant="primary">Go to page</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      api: [
        { id: 1, name: 'Sequence', url: 'DOSCG/sequences' },
        { id: 2, name: 'Equation', url: 'DOSCG/equation' },
        { id: 3, name: 'Google API', url: 'DOSCG/routes' },
        // { id: 4, name: 'LINE API', url: '' },
        { id: 5, name: 'CV', url: 'DOSCG/cv' }
      ]
    };
  }
};
</script>

<style>
</style>