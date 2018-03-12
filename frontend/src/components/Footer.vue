<template>
<div class="mastfoot">
    <div class="inner">
        <p>Web coding chanllenge <a href="https://github.com/eissasoubhi/challenge-project"> application</a>, by <a href="https://github.com/eissasoubhi/">@eissasoubhi</a>.</p>
    </div>
</div>
</template>

<style scoped>
/**
 * The footer style
 */

@media (min-width: 768px) {
  .masthead {
    position: fixed;
    top: 0;
  }
  .mastfoot {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
  }

  .site-wrapper-inner {
    vertical-align: middle;
  }

  .masthead,
  .mastfoot,
  .cover-container {
    width: 100%;
 }
}

@media (min-width: 992px) {
  .masthead,
  .mastfoot,
  .cover-container {
    width: 700px;
  }
}
</style>
