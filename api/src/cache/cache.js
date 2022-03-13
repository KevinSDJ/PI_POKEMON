
class Cache{
    constructor(){
        this.cacheStore=[]
    }

    updateCache(data){
        if(Array.isArray(data)){
            this.cacheStore=[...this.cacheStore,...data]
        }else{
            this.cacheStore=[...this.cacheStore,data]
        }  
    }
    getCache(){
        return this.cacheStore
    }
}

const cacheStore= new Cache()

module.exports=cacheStore
//cacheStore.updateCache({data1:"hola1"})
//cacheStore.updateCache({data2:"hola2"})
//console.log(cacheStore.getCache())