<template>
   <div class="main">
    <div class="container">
        <h1>Эмодзи</h1>
        <p>
            Введите название фильма и колиество эмодзи и получите эмодзи, 
            символизирующие жанр, настроение, главных персонажей
            и другие ключевые аспекты фильма
        </p>
        <input type="text" placeholder="Введите название фильма" v-model="film">
        <input type="number" placeholder="Введите количество эмодзи" v-model="count">
        <button @click="sendFilm" :disabled="isLoading">Отправить</button>
        <h3>{{ result }}</h3>
        <router-link :to= "{ name: 'home' }">На главную</router-link>
    </div>
  </div>
</template>


<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                film: '',
                count: 0,
                result: '',
                isLoading: false
            }
        },
        methods: {
            async sendFilm() {
                this.isLoading = true;
                try {
                    const apiKey = localStorage.getItem('apiKey');
                    const response = await axios.post(
                        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`,
                        {
                            "contents": [
                                {
                                    "parts": [
                                        {
                                            "text": this.prompt
                                        }
                                    ]
                                }
                            ]
                        }
                    );
                    this.result = response.data.candidates[0].content.parts[0].text;
                } catch (error) {
                    alert(error);
                }
                this.isLoading = false;
            }
        },
        computed: {
            prompt() {
                return `Выведи название фильма ${this.film} в ${this.count} эмодзи, напиши только эмодзи, без текста и всего лишнего`
            }
        }
    }
</script>


<style>

</style>
