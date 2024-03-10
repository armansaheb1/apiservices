<template>
    <div>
        <div class="card">
            <div class="card-header">
                اضافه کردن متن
            </div>
            <div class="card-body">
                <label style="text-align:right; width: 100%; padding: 3px;">سوال</label>
                <input v-model="question" class="form-control">
                <label style="text-align:right; width: 100%; padding: 3px;">پاسخ</label>
                <textarea v-model="answer" class="form-control" name="" id="" cols="30" rows="10"></textarea>
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
        texts: [],
        question: '',
        answer: ''
    }),
    mounted() {
        document.title = ' My AI Services| Login '
        this.get_texts()
    },
    methods: {
        async submit() {
            const id = this.$route.params.id
            await axios
                .put(`qas/${id}`, {question : this.question, answer : this.answer})
                .then(response => {
                    this.text = ''
                    this.question = response.data.question
                    this.answer = response.data.answer
                    const toPath = this.$route.go || '/q&a'
                    this.$router.push(toPath)
                })
               
        },
        async get_texts() {
            const id = this.$route.params.id
            await axios
                .get(`qas/${id}`)
                .then(response => {
                    this.question = response.data.question
                    this.answer = response.data.answer
                })
               
        },
        async deletes(id) {
            await axios
                .delete(`qas/${id}`)
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