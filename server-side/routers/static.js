const fs = require('fs');

module.exports = function(router){
    router.get("*",function(req,res,next){
        fs.promises.access("/home/runner/Mersenne-prime/client-side/" + req.path)
        .then(() => {
             res.sendFile("/home/runner/Mersenne-prime/client-side/" + req.path);
            // It exists
        })
        .catch((e) => {
            console.log(e);
            res.status(404).send("BAD REQUEST");
            // It doesn't exist
        });

       
    });

    return router;
}