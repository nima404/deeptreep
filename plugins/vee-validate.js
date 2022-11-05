import {
  ValidationObserver,
  ValidationProvider,
  extend,
  setInteractionMode,
} from 'vee-validate'

import Vue from 'vue'
import * as rules from 'vee-validate/dist/rules'

const _rules = rules
Object.keys(_rules).forEach((rule) => {
  extend(rule, _rules[rule])
})

extend('required', { message: 'required' })
extend('length', { message: 'شماره وارد شده اشتباه است.' })
extend('confirmed', { message: 'مقدار وارد شده اشتباه است.' })
extend('email', { message: 'pls enter an email with currect format' })
extend('max_value',{message:'the number should be between 0 & 5'})
extend('charnum', (value) => {
  const mysplit = value.toLowerCase().split('')
  for (let i = 0; i < mysplit.length; i++) {
    if (
      mysplit[i] === 'a' ||
      mysplit[i] === 'b' ||
      mysplit[i] === 'c' ||
      mysplit[i] === 'd' ||
      mysplit[i] === 'e' ||
      mysplit[i] === 'f' ||
      mysplit[i] === 'g' ||
      mysplit[i] === 'h' ||
      mysplit[i] === 'i' ||
      mysplit[i] === 'j' ||
      mysplit[i] === 'k' ||
      mysplit[i] === 'l' ||
      mysplit[i] === 'm' ||
      mysplit[i] === 'n' ||
      mysplit[i] === 'o' ||
      mysplit[i] === 'p' ||
      mysplit[i] === 'q' ||
      mysplit[i] === 'r' ||
      mysplit[i] === 's' ||
      mysplit[i] === 't' ||
      mysplit[i] === 'u' ||
      mysplit[i] === 'v' ||
      mysplit[i] === 'w' ||
      mysplit[i] === 'x' ||
      mysplit[i] === 'y' ||
      mysplit[i] === 'z'
    ) {
      for (i = 0; i < mysplit.length; i++) {
        if (
          mysplit[i] === '0' ||
          mysplit[i] === '1' ||
          mysplit[i] === '2' ||
          mysplit[i] === '3' ||
          mysplit[i] === '4' ||
          mysplit[i] === '5' ||
          mysplit[i] === '6' ||
          mysplit[i] === '7' ||
          mysplit[i] === '8' ||
          mysplit[i] === '9'
        ) {
          return true
        }
      }
    }
  }
  return 'لطفا از عدد و حروف باهم استفاده کنید.'
})

setInteractionMode('lazy')

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
