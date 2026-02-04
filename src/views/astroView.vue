<template>
   <div class="main">
    <div class="container">
        <h1>Натальная карта</h1>
        <p>
            Для получения астрологического анализа введите дату рождения и место рождения
        </p>
        <h3>Выберите дату рождения:</h3>
        <input 
            type="datetime-local" 
            name="birthday" 
            class="astro-container__date" 
            v-model="dateTime"
        >
        <input 
            type="text" 
            placeholder="Введите место рождения" 
            class="astro-container__place" 
            v-model="place"
        >
        <button 
            @click="sendRequest" 
            :disabled="isLoading"
        >
            Отправить
        </button>
        <div 
            v-if="result" 
            class="answer" 
            v-html="formattedAnswer"
        ></div>
        <router-link :to= "{ name: 'home' }">На главную</router-link>
    </div>
  </div>
</template>


<script>
// Данный импорт я нашел для красивого вывода ответа в формате Markdown
    import { marked } from "marked";
    import DOMPurify from "dompurify";
    import axios from 'axios';
    export default {
        data() {
            return {
                dateTime: '',
                place: '',
                result: '',
                isLoading: false
            }
        },
        methods: {
            async sendRequest() {
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
                return `Предоставь астрологический анализ (знаки зодиака, планеты и их влияние). Человек родился ${this.dateTime}, место рождения: ${this.place}. Ответ оформи в Markdown с заголовками и списками.`
            },
            formattedAnswer() {
                const html = marked.parse(this.result);
                return DOMPurify.sanitize(html);
            }
        }
    }
</script>


<style>
    
</style>
