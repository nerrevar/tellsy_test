<template>
  <div class="form-group">
    <div class="form-group__label">
      {{ item.label }}
    </div>
    <div class="form-group__input form-group-input">
      <datalist
        :id="`formGroupDatalist-${ item.input.name }`"
        v-if="item.input.datalist"
      >
        <option
          v-for="(option, index) in item.input.datalist"
          :key="`option-${ item.input.name }-${ index }`"
        >
          {{ option }}
        </option>
      </datalist>
      <input
        :class="[
          'form-group-input__input',
          {
            'form-group-input__input_error': !isInputValid,
          }
        ]"
        :type="
          item.input.type === 'password' ?
          isPasswordVisible ? 'input' : 'password' :
          item.input.type
        "
        :palceholder="item.input.placeholder"
        @input="checkInput($event.target.value)"
        :list="`formGroupDatalist-${ item.input.name }`"
      />
      <div
        :class="[
          'form-group-input__icon',
          {
            'form-group-input__icon_embedded': item.icon.embedded,
            'form-group-input__icon_external': !item.icon.embedded,
          }
        ]"
        v-if="item.icon"
        :style="item.icon.style"
      >
        <img
          class="form-group-input__img"
          v-if="item.icon.type === 'img'"
          :src="item.icon.src"
          :alt="item.icon.alt"
          @click="setPasswordVisible(!isPasswordVisible)"
        />
        <span
          class="form-group-input__img"
          v-else
          v-text="item.icon.text"
        />
      </div>
    </div>
    <div
      class="form-group__error-message"
      v-if="!isInputValid"
    >
      {{ item.errorMessage }}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'FormGroup',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup (props) {
    const isPasswordVisible = ref(true)
    const setPasswordVisible = val => {
      if (props.item.input.type === 'password')
        isPasswordVisible.value = val
    }

    const isInputValid = ref(true)
    const checkInput = str => isInputValid.value = props.item.input.validatioinFunction(str)

    return {
      isPasswordVisible,
      setPasswordVisible,
      isInputValid,
      checkInput,
    }
  },
}
</script>

<style lang="stylus" scoped>
shadow()
  box-shadow 1px 1px 5px 1px lightgrey

.form-group
  display flex
  flex-flow column nowrap

  padding 1em

  &__label
    color #459
    text-align left

  &-input
    display flex
    flex-flow row nowrap

    &__input
      shadow()
      border none
      padding: 0.2em 0.5em
      width 210px
      text-align left
      font-size 14px
      height @font-size * 2

      &_error
        background-color #f777
        border 1px solid #f77a

    &__icon
      position relative
      display inline-block
      padding 0.2em

      &_embedded
        margin-left -2em

      &_external
        margin-left 0.5em

  &__error-message
    color #f77
    font-size 12px
    text-align left
</style>
