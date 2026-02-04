<template>
   <div class="main">
    <div class="container">
        <h1>Подбор подарков</h1>
        <p>
            Для подбора подарка введите интересы, хобби, возраст, пол и бюджет для подарка
        </p>
        <input 
            list="interests" 
            placeholder="Введите интересы" 
            v-model="interests"
        >
        <datalist id="interests">
            <option value="Работа" />
            <option value="Спорт" />
            <option value="Музыка" />
            <option value="Кино и сериалы" />
            <option value="Игры" />
            <option value="Чтение" />
            <option value="Путешествия" />
            <option value="Технологии" />
            <option value="Образование" />
            <option value="Творчество" />
            <option value="Здоровье и фитнес" />
            <option value="Бизнес и финансы" />
            <option value="Общение" />
        </datalist>
        <input list="hobbies" placeholder="Введите хобби" v-model="hobby">
        <datalist id="hobbies">
            <option value="Спорт" />
            <option value="Музыка" />
            <option value="Кино и сериалы" />
            <option value="Игры" />
            <option value="Чтение" />
            <option value="Путешествия" />
            <option value="Технологии" />
            <option value="Творчество" />
            <option value="Здоровье и фитнес" />
            <option value="Кулинария" />
            <option value="Фотография" />
            <option value="Рукоделие" />
        </datalist>
        <input type="number" placeholder="Введите возраст" v-model="age">
        <input list="gender" placeholder="Введите пол" v-model="gender">
        <datalist id="gender">
            <option value="Мужской" />
            <option value="Женский" />
        </datalist>
        <input list="budget" placeholder="Введите бюджет" v-model="budget">
        <datalist id="budget">
            <option value="до 1000 тенге" />
            <option value="до 5000 тенге" />
            <option value="до 10000 тенге" />
            <option value="до 20000 тенге" />
            <option value="до 50000 тенге" />
        </datalist>
        <button 
            @click="sendData" 
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
                interests: '',
                hobby: '',
                age: '',
                gender: '',
                budget: '',
                result: '',
                isLoading: false
            }
        },
        methods: {
            async sendData() {
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
                return `Подбори подарок для человека, который имеет интересы ${this.interests}, хобби ${this.hobby}, возраст ${this.age}, пол ${this.gender} и бюджет ${this.budget} тенге. Ответ оформи в Markdown с заголовками и списками.`
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
