<template>
  <div class="row">
    <div class="col-xl-3 col-md-6 xl-50">
      <div class="card o-hidden widget-cards">
        <div class="bg-warning card-body">
          <div class="media static-top-widget row">
            <div class="icons-widgets col-4">
              <div class="align-self-center text-center">
                <feather type="navigation" class="font-warning"></feather>
              </div>
            </div>
            <div class="media-body col-8">
              <span class="m-0">Chiffre d'affaires</span>
              <h3 class="mb-0">
                FDJ <span class="counter">245000</span><small> ce mois</small>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6 xl-50">
      <div class="card o-hidden  widget-cards">
        <div class="bg-secondary card-body">
          <div class="media static-top-widget row">
            <div class="icons-widgets col-4">
              <div class="align-self-center text-center">
                <feather type="box" class="font-secondary"></feather>
              </div>
            </div>
            <div class="media-body col-8">
              <span class="m-0">Nombre de consultations</span>
              <h3 class="mb-0">
                <span class="counter">158</span><small> ce mois</small>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6 xl-50">
      <div class="card o-hidden widget-cards">
        <div class="bg-primary card-body">
          <div class="media static-top-widget row">
            <div class="icons-widgets col-4">
              <div class="align-self-center text-center">
                <feather type="message-square" class="font-primary"></feather>
              </div>
            </div>
            <div class="media-body col-8">
              <span class="m-0">Nombre d'accouchements</span>
              <h3 class="mb-0">
                <span class="counter">16</span><small> ce mois</small>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6 xl-50">
      <div class="card o-hidden widget-cards">
        <div class="bg-danger card-body">
          <div class="media static-top-widget row">
            <div class="icons-widgets col-4">
              <div class="align-self-center text-center">
                <feather type="users" class="font-danger"></feather>
              </div>
            </div>
            <div class="media-body col-8">
              <span class="m-0">Nombre de patientes</span>
              <h3 class="mb-0">
                <span class="counter">57</span><small> ce mois</small>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "widget"
};
</script>

<style>

</style>