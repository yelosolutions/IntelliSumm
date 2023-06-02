import React, {useState, useEffect} from 'react'
import { linkIcon } from '../assets'


const Demos = () => {
    const [article, setArticle] = useState({
        url:'',
        summary:''
    })

    const handleSubmit = () => {
        alert('Submitted');
    }


    return (
    <section className='w-full mt-16 max-w-xl'>
        <div className='flex flex-col w-full gap-2'>
            <form className='relative flex items-center justify-center'   onSubmit={{handleSubmit}}>
                <img src={linkIcon} alt="link_icon" />
                <input type="url" 
                className='url_input flex items-center justify-center'
                value={article.url}/>
                <button 
                type='button' 
                className='submit_btn'
                >
                ↵
                </button>    
            </form>
        </div>
    </section>
    )
}

export default Demos