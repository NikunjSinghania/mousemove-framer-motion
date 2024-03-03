import logo from './logo.svg';
import './App.css';
import { motion } from 'framer-motion'
import {useEffect, useState} from "react";

function App() {

    const [active, setActive] = useState(false)
    const [xy, setXY] = useState([0,0])
    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e
            setXY([clientX, clientY])
        })
    }, []);
  return (
    <div className="App">
      <motion.div animate={{
          WebkitMaskPosition : `${xy[0] - (active ? 200 : 20)}px ${xy[1] - (active ? 200 : 20)}px`,
          WebkitMaskSize : active ? 400+'px' : 40+'px'
      }}
                  transition={{
                      type : "tween",
                      ease : "backOut"
                  }}

                  className="cursor">
          <p>          Work smarter, be more productive, boost creativity, and stay connected to the people and things in your life with Copilot—an AI companion that works everywhere you do and intelligently adapts to your needs.
          </p>
      </motion.div>

      <span onMouseEnter={() => {
          setActive(true)
      }} onMouseLeave={() => {
          setActive(false)
      }}>
          <h1>Microsoft Copilot</h1>
          <h3>Achieve anything you can imagine with your everyday AI companion.</h3>
      </span>
    </div>
  );
}

export default App;
