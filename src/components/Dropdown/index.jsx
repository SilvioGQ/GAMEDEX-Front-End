import React, {useState} from 'react'
import {
    Container,
    DropdownImage,
    DropdownList,
    SelectText,
    SelectText2,
    WhiteRow
} from './styles';
import ArrowBottom from '../../assets/arrow.png'

export default function Dropdown({list, selected, setSelected}) {
    const [open,
        setOpen] = useState(false)
    const rotateZ1 = open ? "180deg" : "0deg";

    return (
        <Container open={open}>
            <WhiteRow onClick={() => {
                setOpen(!open);
            }}>
                <SelectText>
                    {selected == '' ? list[0].name : selected}
                </SelectText>

                <DropdownImage style={{ transform: `rotate(${rotateZ1})` }} src={ArrowBottom}/>
            </WhiteRow>
            <DropdownList display={open ? "flex" : "none"}>
                {list && list.length > 0 && (list.filter(i => i.name !== selected).map((item, key) => {
                    return (
                        <div
                            key={key}
                            onClick={() => {
                                setSelected(item.name);
                                setOpen(false)
                            }}>
                            <SelectText2>
                                {item.name}
                            </SelectText2>
                        </div>
                    );
                }))}
            </DropdownList>
        </Container>

    )
}