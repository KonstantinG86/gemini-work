<template>
  <router-view />
</template>


<script>
    
</script>


<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Georgia, 'Times New Roman', Times, serif
    }
    a {
        text-decoration: none;
        color: #007bff;
        transition: text-decoration 0.3s;
    }
    a:hover {
        text-decoration: underline;
    }
    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        gap: 20px;
    }
    input {
        width: 580px;
        height: 30px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    button {
        width: 100px;
        height: 30px;
        border: none;
        border-radius: 5px;
        background-color: #007bff;
        color: #fff;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    button:hover {
        background-color: #0056b3;
    }
    button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
    button:active {
        background-color: #004080;
    }
    ul {
        padding: 0;
        margin: 0;
        list-style: circle inside;
    }
    .answer h3 {
        margin-top: 16px;
        color: #2c3e50;
    }

    .answer ul {
        padding-left: 20px;
    }

    .answer li {
        margin-bottom: 8px;
    }

    .answer strong {
        color: #34495e;
    }

    .answer em {
        color: #27ae60;
        font-style: normal;
        font-weight: 600;
    }
    .checkbox-group {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        gap: 10px;
        margin-bottom: 20px;
    }

    .checkbox-item {
        display: flex;
        align-items: center;
        gap: 8px;
        background: #f3f4f6;
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.2s;
    }

    .checkbox-item:hover {
        background: #e5e7eb;
    }

    .checkbox-item input {
        accent-color: #4f46e5; /* цвет чекбокса */
        width: 16px;
        height: 16px;
    }

    .options {
        margin: 15px 0;
        display: flex;
        gap: 20px;
    }
</style>
