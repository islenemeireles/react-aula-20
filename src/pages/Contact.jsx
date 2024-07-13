import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <>
        <h1>Contact</h1>
        <p>Entre em contato com a gente:</p>
        <ul>
            <li><Link to={"/contato/1/Linkedin"}>Linkedin</Link></li>
            <li><Link to={"/contato/2/Email"}>Email</Link></li>
            <li><Link to={"/contato/3/Telefone"}>Telefone</Link></li>
            <li><Link to={"/contato/4/Endereço"}>Endereço</Link></li>
            <li><Link to={"/contato/5/Aplicativo"}>Aplicativo</Link></li>
        </ul>
        </>
    );
}
 
export default Contact;