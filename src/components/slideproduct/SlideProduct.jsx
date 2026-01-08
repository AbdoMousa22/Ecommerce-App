import Product from "./Product";
import './slideproduct.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

     
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

export default function SlideProduct({title , data}) {

  return (
     <>
       <div className="slide_products slide">
         <div className="container">
            <div className="top_slide">
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptates?</p>
            </div>
            <Swiper  spaceBetween={200}   autoplay={{ delay: 2500, disableOnInteraction: false,}} slidesPerView={5} navigation={true}modules={[Navigation,Autoplay]} className="mySwiper">
               {
                data.map((item)=>(
                  <SwiperSlide> <Product item={item} /></SwiperSlide>
                ))
               }
            </Swiper>

   

         </div>
       </div>
      
     </>
  )
}
