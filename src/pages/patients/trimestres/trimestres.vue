<template>
    <div>
        <div class="container-fluid">
            <div class="col-12">
                <div class="card tab2-card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h4 class="card-title text-underline text-bold text-danger">Consultations par trimestre</h4>
                            <feather class="feather" type="eye" v-show="eye" @click="close()"></feather>
                            <feather class="feather" type="eye-off" v-show="!eye" @click="close()"></feather>
                        </div>
                        <ul class="nav nav-tabs tab-coupon mb-0" id="top-tab" role="tablist"
                            v-if="eye && !loading && trimestres.length > 0">
                            <div class="tab-content" id="top-tabContent">
                                <b-tabs content-class="mt-3">

                                    <b-tab>
                                        <template slot="title">
                                            <feather type="heart"></feather>1er trimestre
                                        </template>
                                        <b-card-text>
                                            <TrimestreDetails @update="sauvegardeTrimestre" :dossier="dossier"
                                                :trimestreProp="trimestres[0]">
                                            </TrimestreDetails>
                                        </b-card-text>
                                    </b-tab>
                                    <b-tab>
                                        <template slot="title">
                                            <feather type="activity"></feather>2eme trimestre
                                        </template>
                                        <b-card-text>
                                            <TrimestreDetails @update="sauvegardeTrimestre" :dossier="dossier"
                                                :trimestreProp="trimestres[1]">
                                            </TrimestreDetails>
                                        </b-card-text>
                                    </b-tab>
                                    <b-tab>
                                        <template slot="title">
                                            <feather type="activity"></feather>3eme trimestre
                                        </template>
                                        <b-card-text>
                                            <TrimestreDetails @update="sauvegardeTrimestre" :dossier="dossier"
                                                :trimestreProp="trimestres[2]">
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

<script>
import media from "@/components/media.vue";
import trimestreService from "../../../services/trimestre";
import user from "../../../store/modules/user";
import TrimestreDetails from "./trimestreDetails.vue";

export default {
    props: ['dossier'],
    data() {
        return {
            eye: true,
            loading: false,
            trimestres: []
        }
    },
    components: {
        media,
        TrimestreDetails
    },
    async mounted() {
        this.trimestres = await trimestreService.getAllTrimestre(this.dossier.id);
        console.log(this.trimestres);
    },
    watch: {
        async dossier(newDossier, oldDossier) {
            this.loading = true;
            this.trimestres = await trimestreService.getAllTrimestre(newDossier.id);
            this.loading = false;
        },
    },
    methods: {
        close() {
            this.eye = !this.eye
        },
        async sauvegardeTrimestre(value) {
            this.loading = true;
            await trimestreService.setTrimestre(value).then(async () => {
                await trimestreService.getAllTrimestre(this.dossier.id);
                this.loading = false
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

.feather {
    cursor: pointer;
}
</style>