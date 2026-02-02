<template>
   <div class="main">
    <div class="container">
        <h1>Натальная карта</h1>
        <pre>
Для получения астрологического анализа введите дату рождения и место рождения
        </pre>
        <h3>Выберите дату рождения:</h3>
        <input type="datetime-local" name="birthday" class="astro-container__date" v-model="dateTime">
        <input type="text" placeholder="Введите место рождения" class="astro-container__place" v-model="place">
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
                date: '',
                place: '',
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
                    // console.log(response.data);
                    this.result = response.data.candidates[0].content.parts[0].text;
                } catch (error) {
                    alert(error);
                }
                this.isLoading = false;
            }
        },
        computed: {
            prompt() {
                return `предоставь астрологический анализ: знаки Зодиака, положение планет и их влияние. Если человек родился ${this.dateTime} и его место рождения ${this.place}}`
            }
        }
    }
</script>


<style>

</style>
