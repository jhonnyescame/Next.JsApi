import axios from 'axios';

const Index = ({dados}) => (
    <div>
        <h1>Palestrantes</h1>
        {/* {console.log(dados)} */}

        <ul>
            {dados.map(palestrante =>(
                <li key={palestrante.id_palestrante}>
                    <h2>{palestrante.nome_palestrante}</h2>
                    <p>{palestrante.cargo_palestrante}</p>
                </li>
            ))}
        </ul>
    </div>
);

Index.getInitialProps = async () =>{
    const response = await axios.get(
        'https://api.padraoeditorial.com.br/conarec/api/palestrantes'
    );
    // console.log(response);
    return { dados : response.data }
};

export default Index;