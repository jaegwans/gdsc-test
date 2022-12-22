//요구사항
import useSeats, { SeatState } from '../hooks/useSeats';
import styled, { css } from 'styled-components';
// 좌석 렌더링
//  좌석 상태
// 좌석 선택할 수 있다.
// 좌석들을 영화들을 선택 할 수 있다.
// 좌석의 수와 영화 가격을 기준으로 보여준다.
// 결제 화면으로 보낸다.

function Booking() {
    const { seats, onClickSeat, selectedSeats } = useSeats();
    console.log(selectedSeats);
    console.log(seats);
    return (
        <div>
            {seats.map((eachSeat) => (
                <StyledSeatButton
                    key={eachSeat.id}
                    onClick={() => onClickSeat(eachSeat)}
                    state={eachSeat.state}
                    // disabled={()=> onClickSeat(eachSeat)}
                >
                    {eachSeat.name}
                </StyledSeatButton>
            ))}
            <h2>{selectedSeats.length}개 선택했어요</h2>
            <button>결제하기</button>
        </div>
    );
}
export default Booking;

const StyledSeatButton = styled.button<{ state: SeatState }>`
    ${({ state }) => state === 'unoccupied' && unoccupiedStyle}
    ${({ state }) => state === 'selected' && occupiedStyle}
    ${({ state }) => state === 'occupied' && selectedStyled}
`;

const occupiedStyle = css`
    background-color: red;
`;

const unoccupiedStyle = css`
    background-color: blue;
`;

const selectedStyled = css`
    background-color: green;
`;
