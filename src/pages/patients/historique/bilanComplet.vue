<template>
  <div>
    <div
      class="tab-pane fade show active"
      id="top-profile"
      role="tabpanel"
      aria-labelledby="top-profile-tab"
    >
      <div class="d-flex justify-content-between">
        <h5 class="f-w-600">Bilan complet</h5>
        <button
          class="btn btn-group btn-info"
          v-show="!bilanCompletModif"
          @click="
            bilanCompletModif = !bilanCompletModif;
            dataTemp = {};
            Object.assign(dataTemp, bilanComplet);
          "
        >
          Modifier
        </button>
        <button
          class="btn btn-group btn-info"
          v-show="bilanCompletModif"
          @click="
            bilanCompletModif = !bilanCompletModif;
            bilanComplet = new BilanComplet(props.patient.id);
            Object.assign(bilanComplet, dataTemp);
          "
        >
          Annuler
        </button>
      </div>

      <div class="table-responsive profile-table mb-0">
        <table class="table table-responsive mb-0" v-show="!bilanCompletModif">
          <tbody>
            <tr>
              <td>NFS:</td>
              <td>{{ bilanComplet.nfs }}</td>
            </tr>
            <tr>
              <td>GSRH:</td>
              <td>{{ bilanComplet.gsrh }}</td>
            </tr>

            <tr>
              <td>Toxoplasmose:</td>
              <td>{{ bilanComplet.toxoplasmose }}</td>
            </tr>
            <tr>
              <td>Albuminurie:</td>
              <td>{{ bilanComplet.albuminurie }}</td>
            </tr>
            <tr>
              <td>Glycémie:</td>
              <td>{{ bilanComplet.glycemie }}</td>
            </tr>
            <tr>
              <td>Hépatite:</td>
              <td>{{ bilanComplet.hepatite }}</td>
            </tr>
            <tr>
              <td>Rubéole:</td>
              <td>{{ bilanComplet.rubeole }}</td>
            </tr>
            <tr>
              <td>Sucre:</td>
              <td>{{ bilanComplet.sucre }}</td>
            </tr>
            <tr>
              <td>HIV:</td>
              <td>{{ bilanComplet.hiv }}</td>
            </tr>
          </tbody>
        </table>
        <table class="table table-responsive mb-0" v-show="bilanCompletModif">
          <tbody>
            <tr>
              <td>NFS:</td>
              <td>
                <input
                  v-model="bilanComplet.nfs"
                  class="form-control"
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>GSRH:</td>
              <td>
                <input
                  v-model="bilanComplet.gsrh"
                  class="form-control"
                  type="text"
                />
              </td>
            </tr>

            <tr>
              <td>Toxoplasmose:</td>
              <td>
                <input
                  v-model="bilanComplet.toxoplasmose"
                  class="form-control"
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Albuminurie:</td>
              <td>
                <input
                  v-model="bilanComplet.albuminurie"
                  class="form-control"
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Glycémie:</td>
              <td>
                <input
                  v-model="bilanComplet.glycemie"
                  class="form-control"
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Hépatite:</td>
              <td>
                <input
                  v-model="bilanComplet.hepatite"
                  class="form-control"
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Rubéole:</td>
              <td>
                <input
                  v-model="bilanComplet.rubeole"
                  class="form-control"
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Sucre:</td>
              <td>
                <input
                  v-model="bilanComplet.sucre"
                  class="form-control"
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>HIV:</td>
              <td>
                <input
                  v-model="bilanComplet.hepatite"
                  class="form-control"
                  type="text"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button
          class="btn btn-group btn-primary"
          @click="sauvegarderBilanComplet()"
          v-if="bilanCompletModif"
        >
          Sauvegarder
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import patient from "@/services/patient";
import { BilanComplet } from "@/types/BilanComplet";
import { onMounted, ref } from "vue";
import historiquesPatient from "../../../services/historiquesPatient";
import { defineProps } from "vue";

const props = defineProps(["patient"]);

const dataTemp = ref({});

let bilanComplet = new BilanComplet(props.patient.id);
const bilanCompletModif = ref(false);
onMounted(async () => {
  bilanComplet = await historiquesPatient.getBilanComplet(props.patient.id);
});

const sauvegarderBilanComplet = async () => {
  await historiquesPatient.setBilanComplet(bilanComplet).then(async () => {
    await historiquesPatient.getBilanComplet(props.patient.id);
    bilanCompletModif.value = !bilanCompletModif.value;
  });
};
</script>

<style>
.boxsizingBorder {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
