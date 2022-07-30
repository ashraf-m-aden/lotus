<template>
  <div class="col-xl-6 xl-100">
    <px-card title="Goods return">
      <div class="card-body">
        <div class="user-status table-responsive products-table">
          <b-table
            show-empty
            :items="data"
            :fields="tablefields"
            :filter="filter"
            :current-page="currentPage"
            :per-page="perPage"
            @filtered="onFiltered"
          >
            <template #cell(returnStatus)="field">
                <span v-if="field.item.returnStatus == 'Cancel'" class="font-secondary">{{ field.item.returnStatus}}</span>
                <span v-if="field.item.returnStatus == 'Pending'" class="font-primary">{{ field.item.returnStatus}}</span>
                <span v-if="field.item.returnStatus == 'Return'" class="font-primary">{{ field.item.returnStatus}}</span>
                <span v-if="field.item.returnStatus == 'Delivered'" class="font-success">{{ field.item.returnStatus}}</span>
            </template>
          </b-table>
        </div>
      </div>
    </px-card>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      tablefields: [
        { key: "details", label: "Details", sortable: false },
        { key: "stock", label: "Quantity", sortable: false },
        { key: "returnStatus", label: "status", sortable: false },
        { key: "price", label: "Price", sortable: false }
      ],
      filter: null,
      totalRows: this.data.length,
      currentPage: 1,
      perPage: 8,
      pageOptions: [5]
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.tablefields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    }
  },
  mounted() {
    // Set the initial number of
    //  this.totalRows = this.items.length
  },
  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
};
</script>

<style>

</style>