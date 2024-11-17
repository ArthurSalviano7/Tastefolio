import React from "react";
import { useState } from "react";
import './RecipeCard.scss';
import { convertToShareableLink } from "../../../service/recipeService";
import { FaRegStar, FaStar, FaArrowRight } from "react-icons/fa";
import { CiStopwatch } from "react-icons/ci";
import { BsBarChart } from "react-icons/bs";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


function RecipeCard({ recipe }) {
    const [isHovered, setIsHovered] = useState(false);

    // Alterna entre o ícone de estrela vazia e estrela preenchida
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const {id, idUser, recipeName, imageURL, prepTime, difficulty} = recipe;
    
    const newimageURL = convertToShareableLink(imageURL)
    console.log("IMAGEM: ", newimageURL);   
    return (
        <div className="recipe-card">
            <img src={newimageURL} alt={recipeName} />
            <div className="d-flex flex-inline align-items-baseline py-1 px-2 justify-content-between">
                <p>{prepTime}
                    <CiStopwatch size={25} color="#F57020"/>
                </p>
                <p>{difficulty}
                    <BsBarChart size={25} color="#F57020"/>
                </p>
                <div className="star-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {isHovered ? <FaStar size={25} color="#F57020" /> : <FaRegStar color="#F57020" size={25} />}
                </div>
            </div>
            <h3 className="px-2">{recipeName}</h3>
            <div className="d-flex justify-content-end px-3 bg">
                <p style={{color:"#F57020"}}>Ver receita</p>
                <IoIosArrowForward size={30} color="#F57020"/>
            </div>
            
        </div>
    );
}


export default RecipeCard;