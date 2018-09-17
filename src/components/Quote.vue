<template>
   
    <div>
        <div class='title' >
       <slot name='title'></slot>
       <span style="color:#ccc"> <slot name='subtitle'></slot> The Subtitle  <!-- default content para o slote se n tiver nada do pai  --></span>
    </div>
    <hr>
    <div class='title' >
        <slot ></slot> <!-- default slot -->
    </div>
</div>  
</template>
<script>
export default {};
</script>

<style>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  margin: 30px auto;
  text-align: center;
}
h2 {
  color: red;
}
.title {
  font-style: italic;
}
</style>

