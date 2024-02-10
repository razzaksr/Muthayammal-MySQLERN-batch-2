import axios from 'axios'

const url="http://localhost:1234/api/"

export const callPublish=async(bundle)=>{
    try{
        const acknowledge = await axios.post(`${url}publish`,bundle)
        return acknowledge.data
    }
    catch(err){
        return err
    }
}

export const callView=async()=>{
    try{
        const records = await axios.get(`${url}`)
        return records.data
    }
    catch(err){
        return err
    }
}