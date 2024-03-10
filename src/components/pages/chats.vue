<template>
    <div>
        <div class="card">
            <div class="card-header">
             چت ها
            </div>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            
                            <th style="text-align: center;" class="col-9">موضوع</th>
                            <th style="text-align: center;" class="col-2">یوزر</th>
                            <th style="text-align: center;" class="col-1">#</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, idx) in chats" v-bind:key="item">
                            
                            <td style="text-align: center;" class="col-9">{{ item.first_message }}</td>
                            <td style="text-align: center;" class="col-2">
                                {{ item.user.username }}
                            </td>
                            <td style="text-align: center;" class="col-1">{{ idx }}</td>
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
        chat: '',
        chats: []
    }),
    mounted() {
        document.title = ' My AI Services| Login '
        this.get_texts()
    },
    methods: {
        async submit() {
            await axios
                .post('texts', {text : this.text})
                .then(response => {
                    this.text = ''
                    this.texts = response.data
                })
               
        },
        async get_texts() {
            await axios
                .get('chats')
                .then(response => {
                    this.chats = response.data
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