import './style.css'

function CardUser({data}) {
    return ( 
        <div className='card'>
            <img src={data.avatar_url} alt="" />
            <a href={data.html_url} target='_blank'>
                <h3>
                    {data.name}
                </h3>
            </a>
            <span>
                {data.location}
            </span>
            <p>
                {data.bio}
            </p>
            <div className='table'>
                <div className="item">
                    <h5># repos</h5>
                    <p>{data.public_repos}</p>
                </div>
                <div className="item">
                    <h5># followers</h5>
                    <p>{data.followers}</p>
                </div>
                <div className="item">
                    <h5># following</h5>
                    <p>{data.following}</p>
                </div>
            </div>
        </div>
    );
}

export default CardUser;