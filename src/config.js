export const url = "https://muslim-pintar.herokuapp.com";

//headers
export function headers(token) {
    return(
        {   
            headers: {
            'Authorization' : `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
            }
        }
    )
};