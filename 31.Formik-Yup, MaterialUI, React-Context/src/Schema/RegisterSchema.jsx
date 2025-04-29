import * as yup from 'yup';

export let RegisterSchema = yup.object({
  fullname: yup.string().required('Fullname bos ola bilmez'),
  username: yup.string().required('İstifadeci adi boş ola bilmez'),
  email: yup.string().email('E-poct formati duzgun deyil').required('E-poct mutleqdir'),
  password: yup.string().required('Sifre bos ola bilmez'),
  passwordRepeate: yup
    .string()
    .required('Sifre tekrar mutleqdir')
    .oneOf([yup.ref('password')], 'Sifreler eyni deyil'),
});
