import React,{useEffect,useState} from 'react'
import "./Content.css"

const Content = ({category,setcategoryValue,categoryValue}) => {

    const [mobview, setmobview] = useState(window.innerWidth)

    
    useEffect(() => {
        window.addEventListener("resize" ,function(){
            setmobview(window.innerWidth)
        });
    }, [])

    const handleCardClick = (e,captio) =>{
            e.preventDefault();
            setcategoryValue(captio)
    }


    const Card = ({imgSrc,caption}) =>{
        return(
            <div  id={caption === categoryValue ? "selectedCard" : null} className={ mobview > "900" ? 'col category-card container'  : null } onClick={(e)=>handleCardClick(e,caption)} >
                <img id="category-img" className={ mobview > "900" ? 'category-img' : null } src={imgSrc} alt="" />
                <div>
                    <p>{caption}</p>
                    <i class="fas fa-long-arrow-alt-right"></i>
                </div>
            </div>
        )
    }


    const Cardb = ({date,title}) =>{
        return(
            <div  className={ mobview > "900" ? 'col employee-newsletter' : 'col employee-newsletter' }  >
                <img src={`./images/category/newsletter.png`} alt="" />
                <div>
                    <p className={ mobview > "900" ? 'newsletter-date' : 'newsletter-date' } >{date}</p>
                    <p  className={ mobview > "900" ? 'newsletter-title' : 'newsletter-title' } >{title}</p>
                    <button>Show More</button>
                </div>
            </div>
        )
    }
    
    

    return (
        <>
        <div  className={ mobview > "900" ? 'health-issue-categories' : null } >
                    
        <div  className= 'row categories' style={mobview < "900" ? {display:"none"}: null} >
        <h2>Take Charge of Your Mental Health</h2>
        <Card   imgSrc={`./images/category/one.png`}   caption={category.one}    />
        <Card  imgSrc={`./images/category/two.png`}   caption={category.two}     />
        <Card  imgSrc={`./images/category/three.png`} caption={category.three}    />
        <Card imgSrc={`./images/category/four.png`}  caption={category.four}      />
        <Card imgSrc={`./images/category/five.png`}  caption={category.five}       />
        <Card imgSrc={`./images/category/six.png`}   caption={category.six}       />
        </div>
          <div  className={ mobview > "900" ? 'row wellness-campaign' : 'row wellness-campaign' } >
                <h2>Wellness Campaigns</h2>
            <Cardb date="Jan 2022" title="Why Mental illness" />
            <Cardb date="Feb 2022" title="Manage Your Stress" />
            <Cardb date="Mar 2022" title="Declutter Your Minf" />
        </div>
        </div>
      
        </>
    )
}

export default Content;
