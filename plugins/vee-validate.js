import { extend } from 'vee-validate'
import { required, length, email } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'harus diisi',
})

extend('length', {
  ...length,
  message: 'maksimal {length} digit',
})

extend('email', {
  ...email,
  message: 'email tidak sesuai',
})

extend('minmax', {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max
  },
  params: ['min', 'max'],
  message: 'minimal {min} karakter and maksimal {max} karakter',
})
