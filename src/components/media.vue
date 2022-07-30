<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid bulk-cate">
      <div slot="with-padding">
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

<script>
//import Body from "../components/body.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    //Body: Body,
  },
  created() {
    // this.$store.dispatch("media/getMedia");
  },
  data() {
    return {
      singledropzoneOptions: {
        url: "http://localhost:8080",
        thumbnailWidth: 150,
        maxFiles: 1,
        maxFilesize: 2,
        addRemoveLinks: true,
        dictDefaultMessage:
          "<i class='fas fa-cloud-upload-alt' aria-hidden='true'></i><h6>Drop files here or click to upload.</h6>",
      },
      tablefields: [
        { key: "delete" },
        { key: "image", label: "Image", sortable: false },
        { key: "name", label: "File Name", sortable: false },
        { key: "url", label: "Url", sortable: false },
      ],

      filter: null,
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [5, 10, 15],
      selectMode: "multi",
      selected: [],
    };
  },

  methods: {
    getImgUrl(path) {
      return require("@/assets/images/dashboard/product/" + path);
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    rowSelected(item) {
      this.selected = item;
      if (item[0]) {
        this.edit = this.edit !== item[0].id ? item[0].id : null;
      }
    },
    deleteSelected(item) {
      let objIndex = this.selected.findIndex((obj) => obj.id == item.id);
      if (objIndex > -1) {
        this.selected.splice(objIndex, 1);
      } else {
        this.selected.push(item);
      }
    },
    deleteRow() {
      for (var i = this.items.length - 1; i >= 0; i--) {
        for (var j = 0; j < this.selected.length; j++) {
          if (this.items[i] && this.items[i].id === this.selected[j].id) {
            this.items.splice(i, 1);
          }
        }
      }
    },
    deleteBatchRow() {
      for (var i = 0; i < this.selected.length; i++) {
        if (this.items[i].id == this.selected[i].id) {
          this.items.splice(this.items[i], 1);
        }
      }
    },
    clearSelected() {
      console.log("button clicked");
      this.selectedRows.forEach((item) => {
        console.log("item", item);
        this.selectedRows.splice(item, 1);
        this.$delete(item, "delete");
      });
    },
    showMsgBoxTwo() {
      this.$bvModal
        .msgBoxConfirm("Are you sure!", {
          title: "Confirmation",
          size: "md",
          buttonSize: "sm",
          okVariant: "primary",
          okTitle: "YES",
          cancelTitle: "CANCLE",
          footerClass: "p-2",
          hideHeaderClose: false,
          // centered: true
        })
        .then((value) => {
          this.deleteRow();
          this.selected = [];
        })
        .catch((err) => {
          // An error occurred
        });
    },
  },
};
</script>
