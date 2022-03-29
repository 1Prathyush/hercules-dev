import React ,{useState,useEffect} from 'react';
import styles from '../styles/home.module.css';
export default function Home() {
    const [color,setColor] = useState(styles.rect);
    const blue = styles.rect2;
    const white = styles.rect;
   useEffect(() =>{
       console.log("hoi");
   },[color]);


	return (
		<div>
			<h1>HOME</h1>

            <button onClick={()=>setColor(blue)} >change to blue</button>
            <button onClick={()=>setColor(white)}>change to white</button>
			<div className={color}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta repellendus quaerat perferendis
				explicabo possimus, a ipsa, error in architecto sunt dolorum qui vel saepe expedita. Minima inventore
				quibusdam perspiciatis.
			</div>

		</div>
	);
}
