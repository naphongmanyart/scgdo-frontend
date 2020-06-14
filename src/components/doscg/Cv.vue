<template>
  <div class="d-flex flex-row justify-content-center align-items-center">
    <div class="container-fluid">
      <div class="row body-content">
        <div class="col-6 d-flex justify-content-center align-items-center">
          <div class="left-col">
            <div class="text-container">
              <h2>Hello, I'm</h2>
              <h1>Naphong Manyart</h1>
              <h4>Web Developer</h4>
            </div>
            <div class="btn-container">
              <b-button
                href="https://www.dropbox.com/s/4eiuykiyqhpadmf/cv_nm_20200127.pdf?dl=0"
                class="cv"
                target="_blank"
              >Download My CV</b-button>
            </div>
          </div>
        </div>
        <div class="col-6 right-col" :style="bgImage"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgImage: {
        backgroundImage: `url(${require('@/assets/annie-spratt-hX_hf2lPpUU-unsplash.jpg')})`,
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
        'back-position': 'bottom'
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
h1 {
  font-weight: 600;
}

.left-col {
  flex-direction: column;
}

.btn-container {
  margin-top: 15px;
}

.cv {
  color: #51703d;
  border: 3px solid #51703d;
  border-radius: 0;
  background: transparent;

  &:hover {
    color: #fff;
    background-color: #51703d;
  }
}
</style>
