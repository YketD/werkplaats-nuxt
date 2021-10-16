<template>
    <div class="activity-container">
        <div class="activity">
            <div class="activity-text">
                <h1 class="title">Ladies night!</h1>
<!--                <h2 class="subtitle">Interieur advies</h2>-->
                <p class="description">Op donderdag 4 november organiseren wij samen met Sylvia Bouwer, ondernemerscoach, een
                                       netwerkbijeenkomst speciaal voor gelijkgestemde vrouwelijke dienstverlenende ondernemers.<br/>
                                       Deze avond is erop gericht om op een ontspannende manier nieuwe relaties op te bouwen en je netwerk te
                                       vergroten. <br />
                                       We starten met een lezing van Sylvia: “In 5 stappen naar een succesvolle praktijk.”<br/>
                                       In het tweede deel gaan we speeddaten en we sluiten af met een borrel.<br/><br/>
                                       De kosten bedragen € 10,00 (excl btw).<br/>
                                       Bij binnenkomst betaal je deze snel &amp; makkelijk met een QR-code.<br/><br/>
                                       Wil jij er ook bij zijn?<br/>
                                       Vul jouw mailadres hieronder in en meld je aan.</p>
                <form>
                    <input type="email" v-model="email" />
                    <button @click="sendMailToHolly">Verzenden</button>
                </form>
            </div>
            <img class="activity-image" src="~/assets/img/ladies-night.jpg">
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "activiteit",
        data() {
            return {
                email: "",
            }
        },
        methods: {
            sendMailToHolly(e) {
                e.preventDefault();
                if (this.email && this.email != "" && this.validateEmail(this.email)) {
                    axios.post('api/send-activity-admission',
                        { email: this.email }
                    ).then(response => {
                        this.$notify({
                            group: 'reservations',
                            title: 'Bericht verzonden! ',
                            text: 'We nemen zo spoedig mogelijk contact met u op.',
                        });
                    }).catch(error => {
                        this.$notify({
                            group: 'error',
                            type: 'error',
                            title: 'Mislukt !',
                            text: 'Er is iets fout gegaan. propeer het opnieuw'
                        });
                    });
                } else {
                    this.$notify({
                        group: 'error',
                        type: 'error',
                        title: 'Mislukt !',
                        text: 'Uw email adres is geen valide email, voer een werkend email adres in.'
                    });
                }
            },
            validateEmail(email) {
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            },
        }
    }
</script>

<style lang="scss" scoped>
    .activity-container {
        .activity {
            height                : auto;
            width                 : auto;
            margin                : 24px;
            padding               : 24px;
            background-color      : rgba(255, 255, 255, .2);
            display               : grid;
            grid-template-columns : 1fr 1fr;
            grid-gap              : 24px;

            @media('max-width: 800px') {
                grid-template-columns : 1fr;
                align-content         : center;
                margin                : 0;
                height: 140%;
            }

            .activity-text {
                .title {
                    font-size : 32px;
                    @media ('max-width: 800px') {
                        font-size : 22px;
                    }
                }

                .subtitle {
                    font-size : 22px;
                    @media ('max-width: 800px') {
                        font-size : 16px;
                    }
                }

                form {
                    width          : 100%;
                    display        : flex;
                    align-items    : center;
                    flex-direction : column;
                    margin-top     : 24px;
                }

                button {
                    font-size   : 24px;
                    font-family : 'Poppins', sans-serif;
                    font-weight : 800;
                    color       : white;
                    background  : #e88a60;
                    border      : none;
                    cursor      : pointer;
                    padding     : 6px 24px;
                }

                input, textarea {
                    margin        : 0px;
                    margin-bottom : 24px;
                    padding       : 12px;
                    font-size     : 24px;
                    font-family   : 'Poppins', sans-serif;

                    @media ('max-width : 1440px') {
                        margin-bottom : 12px;
                        padding       : 4px;
                    }

                    @media ('max-width : 500px') {
                        font-size : 14px;
                    }
                }
            }

            .activity-image {
                height : 500px;

                @media ('max-width: 1440px') {
                    height     : 400px;
                    align-self : center;
                }

                @media ('max-width: 800px') {
                    margin : auto;
                    height : 300px;
                }
            }
        }
    }
</style>
