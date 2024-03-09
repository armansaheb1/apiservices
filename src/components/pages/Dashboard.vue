<template>
    <div>

    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'pages-authentication-login-v1',
    metaInfo: {
        title: 'Login v1 - Pages'
    },
    components: {
    },
    data: () => ({
        errors: [],
        errors2: [],
        ptool: '',
        utool: '',
        username: '',
        fusername: '',
        password: '',
        isShow: false,
        Rerrors: [],
        Cerrors: '',
        Rerrors2: [],
        Remail: '',
        Retool: '',
        Rutool: '',
        Rpassword: '',
        Rptool: '',
        Rrepassword: '',
        Rlast_name: '',
        Rfirst_name: '',
        slash: true,
        sslash: true,
        login: true,
        success: false,
        Rreptool: '',
        RisShow: false,
        forgot: false,
        fsuccess: false,
        ferror: false,
        verify: false,
        RRerrors: '',
        codder: false,
        code: '',
        phone: ''
    }),
    mounted() {
        document.title = ' The My Exchange | Login '
    },
    methods: {
        async RsubmitForm() {
            await axios
                .post('auth/users/', formData)
                .then(response => {
                    this.add_user()
                })
                .catch(error => {

                    if (error.response) {
                        for (var property in error.response.data) {
                            this.Rerrors.push(`${property}: ${error.response.data[property]}`)
                        }
                    } else if (error.message) {
                        this.Rerrors.push(error.message)
                    }
                })
        }
    },
    async submitForm() {
        this.errors = []
        axios.defaults.headers.common.Authorization = ''
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        this.$store.commit('removeToken')
        await axios
            .post('auth/token/login', formData)
            .then(response => {
                if (response.data == 1) {
                    document.getElementById('form1').hidden = true
                    document.getElementById('form2').hidden = false
                    return
                }
                const token = response.data.auth_token
                this.$store.commit('setToken', token)
                axios.defaults.headers.common.Authorization = 'Token ' + token
                this.$store.state.isAuthenticated = true
                localStorage.setItem('token', token)
                setTimeout(() => {
                    var elem = document.createElement('a')
                    elem.href = '/'
                    elem.click()
                }, 1000);

            })
            .catch(error => {
                console.log(error)
                if (error.response) {
                    if (error.response.data.length) {
                        this.$swal(`<div class="swal2-icon swal2-error swal2-icon-show" style="display: flex;"><span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span></div><h5>${error.response.data[0]}</h5>`)
                    } else {
                        this.$swal(`<div class="swal2-icon swal2-error swal2-icon-show" style="display: flex;"><span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span></div><h5>Incorrect Username Or Password</h5>`)

                    }
                } else if (error.message) {
                    this.$swal(`<div class="swal2-icon swal2-error swal2-icon-show" style="display: flex;"><span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span></div><h5>${error.message}</h5>`)
                }
            })
    },
    async fsubmitForm() {
        this.fsuccess = false
        this.ferror = false
        await axios
            .post('password_reset/', { email: this.fusername })
            .then(response => {
                this.fsuccess = true
            })
            .catch(error => {
                this.ferror = true
            })
    },
}
</script>
<style>
div {
    font-family: myFirstFont;
}

#passfld {
    text-security: disc;
    -webkit-text-security: disc;
    -mox-text-security: disc;
}

.invalid-tooltip {
    position: relative;
    top: 0;
    background-color: rgba(0, 0, 0, 0);
    color: red;
    text-align: left;
}



.login-btn {
    width: 40%;
    float: left;
    background: none;
    border-style: none;
    padding: 10px;
    color: grey !important;
    background-color: lightgray;
    margin: 5%
}

.login-btn:hover {
    background: grey;
    color: black !important
}

.active {
    background: rgb(254, 208, 1) !important;
}
</style>