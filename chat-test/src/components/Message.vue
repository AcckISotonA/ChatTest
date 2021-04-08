<template>
  <div :class="'chat-box__message ' + (isOwnMessage ? 'own' : '')">
    <div class="name">{{ author }}</div>
    <div class="message">
      {{ text }}
      <div class="time">{{ time }}</div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",

  props: {
    message: {
      type: Object,
      default: () => ({
        isOwnMessage: false,
        author: "",
        text: "",
        date: new Date(),
      }),
    },
  },

  computed: {
    isOwnMessage() {
      return this.message.isOwnMessage;
    },
    author() {
      return this.message.author;
    },
    text() {
      return this.message.text;
    },
    time() {
      let options = {
        hour: "numeric",
        minute: "numeric",
      };
      return this.message.date.toLocaleTimeString("ru", options);
    },
  },
};
</script>