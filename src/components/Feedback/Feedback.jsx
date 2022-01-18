import React from 'react'
import "./Feedback.css"
import ReactStars from "react-rating-stars-component";


const Feedback = () => {
    return (
        <>
           <section className='feedback'>
                    <h1>Feedback</h1>
                <div className='feedback-session  container'>
                    <h1>Session Usage & Feedback</h1>
                <table className='feedback-session-table'>
                    <tbody>
                        <tr>
                        <td>Did you felt better after the session ?</td>
                        <td>
                           	<div class="switch-field">
                                <input type="radio" className='feedback-yes' id="switch-one-radio-one" name="switch-one" value="yes"  />
                                <label for="switch-one-radio-one">Yes</label>
                                <input type="radio" className='feedback-no' id="switch-one-radio-two" name="switch-one" value="no" />
                                <label for="switch-one-radio-two">No</label>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td>Have you gained more clarity on your problems?</td>
                        <td>
                        <div class="switch-field">
                                <input type="radio" className='feedback-yes' id="switch-two-radio-one" name="switch-two" value="yes" />
                                <label for="switch-two-radio-one">Yes</label>
                                <input type="radio" className='feedback-no'  id="switch-two-radio-two" name="switch-two" value="no" />
                                <label for="switch-two-radio-two">No</label>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td>Do you know strategies to handle your problems ?</td>
                        <td>
                            <div class="switch-field">
                                <input type="radio" className='feedback-yes' id="switch-three-radio-one" name="switch-three" value="yes" />
                                <label for="switch-three-radio-one">Yes</label>
                                <input type="radio" className='feedback-no'  id="switch-three-radio-two" name="switch-three" value="no" />
                                <label for="switch-three-radio-two">No</label>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td>Do you feel motivated to improve your well-being ?</td>
                        <td>
                            <div class="switch-field">
                                <input type="radio" className='feedback-yes' id="switch-four-radio-one" name="switch-four" value="yes" />
                                <label for="switch-four-radio-one">Yes</label>
                                <input type="radio" className='feedback-no'  id="switch-four-radio-two" name="switch-four" value="no" />
                                <label for="switch-four-radio-two">No</label>
                            </div>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                    <div className='feedback-session-star-rating'>
                            <h2>How Much Would You Rate Our Session Out Of 5 ?</h2>
                            <div>
                                <ReactStars 
                         count={5}
                        // onChange={ratingChanged}
                        size={66}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                        className="feedback-session-star-rating-component"
                    />
                            </div>
                         
                    </div>
                   
                </div>

            <div className='feedback-session container'>
                    <h1>Workshop Usage & Feedback</h1>
                <table className='feedback-session-table'>
                    <tbody>
                        <tr>
                        <td>Did you find the workshop topic to be relevant ?</td>
                        <td>
                           	<div class="switch-field">
                                <input type="radio" className='feedback-yes' id="switch-five-radio-one" name="switch-five" value="yes"  />
                                <label for="switch-five-radio-one">Yes</label>
                                <input type="radio" className='feedback-no' id="switch-five-radio-two" name="switch-five" value="no" />
                                <label for="switch-five-radio-two">No</label>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td>Do you now have the tools to tackle tough situations ?</td>
                        <td>
                        <div class="switch-field">
                                <input type="radio" className='feedback-yes' id="switch-six-radio-one" name="switch-six" value="yes" />
                                <label for="switch-six-radio-one">Yes</label>
                                <input type="radio" className='feedback-no'  id="switch-six-radio-two" name="switch-six" value="no" />
                                <label for="switch-six-radio-two">No</label>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td>Did you gained good perspective on mental health ?</td>
                        <td>
                            <div class="switch-field">
                                <input type="radio" className='feedback-yes' id="switch-seven-radio-one" name="switch-seven" value="yes" />
                                <label for="switch-seven-radio-one">Yes</label>
                                <input type="radio" className='feedback-no' id="switch-seven-radio-two" name="switch-seven" value="no" />
                                <label for="switch-seven-radio-two">No</label>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td>Did the workshop motivated you to work better ?</td>
                        <td>
                            <div class="switch-field">
                                <input type="radio" className='feedback-yes' id="switch-nine-radio-one" name="switch-nine" value="yes" />
                                <label for="switch-nine-radio-one">Yes</label>
                                <input type="radio" className='feedback-no' id="switch-nine-radio-two" name="switch-nine" value="no" />
                                <label for="switch-nine-radio-two">No</label>
                            </div>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                    <div className='feedback-session-star-rating'>
                            <h2>How Much Would You Rate Our Workshop Out Of 5 ?</h2>
                            <div>
                                <ReactStars 
                         count={5}
                        // onChange={ratingChanged}
                        size={66}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                        className="feedback-session-star-rating-component"
                    />
                            </div>
                         
                    </div>    
                     <button className='feedback-submit-btn'>Submit</button> 
                </div>

               
           </section>
        </>
    )
}

export default Feedback
