import React, { useEffect, useState } from "react";
import NavBar from "../../assets/components/NavBar/NavBar";
import RecipeList from "../../assets/components/RecipeList/RecipeList";
import { getAllRecipes } from "../../service/recipeService";

function SearchPage() {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await getAllRecipes();
                const allRecipes = response.data.data;
                setRecipes(allRecipes);
                setFilteredRecipes(allRecipes); // Inicialmente mostra todas as receitas
            } catch (error) {
                console.error("Erro ao carregar receitas:", error.message);
            }
        };

        fetchRecipes();
    }, []);


    useEffect(() => {
        // Filtro para pesquisa
        const lowerCaseSearch = search.toLowerCase();
        const filtered = recipes.filter((recipe) => {
            const recipeName = recipe.recipeName ? recipe.recipeName.toLowerCase() : "";
            const recipeIngredients = recipe.ingredients
                ? recipe.ingredients.toLowerCase()
                : ""; // Transformar em minúsculo para busca

            // Verificar se o termo está no nome ou nos ingredientes
            return (
                recipeName.includes(lowerCaseSearch) ||
                recipeIngredients.includes(lowerCaseSearch)
            );
        });
        setFilteredRecipes(filtered);
    }, [search, recipes]);

    return (
        <div className="d-flex">
            <div style={{ width: "10%" }}></div>

            <div style={{ width: "80%" }} className="d-flex flex-column">
                <NavBar />
                <h2 className="mx-2">Buscar Receitas</h2>
                <input
                    type="text"
                    className="form-control my-2 mx-2"
                    placeholder="Digite o nome ou ingrediente da receita"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {filteredRecipes.length > 0 ? (
                    <RecipeList recipes={filteredRecipes} />
                ) : (
                    <div className="mx-2">Nenhuma receita encontrada</div>
                )}
            </div>

            <div style={{ width: "10%" }}></div>
        </div>
    );
}

export default SearchPage;