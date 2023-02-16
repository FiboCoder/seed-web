import { useLottie } from "lottie-react";
import LoadingOrangeJS from  "../assets/loading3.json";
const LoadingFullScreen = () =>{

    const options = {
        animationData: LoadingOrangeJS,
        loop: true
        
      };

      const { View } = useLottie(options);

    return(

        <div style={{width: 100, height: 100, padding: 0, margin: 0}}>{View}</div>
    )
}

export default LoadingFullScreen;