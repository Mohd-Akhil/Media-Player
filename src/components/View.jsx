import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getVideoApi,getCategoryApi,updateCategoryApi} from '../services/allApi'



function View({addStatus,setDragStatus}) {

  const [videoDetails,setVideoDetails] = useState([])
  const [deleteVideo,setDeleteVideo] = useState([])


  const getVideo = async () => {
    const result = await getVideoApi()
    setVideoDetails(result.data);
  }

  const dragOver = (e)=>{
    e.preventDefault()
  }

  const videoDrop = async(e)=>{
    const {videoId,categoryId} = JSON.parse(e.dataTransfer.getData("dataShared"))
    console.log(videoId,categoryId);

    //get all category
    const {data} = await getCategoryApi()
    console.log(data);

    //get selected category
    const selectedCategory = data.find((item)=>item.id==categoryId) 
    console.log(selectedCategory);

    //remove video from the selected category
    const result = selectedCategory.allVideo.filter((item)=>item.id!=videoId)

    const reqBody = {
      categoryName : selectedCategory.categoryName,
      allVideo : result,
      id : selectedCategory.id
    }

    await updateCategoryApi(categoryId,reqBody)
    setDragStatus(true)
  }

  useEffect(() => {
    getVideo()
  }, [addStatus,deleteVideo])

console.log(videoDetails);

  return (
    <>
      <Row className='w-100 ms-2 ms-md-0' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)} >


        {videoDetails?.length > 0 ?
          videoDetails.map((item)=>(
          <Col xs={12} md={6} lg={4} xl={3} className='d-flex align-items-center justify-content-center mt-3'>

            <VideoCard displayVideo = {item} setDeleteVideo={setDeleteVideo}/>

          </Col>))
          :
          <p className='text-warning fs-5 mt-4'>No Video uploaded yet ... </p> }

      </Row>
    </>
  )
}

export default View


