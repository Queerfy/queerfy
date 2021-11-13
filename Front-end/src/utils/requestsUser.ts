import * as Yup from 'yup';
import { api } from '../services/api';
import { toast } from 'react-toastify';
import router from 'next/router';

//Tipando o objeto que vai vir do formulario para impedir que venha algo diferente disso e melhorar as validações
interface IRequestUser {
  name: string;
  gener: string;
  cpf: string;
  email: string;
  password: string;
  confirmPassword: string;
  rg?: string;
  birthDate?: string;
}

export const registerUser = async (userData: IRequestUser) => {
  //Validações dos campos digitados no formulario
  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatorio'),
    gener: Yup.string().required('Genero é obrigatorio, para prosseguir!'),
    cpf: Yup.string()
      .min(14, 'Dgite um CPF valido!')
      .required('Digite um cpf!'),
    email: Yup.string().required('O email é obrigatorio!'),
    password: Yup.string().required('A senha é obrigatoria'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'As senhas não conferem')
      .required('A confirmação de senha é obrigatoria'),
    rg: Yup.string().min(12, 'Digite um RG valido!'),
  });

  schema
    .validate(userData, { abortEarly: false })
    .then((res) => {
      //Chamada da Api
      api
        .post('/users', userData)
        .then((res) => {
          toast.success('Usuario cadastrado com Sucesso!');
          setTimeout(() => {
            router.push('/Login');
          }, 2000);
        })
        .catch((err) => {
          console.log(err.message);
          if (err.response) {
            if (err.response.status === 500) {
              return toast.error('Erro ao cadastrar usuario!');
            } else {
              return toast.error('Usuario já existente!');
            }
          }
          return toast.error('Erro ao cadastrar usuario!');
        });
    })
    .catch((error) => {
      //Erros de validação nos campos
      //Verificando se o erro que foi disparado é do tipo de Yup.ValidationError
      if (error instanceof Yup.ValidationError) {
        error.inner.map((erro) => {
          return toast.error(erro.message);
        });
      }
    });
};
