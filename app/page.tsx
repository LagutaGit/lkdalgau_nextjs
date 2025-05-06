import BannerPage from "@/components/BannersPage";
import Events from "@/components/Events";
import News from "@/components/News";
import { Button } from "@/components/ui/button"

import { CirclePlus } from "lucide-react"
import Link from "next/link";


const Homepage = () => {
  return (

    <div className="grid grid-cols-1 ">
          
          <BannerPage/>

          <Events/>
          
          <News/>

          <Link href="/">lk</Link>
          
        </div>

   
  )
}

export default Homepage;