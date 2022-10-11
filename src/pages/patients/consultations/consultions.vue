<template>
    <div>
        <div class="container-fluid">
            <div class="col-12">
                <div class="card tab2-card">
                    <div class="card-body">
                        <ul class="nav nav-tabs tab-coupon mb-0" id="top-tab" role="tablist">
                            <div class="tab-content" id="top-tabContent">
                                <b-tabs content-class="mt-3">
                                    <b-tab data-feather="user" title="Consulter" active>
                                        <template slot="title">
                                            <feather type="user"></feather>Surveillance
                                        </template>
                                        <b-card-text>
                                            <div class="account-setting">
                                                <h5 class="f-w-600">Choix multiples</h5>
                                                <div class="row">
                                                    <div class="col">
                                                        <label class="d-block" for="chk-ani">
                                                            <input class="checkbox_animated" id="chk-ani"
                                                                type="checkbox" />
                                                            Choix 1
                                                        </label>
                                                        <label class="d-block" for="chk-ani1">
                                                            <input class="checkbox_animated" id="chk-ani1"
                                                                type="checkbox" />
                                                            Choix 1
                                                        </label>
                                                        <label class="d-block" for="chk-ani2">
                                                            <input class="checkbox_animated" id="chk-ani2"
                                                                type="checkbox" />
                                                            Choix 1
                                                        </label>
                                                        <label class="d-block mb-0" for="chk-ani3">
                                                            <input class="checkbox_animated" id="chk-ani3"
                                                                type="checkbox" checked=false />
                                                            Choix 1
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="account-setting deactivate-account">
                                                <h5 class="f-w-600">Choix</h5>
                                                <div class="row">
                                                    <div class="col">
                                                        <label class="d-block" for="edo-ani">
                                                            <input class="radio_animated" id="edo-ani" type="radio"
                                                                name="rdo-ani" checked=false />
                                                            Choix 1
                                                        </label>
                                                        <label class="d-block" for="edo-ani1">
                                                            <input class="radio_animated" id="edo-ani1" type="radio"
                                                                name="rdo-ani" />
                                                            Choix 1
                                                        </label>
                                                        <label class="d-block mb-0" for="edo-ani2">
                                                            <input class="radio_animated" id="edo-ani2" type="radio"
                                                                name="rdo-ani" checked=false />
                                                            Choix 1
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <h5 class="f-w-600">Commentaires</h5>
                                            <div>
                                                <div class="editor-vue">
                                                    <vue-editor v-model="content"></vue-editor>
                                                </div>
                                                <br />
                                                <button type="button" class="btn btn-primary">
                                                    Confirmer
                                                </button>
                                            </div>
                                        </b-card-text>
                                    </b-tab>
                                    <b-tab>
                                        <template slot="title">
                                            <feather type="clock"></feather>Antécédents personnels médicaux
                                        </template>
                                        <b-card-text v-for="(n, index) in 5" :key="index">
                                            <div class="tab-pane fade show active" id="top-profile" role="tabpanel"
                                                aria-labelledby="top-profile-tab">
                                                <div>
                                                    <b-card :title="'Consultation ' + (index + 1)"
                                                        sub-title="25/02/2022">
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
                                    </b-tab>
                                    <b-tab>
                                        <template slot="title">
                                            <feather type="paperclip"></feather>Antécédents obstétricaux
                                        </template>
                                        <div class="tab-pane fade show active" id="top-profile" role="tabpanel"
                                            aria-labelledby="top-profile-tab">
                                            <media></media>
                                        </div>
                                    </b-tab>
                                    <b-tab>
                                        <template slot="title">
                                            <feather type="message-square"></feather>Antécédents gynécologiques
                                        </template>
                                        <div class="tab-pane fade show active" id="top-profile" role="tabpanel"
                                            aria-labelledby="top-profile-tab">
                                            <div>
                                                <b-card title="Envoyer un message">
                                                    <div class="editor-vue">
                                                        <vue-editor v-model="content"></vue-editor>
                                                    </div>
                                                    <br />
                                                    <button type="button" class="btn btn-primary">
                                                        Envoyer
                                                    </button>
                                                </b-card>
                                            </div>
                                        </div>
                                    </b-tab>
                                    <b-tab>
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

export default {
    data() {
        return {
            content: "",

        }
    },
    components: {
        media,
    },
}
</script>