<template>
    <div>
        <div class="container-fluid">
            <div class="col-12">
                <div class="card tab2-card">
                    <div class="card-body">
                        <h4 class="card-title text-underline text-bold text-danger">Résumé santé de la patiente</h4>

                        <ul class="nav nav-tabs tab-coupon mb-0" id="top-tab" role="tablist">
                            <div class="tab-content" id="top-tabContent">
                                <b-tabs content-class="mt-3">

                                    <b-tab>
                                        <template slot="title">
                                            <feather type="heart"></feather>Antécédents personnels médicaux
                                        </template>
                                        <b-card-text>
                                            <antePersonel :user="user"></antePersonel>
                                        </b-card-text>
                                    </b-tab>
                                    <b-tab>
                                        <template slot="title">
                                            <feather type="activity"></feather>Antécédents obstétricaux
                                        </template>
                                        <b-card-text>
                                            <anteObstre :user="user"></anteObstre>
                                        </b-card-text>
                                    </b-tab>
                                    <b-tab>
                                        <template slot="title">
                                            <feather type="activity"></feather>Antécédents gynécologiques
                                        </template>
                                        <b-card-text>
                                            <anteGyneco :user="user"></anteGyneco>
                                        </b-card-text>
                                    </b-tab>
                                    <!-- <b-tab>
                                        <template slot="title">
                                            <feather type="clock"></feather>Historiques des messages
                                        </template>
                                        <b-card-text v-for="(n, index) in 5" :key="index">
                                            <div class="tab-pane fade show active" id="top-profile" role="tabpanel"
                                                aria-labelledby="top-profile-tab">
                                                <div>
                                                    <b-card :title="'Message ' + (index + 1)" sub-title="25/02/2022">
                                                        <b-card-text>
                                                            Some quick example text to build on the
                                                            <em>card title</em> and make up the bulk of the
                                                            card's content.
                                                        </b-card-text>

                                                        <b-card-text>A second paragraph of text in the
                                                            card.</b-card-text>
                                                        <hr />
                                                        <b-card-text>Dr. XXX XX</b-card-text>
                                                    </b-card>
                                                </div>
                                            </div>
                                        </b-card-text>
                                    </b-tab> -->
                                    <b-tab>
                                        <template slot="title">
                                            <feather type="user"></feather>Grossesse Actuelle
                                        </template>
                                        <b-card-text>
                                            <grossesseActuelle :user="user"></grossesseActuelle>
                                        </b-card-text>
                                    </b-tab>
                                    <b-tab>
                                        <template slot="title">
                                            <feather type="heart"></feather>Bilan complet
                                        </template>
                                        <b-card-text>
                                            <bilanComplet :user="user"></bilanComplet>
                                        </b-card-text>
                                    </b-tab>
                                </b-tabs>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import media from "@/components/media.vue";
import antePersonel from "@/pages/patients/historique/antePersonel.vue";
import anteGyneco from "@/pages/patients/historique/anteGyneco.vue";
import anteObstre from "@/pages/patients/historique/anteObstre.vue";
import grossesseActuelle from "@/pages/patients/historique/grossesseActuelle.vue";
import bilanComplet from "@/pages/patients/historique/bilanComplet.vue";
import historiquesPatient from "../../../services/historiquesPatient";
import user from "../../../store/modules/user";

export default {
    props: ['user'],
    data() {
        return {
        }
    },
    components: {
        media,
        antePersonel,
        anteGyneco,
        anteObstre,
        grossesseActuelle,
        bilanComplet

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