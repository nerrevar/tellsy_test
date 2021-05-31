<template>
  <router-view/>
</template>

<script>
import { provide } from 'vue'

import axios from 'axios'

export default {
  name: 'App',
  setup () {
    const $axiosRequest = (url, method = 'post', body = '') => axios({
      url,
      method,
      data: JSON.stringify(body),
      withCredentials: true,
    })
    provide('$axiosRequest', $axiosRequest)
  },
}
</script>
