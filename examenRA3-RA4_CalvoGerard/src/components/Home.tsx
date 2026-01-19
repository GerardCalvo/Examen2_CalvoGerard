import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className='home'>
        <h1>ZONA GOL</h1>
        <h2>La millor pàgina de samarretes de fútbol</h2>
        <p>Clica el següent link i explora la millor pàgina de samarretes de fútbol.</p>
        <Link to="/imatges">Samarretes Futbol</Link>     
    </div>
  );
}