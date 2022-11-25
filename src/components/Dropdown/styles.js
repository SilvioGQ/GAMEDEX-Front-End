import styled from 'styled-components'
import Colors from "../../resource/Colors";

export const Container = styled.div `
  position: relative;
  border-radius: 5px;
  background-color: ${Colors.BlackLight};
  /* width: 100%; */
  /* margin-left: 30px; */
  /* margin-right: 30px; */
  height: 57px;
  /* padding: 15px; */
  z-index: 100;
  border: 1px solid #fff;
  border-radius: 5px;
  ${props => props.open
    ? "border-bottom: none; border-bottom-left-radius: 0px; border-bottom-right-radius:" +
        " 0px;"
    : ""}
`;

export const WhiteRow = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 57px;
`;
export const SelectText = styled.p `
  margin-left: 15px;
`;
export const SelectText2 = styled.p `
  margin-left: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const DropdownList = styled.div `
  display: ${props => props.display};
  width: 100%;
  flex-direction: column; 
  padding-top:10px;
  padding-bottom:10px;
  max-height:200px;
  position: absolute;
  border: 1px solid #fff;
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${Colors.BlackLight};
`;
export const DropdownImage = styled.img `
    width: 25px;
    height: 25px;
    margin-top: 0px;
    margin-right: 10px;
`;