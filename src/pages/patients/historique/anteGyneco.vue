<template lang="">
  <div>
    <div
      class="tab-pane fade show active"
      id="top-profile"
      role="tabpanel"
      aria-labelledby="top-profile-tab"
    >
      <div class="d-flex justify-content-between">
        <h5 class="f-w-600">Antécédents gynécologiques</h5>
        <button
          class="btn btn-group btn-info"
          v-show="!anteGynecoModif"
          @click="
            anteGynecoModif = !anteGynecoModif;
            dataTemp = {};
            Object.assign(dataTemp, anteGyneco);
          "
        >
          Modifier
        </button>
        <button
          class="btn btn-group btn-info"
          v-show="anteGynecoModif"
          @click="
            anteGynecoModif = !anteGynecoModif;
            anteGyneco = {};
            Object.assign(anteGyneco, dataTemp);
          "
        >
          Annuler
        </button>
      </div>

      <div class="table-responsive profile-table mb-0">
        <table class="table table-responsive mb-0" v-show="!anteGynecoModif">
          <tbody>
            <tr>
              <td>Anomalie mamaire:</td>
              <td>{{ anteGyneco.anomalieMamaire }}</td>
            </tr>
            <tr>
              <td>Infection genitale haute ou basse:</td>
              <td>{{ anteGyneco.infectionGenitale }}</td>
            </tr>

            <tr>
              <td>Autres:</td>
              <td>{{ anteGyneco.autres }}</td>
            </tr>
          </tbody>
        </table>
        <table class="table table-responsive mb-0" v-show="anteGynecoModif">
          <tbody>
            <tr>
              <td>Anomalie mamaire:</td>
              <td colspan="6">
                <textarea
                  style="width: 100%"
                  v-model="anteGyneco.anomalieMamaire"
                  class="form-control"
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Infection genitale haute ou basse:</td>
              <td colspan="6" style="width: 100%">
                <textarea
                  style="width: 100%"
                  v-model="anteGyneco.infectionGenitale"
                  class="form-control"
                  type="text"
                />
              </td>
            </tr>

            <tr>
              <td>Autres:</td>
              <td style="width: 100%" colspan="6">
                <textarea
                  style="width: 100%"
                  v-model="anteGyneco.autres"
                  class="form-control"
                  type="text"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button
          class="btn btn-group btn-primary"
          @click="sauvegarderAnteGyneco()"
          v-if="anteGynecoModif"
        >
          Sauvegarder
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { userStore } from "@/store/user";
import { Patient } from "@/types/Patient";
import { onMounted, defineProps, ref } from "vue";
import historiquesPatient from "../../../services/historiquesPatient";

const props = defineProps(["patient"]);
const user = userStore();

const dataTemp = ref({});
let anteGyneco = {
  anomalieMamaire: "",
  infectionGenitale: "",
  autres: "",
  id: "",
  idPatient: props.patient.id,
};
const anteGynecoModif = ref(false);

onMounted(async () => {
  anteGyneco = await historiquesPatient.getAnteGyneco(props.patient.id);
});

const sauvegarderAnteGyneco = async () => {
  await historiquesPatient.setAnteGyneco(anteGyneco).then(async () => {
    await historiquesPatient.getAnteGyneco(props.patient.id);
    anteGynecoModif.value = !anteGynecoModif.value;
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
