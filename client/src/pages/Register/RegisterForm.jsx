import React from "react";
import { useState } from "react"
import "../Login/LoginPage.scss"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function RegisterForm(){
    const [viewToggle, setViewToggle] = useState(false);

    const togglePasswordVisibility = () => {
        setViewToggle(prevState => !prevState); // Alterna entre true e false
    };

    return (
        <div className="login-form">
            <h1 className="text-center pt-2 login-title">Registre-se</h1>
            <p className="text-center">Preencha as informações abaixo para criar sua conta</p>

            <form action="" className="p-2 pt-2 pb-3">
                <label>Nome:</label> <br />
                <input type="text" className="d-grid col-12 py-1 my-2 border-1 border-light-subtle" placeholder="Insira seu nome" required/>
                <label>Nome do perfil (opcional):</label> <br />
                <input type="text" className="d-grid col-12 py-1 my-2 border-1 border-light-subtle" placeholder="Ex: Receitas do João"/>
                <label>Email:</label> <br />
                <input type="text" className="d-grid col-12 py-1 my-2 border-1 border-light-subtle" placeholder="Insira seu email" required/>
                
                <label>Senha:</label> <br />
                <div className="input-group">
                    <input type={viewToggle ? "text" : "password"} className="col-10 py-1 my-2 border-1 border-light-subtle" placeholder="Insira sua senha" required/>
                    <button type="button" className="col-2 input-group-text py-1 my-2" onClick={togglePasswordVisibility}>
                        {viewToggle ? <FaRegEye className="mx-auto" size={22}/> :
                        <FaRegEyeSlash className="mx-auto" size={22}/>}
                    </button>
                </div>
                
                <button type="submit" className="btn btn-dark d-grid col-8 mx-auto">Criar Conta</button>
            </form>

            <p className="text-center" style={{fontSize: '0.8rem'}}>Já possui uma conta? <a href="/login">Entrar</a></p>
        </div>
    );
};

export default RegisterForm;