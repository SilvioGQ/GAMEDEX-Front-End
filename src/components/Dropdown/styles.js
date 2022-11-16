import styled from 'styled-components'


export const Container = styled.div`
  border: 1px solid;
  border-radius: 5px;
  width: 90%;
  padding: 15px;
  z-index: 100;
  border: 1px solid #fff;
    border-radius: 5px;
`;
export const WhiteRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const SelectText = styled.p`
    margin-left: 5px;
`;
export const SelectText2 = styled.p`
    margin-left: 5px;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const DropdownList = styled.div`
    display:${props=>props.display};
    flex-direction: column; 
    padding-top:15px;
    padding-bottom:15px;
    max-height:200px;
`;
export const DropdownImage = styled.img`
    width: 25px;
    height: 25px;
    margin-top: 20px;
    margin-right: 10px;
`;