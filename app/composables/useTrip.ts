export function useTrip() {
    const trips = [
      { id: 1, name: "Trip 1" },
      { id: 2, name: "Trip 2" },
      { id: 3, name: "Trip 3" },
    ];
    const getAllTrips = () => {
        return trips;
    }
    const getTrip = (id: number) => {
        return trips.find(trip => trip.id === id);
    }
    return {
      getAllTrips,
      getTrip,
    };
}