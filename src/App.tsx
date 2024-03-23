import backgroundVideo from './assets/media/Elden-Ring-wallpaper.mp4';


function App() {
  return (
    <div className='fixed top-0 left-0 w-dvw h-dvh overflow-hidden z-[-1]'>
      <video autoPlay loop muted>
        <source src={backgroundVideo} type='video/mp4' />
      </video>
    </div>
  )
}

export default App
