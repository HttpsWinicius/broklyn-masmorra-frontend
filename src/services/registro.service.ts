/* eslint-disable */
import axios from "axios";


export class RegistroService {


    async pesquisarCep (cep: string) {
        cep = cep.replace(/[^0-9]/g,'');
        const dadosCep = await axios.get("https://viacep.com.br/ws/"+cep+"/json/").then((res) => {
            return res.data
        });
        return dadosCep;
    }

}