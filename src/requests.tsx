// src/requests.tsx
import axios from 'axios';

const API_URL = import.meta.env.VITE_CHAT_API_URL // Replace with your actual API endpoint

export const fetchMathAnswer = async (input_value: string) => {
    try {
        const response = await axios.post(API_URL, { input_value });
        return response.data; // Assuming the API returns the answer in the response data
    } catch (error) {
        console.error('Error fetching math answer:', error);
        throw error; // Rethrow the error for further handling
    }
};