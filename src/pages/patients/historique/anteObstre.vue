<template lang="">
  <div>
    <div
      class="tab-pane fade show active"
      id="top-profile"
      role="tabpanel"
      aria-labelledby="top-profile-tab"
    >
      <div class="d-flex justify-content-between">
        <h5 class="f-w-600">Antécédents obstétricaux</h5>
        <button
          class="btn btn-group btn-info"
          v-show="!anteObstreModif"
          @click="
            anteObstreModif = !anteObstreModif;
            dataTemp = {};
            Object.assign(dataTemp, anteObstre);
          "
        >
          Modifier
        </button>
        <button
          class="btn btn-group btn-info"
          v-show="anteObstreModif"
          @click="
            anteObstreModif = !anteObstreModif;
            anteObstre = {};
            Object.assign(anteObstre, dataTemp);
          "
        >
          Annuler
        </button>
      </div>

      <div class="table-responsive profile-table mb-0">
        <table class="table table-responsive mb-0" v-show="!anteObstreModif">
          <tbody>
            <tr>
              <td>Nombre de grossesses:</td>
              <td>{{ anteObstre.nbrGrossesse }}</td>
              <td>Nombre de grossesses normales:</td>
              <td>{{ anteObstre.nbrGrossesseNormal }}</td>
              <td>Nombre de grossesses compliquées:</td>
              <td>{{ anteObstre.nbrGrossesseComplique }}</td>
            </tr>
            <tr>
              <td>La ou les complications:</td>
              <td>{{ anteObstre.complicationGrossesse }}</td>
            </tr>
            <tr>
              <td>Nombre d'avortements:</td>
              <td>{{ anteObstre.nbrAvortement }}</td>
              <td>A quels mois?:</td>
              <td>{{ anteObstre.avortementMois }}</td>
            </tr>
            <tr>
              <td>Causes des avortements:</td>
              <td>{{ anteObstre.causeAvortement }}</td>
            </tr>
            <tr>
              <td>Nombre des accouchements:</td>
              <td>{{ anteObstre.nbrAccouchement }}</td>
              <td>Nombre d'accouchements normaux:</td>
              <td>{{ anteObstre.nbrAccouchementNormaux }}</td>
              <td>Nombre d'accouchements Pathologiques:</td>
              <td>{{ anteObstre.nbrAccouchement }}</td>
            </tr>
            <tr>
              <td>Causes des accouchements pathologiques:</td>
              <td>{{ anteObstre.pathologies }}</td>
            </tr>
            <tr>
              <td>Nombre d'enfants vivants:</td>
              <td>{{ anteObstre.nbrEnfantsVivant }}</td>
              <td>Nombre de morts nés:</td>
              <td>{{ anteObstre.nbrEnfantsMortNes }}</td>
              <td>Nombre d'enfants décédés:</td>
              <td>{{ anteObstre.nbrEnfantsDecedes }}</td>
            </tr>
            <tr>
              <td>Raisons du/des décés:</td>
              <td>{{ anteObstre.pathologies }}</td>
            </tr>
          </tbody>
        </table>
        <table class="table table-responsive mb-0" v-show="anteObstreModif">
          <tbody>
            <tr>
              <td>Nombre de grossesse:</td>
              <td>
                <input
                  v-model="anteObstre.nbrGrossesse"
                  class="form-control"
                  type="text"
                />
              </td>
              <td>Nombre de grossesse normale:</td>
              <td>
                <input
                  v-model="anteObstre.nbrGrossesseNormal"
                  class="form-control"
                  type="text"
                />
              </td>
              <td>Nombre de grossesse compliquées:</td>
              <td>
                <input
                  v-model="anteObstre.nbrGrossesseComplique"
                  class="form-control"
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>La ou les complications:</td>
              <td colspan="6">
                <textarea
                  style="width: 100%"
                  v-model="anteObstre.complicationGrossesse"
                  class="form-control"
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Nombre d'avortements:</td>
              <td>
                <input
                  v-model="anteObstre.nbrAvortement"
                  class="form-control"
                  type="text"
                />
              </td>
              <td>A quels mois?:</td>
              <td>
                <input
                  v-model="anteObstre.avortementMois"
                  class="form-control"
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Causes des avortements:</td>
              <td colspan="6">
                <textarea
                  style="width: 100%"
                  v-model="anteObstre.causeAvortement"
                  class="form-control"
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Nombre des accouchements:</td>
              <td>
                <input
                  v-model="anteObstre.nbrAccouchement"
                  class="form-control"
                  type="text"
                />
              </td>
              <td>Nombre d'accouchements normaux:</td>
              <td>
                <input
                  v-model="anteObstre.nbrAccouchementNormaux"
                  class="form-control"
                  type="text"
                />
              </td>
              <td>Nombre d'accouchements Pathologiques:</td>
              <td>
                <input
                  v-model="anteObstre.nbrAccouchmentPathologiques"
                  class="form-control"
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Causes des accouchements pathologiques:</td>
              <td colspan="6">
                <textarea
                  style="width: 100%"
                  v-model="anteObstre.causeAvortement"
                  class="form-control"
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Nombre d'enfants vivants:</td>
              <td>
                <input
                  v-model="anteObstre.nbrEnfantsVivant"
                  class="form-control"
                  type="text"
                />
              </td>
              <td>Nombre de morts nés:</td>
              <td>
                <input
                  v-model="anteObstre.nbrEnfantsMortNes"
                  class="form-control"
                  type="text"
                />
              </td>
              <td>Nombre d'enfants décédés:</td>
              <td>
                <input
                  v-model="anteObstre.nbrEnfantsDecedes"
                  class="form-control"
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Raisons du/des décés:</td>
              <td colspan="6">
                <textarea
                  style="width: 100%"
                  v-model="anteObstre.raisonDeces"
                  class="form-control"
                  type="text"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button
          class="btn btn-group btn-primary"
          @click="sauvegarderAnteObstre()"
          v-if="anteObstreModif"
        >
          Sauvegarder
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AnteObstre } from "@/types/AnteObstre";
import { onMounted, ref } from "vue";
import historiquesPatient from "../../../services/historiquesPatient";
import { defineProps } from "vue";

const props = defineProps(["patient"]);
const dataTemp = ref({});

let anteObstre = new AnteObstre(props.patient.id);
const anteObstreModif = ref(false);
onMounted(async () => {
  anteObstre = await historiquesPatient.getAnteObstre(props.patient.id);
});

const sauvegarderAnteObstre = async () => {
  await historiquesPatient.setAnteObstre(anteObstre).then(async () => {
    await historiquesPatient.getAnteObstre(props.patient.id);
    anteObstreModif.value = !anteObstreModif.value;
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
