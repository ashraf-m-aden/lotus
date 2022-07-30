<template>
  <div class="btn-popup pull-right">
    <b-button v-b-modal.modal-1 :variant="categoryType == 'digital' ? 'primary' : 'primary'">Add Category</b-button>
    <b-modal
      id="modal-1"
      :title="categoryType == 'digital' ? 'Add Digital Product' : 'Add Physical Product'"
      @ok="onSave"
      ok-title="Save"
      ok-variant="primary"
    >
      <form class="needs-validation">
        <div class="form">
          <div class="form-group">
            <label for="validationCustom01" class="mb-1">Category Name :</label>
            <input
              class="form-control"
              id="validationCustom01"
              type="text"
              v-model="name"
            />
          </div>
          <div class="form-group mb-0">
            <label for="validationCustom02" class="mb-1"
              >Category Image :</label
            >
            <input class="form-control" id="validationCustom02" type="file" />
          </div>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "GlobalCategoryModal",
  props:["categoryType"],
  data() {
    return {
      name: "",
      image: ""
    };
  },
  methods: {
    onSave() {
      //   bvModalEvt.preventDefault();
      var formData = [
        {
          name: this.name,
          image: this.image
        }
      ];
      console.log(formData);
      this.$emit("formData", formData);
    }
  }
};
</script>

<style>

</style>