import * as Yup from 'yup';
import { api } from '../services/api';
import { toast } from 'react-toastify';

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
  try {
    //Validações dos campos digitados no formulario
    const schema = Yup.object().shape({
      name: Yup.string().required('O nome é obrigatorio'),
      gener: Yup.string().required('Genero é obrigatorio, para prosseguir!'),
      cpf: Yup.string().min(14, 'Dgite um CPF valido!').required('Digite um cpf!'),
      email: Yup.string().email('Digite um email valido').required('O email é obrigatorio!'),
      password: Yup.string().required('A senha é obrigatoria'),
      confirmPassword: Yup.string().required('A confirmação de senha é obrigatoria'),
      rg: Yup.string().min(12, 'Digite um RG valido!'),
      birthDate: Yup.date()
    });

    //Evitando abordagem de validações no schema no Yup
    await schema.validate(userData, {
      abortEarly: false,
    });

    //Chamada da Api
    api
      .post('/users', userData)
      .then((res) => {
        return toast.success('Usuario cadastrado com Sucesso!');
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
  } catch (error) {
    //Erros de validação nos campos
    //Verificando se o erro que foi disparado é do tipo de Yup.ValidationError
    if (error instanceof Yup.ValidationError) {

      error.inner.forEach(erro => {
        toast.error(erro.message);
      })
    }
  }
};
