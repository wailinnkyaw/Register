<template>
  <v-container>
    <vue-title :title="pgTitle + ' | Vuesterplate'"></vue-title>
    <v-layout text-xs-center wrap>
        <v-flex v-if="errored"><v-alert type="warning" :value="true">
             Error occurred while getting exchanges rates from "Central Bank of Myanmar"
        </v-alert></v-flex>
      <v-flex v-if="loading && !errored">Getting Exchanges Rates from "Central Bank of Myanmar". Please, wait</v-flex>
      <v-flex xs12 offset-md3 md6 v-if="!loading && !errored">
        <v-card>
          <v-layout>
            <v-flex xs12>
              <h1>Exchange Rates</h1>
              <h2>"Central Bank of Myanmar"</h2>
              <v-divider light></v-divider>
              <v-list>
                <v-list-tile v-for="(item, key) in axiosRates.rates" :key="key">
                  <v-list-tile-content>
                    <v-list-tile-title>1 {{key}} = {{item}} MMK</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      pgTitle:"Axios sample",
      axiosRates: {},
      loading: false,
      errored: false,
      errorText: ""
    };
  },
  mounted() {
    this.loading = true;
    axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}https://forex.cbm.gov.mm/api/latest`
      )
      .then(response => {
        this.axiosRates = response.data;
      })
      .catch(error => {
        //console.log(error);
        this.errorText = error;
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    //
  }
};
</script>

<style>
</style>
