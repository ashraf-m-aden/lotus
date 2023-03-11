<template>
  <div>
    <div class="container-fluid">
      <div class="page-header">
        <Breadcrumbs main="Patients" title="Patient List" />
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 text-center">
          <div v-if="!loading" class="card">
            <div class="card-body">
              <div class="table-responsive datatable-vue user-list">
                <!-- <commonTable
                  :selectMode="selectMode"
                  :items="items"
                  :fields="tablefields"
                  :filter="filter"
                  :perPage="perPage"
                  :totalRows="totalRows"
                  :currentPage="currentPage"
                  :selectable="false"
                >
                </commonTable> -->
                <b-table
                  class="text-center"
                  :select-mode="selectMode"
                  show-empty
                  striped
                  hover
                  head-variant="light"
                  bordered
                  stacked="md"
                  :items="items"
                  :fields="tablefields"
                  :filter="filter"
                  :current-page="currentPage"
                  :per-page="perPage"
                >
                  <template v-slot:cell(action)="{ item }">
                    <!-- <b-checkbox
                      v-model="item[key]"
                      @change="deleteSelected(item)"
                    ></b-checkbox> -->
                    <a>
                      <router-link :to="'/patients/patient-profile/' + item.id"
                        >Consulter</router-link
                      >
                    </a>
                  </template>
                </b-table>
              </div>
              <b-col md="12" class="my-1 p-0 pagination-justify">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="totalRows"
                  :per-page="perPage"
                  aria-controls="my-table"
                  class="mt-4"
                ></b-pagination>
              </b-col>
            </div>
          </div>
          <div class="card text-center border" v-if="loading">
            <div class="spinner-border text-danger text-center" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import patient from "../../services/patient";

let modes = ["multi", "single", "range"];
let tablefields = [
  { key: "name", label: "Nom", sortable: true },
  { key: "dob", label: "Date de naissance", sortable: false },
  { key: "date", label: "Date", sortable: false },
  { key: "action" },
];
const filter = ref(null);
const totalRows = ref(1);
const currentPage = ref(1);
const perPage = ref(10);
let pageOptions: [5, 10, 15];
let selectMode: "multi";
const selected = ref([]);
const items = ref();
const loading = ref(true);
onMounted(async () => {
  await patient
    .getPatients()
    .then((data) => {
      items.value = data;
      totalRows.value = items.value.length;
      loading.value = false;
    })
    .catch((error) => {
      console.log(error);
      loading.value = false;
    });
});
const sortOptions = computed(() => {
  return tablefields
    .filter((f) => f.sortable)
    .map((f) => {
      return { text: f.label, value: f.key };
    });
});

const selectedRows = computed(() => {
  return items.value.filter((item: any) => item.delete);
});

const getImgUrl = (path: string) => {
  return require("@/assets/images/users/" + path);
};
//  const rowSelected= (item)=>  {
//     selected.value = item;
//     if (item[0]) {
//       edit = edit !== item[0].id ? item[0].id : null;
//     }
//   }
//  const onFiltered= (filteredItems) => {
//     // Trigger pagination to update the number of buttons/pages due to filtering
//     totalRows = filteredItems.length;
//     currentPage = 1;
//   }
</script>
