import { useMemo, useState } from 'react';

export type SeatState = 'unoccupied' | 'selected' | 'occupied';

const mockSeats: Seat[] = [];

export interface Seat {
    id: string;
    name: string;
    state: SeatState; //unoccupied selected occupied
}

Array.from(Array(15).keys()).forEach((index) => {
    mockSeats.push({ id: `${index}`, name: `A${index}`, state: 'unoccupied' });
});

mockSeats[1].state = 'occupied';

function useSeats() {
    const [seats, setSeats] = useState<Seat[]>(mockSeats);

    const selectedSeats = useMemo(() => {
        return seats.filter((eachSeat) => eachSeat.state === 'selected');
    }, [seats]);

    const onClickSeat = (clickedSeat: Seat) => {
        // Todo: refactor
        setSeats((prev) => {
            return prev.map((eachSeat) =>
                eachSeat.id === clickedSeat.id
                    ? {
                          id: eachSeat.id,
                          name: eachSeat.name,
                          state:
                              eachSeat.state === 'selected'
                                  ? 'unoccupied'
                                  : 'selected',
                      }
                    : {
                          id: eachSeat.id,
                          name: eachSeat.name,
                          state: eachSeat.state,
                      }
            );
        });
    };
    return { seats, onClickSeat, selectedSeats };
}

export default useSeats;
