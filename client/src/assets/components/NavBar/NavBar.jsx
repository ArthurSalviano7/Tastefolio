import React from "react";
import { useState, useRef} from "react"
import { FaRegUserCircle, FaStar, FaSearch} from "react-icons/fa";
import "./NavBar.scss"


function NavBar(){

    // Função para rolar até a seção de receitas
    const scrollToRecipes = () => {
        const recipeSection = document.getElementById("recipe-section");
        if (recipeSection) {
            recipeSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="container-fluid">
            <div className="row div-navbar">
                <div className="col-4 d-flex justify-content-start">
                    <h1 className="logo">Tastefolio</h1>
                </div>
                <div className="col-2">
                    <h3 onClick={scrollToRecipes}>Explorar</h3>
                </div>
                <div className="col-3">
                    <h3>Adicionar receita</h3>
                </div>
                <div className="col-3">
                    <div className="d-flex justify-content-end gap-5">
                        <FaSearch size={20}/>
                        <FaStar size={20}/>
                        <FaRegUserCircle size={20}/>
                    </div>
                </div>
            </div>  
            
        </div>
    );
};

export default NavBar;