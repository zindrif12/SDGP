import axios from 'axios';

const MATERIAL_API_BASE_URL="http://localhost:8080/api/v1/material";



class MaterialService{

    getMaterials(){
        return axios.get(MATERIAL_API_BASE_URL);
    }

    createMaterial(material){
        return axios.post(MATERIAL_API_BASE_URL,material);
    }
 
    getMaterialById(materialId){
        return axios.get(MATERIAL_API_BASE_URL + '/' + materialId);
    }
    updateMaterial(material,materialId){
        return axios.put(MATERIAL_API_BASE_URL + '/' + materialId,material);

    }
    deleteMaterial(materialId){
        return axios.delete(MATERIAL_API_BASE_URL + '/' +materialId)
    }



}

export default new MaterialService()
