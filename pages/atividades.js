import axios from 'axios';

const Atividades = ({dados}) => (
    <div>
        <h1>Atividades</h1>
        <ul>
            {dados.map(grade =>(
                <li key={grade.id}>
                    <h2>{grade.nome}</h2>
                    <p>{grade.tipo}</p>
                </li>
            ))}
        </ul>
    </div>
);

Atividades.getInitialProps = async () =>{
    const response = await axios.get(
        'https://api.padraoeditorial.com.br/conarec/api/atividades'
    );
    // console.log(response);
    return { dados : response.data.atividades }
};

export default Atividades;