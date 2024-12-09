import React from 'react'
import { motion } from "framer-motion"
import "./Bulb.css"

function ScrollAni() {
  return (
    <div className='bulb-light'
        style={{
            display: "flex",
            flexDirection: "column",
        }}
        >
        <Box/>
    </div>
  )
}

function Box() {
    return(
        <motion.div
            style={{
                width: "100%",
                height: "100%",
                background: "white",
                borderRadius: "2px",
                opacity:1
            }}
            initial= {{
                width: "60%%",
                height: "100%",
            }
            }
            whileInView = {{width: "100%" , scale:1 }}
            transition = {{duration: 2}}
            viewport={{once:true}}
            >
            <h3 
            style = {{
                padding: "0px 20px"
            }}>Our mission is to transform technology's role in society, ensuring it benefits everyone and addresses social inequities.</h3>
        </motion.div>
    )
}

export default ScrollAni