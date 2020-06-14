import Vue from 'vue'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    // key: "REPLACE-THIS-WITH-YOUR-KEY-FROM-ABOVE",
    libraries: "directions" // necessary for places input
  }
});