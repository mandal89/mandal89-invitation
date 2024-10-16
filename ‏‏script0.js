<script>
  function updateLayout() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    document.body.style.backgroundSize = width + 'px ' + height + 'px';
  }
  window.onresize = updateLayout;
  window.onload = updateLayout;
</script>
