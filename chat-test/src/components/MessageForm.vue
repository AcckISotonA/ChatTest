<template>
  <form class="chat-box__form main-form">
    <textarea class="input-style" rows="7" v-model="message"></textarea>
    <div class="row">
      <label class="main-form__item file-field"> </label>
      <div class="main-form__submit">
        <button
          type="submit"
          class="radius-button standart rounded"
          @click="sendMessage($event)"
        >
          Отправить
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "MessageForm",

  data: () => {
    return {
      message: "",
    };
  },

  methods: {
    sendMessage(event) {
      event.preventDefault();
      this.$store.dispatch("sendMessage", {
        name: "имя отправителя",
        message: this.message,
      });
      this.message = "";
    },
  },
};
</script>