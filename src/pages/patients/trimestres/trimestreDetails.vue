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
                                {{ trimestre.date }}</td>
                            <td>Nombre de mois de grossesse:</td>
                            <td>
                                {{ trimestre.nbrMoisGrossesse }}</td>
                            <td>Tension artérielle:</td>
                            <td>
                                {{ trimestre.tensionArterielle }}</td>
                            <td>Proteine urinaire:</td>
                            <td>
                                {{ trimestre.proteineUrinaire }}</td>

                        </tr>
                        <tr>
                            <td>{{ trimestre.ta1Meaning }}:</td>
                            <td>
                                <span v-show="trimestre.ta1" class="surveiller">Oui</span>
                                <span v-show="!trimestre.ta1">Non</span>
                            </td>
                            <td>{{ trimestre.ta2Meaning }}:</td>
                            <td>
                                <span v-show="trimestre.ta2" class="surveiller">Oui</span>
                                <span v-show="!trimestre.ta2">Non</span>
                            </td>
                            <td>{{ trimestre.ta3Meaning }}:</td>
                            <td>
                                <span v-show="trimestre.ta3" class="surveiller">Oui</span>
                                <span v-show="!trimestre.ta3">Non</span>
                            </td>
                            <td>Taux HB &lt; 6gr.:</td>
                            <td>
                                <span v-show="trimestre.tauxHB" class="surveiller">Oui</span>
                                <span v-show="!trimestre.tauxHB">Non</span>
                            </td>
                        </tr>

                        <tr>
                            <td>Anémie signe clinique:</td>
                            <td>
                                <span v-show="trimestre.anemieSigneClinique" class="surveiller">Oui</span>
                                <span v-show="!trimestre.anemieSigneClinique">Non</span>
                            </td>
                            <td>Poids:</td>
                            <td>
                                {{ trimestre.poids }}
                            </td>
                            <td>Prise de poids anormale:</td>
                            <td>
                                <span v-show="trimestre.prisePoidsAnormale" class="surveiller">Oui</span>
                                <span v-show="!trimestre.prisePoidsAnormale">Non</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Hauteur utérine:</td>
                            <td>
                                {{ trimestre.hauteurUterine }}
                            </td>
                            <td>Hauteur utérine anormale:</td>
                            <td>
                                <span v-show="trimestre.hauteurUterineAnormale" class="surveiller">Oui</span>
                                <span v-show="!trimestre.hauteurUterineAnormale">Non</span>
                            </td>
                            <td>MAF et BCF absents:</td>
                            <td>
                                <span v-show="trimestre.mafBcf" class="surveiller">Oui</span>
                                <span v-show="!trimestre.mafBcf">Non</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Palpation:</td>
                            <td>
                                {{ trimestre.palpation }}
                            </td>
                            <td>Présentation vicieuse:</td>
                            <td>
                                <span v-show="trimestre.presentationVicieuse" class="surveiller">Oui</span>
                                <span v-show="!trimestre.presentationVicieuse">Non</span>
                            </td>
                            <td>Toucher vaginal:</td>
                            <td>
                                {{ trimestre.toucherVaginal }}
                            </td>
                        </tr>
                        <tr>
                            <td>Col ouvert:</td>
                            <td>
                                <span v-show="trimestre.colOuvert" class="surveiller">Oui</span>
                                <span v-show="!trimestre.colOuvert">Non</span>
                            </td>
                            <td>Autre que Céphalique:</td>
                            <td>
                                <span v-show="trimestre.autreQueCephalique" class="surveiller">Oui</span>
                                <span v-show="!trimestre.autreQueCephalique">Non</span>
                            </td>
                            <td>Perte de sang:</td>
                            <td>
                                <span v-show="trimestre.perteSang" class="surveiller">Oui</span>
                                <span v-show="!trimestre.perteSang">Non</span>
                            </td>

                            <td>Promontoire accessible:</td>
                            <td>
                                <span v-show="trimestre.promontoireAccessible" class="surveiller">Oui</span>
                                <span v-show="!trimestre.promontoireAccessible">Non</span>
                            </td>
                        </tr>
                        <tr>
                            <td>ObservationSoins:</td>
                            <td>{{ trimestre.observationSoins }}</td>
                        </tr>
                        <tr>
                            <td>Echographie:</td>
                            <td>{{ trimestre.echoId }}</td>
                        </tr>
                        <tr>
                            <td>Prochain rendez-vous:</td>
                            <td>{{ trimestre.nextRDV }}</td>
                        </tr>
                    </tbody>
                </table>
                <table class="table table-responsive" v-show="trimestreModif">
                    <tbody>
                        <tr>
                            <td>Date:</td>
                            <td><input type="text" name="" class="form-control" v-model="trimestre.date" id=""></td>

                            <td>Nombre de mois de grossesse:</td>
                            <td><input type="text" name="" class="form-control" v-model="trimestre.nbrMoisGrossesse"
                                    id=""></td>

                            <td>Tension artérielle:</td>
                            <td><input type="text" name="" class="form-control" v-model="trimestre.tensionArterielle"
                                    id=""></td>

                            <td>Proteine urinaire:</td>
                            <td><input type="text" name="" class="form-control" v-model="trimestre.proteineUrinaire"
                                    id=""></td>


                        </tr>
                        <tr>
                            <td>{{ trimestre.ta1Meaning }}:</td>
                            <td><input type="checkbox" name="" class="btn btn-group form-control"
                                    v-model="trimestre.ta1" :checked="trimestre.ta1" id=""></td>
                            <td>{{ trimestre.ta2Meaning }}:</td>
                            <td><input type="checkbox" name="" class="btn btn-group form-control"
                                    v-model="trimestre.ta2" :checked="trimestre.ta2" id=""></td>
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
                            <td><input type="text" name="" class="form-control" v-model="trimestre.hauteurUterine"
                                    id=""></td>

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
                            <td><input type="text" name="" class="form-control" v-model="trimestre.palpation" id="">
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
                            <td><input type="text" name="" class="form-control" v-model="trimestre.echoId" id=""></td>
                        </tr>
                        <tr>
                            <td>Prochain rendez-vous:</td>
                            <td><input type="text" name="" class="form-control" v-model="trimestre.nextRDV" id=""></td>
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
        console.log(this.trimestreProp);
        this.trimestre = this.trimestreProp;
    },
    watch: {
        trimestreProp(newData, oldData) {
            this.trimestre = newData;

        }
    },
    methods: {

        async sauvegardeTrimestre() {
            await trimestreService.setTrimestre(this.trimestre).then(async () => {
                await trimestreService.getAllTrimestre(this.dossier.id);
                this.trimestreModif = !this.trimestreModif;
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

.surveiller {
    color: red;
    font-weight: 800;
}
</style>