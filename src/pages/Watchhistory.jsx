import { faArrowLeft, faHouse, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getFromHistoryApi, deleteFromHistoryApi } from '../services/allApi'




function Watchhistory() {


  const [videoHistory, setVideoHistory] = useState([])
  const [clearHistory, setClearHistory] = useState([])



  const getHistory = async () => {
    const result = await getFromHistoryApi()
    if (result.status >= 200 && result.status <= 300) {
      setVideoHistory(result.data)
    }
  }



  const deleteHistory = async (id) => {
    const result = await deleteFromHistoryApi(id)
    console.log(result);
    setClearHistory(result.data)
  }


  console.log(videoHistory);

  useEffect(() => {
    getHistory()
  }, [clearHistory])


  return (
    <>
      <div className='d-flex p-2 mt-5'>
        <h2 className='ms-md-5'>Watch History</h2>
        <h5 className='me-md-5 ms-auto'><Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}><span id='h'><FontAwesomeIcon className='me-2' icon={faArrowLeft} beat />Back to Home</span> <FontAwesomeIcon icon={faHouse} /></Link></h5>
      </div>
      <div className='row w-100 mt-5 ms-1'>
        <div className='col-md-2'></div>
        <div className='col-md-8'>
          {videoHistory.length > 0 ?
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Caption</th>
                  <th>URL</th>
                  <th>Time Stamp</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {videoHistory?.map((item, index) => (<tr>
                  <td>{index + 1}</td>
                  <td>{item?.caption}</td>
                  <td><Link to={item?.url} target='_blank'>{item.url}</Link></td>
                  <td>{item?.timeStamp}</td>
                  <td className='text-center'><button className='btn btn-danger' onClick={() => deleteHistory(item.id)}><FontAwesomeIcon icon={faTrashCan}/></button></td>
                </tr>))}
              </tbody>
            </table>
            :
            <p className='text-warning fs-5'>No Watch History!!!</p>
          }

        </div>
        <div className='col-md-2'></div>
      </div>
    </>
  )
}

export default Watchhistory