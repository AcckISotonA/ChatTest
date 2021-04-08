<template>
  <div id="app">
    <Messages />
    <MessageForm />
  </div>
</template>

<script>
import Messages from "./components/Messages.vue";
import MessageForm from "./components/MessageForm.vue";

export default {
  name: "App",
  components: {
    Messages,
    MessageForm,
  },

  created() {
    this.$options.sockets.onerror = (error) => console.log(error);
  },
};
</script>
