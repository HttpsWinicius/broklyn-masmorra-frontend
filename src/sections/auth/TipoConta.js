import { Stack, Button, Divider, Typography } from '@mui/material';
import { useState } from 'react';
import { RegisterForm } from './register';


const CONTA_PROFISSIONAL_INDIVIDUAL = "PI";

export default function TipoConta() {

  const [tipoConta, setTipoConta] = useState();
  const [textoTipoConta, setTextoTipoConta] = useState('Crie sua conta de aluno');
  const [hiddenBotao, setHiddenBotao] = useState(false);


  const escolherContaIndividual = () => {
        setTipoConta(CONTA_PROFISSIONAL_INDIVIDUAL);
        setTextoTipoConta('Conta Aluno Brooklyn Masmorra');
        setHiddenBotao(true);
  }

  return (
<>
   <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {textoTipoConta}
          </Typography>
        </Divider>

        <Typography hidden={hiddenBotao}>
        <Stack direction="row" spacing={2}>
          <Button 
            value={tipoConta} 
            fullWidth
            onClick={escolherContaIndividual}
            size="large" 
            variant="contained"
            style={{ backgroundColor: '#fad468' }}
            >
            Aluno
          </Button>
          </Stack>
        </Typography> 
      {tipoConta === CONTA_PROFISSIONAL_INDIVIDUAL ?  
            <RegisterForm/>
          :       
          null }   
</>

  );
}
