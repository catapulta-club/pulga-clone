import { useEffect, useMemo, useRef, useState } from 'react';
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import * as Location from 'expo-location'
import { IGeoReturn, ILocation } from '../../types/geo';
import { geo } from '../../services/geo';
import { api } from '../../services/api';

const useHomeController = ()=>{
    const [currentCity, setCurrentCity] = useState("");
    const [currentLocation, setCurrentLocation] = useState<Location.LocationObject | null>(null)
    const [locations, setLocations] = useState<ILocation[]>([]);

    const [currentStep, setCurrentStep] = useState(1);
    const [ rideDuration, setRideDuration] = useState(0);

    const bottomSheetModalRef = useRef<BottomSheetModal>(null)
    
    const snapPoints = useMemo(()=> ["25%","50%"], [])

    const handleCloseModal = ()=>{
        bottomSheetModalRef.current?.close();
    }
    const handleOpenModal = () => {
        bottomSheetModalRef?.current?.present();
    };

    const handleNextStep = () => {
        setCurrentStep((prev) => prev + 1)
    }

    const handleFinishRide = (seconds: number) => {
        setRideDuration(seconds);
        handleNextStep();
    }

    const handleResetRide = ()=>{
        setCurrentStep(1);
        setRideDuration(0)
    }

    
    const handleDoneRide = ()=>{
        handleCloseModal()
        setCurrentStep(1);
        setRideDuration(0)
    }

    const getCurrentLocations = async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if(status !== 'granted'){
            alert("Não foi possivel encontrar sua localização")
            return;
        }

       let location = await Location.getCurrentPositionAsync({})
 
    
        setCurrentLocation(location)

        if(location.coords){
            const { data } = await geo.get<IGeoReturn>(
            `?latitude=${location.coords.latitude}&longitude=${location.coords.longitude}&localityLanguage=pt-BR`
            )

            if(data.city && data.principalSubdivision){
                const { city, principalSubdivision } = data;
                setCurrentCity(`${city} - ${principalSubdivision}`)
            }
        }
    }

    const getLocations = async () => {
        const {data} = await api.get('locations');
        setLocations(data)
    }

    useEffect(()=>{
        getCurrentLocations();
        getLocations();
    },[])

    return {
        handleOpenModal,
        currentCity,
        currentLocation,
        bottomSheetModalRef,
        snapPoints,
        locations,
        currentStep,
        handleFinishRide,
        handleDoneRide,
        handleNextStep,
        rideDuration,
        setRideDuration,
        handleResetRide,
    }
} 

export { useHomeController }