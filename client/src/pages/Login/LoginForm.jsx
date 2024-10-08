import React from "react";
import { useState } from "react"
import "./LoginPage.scss"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function LoginForm(){
    const [viewToggle, setViewToggle] = useState(false);

    const togglePasswordVisibility = () => {
        setViewToggle(prevState => !prevState); // Alterna entre true e false
    };

    return (
        <div className="login-form">
            <h1 className="text-center pt-5 login-title">Bem Vindo ao TasteFolio</h1>
            <p className="text-center">Insira seu email e senha para acessar a plataforma</p>

            <form action="" className="p-2 pt-5 pb-3">
                <label>Email:</label> <br />
                <input type="text" className="d-grid col-12 py-1 my-2 border-1 border-light-subtle" placeholder="Insira seu email" />
                
                <label>Senha:</label> <br />
                <div className="input-group">
                    <input type={viewToggle ? "text" : "password"} className="col-10 py-1 my-2 border-1 border-light-subtle" placeholder="Insira sua senha" />
                    <button type="button" className="col-2 input-group-text py-1 my-2" onClick={togglePasswordVisibility}>
                        {viewToggle ? <FaRegEye className="mx-auto" size={22}/> :
                        <FaRegEyeSlash className="mx-auto" size={22}/>}
                    </button>
                </div>
                
                <p className="text-end" style={{fontSize: '0.7rem'}}><a href="">Esqueceu a senha?</a></p>
                
                <button type="submit" className="btn btn-dark d-grid col-8 mx-auto">Entrar</button>
            </form>

            <p className="text-center" style={{fontSize: '0.7rem'}}>Não possui uma conta?<a href=""> Registre-se</a></p>
        </div>
    );
};

export default LoginForm;