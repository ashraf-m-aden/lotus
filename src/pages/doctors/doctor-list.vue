<template>
  <div>
    <div class="container-fluid">
      <div class="page-header">
        <Breadcrumbs main="Doctors" title="Doctors List" />
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive datatable-vue user-list">
                <!--<commonTable
                  :selectMode="selectMode"
                  :items="items"
                  :fields="tablefields"
                  :filter="filter"
                  :perPage="perPage"
                  :totalRows="totalRows"
                  :currentPage="currentPage"
                  :selectable="false"
                >
                </commonTable>-->
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
                  @filtered="onFiltered"
                >
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { userStore } from "@/store/user";
import { computed, onMounted } from "vue";

let modes = ["multi", "single", "range"];
let tablefields = [
  { key: "name", label: "Nom", sortable: true },
  { key: "email", label: "Email", sortable: false },
  { key: "lastLogin", label: "Derniere connection", sortable: false },
  { key: "action" },
];
let filter: any = null;
let totalRows = 1;
let currentPage = 1;
let perPage = 10;
let pageOptions = [5, 10, 15];
let selectMode = "multi";
let selected = [];
const user = userStore();

const items = computed(() => {
  return user.getUsers;
});
onMounted(() => {
  totalRows = items.value.length;
});
const sortOptions = computed(() => {
  // Create an options list from our fields
  return tablefields
    .filter((f) => f.sortable)
    .map((f) => {
      return { text: f.label, value: f.key };
    });
});

const deleteSelected = (item: any) => {
  // let objIndex = selected.findIndex((obj) => obj.id == item.id);
  // if (objIndex > -1) {
  //   selected.splice(objIndex, 1);
  // } else {
  //   selected.push(item);
  // }
};
const getImgUrl = (path: string) => {
  return require("@/assets/images/users/" + path);
};
// const rowSelected = (item) => {
//   selected = item;
//   if (item[0]) {
//     edit = edit !== item[0].id ? item[0].id : null;
//   }
// };
const onFiltered = (filteredItems: any) => {
  // Trigger pagination to update the number of buttons/pages due to filtering
  totalRows = filteredItems.length;
  currentPage = 1;
};
// const deleteRow = () => {
//   const array = items.value;
//   for (var i = array.length - 1; i >= 0; i--) {
//     for (var j = 0; j < selected.length; j++) {
//       if (array[i] && array[i].id === selected[j].id) {
//         array.splice(i, 1);
//       }
//     }
//   }
// };
// const deleteBatchRow = () => {
//   for (var i = 0; i < selected.length; i++) {
//     if (items[i].id == selected[i].id) {
//       items.splice(items[i], 1);
//     }
//   }
// };
// const showMsgBoxTwo = () => {
//   $bvModal
//     .msgBoxConfirm("Are you sure!", {
//       title: "Confirmation",
//       size: "md",
//       buttonSize: "sm",
//       okVariant: "primary",
//       okTitle: "YES",
//       cancelTitle: "CANCLE",
//       footerClass: "p-2",
//       hideHeaderClose: false,
//       // centered: true
//     })
//     .then((value) => {
//       deleteRow();
//       selected = [];
//     })
//     .catch((err) => {
//       // An error occurred
//     });
</script>
