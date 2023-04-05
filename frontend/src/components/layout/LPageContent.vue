<template>
  <div class="flex flex-1 justify-center mt-5 ml-16 mr-16 bg-gray-200 rounded-xl shadow border h-full overflow-auto scroll library-scroll">
    <slot></slot>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
@mixin scroll-style(
  $size: 10px,
  $thumb: none,
  $thumb-color: grey,
  $thumb-radius: 10px,
  $track-color: transparent,
  $track-radius: 10px) {

  // Respaldo para Firefox
  scrollbar-color: $thumb-color $track-color;
  scrollbar-width: thin;

  // Navegadores basados en webkit
  &::-webkit-scrollbar {
    width: $size;
    height: $size;
    &-track {
      background-color: $track-color;
      border-radius: $track-radius;
    }
    &-thumb {
      background-color: $thumb-color;
      background-image: $thumb;
      border-radius: $thumb-radius;
    }
  }
}

.scroll {
  @include scroll-style(
      $size: var(--scroll-size, 10px),

      $thumb:  var(--scroll-thumb, none),
      $thumb-color: var(--scroll-thumb-color, grey),
      $thumb-radius: var(--scroll-thumb-radius, var(--scroll-radius)),
    
      $track-color: var(--scroll-track, transparent),
      $track-radius: var(--scroll-track-radius, var(--scroll-radius)),
    );
}

.library-scroll {
    --scroll-size: 8px;
    --scroll-radius: 20px;
    --scroll-track: rgb(255 255 255 / 10%);
    --scroll-thumb: linear-gradient(45deg, #00aeff, #a68eff);
}
</style>