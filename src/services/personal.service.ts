/* eslint-disable */
import axios from "axios";

export class PersonalService {

    async listarPersonais() {    
        const personais = await axios.get('http://localhost:8080/personais/empresa/e8486bd9-c1ad-4e3f-ae10-ae106e670f7b').then((res) => {
            return res.data
        });
        return personais;
    }

}