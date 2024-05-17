  
import axios from 'axios';

const allProducts = await axios.get('http://localhost:4000/');

export default allProducts.data
