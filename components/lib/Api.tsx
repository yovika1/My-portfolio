import axios from 'axios';

export const sendContactForm = async (data: any) => 
    await axios.post('api/ContactDetails', data, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });
