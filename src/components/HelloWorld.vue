<template>
<div>
    <div class="about-section">
        <h1 class="about"><u>About Me.</u></h1><br>
        <p>Kerjakan segala sesuatu sesimple mungkin</p>
    </div><br><br>

    <div class="row">
        <div class="column">
            <div class="card">
                <img class="foto" src="@/assets/Foto.png" alt="rian" style="width:100%">
                <div class="container"><br>
                    <h2>Rianda Septiaji</h2>
                    <p class="title"><b><u></u></b></p>
                    <p>"Kerjakan sesuatu sesimple mungkin"</p>
                    <p></p>
                    <p>riandaseptiaji@gmail.com</p>
                    <p><button href="#" class="button"><b-icon icon="Insta" /> Instagram</button></p>
                </div>
            </div>
        </div>
    </div><br><br>
</div>
</template>

<script>

</script>

<style>
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  position: relative;
  float: left;
  width: 33.3%;
  margin: auto;
  padding: 0 8px;
}

.card {
  border-radius: 15px;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.foto {
  border-radius: 15px;
}

.about {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {

  color: black;
}

.button {
  border-radius: 50px;
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
</style>