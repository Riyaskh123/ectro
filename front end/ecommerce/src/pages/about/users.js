const Users = (props) => {
    // console.log(props.data);
    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Our Team</h2>
            <div className="row" style={{ alignContent: 'center' }}>
                {props.data.map((data) => {
                    return(
                    <div className="column" key={data.name}>
                        <div className="card">
                            <img src={data.avatar} alt={data.name} />
                            <span className="filter"></span>
                            <div className="container">
                                <h3>{data.name}</h3>
                                <p className="title">{data.job}</p>
                                <p>{data.descib}</p>
                            </div>
                            <button className="button" onClick={() => {window.open(`mailto:${data.email}`);}}>Contact</button>
                        </div>
                    </div>
                    )
                })}
            </div>
        </>
    );
} 
export default Users;