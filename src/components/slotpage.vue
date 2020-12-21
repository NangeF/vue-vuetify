<template>
  <div class="slotpage-container">
    <div class="header">
      <ul>
        <li>
          <slot name="left"></slot>
          <slot name="center"></slot>
          <slot name="right"></slot>
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slotpage',

  data: () => ({

  }),
}
</script>
