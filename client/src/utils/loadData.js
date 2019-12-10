import axios from 'axios'; 

const loadData = async uri => {
    const response = await axios.get(uri);
    const data = await response;
    return data;
}

export default loadData; 

