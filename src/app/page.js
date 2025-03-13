"use client";

import Image from "next/image";
import { StarsBackground } from "./components/ui/stars-background";
import { ShootingStars } from "./components/ui/shooting-stars";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./components/navbar";

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  const handleSunClick = () => { //clicking sun button sets state to true which starts the animation
    setIsAnimating(true); //controls if the animation will run or not
    setTimeout(() => {
      router.push("/sun"); //redirects to sun page which is not setup yet
    }, 3000);  //delay
  };
  return (
    <div className="flex flex-col items-center pt-[120px] min-h-screen relative">      
      <ShootingStars />
      <StarsBackground />
      <Navbar />
      <p className="text-white text-[30px]">
        Explore the Cosmos, One Click at a Time.
      </p>
      
      <div className="flex justify-center items-center flex-wrap">
      <button className="w-120 h-120 text-white rounded-full hover:scale-[1.3] hover:bg-[#FF8C00] transition-transform duration-200 ease-out ease-in shadow-[0_0_50px_#FF8C00]"
       onClick={handleSunClick}>
        <Image 
            src={"/planets/earth.webp"} 
            alt="sun" 
            width={160} 
            height={160}
            priority 
            className="w-full h-full object-cover rounded-full transition-transform duration-200 hover:scale-100 will-change-transform"
            />
            Sun
      </button>
      <button className="w-20 h-20 text-white rounded-full">
        <Image 
          src="/planets/earth.webp" 
          alt="mercury" 
          width={160} 
          height={160}
          priority 
          className="w-full h-full object-cover rounded-full transition-transform duration-200 hover:scale-125 will-change-transform"
          />
          Mercury
      </button>
      <button className="w-30 h-30 text-white rounded-full">
        <Image 
          src="/planets/earth.webp" 
          alt="venus" 
          width={160} 
          height={160}
          priority 
          className="w-full h-full object-cover rounded-full transition-transform duration-200 hover:scale-125 will-change-transform"
          />
          Venus
      </button>
      <button className="w-30 h-30 text-white rounded-full">
        <Image 
          src="/planets/earth.webp" 
          alt="Earth" 
          width={160} 
          height={160}
          priority 
          className="w-full h-full object-cover rounded-full transition-transform duration-200 hover:scale-125 will-change-transform"
          />
          Earth
      </button>
      <Image
        src="/planets/still.webp" 
        alt="venus" 
        width={55} 
        height={55}
        priority 
        className="object-cover"
        />

      <button className="w-20 h-20 text-white rounded-full">
        <Image 
          src="/planets/earth.webp" 
          alt="mars" 
          width={160} 
          height={160}
          priority 
          className="w-full h-full object-cover rounded-full transition-transform duration-200 hover:scale-125 will-change-transform"
          />
          Mars
      </button>
      <button className="w-70 h-70 text-white rounded-full">
        <Image 
          src="/planets/earth.webp" 
          alt="jupiter" 
          width={160} 
          height={160}
          priority 
          className="w-full h-full object-cover rounded-full transition-transform duration-200 hover:scale-125 will-change-transform"
          />
          Jupiter
      </button>

      <button className="w-60 h-60 text-white rounded-full">
        <Image 
          src="/planets/earth.webp" 
          alt="saturn" 
          width={160} 
          height={160}
          priority 
          className="w-full h-full object-cover rounded-full transition-transform duration-200 hover:scale-125 will-change-transform"
          />
          Saturn
      </button>
      <button className="w-45 h-45 text-white rounded-full">
        <Image 
          src="/planets/earth.webp" 
          alt="uranus" 
          width={160} 
          height={160}
          priority 
          className="w-full h-full object-cover rounded-full transition-transform duration-200 hover:scale-125 will-change-transform"
          />
          Uranus
      </button>
      <button className="w-40 h-40 text-white rounded-full">
        <Image 
          src="/planets/earth.webp" 
          alt="neptune" 
          width={160} 
          height={160}
          priority 
          className="w-full h-full object-cover rounded-full transition-transform duration-200 hover:scale-150 will-change-transform"
          />
          Neptune
      </button>

      <p className="pt-[60px] text-white text-[15px] text-center max-w-[50%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel dictum sapien. Donec lobortis, nulla quis elementum vehicula, odio dui consequat elit, quis laoreet turpis mauris porta augue. Aliquam ut massa mi. Suspendisse quis elit at nisi tincidunt fringilla. Duis faucibus mauris nec mauris luctus, in sodales enim semper. Nullam egestas pulvinar nisl, eu aliquam leo. Donec semper lorem sed sodales pulvinar. Maecenas nec velit eu eros porta elementum ut et erat. Quisque fermentum ornare magna, at tempus ante blandit dapibus. In elementum lectus maximus enim dignissim rutrum. Curabitur malesuada, nisl et accumsan consequat, augue nibh sagittis justo, ut facilisis neque elit a mauris.
      </p>

      </div>
      {isAnimating && ( //if isAnimating is true or if sun button is clicked, display the webp file
        <div className="fixed inset-0 flex justify-center items-center z-50 opacity-90 transition-opacity">
          <Image
            src={"/planets/warp.webp"}
            alt="Warp Effect"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      )}
    </div>
  );
}



//homepage