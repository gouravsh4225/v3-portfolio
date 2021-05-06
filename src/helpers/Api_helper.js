const requestHeader = {
    headers:{
        'content-type':'application/json'
    }
};


export const GetApiRequest = (url) => {
    return fetch(url,requestHeader)
}
export const PostApiRequest = (url,postData) =>{
    return fetch(url,postData,requestHeader)
}
