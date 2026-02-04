<template>
    <div class="main">
        <div class="container">
            <h1>Испробуй возможности API Gemini</h1>
            <p>Для получения ключа API Gemini перейдите на сайт: <a href='https://ai.google.dev/gemini-api/docs/api-key?hl=ru'>https://ai.google.dev/gemini-api/docs/api-key?hl=ru</a></p>
            <p>Запомни у API Gemini есть ограничения: 5 запросов в минуту и 20 запросов в день</p>
            <input type="text" placeholder="Введите свой API ключ Gemini" v-model="apiKey">
            <p v-if="apiSave">API сохранено!</p>
            <button @click="setApiKey">Сохранить</button>
            <h2>Содержание:</h2>
            <ul>
                <li><router-link :to= "{ name: 'emoji' }">Эмодзи</router-link></li>
                <li><router-link :to= "{ name: 'astro' }">Натальная карта</router-link></li>
                <li><router-link :to= "{ name: 'presents' }">Подбор подарков</router-link></li>
                <li><router-link :to= "{ name: 'recipes' }">Генератор рецептов</router-link></li>
            </ul>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                apiKey: '',
                apiSave: false
            }
        },
        // Проброс данных в инпут и в любой другой тэг
        mounted()
        {
            if (localStorage.getItem('apiKey')) {
                this.apiKey = localStorage.getItem('apiKey');
                this.apiSave = true;
            }
        },       
        methods: {
            setApiKey() {
                localStorage.setItem('apiKey', this.apiKey);
                this.apiSave = true;
            }
        }
      }
</script>


<style>
    
</style>
