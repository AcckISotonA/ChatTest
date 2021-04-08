<template>
  <div class="chat-box__messages">
    <template v-for="(item, index) in history">
      <Separator
        v-if="index === 0 || date(item.date) != date(history[index - 1].date)"
        :key="'separator-' + index"
        :text="shortDate(item.date)"
      />
      <div v-if="!item.isOwnMessage" :key="'clear-' + index" class="clear" />
      <Message :key="'message-' + index" :message="item" />
    </template>
  </div>
</template>

<script>
import Separator from "./Separator.vue";
import Message from "./Message.vue";

export default {
  name: "messages",

  components: {
    Separator,
    Message,
  },

  computed: {
    history() {
      return this.$store.state.history;
    },
  },

  methods: {
    date(date) {
      let options = {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      };
      return date.toLocaleDateString("ru", options);
    },
    shortDate(date) {
      let options = {
        day: "numeric",
        month: "long",
      };
      return date.toLocaleDateString("ru", options);
    },
  },
};
</script>

<style>
.chat-box__messages {
  max-height: 500px;
  overflow-y: scroll;
}
.chat-box__messages::-webkit-scrollbar {
  width: 12px; /* ширина scrollbar */
}
.chat-box__messages::-webkit-scrollbar-thumb {
  background-color: #1d1d27; /* цвет плашки */
  border-radius: 20px; /* закругления плашки */
}
</style>