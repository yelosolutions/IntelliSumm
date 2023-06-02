import { logu } from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logu} alt="intellisumm logo" className='w-32 object-contain'/>
      <button type='button' onClick={() => window.open('https://github.com/yelosolutions')} className='black_btn'>Github</button>
      </nav>
      <h1 className='head_text' >The Article Summarizer. 
      <br className='max-md:hidden'/>
      <span className='orange_gradient'>Enabled by OpenAI's GPT-4</span>
      </h1>
      <h2 className='desc'> Enhance your productivity with IntelliSumm, an article summarizer that transform long articles into clear and coincise summaries.</h2>
    </header>
  )
}

export default Hero