import { useRouter } from 'next/router'
import React,{useState} from 'react'
import { Button } from '~/components/Button'
import { supabase } from '~/utils/supabaseClient'

const Add = () => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [type, setType] = useState('')
    const [img, setImg] = useState('')
    const [formError, setFormError] = useState('')
    // const router = useRouter()
    
    const handleSubmit= async(e:any) =>{
        e.preventDefault()
        if (!name || !desc || !type || !img) {
            setFormError('Please Fill in All the fields correctly')
            return
        }
        // console.log(title,desc,type,img);
        const {data,error}:any= await supabase
        .from('projects')
        .insert([{name,desc,type,img}])
        
        if (error) {
            console.log(error)
            setFormError('Please Fill in All the fields correctly')
        }
        if (data) {
            console.log(data)
        }
        return <div>berhasil</div>
        // router.push('/')
    }
    return (
    <div>
        <form onSubmit={handleSubmit} className='flex gap-4'>
            <div className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input type="text" id='name' className='border border-green-300 outline-none' value={name} onChange={(e)=>{setName(e.target.value)}} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="desc">Desc</label>
                <input type="text" id='desc' className='border border-green-300 outline-none' value={desc} onChange={(e)=>{setDesc(e.target.value)}} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="type">Type</label>
                <select name="" id="type" placeholder='Type' onChange={(e)=>{setType(e.target.value)}}>
                    select the type
                    <option value="" disabled>select the type</option>
                    <option value="web" >web</option>
                    <option value="mobile" >mobile</option>
                    <option value="iot" >Iot</option>
                    <option value="design" >Design</option>
                </select>
                {/* <input type="text" id='type' className='border border-green-300 outline-none' value={type} onChange={(e)=>{setType(e.target.value)}} /> */}
            </div>
            <div className="flex flex-col">
                <label htmlFor="img">Img</label>
                <input type="text" id='img' className='border border-green-300 outline-none' value={img} onChange={(e)=>{setImg(e.target.value)}} />
            </div>
            <Button type='submit'>Add</Button>
            {formError && <p className='text-red-500 font-bold'>Error brooo</p>}
        </form>
    </div>
  )
}

export default Add