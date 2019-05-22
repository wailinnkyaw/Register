<template>
  <v-container>
    <vue-title :title="pgTitle + ' | Vuesterplate'"></vue-title>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-card>
          <v-data-table :headers="headers" :items="empList" class="elevation-1">
            <template v-slot:items="props">
              <td class="text-xs-center">{{ props.item.id }}</td>
              <td class="text-xs-left">{{ props.item.employee_name }}</td>
              <td class="text-xs-right">{{ props.item.employee_salary }}</td>
              <td class="text-xs-right">{{ props.item.employee_age }}</td>
              <td class="text-xs-right">{{ props.item.profile_image }}</td>
            </template>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { sampleApi } from "../../services/sample-api-service";
export default {
  data() {
    return {
      pgTitle: "Axios sample",
      empList: [],
      loading: false,
      errored: false,
      errorText: "",
      headers: [
        {
          text: "ID",
          value: "id",
          sortable: true,
          align: "center"
        },
        { text: "Name", value: "employee_name", align: "left" },
        { text: "Salary", value: "employee_salary", align: "right" },
        { text: "Age", value: "employee_age", align: "right" },
        { text: "Profile", value: "profile_image", align: "right" }
      ]
    };
  },
  mounted() {
    this.loading = true;
    this.getEmpList();
  },
  methods: {
    getEmpList: function() {
      sampleApi.getEmpList().then(res => {
        this.empList = res.data;
      });
    }
  }
};
</script>

<style>
</style>
