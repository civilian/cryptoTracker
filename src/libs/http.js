class Http{
    static instance = new Http();

    get = async (url) =>{
        try {
            let req = await fetch(url);

            let json = await req.json();

            return json;
        } catch(err){
            console.log("http get method error", err);

            throw Error(err);
        }
    }

    post = async () => {
        try {
            let req = fetch(url,{
                method:"POST",
                body
            });

            let json = await req.json();
            return json;
        } catch(err){
            console.log("http method post err", err);

            throw Error(err);
        }
    }
}

export default Http;