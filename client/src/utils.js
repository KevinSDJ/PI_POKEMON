
function carga(cb1,cb2){
    if(typeof cb2 === 'function'){
        return cb1(cb2())
    }
    if(typeof cb2 !== 'function'){
        return cb1(cb2)
    }
    
}
export {carga}