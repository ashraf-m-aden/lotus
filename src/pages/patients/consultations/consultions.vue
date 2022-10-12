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
                                            <div class="tab-pane fade show active" id="top-profile" role="tabpanel"
                                                aria-labelledby="top-profile-tab">
                                                <div class="d-flex justify-content-between">
                                                    <h5 class="f-w-600">Surveillance de la grossesse</h5>
                                                    <button class="btn btn-group btn-info"
                                                        @click="surveillanceModif = !surveillanceModif">Modifier</button>
                                                </div>

                                                <div class="table-responsive profile-table mb-0">
                                                    <table class="table table-responsive mb-0"
                                                        v-show="!surveillanceModif">
                                                        <tbody>
                                                            <tr>
                                                                <td>Structure:</td>
                                                                <td>{{surveillance.structure}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Numero de dossier:</td>
                                                                <td>{{surveillance.dossier}}</td>
                                                            </tr>

                                                            <tr>
                                                                <td>Date de naissance:</td>
                                                                <td>{{surveillance.dob}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Epouse de:</td>
                                                                <td>{{surveillance.spouse}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Addresse:</td>
                                                                <td>{{user.address}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Profession:</td>
                                                                <td>{{surveillance.profession}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Numero de telephone:</td>
                                                                <td>{{user.number}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Taille:</td>
                                                                <td>{{surveillance.taille}}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table class="table table-responsive mb-0"
                                                        v-show="surveillanceModif">
                                                        <tbody>
                                                            <tr>
                                                                <td>Structure:</td>
                                                                <td> <input v-model="surveillance.structure"
                                                                        class="form-control" type="text" /> </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Numero de dossier:</td>
                                                                <td> <input v-model="surveillance.dossier"
                                                                        class="form-control" type="text" /> </td>
                                                            </tr>

                                                            <tr>
                                                                <td>Date de naissance:</td>
                                                                <td>{{user.dob}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Epouse de:</td>
                                                                <td> <input v-model="surveillance.spouse"
                                                                        class="form-control" type="text" /> </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Addresse:</td>
                                                                <td>{{user.address}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Profession:</td>
                                                                <td>{{user.profession}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Numero de telephone:</td>
                                                                <td>{{user.number}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Taille:</td>
                                                                <td> <input v-model="surveillance.taille"
                                                                        class="form-control" type="text" /> </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <button class="btn btn-group btn-primary"
                                                        @click="sauvegarderSurveillance()"
                                                        v-if="surveillanceModif">Sauvegarder</button>
                                                </div>
                                            </div>
                                        </b-card-text>
                                    </b-tab>
                                    <b-tab>
                                        <template slot="title">
                                            <feather type="heart"></feather>Antécédents personnels médicaux
                                        </template>
                                        <b-card-text>
                                            <div class="tab-pane fade show active" id="top-profile" role="tabpanel"
                                                aria-labelledby="top-profile-tab">
                                                <div class="d-flex justify-content-between">
                                                    <h5 class="f-w-600">Antécédents personnels médicaux</h5>
                                                    <button class="btn btn-group btn-info"
                                                        @click="antePersonelModif = !antePersonelModif">Modifier</button>
                                                </div>

                                                <div class="table-responsive profile-table mb-0">

                                                    <table class="table table-responsive mb-0"
                                                        v-show="!antePersonelModif">
                                                        <tbody>
                                                            <tr>
                                                                <td>Asthme:</td>
                                                                <td>
                                                                    <input type="checkbox" name=""
                                                                        class=" primary form-control" disabled
                                                                        :checked="antePersonel.asthme" id="">
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Allergie:</td>
                                                                <td><input type="checkbox" name="" class="form-control"
                                                                        disabled :checked="antePersonel.allergie" id="">
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>Diabete:</td>
                                                                <td><input type="checkbox" name="" class="form-control"
                                                                        disabled :checked="antePersonel.diabete" id="">
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>HTA:</td>
                                                                <td><input type="checkbox" name="" class="form-control"
                                                                        disabled :checked="antePersonel.hta" id=""></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Tuberculose:</td>
                                                                <td><input type="checkbox" name="" class="form-control"
                                                                        disabled :checked="antePersonel.tuberculose"
                                                                        id=""></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Autres:</td>
                                                                <td>{{antePersonel.autres}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Antécédents personnels chirurgicaux:</td>
                                                                <td>{{antePersonel.antePersonelChirurgie}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Antécédents familiaux:</td>
                                                                <td>{{antePersonel.anteFamiliaux}}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table class="table table-responsive mb-0"
                                                        v-show="antePersonelModif">
                                                        <tbody>
                                                            <tr>
                                                                <td>Asthme:</td>
                                                                <td><input type="checkbox" name=""
                                                                        class="btn btn-group form-control"
                                                                        v-model="antePersonel.asthme"
                                                                        :checked="antePersonel.asthme" id=""></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Allergie:</td>
                                                                <td><input type="checkbox" name="" class="form-control"
                                                                        v-model="antePersonel.allergie"
                                                                        :checked="antePersonel.allergie" id=""></td>
                                                            </tr>

                                                            <tr>
                                                                <td>Diabete:</td>
                                                                <td><input type="checkbox" name="" class="form-control"
                                                                        v-model="antePersonel.diabete"
                                                                        :checked="antePersonel.diabete" id=""></td>
                                                            </tr>
                                                            <tr>
                                                                <td>HTA:</td>
                                                                <td><input type="checkbox" name="" class="form-control"
                                                                        v-model="antePersonel.hta"
                                                                        :checked="antePersonel.hta" id=""></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Tuberculose:</td>
                                                                <td><input type="checkbox" name="" class="form-control"
                                                                        v-model="antePersonel.tuberculose"
                                                                        :checked="antePersonel.tuberculose" id=""></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Autres:</td>
                                                                <td style="width:100%" colspan="6"> <textarea
                                                                        style="width:100%" v-model="antePersonel.autres"
                                                                        class="form-control" type="text" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Antécédents personnels chirurgicaux:</td>
                                                                <td style="width:100%" colspan="6"> <textarea
                                                                        style="width:100%"
                                                                        v-model="antePersonel.antePersonelChirurgie"
                                                                        class="form-control" type="text" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Antécédents familiaux:</td>
                                                                <td style="width:100%" colspan="6"> <textarea
                                                                        style="width:100%"
                                                                        v-model="antePersonel.anteFamiliaux"
                                                                        class="form-control" type="text" />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <button class="btn btn-group btn-primary"
                                                        @click="sauvegarderAntePersonnel()"
                                                        v-if="antePersonelModif">Sauvegarder</button>
                                                </div>
                                            </div>
                                        </b-card-text>
                                    </b-tab>
                                    <b-tab>
                                        <template slot="title">
                                            <feather type="activity"></feather>Antécédents obstétricaux
                                        </template>
                                        <b-card-text>
                                            <div class="tab-pane fade show active" id="top-profile" role="tabpanel"
                                                aria-labelledby="top-profile-tab">
                                                <div class="d-flex justify-content-between">
                                                    <h5 class="f-w-600">Antécédents obstétricaux</h5>
                                                    <button class="btn btn-group btn-info"
                                                        @click="anteObstreModif = !anteObstreModif">Modifier</button>
                                                </div>

                                                <div class="table-responsive profile-table mb-0">
                                                    <table class="table table-responsive mb-0"
                                                        v-show="!anteObstreModif">
                                                        <tbody>
                                                            <tr>
                                                                <td>Nombre de grossesses:</td>
                                                                <td>{{anteObstre.nbrGrossesse}}</td>
                                                                <td>Nombre de grossesses normales:</td>
                                                                <td>{{anteObstre.nbrGrossesseNormal}}</td>
                                                                <td>Nombre de grossesses compliquées:</td>
                                                                <td>{{anteObstre.nbrGrossesseComplique}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>La ou les complications:</td>
                                                                <td>{{anteObstre.complicationGrossesse}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Nombre d'avortements:</td>
                                                                <td>{{anteObstre.nbrAvortement}}</td>
                                                                <td>A quels mois?:</td>
                                                                <td>{{anteObstre.avortementMois}}</td>

                                                            </tr>
                                                            <tr>
                                                                <td>Causes des avortements:</td>
                                                                <td>{{anteObstre.causeAvortement}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Nombre des accouchements:</td>
                                                                <td>{{anteObstre.nbrAccouchement}}</td>
                                                                <td>Nombre d'accouchements normaux:</td>
                                                                <td>{{anteObstre.nbrAccouchementNormaux}}</td>
                                                                <td>Nombre d'accouchements Pathologiques:</td>
                                                                <td>{{anteObstre.nbrAccouchement}}</td>

                                                            </tr>
                                                            <tr>
                                                                <td>Causes des accouchements pathologiques:</td>
                                                                <td>{{anteObstre.pathologies}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Nombre d'enfants vivants:</td>
                                                                <td>{{anteObstre.nbrEnfantsVivant}}</td>
                                                                <td>Nombre de morts nés:</td>
                                                                <td>{{anteObstre.nbrEnfantsMortNes}}</td>
                                                                <td>Nombre d'enfants décédés:</td>
                                                                <td>{{anteObstre.nbrEnfantsDecedes}}</td>

                                                            </tr>
                                                            <tr>
                                                                <td>Raisons du/des décés:</td>
                                                                <td>{{anteObstre.pathologies}}</td>

                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table class="table table-responsive mb-0" v-show="anteObstreModif">
                                                        <tbody>
                                                            <tr>
                                                                <td>Nombre de grossesse:</td>
                                                                <td> <input v-model="anteObstre.nbrGrossesse"
                                                                        class="form-control" type="text" /> </td>
                                                                <td>Nombre de grossesse normale:</td>
                                                                <td> <input v-model="anteObstre.nbrGrossesseNormal"
                                                                        class="form-control" type="text" /> </td>
                                                                <td>Nombre de grossesse compliquées:</td>
                                                                <td> <input v-model="anteObstre.nbrGrossesseComplique"
                                                                        class="form-control" type="text" /> </td>
                                                            </tr>
                                                            <tr>
                                                                <td>La ou les complications:</td>
                                                                <td colspan="6"> <textarea style="width:100%"
                                                                        v-model="anteObstre.complicationGrossesse"
                                                                        class="form-control" type="text" /> </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Nombre d'avortements:</td>
                                                                <td> <input v-model="anteObstre.nbrAvortement"
                                                                        class="form-control" type="text" /> </td>
                                                                <td>A quels mois?:</td>
                                                                <td> <input v-model="anteObstre.avortementMois"
                                                                        class="form-control" type="text" /> </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Causes des avortements:</td>
                                                                <td colspan="6"> <textarea style="width:100%"
                                                                        v-model="anteObstre.causeAvortement"
                                                                        class="form-control" type="text" /> </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Nombre des accouchements:</td>
                                                                <td> <input v-model="anteObstre.nbrAccouchement"
                                                                        class="form-control" type="text" /> </td>
                                                                <td>Nombre d'accouchements normaux:</td>
                                                                <td> <input v-model="anteObstre.nbrAccouchementNormaux"
                                                                        class="form-control" type="text" /> </td>
                                                                <td>Nombre d'accouchements Pathologiques:</td>
                                                                <td> <input
                                                                        v-model="anteObstre.nbrAccouchmentPathologiques"
                                                                        class="form-control" type="text" /> </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Causes des accouchements pathologiques:</td>
                                                                <td colspan="6"> <textarea style="width:100%"
                                                                        v-model="anteObstre.causeAvortement"
                                                                        class="form-control" type="text" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Nombre d'enfants vivants:</td>
                                                                <td>
                                                                    <input v-model="anteObstre.nbrEnfantsVivant"
                                                                        class="form-control" type="text" />
                                                                </td>
                                                                <td>Nombre de morts nés:</td>
                                                                <td>
                                                                    <input v-model="anteObstre.nbrEnfantsMortNes"
                                                                        class="form-control" type="text" />
                                                                </td>
                                                                <td>Nombre d'enfants décédés:</td>
                                                                <td>
                                                                    <input v-model="anteObstre.nbrEnfantsDecedes"
                                                                        class="form-control" type="text" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Raisons du/des décés:</td>
                                                                <td colspan="6"> <textarea style="width:100%"
                                                                        v-model="anteObstre.raisonDeces"
                                                                        class="form-control" type="text" />
                                                                </td>
                                                            </tr>
                                                        </tbody>

                                                    </table>
                                                    <button class="btn btn-group btn-primary"
                                                        @click="sauvegarderAnteObstre()"
                                                        v-if="anteObstreModif">Sauvegarder</button>
                                                </div>
                                            </div>
                                        </b-card-text>
                                    </b-tab>
                                    <b-tab>
                                        <template slot="title">
                                            <feather type="activity"></feather>Antécédents gynécologiques
                                        </template>
                                        <b-card-text>
                                            <div class="tab-pane fade show active" id="top-profile" role="tabpanel"
                                                aria-labelledby="top-profile-tab">
                                                <div class="d-flex justify-content-between">
                                                    <h5 class="f-w-600">Antécédents gynécologiques</h5>
                                                    <button class="btn btn-group btn-info"
                                                        @click="anteGynecoModif = !anteGynecoModif">Modifier</button>
                                                </div>

                                                <div class="table-responsive profile-table mb-0">
                                                    <table class="table table-responsive mb-0"
                                                        v-show="!anteGynecoModif">
                                                        <tbody>
                                                            <tr>
                                                                <td>Anomalie mamaire:</td>
                                                                <td>{{anteGyneco.anomalieMamaire}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Infection genitale haute ou basse:</td>
                                                                <td>{{anteGyneco.infectionGenitale}}</td>
                                                            </tr>

                                                            <tr>
                                                                <td>Autres:</td>
                                                                <td>{{anteGyneco.autres}}</td>
                                                            </tr>


                                                        </tbody>
                                                    </table>
                                                    <table class="table table-responsive mb-0" v-show="anteGynecoModif">
                                                        <tbody>
                                                            <tr>
                                                                <td>Anomalie mamaire:</td>
                                                                <td colspan="6"> <textarea style="width:100%"
                                                                        v-model="anteGyneco.anomalieMamaire"
                                                                        class="form-control" type="text" /> </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Infection genitale haute ou basse:</td>
                                                                <td colspan="6" style="width:100%"> <textarea
                                                                        style="width:100%"
                                                                        v-model="anteGyneco.infectionGenitale"
                                                                        class="form-control" type="text" />
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>Autres:</td>
                                                                <td style="width:100%" colspan="6"> <textarea
                                                                        style="width:100%" v-model="anteGyneco.autres"
                                                                        class="form-control" type="text" />
                                                                </td>
                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                    <button class="btn btn-group btn-primary"
                                                        @click="sauvegarderAnteGyneco()"
                                                        v-if="anteGynecoModif">Sauvegarder</button>
                                                </div>
                                            </div>
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
                                            <div class="tab-pane fade show active" id="top-profile" role="tabpanel"
                                                aria-labelledby="top-profile-tab">
                                                <div class="d-flex justify-content-between">
                                                    <h5 class="f-w-600">Grossesse Actuelle</h5>
                                                    <button class="btn btn-group btn-info"
                                                        v-show="!grossesseActuelleModif"
                                                        @click="grossesseActuelleModif = !grossesseActuelleModif; dataTemp = {}; Object.assign(dataTemp, grossesseActuelle)">Modifier</button>
                                                    <button class="btn btn-group btn-info"
                                                        v-show="grossesseActuelleModif"
                                                        @click="grossesseActuelleModif = !grossesseActuelleModif ; grossesseActuelle = {}; Object.assign(grossesseActuelle, dataTemp)">Annuler</button>
                                                </div>

                                                <div class="table-responsive profile-table mb-0">

                                                    <table class="table table-responsive mb-0"
                                                        v-show="!grossesseActuelleModif">
                                                        <tbody>
                                                            <tr>
                                                                <td>Gestité:</td>
                                                                <td>{{grossesseActuelle.gestite}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Parité:</td>
                                                                <td>{{grossesseActuelle.parite}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Grossesse evolutive normale:</td>
                                                                <td>
                                                                    <input type="checkbox" name=""
                                                                        class=" primary form-control" disabled
                                                                        :checked="grossesseActuelle.grossesseEvolutiveNormale"
                                                                        id="">
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Menace fausse couche:</td>
                                                                <td><input type="checkbox" name="" class="form-control"
                                                                        disabled
                                                                        :checked="grossesseActuelle.menaceFausseCouche"
                                                                        id="">
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>Menace d'accouchement prématuré:</td>
                                                                <td><input type="checkbox" name="" class="form-control"
                                                                        disabled
                                                                        :checked="grossesseActuelle.menaceAccouchementPremature"
                                                                        id="">
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Rupture prématuré de membrane:</td>
                                                                <td><input type="checkbox" name="" class="form-control"
                                                                        disabled
                                                                        :checked="grossesseActuelle.rupturePrematureMembrane"
                                                                        id=""></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Absence de mouvement actif foetale:</td>
                                                                <td><input type="checkbox" name="" class="form-control"
                                                                        disabled
                                                                        :checked="grossesseActuelle.absenceMouvementActifFoetal"
                                                                        id=""></td>
                                                            </tr>

                                                            <tr>
                                                                <td>Autres à préciser:</td>
                                                                <td>{{grossesseActuelle.autres}}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table class="table table-responsive mb-0"
                                                        v-show="grossesseActuelleModif">
                                                        <tbody>
                                                            <tr>
                                                                <td>Gestité:</td>
                                                                <td style="width:100%" colspan="6"> <textarea
                                                                        style="width:100%"
                                                                        v-model="grossesseActuelle.gestite"
                                                                        class="form-control" type="text" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Parité:</td>
                                                                <td style="width:100%" colspan="6"> <textarea
                                                                        style="width:100%"
                                                                        v-model="grossesseActuelle.parite"
                                                                        class="form-control" type="text" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Grossesse evolutive normale:</td>
                                                                <td><input type="checkbox" name=""
                                                                        class="btn btn-group form-control"
                                                                        v-model="grossesseActuelle.grossesseEvolutiveNormale"
                                                                        :checked="grossesseActuelle.grossesseEvolutiveNormale"
                                                                        id=""></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Menace fausse couche:</td>
                                                                <td><input type="checkbox" name="" class="form-control"
                                                                        v-model="grossesseActuelle.menaceFausseCouche"
                                                                        :checked="grossesseActuelle.menaceFausseCouche"
                                                                        id=""></td>
                                                            </tr>

                                                            <tr>
                                                                <td>Menace d'accouchement prématuré:</td>
                                                                <td><input type="checkbox" name="" class="form-control"
                                                                        v-model="grossesseActuelle.menaceAccouchementPremature"
                                                                        :checked="grossesseActuelle.menaceAccouchementPremature"
                                                                        id=""></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Rupture prématuré de membrane:</td>
                                                                <td><input type="checkbox" name="" class="form-control"
                                                                        v-model="grossesseActuelle.rupturePrematureMembrane"
                                                                        :checked="grossesseActuelle.rupturePrematureMembrane"
                                                                        id=""></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Absence de mouvement actif foetale:</td>
                                                                <td><input type="checkbox" name="" class="form-control"
                                                                        v-model="grossesseActuelle.absenceMouvementActifFoetal"
                                                                        :checked="grossesseActuelle.absenceMouvementActifFoetal"
                                                                        id=""></td>
                                                            </tr>

                                                            <tr>
                                                                <td>Autres à préciser:</td>
                                                                <td style="width:100%" colspan="6"> <textarea
                                                                        style="width:100%"
                                                                        v-model="grossesseActuelle.autres"
                                                                        class="form-control" type="text" />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <button class="btn btn-group btn-primary"
                                                        @click="SauvegarderGrossesseActuelle()"
                                                        v-if="grossesseActuelleModif">Sauvegarder</button>
                                                </div>
                                            </div>
                                        </b-card-text>
                                    </b-tab>
                                    <b-tab>
                                        <template slot="title">
                                            <feather type="heart"></feather>Bilan complet
                                        </template>
                                        <b-card-text>
                                            <div class="tab-pane fade show active" id="top-profile" role="tabpanel"
                                                aria-labelledby="top-profile-tab">
                                                <div class="d-flex justify-content-between">
                                                    <h5 class="f-w-600">Bilan complet</h5>
                                                    <button class="btn btn-group btn-info"
                                                        @click="bilanCompletModif = !bilanCompletModif">Modifier</button>
                                                </div>

                                                <div class="table-responsive profile-table mb-0">
                                                    <table class="table table-responsive mb-0"
                                                        v-show="!bilanCompletModif">
                                                        <tbody>
                                                            <tr>
                                                                <td>NFS:</td>
                                                                <td>{{bilanComplet.nfs}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>GSRH:</td>
                                                                <td>{{bilanComplet.gsrh}}</td>
                                                            </tr>

                                                            <tr>
                                                                <td>Toxoplasmose:</td>
                                                                <td>{{bilanComplet.toxoplasmose}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Albuminurie:</td>
                                                                <td>{{bilanComplet.albuminurie}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Glycémie:</td>
                                                                <td>{{bilanComplet.glycemie}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Hépatite:</td>
                                                                <td>{{bilanComplet.hepatite}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Rubéole:</td>
                                                                <td>{{bilanComplet.rubeole}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Sucre:</td>
                                                                <td>{{bilanComplet.sucre}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>HIV:</td>
                                                                <td>{{bilanComplet.hiv}}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table class="table table-responsive mb-0"
                                                        v-show="bilanCompletModif">
                                                        <tbody>
                                                            <tr>
                                                                <td>NFS:</td>
                                                                <td> <input v-model="bilanComplet.nfs"
                                                                        class="form-control" type="text" /> </td>
                                                            </tr>
                                                            <tr>
                                                                <td>GSRH:</td>
                                                                <td> <input v-model="bilanComplet.gsrh"
                                                                        class="form-control" type="text" /> </td>
                                                            </tr>

                                                            <tr>
                                                                <td>Toxoplasmose:</td>
                                                                <td> <input v-model="bilanComplet.toxoplasmose"
                                                                        class="form-control" type="text" /> </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Albuminurie:</td>
                                                                <td> <input v-model="bilanComplet.albuminurie"
                                                                        class="form-control" type="text" /> </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Glycémie:</td>
                                                                <td> <input v-model="bilanComplet.glycemie"
                                                                        class="form-control" type="text" /> </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Hépatite:</td>
                                                                <td> <input v-model="bilanComplet.hepatite"
                                                                        class="form-control" type="text" /> </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Rubéole:</td>
                                                                <td> <input v-model="bilanComplet.rubeole"
                                                                        class="form-control" type="text" /> </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Sucre:</td>
                                                                <td> <input v-model="bilanComplet.sucre"
                                                                        class="form-control" type="text" /> </td>
                                                            </tr>
                                                            <tr>
                                                                <td>HIV:</td>
                                                                <td> <input v-model="bilanComplet.hepatite"
                                                                        class="form-control" type="text" /> </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <button class="btn btn-group btn-primary"
                                                        @click="sauvegarderBilan()"
                                                        v-if="bilanCompletModif">Sauvegarder</button>
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
import user from "../../../store/modules/user";

export default {
    props: ['user'],
    data() {
        return {
            dataTemp: {},
            surveillance: {
                structure: '',
                dossier: '',
                name: '',
                dob: '',
                spouse: '',
                profession: '',
                number: '',
                taille: ''
                , id: '', idPatient: user.id
            },
            surveillanceModif: false,
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
            anteObstre: {
                nbrGrossesse: '',
                nbrGrossesseNormal: '',
                nbrGrossesseComplique: '',
                complicationGrossesse: '',
                nbrAvortement: '',
                avortementMois: '',
                causeAvortement: '',
                nbrAccouchement: '',
                nbrAccouchementNormaux: '',
                nbrAccouchmentPathologiques: '',
                pathologies: '',
                nbrEnfantsVivant: '',
                nbrEnfantsMortNes: '',
                nbrEnfantsDecedes: '',
                raisonDeces: ''
                , id: '', idPatient: user.id
            },
            anteObstreModif: false,
            anteGyneco: {
                anomalieMamaire: '',
                infectionGenitale: '',
                autres: ''
                , id: '', idPatient: user.id
            },
            anteGynecoModif: false,
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
            bilanComplet: {
                nfs: '',
                gsrh: '',
                toxoplasmose: '',
                albuminurie: '',
                glycemie: '',
                hepatite: '',
                rubeole: '',
                sucre: '',
                hiv: ''
                , id: '', idPatient: user.id
            }, bilanCompletModif: false,

        }
    },
    components: {
        media,
    },
    methods: {
        sauvegarderSurveillance() {

        },
        sauvegarderAnteObstre() {

        },
        sauvegarderAntePersonnel() { },
        sauvegarderAnteGyneco() {

        },
        SauvegarderGrossesseActuelle() {
            this.grossesseActuelleModif = !this.grossesseActuelleModif
        },
        sauvegarderBilan() {

        }
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