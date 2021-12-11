import React from 'react'
import "./SideBar.css"

const SideBar = () => {
    return (
        <>
          <section className='employee-left-side-bar'>
            <img className='employee-left-side-bar-logo' src={`./images/Logo-3.png`} alt="logo"  />
            <div>
                <h6>What you get from our sessions? </h6>
                <ul>
                    <li>Understand your thoughts</li>
                    <li>Make sense of your feelings</li>
                    <li>Explore your personality and understand yourself better</li>
                    <li>Get Tools/ strategies to navigate through stressful situations</li>
                </ul>
            </div>

            <div>
                <h6>Process Flow of Sessions</h6>
                <ul>
                    <li>First session - Discuss the issue and how you would like to benifit from the session</li>
                    <li>Remaining sessions - Typically range from 2-4 sessions where the issue would be discussed in details. Alongside, strategies and tools would be given to help you feel better and function better in personal and professional aspects of life </li>
                </ul>
            </div>
          </section>  

          <section className='employee-right-side-bar' >
              
          </section>
        </>
    )
}

export default SideBar
