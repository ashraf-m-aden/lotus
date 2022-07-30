<template>
  <div class="col-xl-6 xl-100">
    <px-card title="Employee status">
      <div class="card-body">
        <div class="user-status table-responsive products-table">
          <b-table
            show-empty
            :items="employee"
            :fields="tablefields"
            :filter="filter"
            :current-page="currentPage"
            :per-page="perPage"
            @filtered="onFiltered"
          >
            <template #cell(image)="field">
              <div class="align-middle image-sm-size">
                <img
                  class="img-radius align-top m-r-15 rounded-circle blur-up lazyloaded"
                  :src="getImgUrl(field.item.image)"
                />
                <div class="d-inline-block">
                  <h6>
                    {{ field.item.name }}
                    <span class="text-muted digits">{{ field.item.user }}</span>
                  </h6>
                </div>
              </div>
            </template>
            <template #cell(skillLevel)="field">
              <div>
                <b-progress
                  :value="field.item.skillLevel"
                  :variant="field.item.type"
                  class="sm-progress-bar"
                ></b-progress>
              </div>
            </template>
          </b-table>
        </div>
      </div>
    </px-card>
  </div>
</template>

<script>
export default {
  props: ["employee"],
  data() {
    return {
      tablefields: [
        { key: "image", label: "Name", sortable: false },
        { key: "position", label: "Designation", sortable: false },
        { key: "skillLevel", label: "Skill Level", sortable: false },
        { key: "experience", label: "Experience", sortable: false },
      ],
      filter: null,
      totalRows: this.employee.length,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5],
    };
  },
  created() {},
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.tablefields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },
  mounted() {
    // Set the initial number of
    //  this.totalRows = this.items.length
  },
  methods: {
    getImgUrl(path) {
      return require("@/assets/images/users/" + path);
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>

<style>
</style>