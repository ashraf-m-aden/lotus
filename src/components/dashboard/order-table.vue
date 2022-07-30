<template>
  <div class="col-xl-6 xl-100">
    <px-card title="Latest Orders">
      <div slot="with-padding">
        <div class="table-responsive datatable-vue user-status">
          <b-table
            show-empty
            :items="order"
            :fields="tablefields"
            :filter="filter"
            :current-page="currentPage"
            :per-page="perPage"
            @filtered="onFiltered"
          >
            <template :scope="order" #cell(paymentMethod)="field">
               <span v-if="field.item.paymentMethod == 'Bank Transfer'" class="font-secondary">{{ field.item.paymentMethod}}</span>
                <span v-if="field.item.paymentMethod == 'Ewallets'" class="font-primary">{{ field.item.paymentMethod}}</span>
                <span v-if="field.item.paymentMethod == 'Cash'" class="font-primary">{{ field.item.paymentMethod}}</span>
                <span v-if="field.item.paymentMethod == 'Direct Deposit'" class="font-success">{{ field.item.paymentMethod}}</span>
                <span v-if="field.item.paymentMethod == 'Bank Transfers'" class="font-success">{{ field.item.paymentMethod}}</span>
                <span v-if="field.item.paymentMethod == 'Mastercard'" class="font-primary">{{ field.item.paymentMethod}}</span>
            </template>
          </b-table>
        </div>

        <router-link class="btn btn-primary" to="/sales/order"
          >View All Orders</router-link
        >
      </div>
    </px-card>
  </div>
</template>

<script>
export default {
  props: ["order"],
  data() {
    return {
      tablefields: [
        { key: "orderId", label: "OrderID", sortable: false },
        { key: "total", label: "Order Total", sortable: false },
        { key: "paymentMethod", label: "Payment Method", sortable: false },
        { key: "status", label: "status", sortable: false }
      ],
      filter: null,
      totalRows: this.order.length,
      currentPage: 1,
      perPage: 7,
      pageOptions: [5]
    };
  },
  created() {},
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