import {useQuery} from "@tanstack/react-query";


const useFlights = () => {


    const{data: flights = [] , isLoading: loading , refetch} = useQuery({
        queryKey:["flights"],
        queryFn: async()=>{
            const res = await fetch("http://localhost:5000/all-flights");
            return res.json()
        }
    })

    return [flights , loading ,refetch]
}

export default useFlights;