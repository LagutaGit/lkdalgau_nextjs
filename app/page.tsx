import BannerPage from "@/components/BannersPage";
import Events from "@/components/Events";
import { Button } from "@/components/ui/button"

import { CirclePlus } from "lucide-react"


const Homepage = () => {
  return (

    <div className="grid grid-cols-1 ">
          
          <BannerPage/>

          <Events/>
    
          <div className="p-4 rounded-lg h-80 bg-primary-foreground">
              
          </div>
          <div className="p-4 rounded-lg h-80 bg-primary-foreground">
              
          </div>
          <div className="p-4 rounded-lg h-80 bg-primary-foreground">
              
          </div>
          
        </div>

   
  )
}

export default Homepage;