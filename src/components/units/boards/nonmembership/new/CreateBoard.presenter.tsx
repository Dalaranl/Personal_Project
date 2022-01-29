import * as S from "./CreateBoard.emotion"
import Splitter, { SplitDirection } from '@devbookhq/splitter'


export default function CreateBoardUI () {
        
    return (
        <S.Wrapper>
            <Splitter direction={SplitDirection.Horizontal}>
                <S.LeftSide>
            
                </S.LeftSide>
                <S.RightSide>
                    
                </S.RightSide>
            </Splitter>
        </S.Wrapper>
    )
}