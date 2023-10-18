import axios from "axios";

async function checkLoginToken() {
    const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
  
    if (token) {
      try {
        const response = await axios.post('http://localhost:3000/users/token',{ token });
  
        if (response.data.valid) {
          return true;
        } else {
            
          return false;
        }
      } catch (error) {
        console.error('Error verifying token:', error);
        return false; // An error occurred, consider the user not authenticated
      }
    } else {
      // No token found, user is not authenticated
      return false;
    }
  }

export {checkLoginToken};