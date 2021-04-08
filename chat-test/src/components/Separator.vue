<template>
  <div class="chat-box__separator">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "Separator",

  props: {
    text: String,
  },
};
</script>