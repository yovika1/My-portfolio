
export const sendContactForm = async(data) => 
    fetch('api/ContactDetails',{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            "content-type":"application/json",
            Accept:"application/json",
        },
    })
    