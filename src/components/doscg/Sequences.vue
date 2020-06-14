<template>
  <div class="d-flex flex-row justify-content-center align-items-center body-content">
    <b-card
      header="Finding Sequence"
      img-alt="Image"
      img-top
      tag="article"
      style="min-width: 30rem;"
    >
      <b-card-text>Finding the variables in sequence: {{ question }}</b-card-text>
      <b-card-text>The value of x, y and z are: {{ answer }}</b-card-text>
    </b-card>
  </div>
</template>

<script>
import { backendURL } from '@/store/host';
export default {
  name: 'Sequences',
  data() {
    return {
      question: [],
      answer: []
    };
  },
  mounted() {
    this.lsCheck();
  },
  methods: {
    lsCheck() {
      let lsData = localStorage.getItem('_sequence');
      if (lsData) {
        let json = JSON.parse(lsData);
        this.question = json.problem;
        this.answer = json.answer;
      } else {
        this.getSeqeunceAnswer();
      }
    },
    getSeqeunceAnswer() {
      const url = `${backendURL}/sequence`;
      this.$http
        .get(url)
        .then(r => {
          this.question = r.data.problem;
          this.answer = r.data.answer;
          localStorage.setItem('_sequence', JSON.stringify(r.data));
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
