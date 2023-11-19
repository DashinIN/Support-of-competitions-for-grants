import axios from 'axios';

export const fetchDataGrProj = async () => {
    const response = await axios.get('http://localhost:5000/api/gr_proj');
    return response.data;
};

export const fetchDataGrKonk = async () => {
    const response = await axios.get('http://localhost:5000/api/gr_konk');
    return response.data;
};

export const fetchDataVuz = async () => {
    const response = await axios.get('http://localhost:5000/api/vuz');
    return response.data;
};