import { logo } from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="intellisumm logo" className='w-28 object-contain'/>
      <button className="p-3 bg-black col-auto">Github</button>
      </nav>
      <h1></h1>
    </header>
  )
}

export default Hero