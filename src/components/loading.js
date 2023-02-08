import { useLottie } from "lottie-react";
import LoadingJS from  "../assets/loading.json";
const Loading = () =>{

    const options = {
        animationData: LoadingJS,
        loop: true
        
      };

      const { View } = useLottie(options);

    return(

        <div style={{width: 34, height: 34, padding: 0, margin: 0}}>{View}</div>
    )
}

export default Loading;