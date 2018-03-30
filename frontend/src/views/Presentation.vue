<template>
  <div class="home">
    <div class="text-center">
        <img src="@/assets/vue-spa-with-laravel.png" alt="">
        <h1>HF Shops App</h1>
        <p>
          Welcome, this project is a simple web coding challenge created as the second step for job application in <a href="http://hiddenfounders.com/" title="hidden founders.">hidden founders.</a><br>
          It's coded using <u>VueJs</u> for the UI and <u>Laravel</u> for the Api. The main application job is to list shops nearby the user location.<br>
          For more information please see the links below.
        </p>
        <ul>
          <li><a href="https://github.com/hiddenfounders/web-coding-challenge" title="Project specs">Project specs</a></li>
          <li><a href="https://github.com/eissasoubhi/challenge-project" title="Peoject source code">Peoject source code</a></li>
          <li><a href="https://github.com/eissasoubhi/challenge-project/blob/master/backend/readme.md" title="Api documentation">Api documentation</a></li>
          <li><a href="https://github.com/eissasoubhi/challenge-project/blob/master/frontend/README.md" title="Frontend app documentation">UI documentation</a></li>
        </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Presentation'
}
</script>

<style scoped>
  .home{
    margin-top: 50px;
  }
  p{
    margin: 30px auto;
    width: 600px;
    font-size: 18px;
  }
  ul{
    display: flex;
    justify-content: space-between;
    width: 600px;
    margin: 0 auto;
    list-style: none;
    padding-left: 0;
    font-family: sans-serif, arial;
  }
</style>
