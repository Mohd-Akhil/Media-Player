import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Add({setAddStatus}) {

    //create a state to hold data from input field
    const [video,setVideo] = useState({
        caption:"",
        image:"",
        url:""
    })

    const [show, setShow] = useState(false);

    const handleClose = () =>{ 
        setShow(false)
        setVideo({
            caption:"",
            image:"",
            url:""
        })
    };
    
    const handleShow = () => setShow(true);


    const validateLink = (e) => {
        console.log(e.target.value);
        const link = e.target.value
          
        //https://www.youtube.com/watch?v=tOM-nWPcR4U
        if(link.endsWith('/watch?v=tOM-nWPcR4U')){
            const ytKey = link.slice(-11)
            console.log(ytKey);
            let embedLink = `https://www.youtube.com/embed/${ytKey}`
            setVideo({...video,url:embedLink})
        }
        //https://youtu.be/tOM-nWPcR4U?si=dF5ZR6xxl3D6BHjI
        else if(link.startsWith('https://youtu.be/')){
            const ytKey = link.slice(17,28)
            console.log(ytKey);
            let embedLink = `https://www.youtube.com/embed/${ytKey}`
            setVideo({...video,url:embedLink})
        }
        //https://www.youtube.com/embed/tOM-nWPcR4U
        else{
            
            const ytKey =link.slice(-11)
            console.log(ytKey);
            let embedLink = `https://www.youtube.com/embed/${ytKey}`
            setVideo({...video,url:embedLink})
        }
    }
console.log(video);



    const handleUpload = async (e)=>{
        e.preventDefault()      //to prevent data loss

        const {caption, image, url}= video

        if(!caption || !image || !url){
            toast.info('Please fill the form completely')
        }
        else{
            const result = await addVideoApi(video)
            console.log(result);
            if(result.status>=200 && result.status<300){
                toast.success('Video Uploaded Successfully')
                setAddStatus(result.data)
                handleClose()
            }
            else{
                toast.error('Something Went Wrong')
                console.log(result);
                handleClose()
            }
        }
    }





    //<iframe width="853" height="480" src="https://www.youtube.com/embed/tOM-nWPcR4U" title="Illuminati|Aavesham|Jithu Madhavan|Fahadh Faasil|Sushin Shyam,Dabzee,Vinayak| Nazriya|Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    //https://www.youtube.com/embed/tOM-nWPcR4U
    //https://www.youtube.com/watch?v=tOM-nWPcR4U
    //https://youtu.be/tOM-nWPcR4U?si=dF5ZR6xxl3D6BHjI








    console.log(video);

    return (
        <>
            <div className='d-flex'>
                <h5>Upload <span id='h'>New Video</span></h5>
                <button className='btn' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} size='xl' /></button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> <FontAwesomeIcon icon={faFilm} className='text-warning me-2' /> Upload Videos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please fill the following details </p>
                    <form className="border p-3 rounded border-secondary">
                        <input type="text" placeholder='Video Caption' className='form-control' onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
                        <input type="text" placeholder='Video Image'  className='form-control mt-3' onChange={(e)=>setVideo({...video,image:e.target.value})}/>
                        <input type="text" placeholder='Video Url'  className='form-control mt-3' onChange={(e)=>validateLink(e)} />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="warning" onClick={handleUpload}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position='top-center' theme='colored' autoClose={2000} />
        </>
    )
}

export default Add