import './index.css'

function Home({ weather }) {
  return(

    <>
    <div className='container'>
      <div className='header'>
      <h1>Home page</h1>
    <p>The place where every journey begins and every story feels just right</p><br/>
    <p>The weather in <strong>Bergen</strong> is currently: </p>
    <p>{weather === null ? 'Loading...':`${weather}`}°C</p>
      </div>
      <div className="content">
          
        </div>
      </div>
    </>
  )
}

export default Home