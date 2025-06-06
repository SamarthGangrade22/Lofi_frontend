export const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const makeUnauthentaticatedPOSTRequest = async(route,body)=>{
    const response = await fetch(backendUrl + route,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(body)
        
    });
    const formattedResponse = await response.json();
    return formattedResponse;

};

export const makeAuthentaticatedPOSTRequest = async (route, body) => {
    const token = getToken();
    const response = await fetch(backendUrl + route, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    });
    const formattedResponse = await response.json();
    return formattedResponse;
};

export const makeAuthentaticatedGETRequest = async(route)=>{
    const token=getToken();
    const response = await fetch(backendUrl + route,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`,
        },
        
        
    });
    const formattedResponse = await response.json();
    return formattedResponse;

};

const getToken = () => {
    const accessToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
    );
    return accessToken;
};


