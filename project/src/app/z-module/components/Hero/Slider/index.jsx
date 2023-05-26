"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function Slider() {
  return (
    <Carousel 
    showThumbs={false} 
    showArrows={false} 
    showIndicators={false} 
    showStatus={false} 
    interval={4000}
    infiniteLoop
    autoPlay>
        <img
        src="https://zovofficial.com/image/cache/catalog/products/kuhni/2023/antiko/1-1600x1086.jpg"
        alt="кухонный гарнитур"
        className="rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 mt-8 sm:mt-12"
        />
        <img
        src="https://zovrus.ru/files/_cache/product/garderob-3.1.resize800x800w.png?1c559b168e4119b9eb35ca543d2341fd"
        alt="гардероб"
        className="rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 mt-8 sm:mt-12"
        />
        <img
        src="https://zovrus.ru/files/_cache/product/podvesnaya-sistema-3.resize1200x1200w.png?59ad289b075212d895b4cd2c94665f8f"
        alt="шкаф купе"
        className="rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 mt-8 sm:mt-12"
        />
    </Carousel >
  )
}
