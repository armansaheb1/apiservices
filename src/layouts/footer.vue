<template>
<div>
  <div style="clear:both"></div>
  <nav id="foot" class="navbar navbar-dark bg-dark" style=" width:100%">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="" alt="" width="" height="24" class="d-inline-block align-text-top">

    </a>
  </div>
</nav>
</div>
</template>

<script>
document.addEventListener('domContentLoaded' ,() => {
  document.getElementById('foot').style.bottom = Window.innerHeight
})

export default {
  name: 'footers',
  methods: {
  }
}
</script>