import styled from 'styled-components'


export const Container = styled.div`
  border: 1px solid;
  border-radius: 5px;
  width: 450px;
  margin-left: 30px;
  margin-right: 30px;
  height: ${props=>props.open ? null : '25px'};
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
    margin-top: 0px;
    margin-left: 5px;
`;
export const SelectText2 = styled.p`
    margin-left: 5px;
    margin-top: 10px;
    margin-bottom: 5px;
`;

export const DropdownList = styled.div`
    display:${props=>props.display};
    flex-direction: column; 
    padding-top:10px;
    padding-bottom:10px;
    max-height:200px;
`;
export const DropdownImage = styled.img`
    width: 25px;
    height: 25px;
    margin-top: 0px;
    margin-right: 10px;
`;