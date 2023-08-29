/* eslint-disable */
import * as Yup from 'yup';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Stack, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField, RHFMultiCheckbox } from '../../../components/hook-form';
import { RegistroService } from './././../../../services/registro.service.ts';

export default function CadastroProfissionalIndividual() {

  const [showPassword, setShowPassword] = useState(false);
  const [estado, setEstado] = useState();
  const [logradouro, setLogradouro] = useState();
  const [cidade, setCidade] = useState();
  const [cep] = useState();
  const [errosCep] = useState(["undefined", undefined, null]);

  const service = new RegistroService();

  const schemaValidador = Yup.object().shape({
    nome: Yup.string()
        .required("Por favor, digite o nome"),
    cpf: Yup.string()
        .required('Por favor, digite o cpf')
        .min(11,'CPF deve ter exatamente 11 digitos')
        .max(11, 'CPF deve ter exatamente 11 digitos'),
    email: Yup.string()
        .email('Endereço de e-mail inválido')
        .required('Por favor, digite um endereço de email'),
    telefone:  
        Yup.number('Telefone deve ser número')
        .required('Por favor, digite o telefone'),
    senha: Yup.string()
        .required('Por favor, digite uma senha') 
        .min(8, 'O tamanho mínimo deve ser 8 caracteres') 
        .max(16, 'O tamanho máximo deve ser 16 caracteres'),
    cep: Yup.string()
        .required('Por favor, digite o cep'),
  });


  const onSubmit = async (dados) => {
      console.log(dados);
      validaDadosCep(dados.logradouro)
      dados.cidade = cidade;
      dados.estado = estado;
      dados.logradouro = logradouro;
  };

    
  const dadosEndereco = async (cep) => {
   const dadosRetorno = await service.pesquisarCep(cep);
   if (dadosRetorno.erro == "true") {
    setLogradouro('');
    setCidade('');
    setEstado('');
    return;
   } else {
    setLogradouro(validaDadosCep(dadosRetorno.logradouro) + ', ' + validaDadosCep(dadosRetorno.bairro));
    setCidade(validaDadosCep(dadosRetorno.localidade));
    setEstado(validaDadosCep(dadosRetorno.uf));
   }

  }


  const validaDadosCep = (dadosCep) => {
    if(dadosCep == errosCep[0] 
      || dadosCep == errosCep[1]
      || dadosCep == errosCep[2]) {
        setLogradouro('');
        setCidade('');
        setEstado('');
        return;
    } else {
      return dadosCep;
    }
  }

  function onBlurCep(ev) {
    const { value } = ev.target;
    if (value?.length !== 8) {
      return;
  }

  dadosEndereco(value);

}

  const methods =
  useForm({
    resolver: yupResolver(schemaValidador)
  });

  const { 
    handleSubmit,
    formState: { isSubmitting }
  } = methods;

  return (
    
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={1}>

      <RHFTextField
       name="nome" 
       variant="outlined" 
       label="Nome *" 
       />

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RHFTextField
             name="cpf" 
             label="CPF *" 
             inputProps={{ maxLength: 11 }}
             />
          <RHFTextField 
            name="telefone" 
            label="Telefone" 
            type="number"    
          />

        </Stack>

        <RHFTextField 
        name="email"  
        label="E-mail *"   
      />      

        <RHFTextField
          name="senha"
          label="Senha"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            maxLength: 16,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
          <RHFTextField     
             name="cep" 
             label="CEP" 
             value={cep}
             onBlur={onBlurCep}
             />
          
          <RHFTextField 
          name="numero" 
          label="Numero"
           type="number"
           />
          <RHFTextField 
            name="complemento"
            label="Complemento"
            />
        </Stack>

        <RHFTextField 
          name="logradouro" 
          label="Logradouro" 
          value={logradouro}
          />

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <RHFTextField  
          name="cidade" 
          label="Cidade" 
          value={cidade}
          />
        <RHFTextField  
          name="estado" 
          label="Estado" 
          value={estado}
          />
        </Stack>
      <RHFTextField 
        name="Código"  
        label="Código de autenticação *"   
      />  
        <LoadingButton  
        style={{ backgroundColor: '#f6a93e' }}
        size="large" 
        type="submit" 
        variant="contained" 
        loading={isSubmitting}
        >
          Cadastrar
        </LoadingButton>
      </Stack>
    </FormProvider>
    
  );
}
