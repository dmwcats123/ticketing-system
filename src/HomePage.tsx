import './HomePage.css'
import Button from './LinkButton.tsx'

const HomePage = () => {

  return (
      <div className = 'center-container'>
      <h1>Welcome to the best ticketing system ever made!</h1>
        <div>
          <Button buttonText = "I am a user" linkPath='/user-page' />
          <Button buttonText = "I am an admin" linkPath = '/admin-page'/>
        </div>
      </div>
  )
}

export default HomePage