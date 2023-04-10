import { getCart } from "../../utility/fakedb"


const customloader=async()=>{
const loaderdatas=await fetch("/jobs.json")
const datas=await loaderdatas.json()
let saverCart=[]

const stored=getCart()
if(stored){
    for(const id in stored){
        const existingProduct=datas.find(p=>p.id==id)
        if(existingProduct){
            saverCart.push(existingProduct)
        }
       console.log(saverCart)
    }
}
// console.log(saverCart)
return saverCart
}

export {customloader}