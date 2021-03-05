<template>
  <div class="centerx">
    <label>{{ label }}</label>

    <input
      v-if="!readOnly"
      class="vs-inputx vs-input--input large hasValue"
      style="border: 1px solid rgba(0, 0, 0, 0.2)"
      type="text"
      :placeholder="label"
      :value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
    <input
      v-else
      class="vs-inputx vs-input--input large hasValue"
      style="border: 1px solid rgba(0, 0, 0, 0.2)"
      type="text"
      :placeholder="label"
      :value="value"
      v-on:input="$emit('input', $event.target.value)"
      readonly
    />
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    },

    tipo: {
      type: String,
      default: "S",
      required: false,
    },
    readOnly: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
};
</script> 