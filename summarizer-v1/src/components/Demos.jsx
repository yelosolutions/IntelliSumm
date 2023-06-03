import React, { useState, useEffect} from 'react'
import {linkIcon} from '../assets'

const Demos = () => {
  const [article, setArticle] = useState({ url: '', summary: ''});

  const handleSubmit = (e) => {
    alert('url submitted');
    // console.log(e.target.value);
  }

  return (
    <section className='w-full mt-16 max-w-xl'
    >
      <div className='flex flex-col w-full gap-2'
      >
        <form 
          className='relative flex items-center justify-center'
          onSubmit={handleSubmit}
        >
          <img 
            src={linkIcon} 
            alt="link icon" 
            className='absolute left-0 my-2 mx-3 w-5'
          />
          <input
            type='url'
            placeholder='Enter URL'
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className='url_input peer'
          >
          </input>
          <button 
            type='submit' 
            className='submit_btn
            peer-focus:border-gray-700
            peer-focus:text-gray-700'
          >
            ↵
          </button>
        </form>
        {/* Browse URL history */}
      </div>
      {/* Display Results*/}
      
    </section>
  )
}

export default Demos