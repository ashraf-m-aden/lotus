<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid bulk-cate">
      <div>
        <slot name="with-padding"></slot>
        <vue-dropzone
          id="singledropzone"
          :options="singledropzoneOptions"
          class="dropzone digits"
        >
        </vue-dropzone>
      </div>

      <!-- <px-card title="Media File List" class="datatable-vue">
        <div slot="with-padding">
          <b-table
            class="text-center"
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
            @row-selected="rowSelected"
          >
            <template v-slot:head(delete)>
              <b-button
                variant="danger"
                :disabled="selectedRows.length === 0"
                @click="showMsgBoxTwo"
                >Delete</b-button
              >
            </template>
            <template #cell(image)="field">
              <img
                height="50px"
                :src="getImgUrl(field.item.images)"
                width="50px"
              />
            </template>
            <b-table-column v-slot:cell(delete)>
              <a href="#">edit</a>
              <a href="#"> remove</a>
            </b-table-column>

            <template v-slot:cell(delete)="{ item, field: { key } }">
              <b-checkbox
                v-model="item[key]"
                @change="deleteSelected(item)"
              ></b-checkbox>
            </template>
          </b-table>
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
      </px-card> -->
    </div>
    <!-- Container-fluid Ends-->
  </div>
</template>

<script setup lang="ts">
//import Body from "../components/body.vue";

let singledropzoneOptions = {
  url: "http://localhost:8080",
  thumbnailWidth: 150,
  maxFiles: 1,
  maxFilesize: 2,
  addRemoveLinks: true,
  dictDefaultMessage:
    "<i class='fas fa-cloud-upload-alt' aria-hidden='true'></i><h6>Drop files here or click to upload.</h6>",
};
let tablefields = [
  { key: "delete" },
  { key: "image", label: "Image", sortable: false },
  { key: "name", label: "File Name", sortable: false },
  { key: "url", label: "Url", sortable: false },
];

let filter = null;
let totalRows = 1;
let currentPage = 1;
let perPage = 10;
let pageOptions = [5, 10, 15];
let selectMode = "multi";
let selected: any = [];

const getImgUrl = (path: string) => {
  return require("@/assets/images/dashboard/product/" + path);
};
// const onFiltered = (filteredItems: any) => {
//   // Trigger pagination to update the number of buttons/pages due to filtering
//   totalRows = filteredItems.length;
//   currentPage = 1;
// };
// const rowSelected = (item: any) => {
//   selected = item;
//   if (item[0]) {
//     edit = edit !== item[0].id ? item[0].id : null;
//   }
// };
// const deleteSelected = (item: any) => {
//   let objIndex = selected.findIndex((obj) => obj.id == item.id);
//   if (objIndex > -1) {
//     selected.splice(objIndex, 1);
//   } else {
//     selected.push(item);
//   }
// };
// const deleteRow = () => {
//   for (var i = items.length - 1; i >= 0; i--) {
//     for (var j = 0; j < selected.length; j++) {
//       if (items[i] && items[i].id === selected[j].id) {
//         items.splice(i, 1);
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
// const clearSelected = () => {
//   console.log("button clicked");
//   selectedRows.forEach((item) => {
//     console.log("item", item);
//     selectedRows.splice(item, 1);
//     $delete(item, "delete");
//   });
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
// };
</script>
