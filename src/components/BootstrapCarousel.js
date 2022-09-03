import React from "react";
//import { Carousel, Container } from "react-bootstrap";
import Heron from './assets/Heron.jpg'
import Mangroves from './assets/Mangroves.jpeg'
import Panther from './assets/Panther.jpg'
import "../BootstrapCarousel.css"
import {useState, useEffect } from 'react'




function BootstrapCarousel() {

  const[index, setIndex ] = useState(0);

  const images = [
    {id: "1", image: Heron},
    {id: "2", image: Mangroves},
    {id: "3", image: Panther},
  ];


  const mod = (n,m) => {
    let result = n % m;

    return result >= 0 ? result : result + m
  }

  useEffect(() => {
    setTimeout(() => {
        setIndex((index + 1) % images.length)
    }, 3000)
  }, [index])

  return  (
        <div className="BootstrapCarousel">
        <div className="carousel">
              {/* <img className='image image--active' src={Heron} alt="Heron"  />
              <img className='image image--left ' src={Mangroves} alt="Mangroves"  />
              <img className='imge image--right' src={Panther} alt="Panther"  /> */}


              {images.map((item, i ) => {
                const indexLeft = mod(index - 1, images.length);
                const indexRight = mod(index + 1, images.length);

                let className = ""

                if (i === index)
                {
                  className = "image image--active"
                  }     
                  else if ( i === indexRight)   {
                    className = "image image--right"
                  } 
                  else if ( i === indexLeft)  
                  {
                    className = "image image--left"
                  }  
                  else {
                    className = "image"
                  }   

                return <img key={item.id}  src={item.image} alt="Heron" className={className}/>
              })}

        </div>
        </div>
  )
}

export default BootstrapCarousel;








// export default function BootstrapCarousel() {
//   return (
    
//     <div>
//       <Carousel>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://www.worldatlas.com/upload/a9/71/be/shutterstock-1321057124.jpg"
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h1>First slide label</h1>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://passionpassport-1.s3.amazonaws.com/wp-content/uploads/2021/04/22115441/everglades-day-trip-header-mark-jacquez.jpg"
//             alt="Second slide"
//           />

//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://i.guim.co.uk/img/media/da09289a202dd1d3f002ce87bc3d8f49b1ab6b34/0_1483_3593_2153/master/3593.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=5240b97b5762ebfd95152e0427a24cf6"
//             alt="Third slide"
//           />

//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </div>
    
//   );
// }


