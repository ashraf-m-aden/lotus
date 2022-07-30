<template>
  <div class="col-sm-12">
    <px-card title="Transfer Report">
      <div class="card-body">
        <div class="table-responsive datatable-vue product-list">
          <b-modal id="modal-2" title="Confirmation" @ok="deleteRow(selectedSku)">
            <p class="my-4">Are you sure!</p>
          </b-modal>
          <b-table
            striped
            hover
            class="text-center"
            bordered
            head-variant="light"
            show-empty
            stacked="md"
            :items="items"
            :fields="tablefields"
            :filter="filter"
            :current-page="currentPage"
            :per-page="perPage"
            @filtered="onFiltered"
            :select-mode="selectMode"
            :selectable="true"
            @row-selected="rowSelected"
          >
            <template v-slot:cell()="{ value, item, field: { key } }">
              <template v-if="edit != item.id">{{ value }}</template>
              <b-form-input type="text" v-else v-model="item[key]" />
            </template>
            <template v-slot:cell(actions)="{ item: { id } }">
              <span
                style="font-size: 20px; color: blue;"
                v-if="edit != id && id !== null"
                @click="onEdit(id)"
              >
                <feather
                  type="edit-2"
                  stroke="#3758FD"
                  stroke-width="1"
                  size="18px"
                  fill="#3758FD"
                  stroke-linejoin="round"
                ></feather>
              </span>
              <span
                v-if="edit != id"
                v-b-modal.modal-2
                @click="getIndex(id)"
                style="font-size: 20px; color: #FA399F;"
              >
                <feather
                  type="trash"
                  stroke="#F72E9F"
                  size="18px"
                  fill="#F72E9F"
                ></feather>
              </span>
              <feather
                v-if="edit === id && id !== ''"
                size="18px"
                stroke="#39CCC6"
                stroke-width="5"
                type="check"
                @click="onSave(id)"
              ></feather>
              <feather
                stroke="#F7299D"
                size="18px"
                stroke-width="5"
                v-if="edit === id && id !== ''"
                type="x"
                @click="doCancel(id)"
              ></feather>
              <feather
                stroke="#F7299D"
                size="18px"
                stroke-width="5"
                v-if="save && id == ''"
                type="save"
                @click="onSave(id)"
              ></feather>
            </template>
            <template v-slot:head(actions)>
              <feather
                v-if="!add"
                type="plus"
                stroke="#4050F6"
                stroke-width="6"
                size="22px"
                fill="#4050F6"
                @click="addRecord()"
              ></feather>
              <feather
                v-if="add"
                type="search"
                stroke-width="6"
                size="22px"
                @click="searchData()"
              ></feather>
            </template>
          </b-table>
        </div>
      </div>
    </px-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      tablefields: [
        { key: "name", label: "Name", sortable: false },
        { key: "transferId", label: "Transfer Id", sortable: false },
        { key: "date", label: "Date", sortable: false },
        { key: "total", label: "Total", sortable: false },
        { key: "actions" }
      ],

      filter: null,
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [5, 10, 15],
      add: false,
      save: false,
      edit: null,
      item: "",
      selectedSku : "",
      index: null,
      selectMode: "single"
    };
  },
  created() {
    this.$store.dispatch("reports/getTransferData");
  },
  computed: {
    ...mapGetters({
      items: "reports/getTransferData"
    }),

    sortOptions() {
      // Create an options list from our fields
      return this.tablefields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    },
    selectedRows() {
      return this.items.filter(item => item.delete);
    }
  },
  methods: {
    getIndex(id) {
      this.selectedSku = id
    },
    deleteRow(id) {
      this.items.splice(this.items.findIndex(e => e.id === id),1);
    },
    rowSelected(item) {
      if (item[0]) {
        this.edit = this.edit !== item[0].id ? item[0].id : null;
      }
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    onSave(id) {
      this.save = false;
      this.add = false;
      this.edit = 1000;
      //  this.edit = ''
    },
    doCancel(id) {
      this.edit = null;
      this.item = null;
    },
    addRecord() {
      this.add = true;
      this.items.unshift({
        id: "",
        name: "",
        transferId: "",
        date: "",
        total: "",
        actions: ""
      });
      this.edit = "";
      this.save = true;
    },
    searchData() {
      this.add = false;
      this.items.splice(0, 1);
    },
    onEdit(id) {
      if (id !== "undefined") {
        this.edit = this.edit !== id ? id : null;
      }
    }
  }
};
</script>