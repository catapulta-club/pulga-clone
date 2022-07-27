import { useEffect, useState } from "react";
import { IStartRideControllerProps } from "./types";

const useStartRideController = ({ handleFinishRide }: IStartRideControllerProps) => {

    const [seconds, setSecounds] = useState(0);

    const handleOnFinish = () => {
        handleFinishRide(seconds);
    }

    useEffect(()=>{
        const timer = setInterval(()=>{
            setSecounds((prev) => prev + 1);
        },1000)

        return () => clearInterval(timer);
    },[])

    return {seconds, handleOnFinish};

}

export { useStartRideController };