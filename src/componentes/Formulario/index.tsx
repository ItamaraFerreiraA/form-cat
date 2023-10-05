import * as React from 'react';
import { useState } from 'react'; 
import './Formulario.css' 
import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps } from '@fluentui/react/lib/Stack';
import { Checkbox } from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { initializeIcons } from '@fluentui/font-icons-mdl2'; 

import paw from '../../Imagens/paw.webp';  
import paw1 from '../../Imagens/paw-1.webp'; 
import cat from '../../Imagens/cat.webp';  
 
initializeIcons();  
 
const iconPropsMail = { iconName: 'Accounts' };
const iconPropsTell = { iconName: 'IncomingCall' }; 
const checkStyles = { root: { padding: '12px 0 20px'} };   
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 12 },   
  styles: { root: { width: 300, textAlign: 'left' } },    
};
  
const TextFieldBasicExample: React.FunctionComponent = () => {
  

    const [nome, setNome] = React.useState('')
    const [email, setEmail] = React.useState('')   
    const [senha, setSenha] = React.useState('')   
    const [telefone, setTelefone] = React.useState('')     
    const [termos, setIsChecked] = useState<boolean>(false);

  
    const nomeChange = (event: React.FormEvent<HTMLElement | HTMLInputElement>, newValue?: string) => {
      setNome(newValue || '');
    };
   
    const emailChange = (event: React.FormEvent<HTMLElement | HTMLInputElement>, newValue?: string) => {
      setEmail(newValue || '');
    }; 
  
    const senhaChange = (event: React.FormEvent<HTMLElement | HTMLInputElement>, newValue?: string) => {
      setSenha(newValue || '');
    }; 
  
    const telefoneChange = (event: React.FormEvent<HTMLElement | HTMLInputElement>, newValue?: string) => {
      setTelefone(newValue || '');
    }; 
  
  const formSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    /*console.log('Nome:', nome); 
    console.log('Email:', email);  
    console.log('Senha:', senha);   
    console.log('Telefone:', telefone);
    console.log('Termos:', termos); */
  }; 


  // Animação do gatinho
  const [isAnimating, setIsAnimating] = useState(false);

  const handleInputOut = () => {
    setIsAnimating(false); 
  };
  
  const handleInputClick = () => {
    setIsAnimating(true);
    /*setTimeout(() => {
      setIsAnimating(false);
    }, 500); */ 
  };  

  return (  
    <Stack horizontal  className="main">  
      <img src={cat} className="img-cat" alt="Imagem do gatinho" />
      <img src={paw} id="paw" className={isAnimating ? 'animate' : ''} alt="Imagem patinha" /> 
      <img src={paw1} id="paw1" className={isAnimating ? 'animate' : ''} alt="Imagem patinha" /> 
      <form className="form" onSubmit={formSubmit} {...columnProps}> 
        <TextField label="Nome completo" value={nome} onChange={nomeChange} required/>
        <TextField label="E-mail" value={email} onChange={emailChange} iconProps={iconPropsMail} required />
        <MaskedTextField label="Telefone:" iconProps={iconPropsTell} mask=" (99) 99999 - 9999" value={telefone} onChange={telefoneChange} title="Digite seu celular de contato" />
        <TextField 
        onFocus={handleInputClick} onBlur={handleInputOut}
         value={senha} onChange={senhaChange} 
          label="Crie uma senha"
          type="password"    
          required
        />
        <Checkbox styles={checkStyles} checked={termos} onChange={(ev, checked) => setIsChecked(!!checked)} label="Li e concordo com os Termos de Contrato" required />
        <DefaultButton className="btn" text="Cadastrar" type="submit" allowDisabledFocus />
      </form> 
    </Stack> 
  );  
}; 

export default TextFieldBasicExample; 

