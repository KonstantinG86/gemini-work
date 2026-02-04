<template>
   <div class="main">
    <div class="container">
        <h1>Генератор рецептов</h1>
        <p>
            Для создания рецепта, выберете варианты ингредиентов имеющихся у вас или дополните и введите свои
        </p>
        <div class="container__ingredients">
            <label 
                v-for="item in ingredientsList" 
                :key="item" 
                class="checkbox-item"
            >
            <input 
                type="checkbox" 
                :value="item" 
                v-model="selectedIngredients"
            >
            <span>{{ item }}</span>
            </label>
        </div>
        <label class="checkbox-item">
            <input 
                type="checkbox" 
                v-model="diet"
            >
            <span>Диетическое блюдо</span>
        </label>

        <label class="checkbox-item">
            <input 
                type="checkbox" 
                v-model="spicy"
            >
            <span>Острое блюдо</span>
        </label>
        <input 
            type="text" 
            placeholder="Введите свои ингредиенты" 
            v-model="writeIngredients"
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
                ingredientsList: [
                    "Яйца",
                    "Молоко",
                    "Соль",
                    "Сахар",
                    "Мука",
                    "Растительное масло",
                    "Сливочное масло",
                    "Рис",
                    "Макароны",
                    "Картофель",
                    "Лук",
                    "Морковь",
                    "Чеснок",
                    "Помидоры",
                    "Огурцы",
                    "Сыр",
                    "Курица",
                    "Хлеб",
                    "Майонез",
                    "Мясо курицы",
                    "Мясо свинина",
                    "Мясо говядины",
                    "Мясо баранины",
                ],
                selectedIngredients: [],
                writeIngredients: '',
                diet: false,
                spicy: false,
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
                return `Создай рецепт блюда на основе ингредиентов: ${this.selectedIngredients.join(", ")} ${this.writeIngredients}. Диетическое: ${this.diet ? "да" : "нет"}. Острое: ${this.spicy ? "да" : "нет"}. Ответ оформи в Markdown с заголовками и списками.`
            },
            formattedAnswer() {
                const html = marked.parse(this.result);
                return DOMPurify.sanitize(html);
            }
        }
    }
</script>


<style>
    .container__ingredients {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
</style>
