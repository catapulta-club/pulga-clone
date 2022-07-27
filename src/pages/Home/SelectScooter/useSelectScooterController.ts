import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { IScooter } from "../../../types/geo";

const useSelectScooterController = () => {
    const [scooters, setScooters] = useState<IScooter[]>([]);
    const [scooterSelected, setScooterSelected] = useState(0);

    const getAllScooters = async () =>{
        const { data } = await api.get('/scooters');
        setScooters(data);
    }

    const handleSelectScooter = (id: number) => {
        setScooterSelected(id)
    }

    useEffect(()=>{
        getAllScooters();
    },[])

    return { scooters, handleSelectScooter, scooterSelected}
}

export { useSelectScooterController };