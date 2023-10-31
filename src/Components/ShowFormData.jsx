import React,{useEffect, useState} from 'react'

export const ShowFormData = () => {
    const[showData,setShowData] = useState([])

    useEffect(()=>{
         const data = JSON.parse(localStorage.getItem("FormCredential")) || []
    setShowData(data)
    },[])
    
  return (
    <div>
        <h2 className='text-center mt-4 text-xl font-semibold'>Show form data</h2>
        <table className='border-collapse w-full mt-4'>
            <thead className='bg-gray-400'>
                <tr >
                    <th className='px-6 py-3 text-left'>Name</th>
                    <th className='px-6 py-3 text-left'>Email</th>
                    <th className='px-6 py-3 text-left'>Phone</th>
                    <th className='px-6 py-3 text-left'>Password</th>
                    <th className='px-6 py-3 text-left'>Confirm Password</th>
                </tr>
            </thead>
            <tbody className='border'>
                {
                    showData.map((value,index)=>(
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : ''}>
                        <td className='px-6 py-3 text-left'>{value.name}</td>
                        <td className='px-6 py-3 text-left' >{value.email}</td>
                        <td className='px-6 py-3 text-left'>{value.phone}</td>
                        <td className='px-6 py-3 text-left'>{value.password}</td>
                        <td className='px-6 py-3 text-left'>{value.confirmPassword}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
     </div>
  )
}
