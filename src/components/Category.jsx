import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import VideoCard from './VideoCard'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryApi, getCategoryApi, deleteCategoryApi, aVideoApi, updateCategoryApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Row,Col } from 'react-bootstrap';



function Category({dragStatus, setDragStatus}) {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])
  const [addStatus, setAddStatus] = useState(false)

  const handleClose = () => {
    setShow(false);
    setCategoryName("")
  }

  const handleShow = () => setShow(true);

  const addCategory = async () => {
    if (categoryName) {
      const reqbody = {
        categoryName,
        allVideo: []
      }
      const result = await addCategoryApi(reqbody)
      if (result.status >= 200 && result.status <= 300) {
        setAddStatus(true)
        handleClose()
        toast.success('category added successfully')
      }
      else {
        console.log(result);
      }
    }
    else {
      toast.info('Please add the category name')
    }
  }

  const getAllCategory = async () => {
    const result = await getCategoryApi()
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setAllCategory(result.data)
      setAddStatus(true)
    }
  }
  console.log(allCategory);


  const deleteCategory = async (id) => {
    const result = await deleteCategoryApi(id)
    console.log(result);
    getAllCategory()
  }

  const dragOver = (e) => {
    e.preventDefault()
  }

  const videoDrop = async (e, categoryId) => {
    console.log(`category id is:${categoryId}`);
    //accessing the video id from view component
    const videoId = e.dataTransfer.getData("videoId")
    console.log(`video id is:${videoId}`);
    //get the video details from the backend
    const { data } = await aVideoApi(videoId)
    console.log(data);

    const selectedCategory = allCategory.find((item) => item.id == categoryId)

    if (selectedCategory.allVideo.find((item) => item.id == data.id)) {
      toast.warning("already exists")
    }
    else {
      selectedCategory.allVideo.push(data)
      await updateCategoryApi(categoryId, selectedCategory)
      getAllCategory()
    }

  }

  console.log(allCategory);


  const dragStart = (e,videoId,categoryId)=>{
    console.log(videoId);
    console.log(categoryId);
    let dataShare = {
      videoId , categoryId
    }
    e.dataTransfer.setData("dataShared",JSON.stringify(dataShare))
  }

  useEffect(() => {
    setAddStatus(false)
    getAllCategory()
    setDragStatus(false)
  }, [addStatus, dragStatus])

  return (
    <>
      <div className='w-100 mt-1 p-4'>
        <button onClick={handleShow} className='btn btn-warning w-100'> Add New Category <FontAwesomeIcon icon={faPlus} /></button>
      </div>

      {allCategory?.length > 0 ?
        allCategory.map((item) => (
          <div className='mt-5' droppable="true" onDragOver={(e) => dragOver(e)} onDrop={(e) => videoDrop(e, item.id)} >
            <div className='border border-secondary mt-3 p-3 rounded'>
              <div className='d-flex'>
                <h6>{item.categoryName}</h6>
                <button onClick={() => deleteCategory(item.id)} className='btn btn-danger ms-auto'><FontAwesomeIcon icon={faTrashCan} /></button>
              </div>
              <Row>
              {item?.allVideo?.length > 0 ?
              item.allVideo.map((videoItem)=>(
                <Col sm={12} draggable onDragStart={(e)=>dragStart(e,videoItem.id,item.id)} >
                  <VideoCard displayVideo = {videoItem} isPresent={true} />
                </Col>))
                : null
              }
              </Row>
            </div>
          </div>))
        : null}


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon className='text-warning' icon={faPen} /> Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="border rounded p-3 border-secondary">
            <input type="text" placeholder='Category Name' className='form-control' onChange={(e) => setCategoryName(e.target.value)} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  )
}

export default Category