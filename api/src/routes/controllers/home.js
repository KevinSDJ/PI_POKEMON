function getHome(req,res){
    res.send(`
     <h1>Wecome at Home</h1>
     <div>
        <h4>User</h4>
        <img src="#">
        <form method="post" action="/logeout">
             <input type="submit" value="logeout"/>
        </form>
     </div>
     


    `)
}


module.exports={
    getHome
}