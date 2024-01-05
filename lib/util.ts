import {RequestParams} from "../types/RequestParams";

const exportParams = (request: Request) =>{
    const url = new URL(request.url)
    if (url.searchParams.size === 0){
        throw new Error("Params required")
    }
    
    const params = url.searchParams
    
    const username = params.get("username")
    if (!username){
        throw new Error("Username required")
    }
    
    const content = params.get("content")
    if (!content){
        throw new Error("Content required")
    }
    
    const requestParams : RequestParams = {
        content: content,
        username: username
    } 
    return requestParams
}


export {exportParams}