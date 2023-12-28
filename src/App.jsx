import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <header className='header'>
        <div className="blur-background"></div>
        <div className="text-container">
        <h1>Title</h1>
        <h3>Some about text</h3>
        <h5>in two lines</h5>
        <button>Button</button>
        </div>
      </header>
      <section>
        <h1>Portfolio</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime et blanditiis rem ipsa, similique cum, ullam iure hic architecto eos quibusdam culpa minima ex animi vitae dolore aliquam delectus commodi.</p>
      </section>
      <footer>
        <div className="card-container">
          <Card imageSrc="sunflower_women.jpg" text="Ipsum Feugiat"/>
          <Card imageSrc="sunflower_women.jpg" text="Ipsum Feugiat"/>
          <Card imageSrc="sunflower_women.jpg" text="Ipsum Feugiat"/>
          <Card imageSrc="bubbles_man.jpg" text="Rhoncus Semper"/>
          <Card imageSrc="bubbles_man.jpg" text="Rhoncus Semper"/>
          <Card imageSrc="bubbles_man.jpg" text="Rhoncus Semper"/>
        </div>
      </footer>
    </>
  )
}

export default App
