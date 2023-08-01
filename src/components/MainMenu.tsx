import React from "react";
import styled from "styled-components";

interface MenuProps {
	isOpen: boolean;
	isExtended?: boolean;
}

const MenuWrapper = styled.nav``;
const MenuButton = styled.button``;
const MenuList = styled.ul``;
const MenuListItem = styled.li``;
const ExtendedList = styled.ul``;

const MainManu: React.FC<MenuProps> = ({ isOpen, isExtended }: MenuProps) => {
	return (
		<MenuWrapper>
			<MenuList>
				<MenuListItem>test1</MenuListItem>
				<MenuListItem>test2</MenuListItem>
				<MenuListItem>test3</MenuListItem>(
				{isExtended && (
					<ExtendedList>
						<MenuListItem>test4</MenuListItem>
						<MenuListItem>test5</MenuListItem>
					</ExtendedList>
				)}
				)
			</MenuList>
		</MenuWrapper>
	);
};

export default MainManu;
