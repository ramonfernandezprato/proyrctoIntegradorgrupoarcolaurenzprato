fetch('https://dummyjson.com/products')
    .then(function(respone){
    return Response.json();
    })
    
    .then(function(data){
        console.log(data);
    })

    .catch(function(error){
        console.log("El error es: " + error);
    })


