<template>
  <div>
    <div class="container-fluid">
      <div class="col-12">
        <div class="card tab2-card">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <h4 class="card-title text-underline text-bold text-danger">
                Consultations par trimestre
              </h4>
              <feather
                class="feather"
                type="eye"
                v-show="eye"
                @click="close()"
              ></feather>
              <feather
                class="feather"
                type="eye-off"
                v-show="!eye"
                @click="close()"
              ></feather>
            </div>
            <ul
              class="nav nav-tabs tab-coupon mb-0"
              id="top-tab"
              role="tablist"
              v-if="eye && !loading && trimestres.length > 0"
            >
              <div class="tab-content" id="top-tabContent">
                <b-tabs content-class="mt-3">
                  <b-tab>
                    <template v-slot:title>
                      <feather type="heart"></feather>1er trimestre
                    </template>
                    <b-card-text>
                      <TrimestreDetails
                        @update="sauvegardeTrimestre"
                        :dossier="dossier"
                        :trimestreProp="trimestres[0]"
                      >
                      </TrimestreDetails>
                    </b-card-text>
                  </b-tab>
                  <b-tab>
                    <template v-slot:title>
                      <feather type="activity"></feather>2eme trimestre
                    </template>
                    <b-card-text>
                      <TrimestreDetails
                        @update="sauvegardeTrimestre"
                        :dossier="dossier"
                        :trimestreProp="trimestres[1]"
                      >
                      </TrimestreDetails>
                    </b-card-text>
                  </b-tab>
                  <b-tab>
                    <template v-slot:title>
                      <feather type="activity"></feather>3eme trimestre
                    </template>
                    <b-card-text>
                      <TrimestreDetails
                        @update="sauvegardeTrimestre"
                        :dossier="dossier"
                        :trimestreProp="trimestres[2]"
                      >
                      </TrimestreDetails>
                    </b-card-text>
                  </b-tab>
                </b-tabs>
              </div>
            </ul>
            <b-spinner v-else variant="primary" label="Spinning"></b-spinner>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import TrimestreDetails from "./trimestreDetails.vue";
import trimestreService from "@/services/trimestre";
import { defineProps } from "vue";

const props = defineProps(["dossier"]);

const eye = ref(false);
const loading = ref(false);
const trimestres = ref([]);

onMounted(async () => {
  trimestres.value = await trimestreService.getAllTrimestre(props.dossier.id);
});
watch(props.dossier, async () => {
  loading.value = true;
  trimestres.value = await trimestreService.getAllTrimestre(props.dossier.id);
  loading.value = false;
});

const close = () => {
  eye.value = !eye.value;
};
const sauvegardeTrimestre = async (value: any) => {
  try {
    value.date = Date.parse(value.date);
    value.date = new Date(value.date);
    console.log(value.date);
  } catch (error) {
    value.date = Date.parse(value.date);
  }
  loading.value = true;
  await trimestreService.setTrimestre(value).then(async () => {
    trimestres.value = await trimestreService.getAllTrimestre(props.dossier.id);
    loading.value = false;
  });
};
</script>

<style>
.boxsizingBorder {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.feather {
  cursor: pointer;
}
</style>
