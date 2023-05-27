import { useState, useEffect } from "react"; 
import axios from "axios";
import WaveLoader from "../util/loader/waveloader";
import Users from "./about/users";
import serviceURL from "../util/url";
const About = () => {
    const [user, setUsers] = useState([]);
    useEffect(() => {
        axios.post(`${serviceURL}getuser.php`).then((res) => {
          // console.log(res.data);
          setUsers(res.data);
        })
      }, []);
    return( 
        <><div className="about-section">
            <h1>About Us</h1>
            <p>At Ectro Autos, we understand the crucial role that emergency vehicle lighting plays in the effective operation of first responders. With years of experience in the industry, we have established ourselves as a leading provider of high-performance lighting solutions for emergency vehicles. Our team of experts is dedicated to designing, manufacturing, and supplying state-of-the-art lighting products that meet the highest standards of quality and reliability. </p>
        </div>
          {user.length? <Users data={user} /> : <WaveLoader />}
          </>
          );
}
// <Users data={user} />
export default About;