<template>
    <div>
        <div class="tab-pane fade show active" id="top-profile" role="tabpanel" aria-labelledby="top-profile-tab">
            <div class="d-flex justify-content-between">
                <h5 class="f-w-600">Grossesse Actuelle</h5>
                <button class="btn btn-group btn-info" v-show="!grossesseActuelleModif"
                    @click="grossesseActuelleModif = !grossesseActuelleModif; dataTemp = {}; Object.assign(dataTemp, grossesseActuelle)">Modifier</button>
                <button class="btn btn-group btn-info" v-show="grossesseActuelleModif"
                    @click="grossesseActuelleModif = !grossesseActuelleModif ; grossesseActuelle = {}; Object.assign(grossesseActuelle, dataTemp)">Annuler</button>
            </div>

            <div class="table-responsive profile-table mb-0">

                <table class="table table-responsive mb-0" v-show="!grossesseActuelleModif">
                    <tbody>
                        <tr>
                            <td>Gestité:</td>
                            <td>{{ grossesseActuelle.gestite }}</td>
                        </tr>
                        <tr>
                            <td>Parité:</td>
                            <td>{{ grossesseActuelle.parite }}</td>
                        </tr>
                        <tr>
                            <td>Grossesse evolutive normale:</td>
                            <td>
                                <input type="checkbox" name="" class=" primary form-control" disabled
                                    :checked="grossesseActuelle.grossesseEvolutiveNormale" id="">
                            </td>
                        </tr>
                        <tr>
                            <td>Menace fausse couche:</td>
                            <td><input type="checkbox" name="" class="form-control" disabled
                                    :checked="grossesseActuelle.menaceFausseCouche" id="">
                            </td>
                        </tr>

                        <tr>
                            <td>Menace d'accouchement prématuré:</td>
                            <td><input type="checkbox" name="" class="form-control" disabled
                                    :checked="grossesseActuelle.menaceAccouchementPremature" id="">
                            </td>
                        </tr>
                        <tr>
                            <td>Rupture prématuré de membrane:</td>
                            <td><input type="checkbox" name="" class="form-control" disabled
                                    :checked="grossesseActuelle.rupturePrematureMembrane" id=""></td>
                        </tr>
                        <tr>
                            <td>Absence de mouvement actif foetale:</td>
                            <td><input type="checkbox" name="" class="form-control" disabled
                                    :checked="grossesseActuelle.absenceMouvementActifFoetal" id=""></td>
                        </tr>

                        <tr>
                            <td>Autres à préciser:</td>
                            <td>{{ grossesseActuelle.autres }}</td>
                        </tr>
                    </tbody>
                </table>
                <table class="table table-responsive mb-0" v-show="grossesseActuelleModif">
                    <tbody>
                        <tr>
                            <td>Gestité:</td>
                            <td style="width:100%" colspan="6"> <textarea style="width:100%"
                                    v-model="grossesseActuelle.gestite" class="form-control" type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td>Parité:</td>
                            <td style="width:100%" colspan="6"> <textarea style="width:100%"
                                    v-model="grossesseActuelle.parite" class="form-control" type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td>Grossesse evolutive normale:</td>
                            <td><input type="checkbox" name="" class="btn btn-group form-control"
                                    v-model="grossesseActuelle.grossesseEvolutiveNormale"
                                    :checked="grossesseActuelle.grossesseEvolutiveNormale" id=""></td>
                        </tr>
                        <tr>
                            <td>Menace fausse couche:</td>
                            <td><input type="checkbox" name="" class="form-control"
                                    v-model="grossesseActuelle.menaceFausseCouche"
                                    :checked="grossesseActuelle.menaceFausseCouche" id=""></td>
                        </tr>

                        <tr>
                            <td>Menace d'accouchement prématuré:</td>
                            <td><input type="checkbox" name="" class="form-control"
                                    v-model="grossesseActuelle.menaceAccouchementPremature"
                                    :checked="grossesseActuelle.menaceAccouchementPremature" id=""></td>
                        </tr>
                        <tr>
                            <td>Rupture prématuré de membrane:</td>
                            <td><input type="checkbox" name="" class="form-control"
                                    v-model="grossesseActuelle.rupturePrematureMembrane"
                                    :checked="grossesseActuelle.rupturePrematureMembrane" id=""></td>
                        </tr>
                        <tr>
                            <td>Absence de mouvement actif foetale:</td>
                            <td><input type="checkbox" name="" class="form-control"
                                    v-model="grossesseActuelle.absenceMouvementActifFoetal"
                                    :checked="grossesseActuelle.absenceMouvementActifFoetal" id=""></td>
                        </tr>

                        <tr>
                            <td>Autres à préciser:</td>
                            <td style="width:100%" colspan="6"> <textarea style="width:100%"
                                    v-model="grossesseActuelle.autres" class="form-control" type="text" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button class="btn btn-group btn-primary" @click="SauvegarderGrossesseActuelle()"
                    v-if="grossesseActuelleModif">Sauvegarder</button>
            </div>
        </div>
    </div>
</template>

<script>

import grossesseActuelle from "@/pages/patients/historique/grossesseActuelle.vue";
import historiquesPatient from "../../../services/historiquesPatient";
import user from "../../../store/modules/user";

export default {
    props: ['user'],
    data() {
        return {
            dataTemp: {},


            grossesseActuelle: {
                gestite: '',
                parite: '',
                grossesseEvolutiveNormale: false,
                menaceFausseCouche: false,
                menaceAccouchementPremature: false,
                rupturePrematureMembrane: false,
                absenceMouvementActifFoetal: false,
                autres: ''
                , id: '', idPatient: user.id
            },
            grossesseActuelleModif: false,


        }
    },

    async mounted() {

        this.grossesseActuelle = await historiquesPatient.getGrossesseActuell(this.user.id)
    },
    methods: {

        async SauvegarderGrossesseActuelle() {
            await historiquesPatient.setGrossesseActuell(this.grossesseActuelle).then(async () => {
                await historiquesPatient.getGrossesseActuell(this.user.id);
                this.grossesseActuelleModif = !this.grossesseActuelleModif;
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