import React,{useEffect,useState} from 'react'
import "./Content.css"

const Content = () => {

    const [mobview, setmobview] = useState(window.innerWidth)
    
    useEffect(() => {
        window.addEventListener("resize" ,function(){
            setmobview(window.innerWidth)
        });
    }, [])

    const Card = ({imgSrc,caption}) =>{
        return(
            <div  className={ mobview > "900" ? 'col category-card container'  : null } >
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
            <div  className={ mobview > "900" ? 'col employee-newsletter' : null }  >
                <img src={`./images/category/newsletter.png`} alt="" />
                <div>
                    <p className={ mobview > "900" ? 'newsletter-date' : null } >{date}</p>
                    <p  className={ mobview > "900" ? 'newsletter-title' : null } >{title}</p>
                    <button>Show More</button>
                </div>
            </div>
        )
    }
    
    

    return (
        <>
        <div  className={ mobview > "900" ? 'health-issue-categories' : null } >
                    <h2>Take Charge of Your Mental Health</h2>
        <div  className={ mobview > "900" ? 'row categories' : null } >
        <Card   imgSrc={`./images/category/one.png`}   caption="Feeling Stressed" />
        <Card  imgSrc={`./images/category/two.png`}   caption="Manage Burnout"  />
        <Card  imgSrc={`./images/category/three.png`} caption="Relationship/People Problems"  />
        <Card imgSrc={`./images/category/four.png`}  caption="Wish to Feel Good" />
        <Card imgSrc={`./images/category/five.png`}  caption="Not Sure what to talk about" />
        <Card imgSrc={`./images/category/six.png`}   caption="Need Mental Clarity" />
        </div>
          <div  className={ mobview > "900" ? 'row wellness-campaign' : null } >
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
