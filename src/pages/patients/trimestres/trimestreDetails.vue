<template>
    <div>
        <div class="tab-pane fade show active" id="top-profile" role="tabpanel" aria-labelledby="top-profile-tab">
            <div class="d-flex justify-content-end">
                <button class="btn btn-group btn-info" v-show="!trimestreModif"
                    @click="trimestreModif = !trimestreModif; dataTemp = {}; Object.assign(dataTemp, trimestre)">Modifier</button>
                <button class="btn btn-group btn-info" v-show="trimestreModif"
                    @click="trimestreModif = !trimestreModif ; trimestre = {}; Object.assign(trimestre, dataTemp)">Annuler</button>
            </div>

            <div class="table-responsive mb-0" v-if="trimestreProp !== undefined">

                <table class="table table-responsive" v-show="!trimestreModif">
                    <tbody>
                        <tr>
                            <td>Date:</td>
                            <td>
                                {{ trimestreProp.date | formatDate }}</td>
                            <td>Nombre de mois de grossesse:</td>
                            <td>
                                {{ trimestreProp.nbrMoisGrossesse }}</td>
                            <td>Tension artérielle:</td>
                            <td>
                                {{ trimestreProp.tensionArterielle }}</td>
                            <td>Proteine urinaire:</td>
                            <td>
                                {{ trimestreProp.proteineUrinaire }}</td>

                        </tr>
                        <tr>
                            <td>{{ trimestreProp.ta1Meaning }}:</td>
                            <td>
                                <span v-show="trimestreProp.ta1" class="surveiller">Oui</span>
                                <span v-show="!trimestreProp.ta1">Non</span>
                            </td>
                            <td>{{ trimestreProp.ta2Meaning }}:</td>
                            <td>
                                <span v-show="trimestreProp.ta2" class="surveiller">Oui</span>
                                <span v-show="!trimestreProp.ta2">Non</span>
                            </td>
                            <td>{{ trimestreProp.ta3Meaning }}:</td>
                            <td>
                                <span v-show="trimestreProp.ta3" class="surveiller">Oui</span>
                                <span v-show="!trimestreProp.ta3">Non</span>
                            </td>
                            <td>Taux HB &lt; 6gr.:</td>
                            <td>
                                <span v-show="trimestreProp.tauxHB" class="surveiller">Oui</span>
                                <span v-show="!trimestreProp.tauxHB">Non</span>
                            </td>
                        </tr>

                        <tr>
                            <td>Anémie signe clinique:</td>
                            <td>
                                <span v-show="trimestreProp.anemieSigneClinique" class="surveiller">Oui</span>
                                <span v-show="!trimestreProp.anemieSigneClinique">Non</span>
                            </td>
                            <td>Poids:</td>
                            <td>
                                {{ trimestreProp.poids }}
                            </td>
                            <td>Prise de poids anormale:</td>
                            <td>
                                <span v-show="trimestreProp.prisePoidsAnormale" class="surveiller">Oui</span>
                                <span v-show="!trimestreProp.prisePoidsAnormale">Non</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Hauteur utérine:</td>
                            <td>
                                {{ trimestreProp.hauteurUterine }}
                            </td>
                            <td>Hauteur utérine anormale:</td>
                            <td>
                                <span v-show="trimestreProp.hauteurUterineAnormale" class="surveiller">Oui</span>
                                <span v-show="!trimestreProp.hauteurUterineAnormale">Non</span>
                            </td>
                            <td>MAF et BCF absents:</td>
                            <td>
                                <span v-show="trimestreProp.mafBcf" class="surveiller">Oui</span>
                                <span v-show="!trimestreProp.mafBcf">Non</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Palpation:</td>
                            <td>
                                {{ trimestreProp.palpation }}
                            </td>
                            <td>Présentation vicieuse:</td>
                            <td>
                                <span v-show="trimestreProp.presentationVicieuse" class="surveiller">Oui</span>
                                <span v-show="!trimestreProp.presentationVicieuse">Non</span>
                            </td>
                            <td>Toucher vaginal:</td>
                            <td>
                                {{ trimestreProp.toucherVaginal }}
                            </td>
                        </tr>
                        <tr>
                            <td>Col ouvert:</td>
                            <td>
                                <span v-show="trimestreProp.colOuvert" class="surveiller">Oui</span>
                                <span v-show="!trimestreProp.colOuvert">Non</span>
                            </td>
                            <td>Autre que Céphalique:</td>
                            <td>
                                <span v-show="trimestreProp.autreQueCephalique" class="surveiller">Oui</span>
                                <span v-show="!trimestreProp.autreQueCephalique">Non</span>
                            </td>
                            <td>Perte de sang:</td>
                            <td>
                                <span v-show="trimestreProp.perteSang" class="surveiller">Oui</span>
                                <span v-show="!trimestreProp.perteSang">Non</span>
                            </td>

                            <td>Promontoire accessible:</td>
                            <td>
                                <span v-show="trimestreProp.promontoireAccessible" class="surveiller">Oui</span>
                                <span v-show="!trimestreProp.promontoireAccessible">Non</span>
                            </td>
                        </tr>
                        <tr>
                            <td>ObservationSoins:</td>
                            <td>{{ trimestreProp.observationSoins }}</td>
                        </tr>
                        <tr>
                            <td>Echographie:</td>
                            <td>{{ trimestreProp.echoId }}</td>
                        </tr>
                        <tr>
                            <td>Prochain rendez-vous:</td>
                            <td>{{ trimestreProp.nextRDV }}</td>
                        </tr>
                    </tbody>
                </table>
                <table class="table table-responsive" v-show="trimestreModif">
                    <tbody>
                        <tr>
                            <td>Date:</td>
                            <td colspan="2"><input type="date" name="" class="form-control" v-model="trimestre.date"
                                    id=""></td>

                            <td>Nombre de mois de grossesse:</td>
                            <td><input type="text" name="" class="form-control" v-model="trimestre.nbrMoisGrossesse"
                                    id=""></td>

                            <td>Tension artérielle:</td>
                            <td colspan="2"><input type="text" name="" class="form-control"
                                    v-model="trimestre.tensionArterielle" id=""></td>

                        </tr>
                        <tr>
                            <td>Proteine urinaire:</td>
                            <td colspan="2"><input type="text" name="" class="form-control"
                                    v-model="trimestre.proteineUrinaire" id=""></td>
                            <td>{{ trimestre.ta1Meaning }}:</td>
                            <td><input type="checkbox" name="" class="btn btn-group form-control"
                                    v-model="trimestre.ta1" :checked="trimestre.ta1" id=""></td>
                            <td>{{ trimestre.ta2Meaning }}:</td>
                            <td><input type="checkbox" name="" class="btn btn-group form-control"
                                    v-model="trimestre.ta2" :checked="trimestre.ta2" id=""></td>

                        </tr>
                        <tr>
                            <td>{{ trimestre.ta3Meaning }}:</td>
                            <td><input type="checkbox" name="" class="btn btn-group form-control"
                                    v-model="trimestre.ta3" :checked="trimestre.ta3" id=""></td>
                            <td>Taux HB &lt; 6gr.:</td>
                            <td><input type="checkbox" name="" class="btn btn-group form-control"
                                    v-model="trimestre.tauxHB" :checked="trimestre.tauxHB" id=""></td>
                        </tr>
                        <tr>
                            <td>Anémie signe clinique:</td>
                            <td><input type="checkbox" name="" class="btn btn-group form-control"
                                    v-model="trimestre.anemieSigneClinique" :checked="trimestre.anemieSigneClinique"
                                    id=""></td>
                            <td>Poids:</td>
                            <td><input type="text" name="" class="form-control" v-model="trimestre.poids" id=""></td>

                            <td>Prise de poids anormale:</td>
                            <td><input type="checkbox" name="" class="btn btn-group form-control"
                                    v-model="trimestre.prisePoidsAnormale" :checked="trimestre.prisePoidsAnormale"
                                    id=""></td>
                        </tr>
                        <tr>
                            <td>Hauteur utérine:</td>
                            <td colspan="3"><input type="text" name="" class="form-control"
                                    v-model="trimestre.hauteurUterine" id=""></td>

                            <td>Hauteur utérine anormale:</td>
                            <td><input type="checkbox" name="" class="btn btn-group form-control"
                                    v-model="trimestre.hauteurUterineAnormale"
                                    :checked="trimestre.hauteurUterineAnormale" id=""></td>
                            <td>MAF et BCF absents:</td>
                            <td><input type="checkbox" name="" class="btn btn-group form-control"
                                    v-model="trimestre.mafBcf" :checked="trimestre.mafBcf" id=""></td>
                        </tr>
                        <tr>
                            <td>Palpation:</td>
                            <td colspan="2"><input type="text" name="" class="form-control"
                                    v-model="trimestre.palpation" id="">
                            </td>

                            <td>Présentation vicieuse:</td>
                            <td><input type="checkbox" name="" class="btn btn-group form-control"
                                    v-model="trimestre.presentationVicieuse" :checked="trimestre.presentationVicieuse"
                                    id=""></td>
                            <td>Toucher vaginal:</td>
                            <td><input type="text" name="" class="form-control" v-model="trimestre.toucherVaginal"
                                    id=""></td>

                        </tr>
                        <tr>
                            <td>Col ouvert:</td>
                            <td><input type="checkbox" name="" class="btn btn-group form-control"
                                    v-model="trimestre.colOuvert" :checked="trimestre.colOuvert" id=""></td>
                            <td>Autre que Céphalique:</td>
                            <td><input type="checkbox" name="" class="btn btn-group form-control"
                                    v-model="trimestre.autreQueCephalique" :checked="trimestre.autreQueCephalique"
                                    id=""></td>
                            <td>Perte de sang:</td>
                            <td><input type="checkbox" name="" class="btn btn-group form-control"
                                    v-model="trimestre.perteSang" :checked="trimestre.perteSang" id=""></td>

                            <td>Promontoire accessible:</td>
                            <td><input type="checkbox" name="" class="btn btn-group form-control"
                                    v-model="trimestre.promontoireAccessible" :checked="trimestre.promontoireAccessible"
                                    id=""></td>
                        </tr>
                        <tr>
                            <td>ObservationSoins:</td>
                            <td style="width:100%" colspan="6"> <textarea style="width:100%"
                                    v-model="trimestre.observationSoins" class="form-control" type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td>Echographie:</td>
                            <td colspan="5"><input type="text" name="" class="form-control" v-model="trimestre.echoId"
                                    id=""></td>
                        </tr>
                        <tr>
                            <td>Prochain rendez-vous:</td>
                            <td colspan="5"><input type="text" name="" class="form-control" v-model="trimestre.nextRDV"
                                    id=""></td>
                        </tr>
                    </tbody>
                </table>

                <button class="btn btn-group btn-primary" @click="sauvegardeTrimestre()"
                    v-show="trimestreModif">Sauvegarder</button>
            </div>
        </div>
    </div>
</template>

<script>
import media from "@/components/media.vue";
import trimestreService from "../../../services/trimestre";
import moment from 'moment'

export default {
    props: ['dossier', 'trimestreProp'],
    data() {
        return {
            dataTemp: {},
            trimestre: {},
            trimestreModif: false,

        }
    },
    mounted() {
        this.trimestre = this.trimestreProp;
    },

    watch: {
        trimestreProp(newData, oldData) {
            this.trimestre = newData;

        }
    },
    filters: {
        'formatDate': function (value) {
            if (value) {
                return moment(String(value)).format('DD/MM/YYYY')
            }
        }
    },
    methods: {

        async sauvegardeTrimestre() {
            this.$emit('update', this.trimestre)
            this.trimestreModif = !this.trimestreModif;
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

.surveiller {
    color: red;
    font-weight: 800;
}
</style>