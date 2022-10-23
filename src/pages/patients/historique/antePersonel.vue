<template>
    <div>
        <div class="tab-pane fade show active" id="top-profile" role="tabpanel" aria-labelledby="top-profile-tab">
            <div class="d-flex justify-content-between">
                <h5 class="f-w-600">Antécédents personnels médicaux</h5>
                <button class="btn btn-group btn-info" v-show="!antePersonelModif"
                    @click="antePersonelModif = !antePersonelModif; dataTemp = {}; Object.assign(dataTemp, antePersonel)">Modifier</button>
                <button class="btn btn-group btn-info" v-show="antePersonelModif"
                    @click="antePersonelModif = !antePersonelModif ; antePersonel = {}; Object.assign(antePersonel, dataTemp)">Annuler</button>
            </div>

            <div class="table-responsive profile-table mb-0">

                <table class="table table-responsive mb-0" v-show="!antePersonelModif">
                    <tbody>
                        <tr>
                            <td>Asthme:</td>
                            <td>
                                <input type="checkbox" name="" class=" primary form-control" disabled
                                    :checked="antePersonel.asthme" id="">
                            </td>
                        </tr>
                        <tr>
                            <td>Allergie:</td>
                            <td><input type="checkbox" name="" class="form-control" disabled
                                    :checked="antePersonel.allergie" id="">
                            </td>
                        </tr>

                        <tr>
                            <td>Diabete:</td>
                            <td><input type="checkbox" name="" class="form-control" disabled
                                    :checked="antePersonel.diabete" id="">
                            </td>
                        </tr>
                        <tr>
                            <td>HTA:</td>
                            <td><input type="checkbox" name="" class="form-control" disabled :checked="antePersonel.hta"
                                    id="">
                            </td>
                        </tr>
                        <tr>
                            <td>Tuberculose:</td>
                            <td><input type="checkbox" name="" class="form-control" disabled
                                    :checked="antePersonel.tuberculose" id=""></td>
                        </tr>
                        <tr>
                            <td>Autres:</td>
                            <td>{{ antePersonel.autres }}</td>
                        </tr>
                        <tr>
                            <td>Antécédents personnels chirurgicaux:</td>
                            <td>{{ antePersonel.antePersonelChirurgie }}</td>
                        </tr>
                        <tr>
                            <td>Antécédents familiaux:</td>
                            <td>{{ antePersonel.anteFamiliaux }}</td>
                        </tr>
                    </tbody>
                </table>
                <table class="table table-responsive mb-0" v-show="antePersonelModif">
                    <tbody>
                        <tr>
                            <td>Asthme:</td>
                            <td><input type="checkbox" name="" class="btn btn-group form-control"
                                    v-model="antePersonel.asthme" :checked="antePersonel.asthme" id=""></td>
                        </tr>
                        <tr>
                            <td>Allergie:</td>
                            <td><input type="checkbox" name="" class="form-control" v-model="antePersonel.allergie"
                                    :checked="antePersonel.allergie" id=""></td>
                        </tr>

                        <tr>
                            <td>Diabete:</td>
                            <td><input type="checkbox" name="" class="form-control" v-model="antePersonel.diabete"
                                    :checked="antePersonel.diabete" id=""></td>
                        </tr>
                        <tr>
                            <td>HTA:</td>
                            <td><input type="checkbox" name="" class="form-control" v-model="antePersonel.hta"
                                    :checked="antePersonel.hta" id=""></td>
                        </tr>
                        <tr>
                            <td>Tuberculose:</td>
                            <td><input type="checkbox" name="" class="form-control" v-model="antePersonel.tuberculose"
                                    :checked="antePersonel.tuberculose" id=""></td>
                        </tr>
                        <tr>
                            <td>Autres:</td>
                            <td style="width:100%" colspan="6"> <textarea style="width:100%"
                                    v-model="antePersonel.autres" class="form-control" type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td>Antécédents personnels chirurgicaux:</td>
                            <td style="width:100%" colspan="6"> <textarea style="width:100%"
                                    v-model="antePersonel.antePersonelChirurgie" class="form-control" type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td>Antécédents familiaux:</td>
                            <td style="width:100%" colspan="6"> <textarea style="width:100%"
                                    v-model="antePersonel.anteFamiliaux" class="form-control" type="text" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button class="btn btn-group btn-primary" @click="sauvegarderAntePersonnel()"
                    v-if="antePersonelModif">Sauvegarder</button>
            </div>
        </div>
    </div>
</template>

<script>
import media from "@/components/media.vue";
import historiquesPatient from "../../../services/historiquesPatient";
import user from "../../../store/modules/user";

export default {
    props: ['user'],
    data() {
        return {
            dataTemp: {},

            antePersonel: {
                asthme: false,
                allergie: false,
                diabete: false,
                hta: false,
                tuberculose: '',
                autres: '',
                antePersonelChirurgie: '',
                anteFamiliaux: ''
                , id: '', idPatient: user.id
            },
            antePersonelModif: false,

        }
    },
    async mounted() {
        this.antePersonel = await historiquesPatient.getAntePersonel(this.user.id)
    },
    methods: {

        async sauvegarderAntePersonnel() {
            await historiquesPatient.setAntePersonel(this.antePersonel).then(async () => {
                await historiquesPatient.getAntePersonel(this.user.id);
                this.antePersonelModif = !this.antePersonelModif;
            })
        },

    },
}
</script>

<style>
.boxsizingBorder {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
</style>