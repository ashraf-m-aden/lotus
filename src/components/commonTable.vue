<template>
  <div class="card-datatable table-responsive pt-0">
    <div>
      <b-modal id="modal-2" title="Confirmation" @ok="deleteRow()">
        <p class="my-4">Are you sure!</p>
      </b-modal>
    </div>
    <b-table
      :select-mode="selectMode"
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
      ref="selectableTable"
      :selectable="selectable"
      @row-selected="rowSelected"
    >
      <template
        v-for="(field, index) in tablefields"
        :slot="field.key"
        slot-scope="data"
      >
        <b-form-input
          :key="index"
          class="border-0 no-shadow p-1"
          type="text"
          v-model="data.item[key]"
        ></b-form-input>
      </template>
      <!-- delete row starts -->
      <template v-slot:head(delete)>
        <b-button
          variant="danger"
          :disabled="selectedRows.length === 0"
          v-b-modal.modal-1
          @click="index =index"
          >Delete</b-button
        >
      </template>
      <template v-slot:cell(delete)="{ item, field: { key } }">
        <b-checkbox v-model="item[key]"></b-checkbox>
      </template>
      <!-- delete row ends -->
      <template v-slot:cell()="{ value, item, field: { key } }">
        <template v-if="edit != item.id">{{ value }}</template>
        <b-form-input v-else v-model="item[key]" />
      </template>
      <template #cell(image)="field">
        <img height="50px" :src="getImgUrl(field.item.image)" width="50px" />
      </template>
      <template v-slot:cell(actions)="{ item: { id } }">
        <feather
          @click="onEdit(id)"
          v-if="edit != id && id !== null"
          type="edit-2"
          stroke="#4050F6"
          stroke-width="1"
          size="18px"
          fill="#4050F6"
          stroke-linejoin="round"
        ></feather>
        <feather
          v-if="edit === id && id !== ''"
          size="18px"
          stroke="#39CCC6"
          stroke-width="5"
          type="check"
          @click="onSave(id)"
        ></feather>
        <feather
          v-if="edit != id"
          type="trash-2"
          stroke="#F72E9F"
          fill="#F72E9F"
          size="18px"
          v-b-modal.modal-2
          @click="index = item.index"
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
          v-else
          type="search"
          stroke-width="6"
          size="22px"
          @click="searchData()"
        ></feather>
      </template>
    </b-table>
    <b-col md="6" class="my-1">
      <b-pagination
        v-model="currentPage"
        :total-rows="totalRow"
        :per-page="perPage"
        aria-controls="my-table"
        class="mt-4"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
      >
      </b-pagination>
    </b-col>
  </div>
</template>

<script>
export default {
  props: [
    "selectMode",
    "items",
    "tablefields",
    "filter",
    "currentPage",
    "perPage",
    "totalRows",
    "selectable"
  ],
  data() {
    return {
      edit: null,
      add: false,
      item: "",
      index: null,
      totalRow: "",
      save: false,
      page: this.currentPage,
    };
  },
  mounted() {
    this.totalRow = this.totalRows;
  },
  computed: {
    //selectedRows() {
    //  return this.items.filter(item => item.delete);
    //},
    sortOptions() {
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
  mounted() {
    // Set the initial number of items
    this.totalRow = this.items.length;
  },
  methods: {
    getImgUrl(path) {
      return require("@/assets/images/digital-product/" + path);
    },
    addRecord() {
      this.add = true;
      console.log("items", this.items[0]);
      this.items.unshift({
        id: "",
        invoice: "",
        date: "",
        shipping: "",
        amount: "",
        tax: "",
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
    },
    onSave(id) {
      this.save = false;
      this.edit = "";
    },
    doCancel(id) {
      this.edit = "";
      this.item = "";
    },
    deleteRow(index) {
      this.items.splice(this.index, 1);
      this.selectedRows.forEach(item => {
        this.$delete(item, "selected");
      });
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      //  this.currentPage = 1;
    },
    rowSelected(item) {
      if (item[0]) {
        this.edit = this.edit !== item[0].id ? item[0].id : null;
      }
    },
    clearSelected() {
      this.selectedRows.forEach(item => {
        this.selectedRows.splice(item, 1);
        this.$delete(item, "delete");
      });
    }
  }
};
</script>