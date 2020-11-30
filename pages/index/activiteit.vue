<template>
    <div class="activity-container">
        <div class="activity">
            <div class="activity-text">
                <h1 class="title">Nieuwe activiteit!</h1>
                <h2 class="subtitle">Mini-shoot</h2>
                <p class="description">Geinteresseerd in deelname? Vul hieronder je email adres in en er wordt contact
                                       met je opgenomen!</p>
                <form>
                    <input type="email" v-model="email" />
                    <button @click="sendMailToHolly">Verzenden</button>
                </form>
            </div>
            <img class="activity-image" src="~/assets/img/poster.jpeg">
        </div>
    </div>
</template>

<script>
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
                    this.$axios.post('send-activity-admission',
                        this.email
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
                }
                else {
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
                margin: 0;
            }

            .activity-text {
                .title {
                    font-size : 32px;
                    @media ('max-width: 800px') {
                        font-size: 22px;
                    }
                }

                .subtitle {
                    font-size : 22px;
                    @media ('max-width: 800px') {
                        font-size: 16px;
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
                    height: 300px;
                }
            }
        }
    }
</style>
