import React from 'react'
import "./Feedback.css"
import ReactStars from "react-rating-stars-component";


const Feedback = () => {
    return (
        <>
           <section className='feedback'>
                    <h1>Feedback</h1>
                <div className='feedback-session'>
                    <h1>Session Usage & Feedback</h1>
                <table className='feedback-session-table'>
                    <tbody>
                        <tr>
                        <td>Did you felt better after the session ?</td>
                        <td>
                           	<div class="switch-field">
                                <input type="radio" id="switch-one-radio-one" name="switch-one" value="yes"  />
                                <label for="switch-one-radio-one">Yes</label>
                                <input type="radio" id="switch-one-radio-two" name="switch-one" value="no" />
                                <label for="switch-one-radio-two">No</label>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td>Have you gained more clarity on your problems?</td>
                        <td>
                        <div class="switch-field">
                                <input type="radio" id="switch-two-radio-one" name="switch-two" value="yes" />
                                <label for="switch-two-radio-one">Yes</label>
                                <input type="radio" id="switch-two-radio-two" name="switch-two" value="no" />
                                <label for="switch-two-radio-two">No</label>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td>Do you know strategies to handle your problems ?</td>
                        <td>
                            <div class="switch-field">
                                <input type="radio" id="switch-three-radio-one" name="switch-three" value="yes" />
                                <label for="switch-three-radio-one">Yes</label>
                                <input type="radio" id="switch-three-radio-two" name="switch-three" value="no" />
                                <label for="switch-three-radio-two">No</label>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td>Do you feel motivated to improve your well-being ?</td>
                        <td>
                            <div class="switch-field">
                                <input type="radio" id="switch-four-radio-one" name="switch-four" value="yes" />
                                <label for="switch-four-radio-one">Yes</label>
                                <input type="radio" id="switch-four-radio-two" name="switch-four" value="no" />
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

            <div className='feedback-session'>
                    <h1>Workshop Usage & Feedback</h1>
                <table className='feedback-session-table'>
                    <tbody>
                        <tr>
                        <td>Did you find the workshop topic to be relevant ?</td>
                        <td>
                           	<div class="switch-field">
                                <input type="radio" id="switch-one-radio-one" name="switch-one" value="yes"  />
                                <label for="switch-one-radio-one">Yes</label>
                                <input type="radio" id="switch-one-radio-two" name="switch-one" value="no" />
                                <label for="switch-one-radio-two">No</label>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td>Do you now have the tools to tackle tough situations ?</td>
                        <td>
                        <div class="switch-field">
                                <input type="radio" id="switch-two-radio-one" name="switch-two" value="yes" />
                                <label for="switch-two-radio-one">Yes</label>
                                <input type="radio" id="switch-two-radio-two" name="switch-two" value="no" />
                                <label for="switch-two-radio-two">No</label>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td>Did you gained good perspective on mental health ?</td>
                        <td>
                            <div class="switch-field">
                                <input type="radio" id="switch-three-radio-one" name="switch-three" value="yes" />
                                <label for="switch-three-radio-one">Yes</label>
                                <input type="radio" id="switch-three-radio-two" name="switch-three" value="no" />
                                <label for="switch-three-radio-two">No</label>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td>Did the workshop motivated you to work better ?</td>
                        <td>
                            <div class="switch-field">
                                <input type="radio" id="switch-four-radio-one" name="switch-four" value="yes" />
                                <label for="switch-four-radio-one">Yes</label>
                                <input type="radio" id="switch-four-radio-two" name="switch-four" value="no" />
                                <label for="switch-four-radio-two">No</label>
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
                   
                </div>
           </section>
        </>
    )
}

export default Feedback
