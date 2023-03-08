export default function Listing(props){
    let badgeText
    if(props.openSpots === 0 ){
        badgeText = "Sold out"

    }else if(props.country === "Online"){
        badgeText = "Online"
        
    }
    return(
        
            <div className="listing-container">
                
                <div className="list-img">
                    {
                        badgeText &&
                        <p className="btn-tag"><a href="">{badgeText}</a></p>
                    }
                     
                    <img src={props.img} alt="Life Lessons with Katie Zaferes" />
                    
                    
                </div>

                <div className="list-review">
                    <div className="star">{props.stats.rating} ({props.stats.reviewCount}) * {props.country}</div>
                    <p className="text-review">{props.title}</p>
                    <p className="price">From {props.price} / person</p>
                </div>

            </div>

           
        
    )
}