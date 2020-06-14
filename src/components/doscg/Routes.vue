<template>
  <!-- <div class="container">
    <div id="right-panel" ref="rightPanel"></div>
    <div id="map" ref="map"></div>
  </div>-->
  <div class="d-flex flex-row justify-content-center align-items-center body-content">
    <b-card
      header="Best Route from SCG Bangsue to Central World"
      img-alt="Image"
      img-top
      tag="article"
      style="min-width: 30rem;"
    >
      <b-list-group flush>
        <b-list-group-item>วิธีการเดินทาง: {{ direction[0].travel_mode }}</b-list-group-item>
        <b-list-group-item v-for="(step, index) in direction" :key="index">
          เส้นทาง: <span v-html="step.html_instructions"></span>
          ระยะทาง: {{ step.distance.text }}, ระยะเวลา: {{ step.duration.text }}
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>

<script>
import { backendURL } from '@/store/host';

export default {
  name: 'Routes',
  data() {
    return {
      routes: [],
      google: null,
      direction: []
    };
  },
  mounted() {
    this.$nextTick(async () => {
      await this.lsCheck();
    });
  },
  methods: {
    lsCheck() {
      let lsData = localStorage.getItem('_routes');
      if (lsData) {
        let json = JSON.parse(lsData);
        this.routes = json;
        this.direction = json.legs[0].steps;
        console.log(this.direction);
      } else {
        this.getRoutes();
      }
    },
    getRoutes() {
      const url = `${backendURL}/getRoutes`;
      console.log(url);
      this.$http
        .get(url)
        .then(r => {
          console.log(r);
          this.routes = r.data;
          this.direction = this.routes.legs[0].steps;
          console.log(this.direction);
          localStorage.setItem('_routes', JSON.stringify(r.data));
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#map {
  height: 100%;
}
#right-panel {
  line-height: 30px;
  padding-left: 10px;
}

#right-panel select,
#right-panel input {
  font-size: 15px;
}

#right-panel select {
  width: 100%;
}

#right-panel i {
  font-size: 12px;
}
#right-panel {
  height: 100%;
  float: right;
  width: 390px;
  overflow: auto;
}
#map {
  margin-right: 400px;
}

.card-header {
  font-size: 1.5rem !important;
  font-weight: 600 !important;
  margin-bottom: 0.75rem !important;
}
</style>
