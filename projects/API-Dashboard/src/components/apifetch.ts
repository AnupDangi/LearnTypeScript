async function fetchJSON<T>(url:string):Promise<T>{
    const res=await fetch(url);
    if(!res.ok) throw new Error("API Call Failed");
    return res.json() as Promise <T>;
}

export default fetchJSON;

