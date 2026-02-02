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
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        background-color: rgb(200, 227, 163);
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
        max-width: 800;
        margin: 0 auto;
        padding: 20px;
        gap: 20px;
    }
    input {
        width: 700px;
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
</style>
