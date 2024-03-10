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
                <textarea v-model="answer" class="form-control" name="" id="" cols="30" rows="5"></textarea>
                <br>
                <button @click="submit()" class="btn btn-dark">اضافه کردن</button>
            </div>
        </div><br><br>
        <div class="card">
            <div class="card-header">
                مدیریت متن ها
            </div>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th style="text-align: center;" class="col-1">#</th>
                            <th style="text-align: center;" class="col-4">Question</th>
                            <th style="text-align: center;" class="col-4">Answer</th>
                            <th style="text-align: center;" class="col-3">Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, idx) in texts" v-bind:key="item">
                            <td style="text-align: center;" class="col-1">{{ idx }}</td>
                            <td style="text-align: center;" class="col-4">{{ item.question }}</td>
                            <td style="text-align: center;" class="col-4">{{ item.answer }}</td>
                            <td style="text-align: center;" class="col-3">
                                <a class="btn btn-dark from-control" style="margin: 2px" :href="'/q&a/' + item.id">Edit</a>
                                <button class="btn btn-dark from-control" style="margin: 2px" @click="deletes(item.id)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
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
            await axios
                .post('qas', {question : this.question, answer : this.answer})
                .then(response => {
                    this.text = ''
                    this.texts = response.data
                })
               
        },
        async get_texts() {
            await axios
                .post('qas')
                .then(response => {
                    this.texts = response.data
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