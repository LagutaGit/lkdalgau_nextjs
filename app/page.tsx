import BannerPage from "@/components/BannersPage";
import Events from "@/components/Events";
import News from "@/components/News";
import { Button } from "@/components/ui/button"

import { CirclePlus } from "lucide-react"


const Homepage = () => {
  return (

    <div className="grid grid-cols-1 ">
          
          <BannerPage/>

          <Events/>
          
          <News/>

          
          
        </div>

   
  )
}

export default Homepage;