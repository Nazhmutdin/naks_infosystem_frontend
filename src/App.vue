<template>
  <router-view></router-view>
</template>


<!--
<=====================================================================>
-->


<script setup lang="ts">
</script>


<!--
<=====================================================================>
-->


<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
  body {

    --color-type-1: #EDF6FC;
    --color-type-2: #99CCEE;
    --color-type-3: #FFFFFF;
    --color-type-4: #002740;

    --text-color: var(--color-type-4);
    --usual-text-font-family: "Open Sans", sans-serif;
    --usual-text-font-weight: 600;
    --usual-text-font-size: 14px;

    --tran-05: all .5s ease;
    
    --border-type: var(--color-type-4) solid 1px;
    --border-radius: 10px;
    
    --button-color: var(--color-type-2);

    --background-color: var(--color-type-1);

    
    background: var(--background-color); 
  }

  *{
      margin: auto;
  }
</style>