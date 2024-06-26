import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"



//api to add video
export const addVideoApi = async(reqbody)=>{
   return await commonApi('POST',`${serverUrl}/videos`,reqbody)
}


//api to get all video
export const getVideoApi = async()=>{
   return await commonApi('GET',`${serverUrl}/videos`,"")
}


// api to delete a video
export const deleteVideoApi = async(id)=>{
   return await commonApi('DELETE',`${serverUrl}/videos/${id}`,{})
}


//api to add video to watch history
export const addToHistoryApi = async(reqbody)=>{
   return await commonApi('POST',`${serverUrl}/history`,reqbody)
}


//api to get video to watchhistory
export const getFromHistoryApi = async()=>{
   return await commonApi('GET',`${serverUrl}/history`,"")
}


//api to delete video from history
export const deleteFromHistoryApi = async(id)=>{
   return await commonApi('DELETE',`${serverUrl}/history/${id}`,{})
}


//api to add category
export const addCategoryApi = async(reqbody)=>{
   return await commonApi('POST',`${serverUrl}/category`,reqbody)
}

//api to get all category
export const getCategoryApi = async()=>{
   return await commonApi('GET',`${serverUrl}/category`,"")
}


//api to dalete category
export const deleteCategoryApi = async(id)=>{
   return await commonApi('DELETE',`${serverUrl}/category/${id}`,{})
}


//api to get a video
export const aVideoApi = async(id)=>{
   return await commonApi('GET',`${serverUrl}/videos/${id}`,"")
}


//api to udate category
export const updateCategoryApi = async(id,reqbody)=>{
   return await commonApi('PUT',`${serverUrl}/category/${id}`,reqbody)
}