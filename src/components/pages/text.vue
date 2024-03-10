<template>
    <div>
        <div class="card">
            <div class="card-header">
                اضافه کردن متن
            </div>
            <div class="card-body">
                <label style="text-align:right; width: 100%; padding: 3px;">متن</label>
                <textarea v-model="text" class="form-control" name="" id="" cols="30" rows="10"></textarea>
                <br>
                <button @click="submit()" class="btn btn-dark">ویرایش</button>
            </div>
        </div><br><br>
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
        text: '',
        texts: []
    }),
    mounted() {
        document.title = ' My AI Services| Login '
        this.get_texts()
    },
    methods: {
        async submit() {
            const id = this.$route.params.id
            await axios
                .put(`texts/${id}`, {text : this.text})
                .then(response => {
                    this.text = ''
                    this.texts = response.data
                    const toPath = this.$route.go || '/texts'
                    this.$router.push(toPath)
                })
               
        },
        async get_texts() {
            const id = this.$route.params.id
            await axios
                .get(`texts/${id}`)
                .then(response => {
                    this.text = response.data.text
                })
               
        },
        async deletes(id) {
            await axios
                .delete(`texts/${id}`)
                .then(response => {
                    this.texts = response.data
                })
               
        }
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