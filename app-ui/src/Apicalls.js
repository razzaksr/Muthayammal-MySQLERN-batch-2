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

export const callDownload=async(individual)=>{
    try{
        const myReturns = await axios.put(`${url}download/${individual}`)
        return myReturns.data
    }
    catch(err){
        return err
    }
}

export const callDelete=async(keys)=>{
    try{
        const myrec = await axios.delete(`${url}delbyid/${keys}`)
        return myrec.data
    }
    catch(err){
        return err
    }
}