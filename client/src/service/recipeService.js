import axios from 'axios'

const recipesUrl = "http://localhost:8080/recipes"

export async function getAllRecipes(){
    try {
        const response = await axios.get(recipesUrl);
        console.log(response);
        
        return response;
      } catch (error) {
        console.error("Erro ao buscar as receitas:", error.message);
      }
    
}

export function convertToShareableLink(imageURL) {
    // Extrai o ID do arquivo da URL 
    // "https://drive.google.com/uc?export=view&id=1iSi_Byj"   ==>  1iSi_Byj
    const regex = /(?:id=|\/d\/)([a-zA-Z0-9_-]+)/;
    const match = imageURL.match(regex);
  
    if (match && match[1]) {
      const fileId = match[1];
      // Retorna o link compartilhável no formato desejado
      return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
    } else {
      throw new Error("URL inválida ou ID não encontrado.");
    }
  }
