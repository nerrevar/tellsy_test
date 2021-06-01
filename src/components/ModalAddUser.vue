<template>
  <teleport to="body">
    <div
      class="overlay"
      @click="$emit('closeModal')"
    >
      <div
        class="modal"
        @click.stop="() => null"
      >
        <div
          class="modal__close"
          @click="$emit('closeModal')"
        >
          X
        </div>
        <div class="modal__title">
          Добавление данных о экспертах по оценке и руководителей
        </div>
        <FormGroup
          class="modal__form-group"
          v-for="(item, index) in formFields"
          :key="index"
          :item="item"
        />
        <div
          class="button modal__submit"
          @click="submit"
        >
          Сохранить
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import { inject } from 'vue'

import FormGroup from '@/components/FormGroup.vue'

export default {
  name: 'ModalAddUser',
  components: { FormGroup },
  setup () {
    const formFields = [
      {
        label: 'Дата регистрации',
        input: {
          type: 'date',
          name: 'date',
          placeholder: '01.01.1970',
          validatioinFunction: str => str.replace(/[\d]{4}-[\d]{2}-[\d]{2}/i, '') === '',
        },
        icon: {
          type: 'img',
          embedded: true,
          src: '/assets/calendar.svg',
          alt: '',
        },
        errorMessage: 'Введена неверная дата',
      },
      {
        label: 'ФИО',
        input: {
          type: 'text',
          name: 'name',
          placeholder: 'Петров Петр Петрович',
          validatioinFunction: str => str.replace(/[А-Я][а-я]+ [А-Я][а-я]+ [А-Я][а-я]+/i, '') === '',
        },
        errorMessage: 'Проверьте правильность заполнения поля',
      },
      {
        label: 'Должность',
        input: {
          type: 'text',
          name: 'position',
          placeholder: 'Введите должность',
          datalist: [
            'Директор',
            'Продавец'
          ],
          validatioinFunction: str => str.replace(/[а-я ]+/i, '') === '',
        },
        icon: {
          type: 'text',
          embedded: true,
          text: '^',
          style: 'transform: rotate(180deg);',
        },
        errorMessage: 'Проверьте правильность заполнения поля',
      },
      {
        label: 'Почта (логин)',
        input: {
          type: 'email',
          name: 'email',
          placeholder: 'petr@mail.ru',
          validatioinFunction: str => str !== '' &&
            str.replace(
              /^(([a-z\d+\-/]+([.][a-z\d\-+]+)*)|("[\S ]+"))@[a-z\-\d]+\.[a-z\d]+$/i,
              ''
            ) === '',
        },
        icon: {
          type: 'img',
          embedded: false,
          src: '/assets/email.svg',
          alt: '',
        },
        errorMessage: 'Неправильный формат почты',
      },
      {
        label: 'Пароль',
        input: {
          type: 'password',
          name: 'password',
          placeholder: 'test123',
          validatioinFunction: str => {
            if (str.length >= 8)
              if (str.match(/[~`!@#$%^&*()_\-=+{}[\]|\\/:;"'<>,.?]/i) !== null)
                if (str.match(/[A-Z]/g) !== null)
                  if (str.match(/[A-Z]/g).length >= 2)
                    return true

            return false
          },
        },
        icon: {
          type: 'img',
          embedded: false,
          src: '/assets/eye.svg',
          alt: 'Show',
        },
        errorMessage: 'Пароль должен состоять не менее чем из 8 символов,' +
          ' содержать 2 заглавных буквы и 1 специальный символ',
      },
      {
        label: 'Телефон, привязанный к мессенджеру',
        input: {
          type: 'tel',
          name: 'phone',
          placeholder: '+7 928 xxx xx xx',
          validatioinFunction: str => str.replace(/\+[\d]{1} [\d]{3} [\d]{3} [\d]{2} [\d]{2}/i, '') === '',
        },
        icon: {
          type: 'text',
          embedded: true,
          text: '^',
          style: 'transform: rotate(180deg);',
        },
        errorMessage: 'Введите номер телефона в требуемом формате: +7 xxx xxx xx xx',
      }
    ]

    const validateForm = () => {}

    const sendRequest = inject('sendRequest')
    const submit = () => {
      if (validateForm())
        sendRequest({})
    }

    return {
      formFields,
      submit,
    }
  },
}
</script>

<style lang="stylus" scoped>
.overlay
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  background-color #333e

.modal
  max-width 600px
  margin 5em auto

  background-color white

  display flex
  flex-flow column nowrap
  justify-content space-between
  align-items center
  padding 2em

  &__close
    align-self flex-end

  &__title
    color #459

  &__form-group
    width 280px

  &__submit
    width 210px
    margin-left -40px
    margin-top 3em
</style>
