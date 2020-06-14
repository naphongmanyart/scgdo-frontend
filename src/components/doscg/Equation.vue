<template>
  <div class="d-flex flex-row justify-content-center align-items-center body-content">
    <b-card
      header="Find variable value"
      img-alt="Image"
      img-top
      tag="article"
      style="min-width: 30rem;"
    >
      <b-card-text>
        <div>
          What is the value of B and C?
          <br />If A = 21, A + B = 23, A + C = -21
        </div>
      </b-card-text>
      <b-card-text>
        The value of B and C are: B = {{ bValue }}, C =
        {{ cValue }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import { backendURL } from '@/store/host';
export default {
  name: 'Equation',
  data() {
    return {
      bValue: '',
      cValue: ''
    };
  },
  mounted() {
    this.lsCheck();
  },
  methods: {
    lsCheck() {
      let lsData = localStorage.getItem('_equation');
      if (lsData) {
        let json = JSON.parse(lsData);
        this.bValue = json.b;
        this.cValue = json.c;
      } else {
        this.getEquationAnswer();
      }
    },
    getEquationAnswer() {
      const url = `${backendURL}/equation`;
      this.$http
        .get(url)
        .then(r => {
          this.bValue = r.data.b;
          this.cValue = r.data.c;
          localStorage.setItem('_equation', JSON.stringify(r.data));
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.card-header {
  font-size: 1.5rem !important;
  font-weight: 600 !important;
  margin-bottom: 0.75rem !important;
}
</style>
