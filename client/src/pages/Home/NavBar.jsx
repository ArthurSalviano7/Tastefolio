import React from "react";
import { useState } from "react"
import { FaRegUserCircle, FaStar, FaSearch} from "react-icons/fa";


function NavBar(){

    return (
        <div className="d-flex">
            <h1>Tastefolio</h1>
            <h3>Explorar</h3>
            <h3>Adicionar receita</h3>
            <FaSearch />
            <FaStar />
            <FaRegUserCircle />
            
        </div>
    );
};

export default NavBar;