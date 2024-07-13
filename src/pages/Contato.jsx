import { useParams } from "react-router-dom";

const Contato = () => {
    const {id, nome} = useParams();
    return (
        <>
        <h1>Contato #{id} {nome}</h1>
        </>
    );
}
 
export default Contato;