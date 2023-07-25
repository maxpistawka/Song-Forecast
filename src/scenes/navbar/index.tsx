
import Logo from '@/assets/spotifyweblogo.png';

const Navbar = () => {
  const flexBetween = "flex items-center justify-between";
  const navbarBackground = " bg-black drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed  top-0 z-30 w-full py-3`}
      >
        <div className={`${flexBetween}  `}>
          <div className={`${flexBetween} w-full gap-16`}>
    
              <div className={`${flexBetween} w-full `}>
              

               
                    <img src = {Logo} className ="scale-75"></img>
                    
                  
                    
                    
                </div>
              
            
        
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      
    </nav>
  );
};

export default Navbar;
