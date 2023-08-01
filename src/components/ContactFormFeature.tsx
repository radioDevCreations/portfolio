import React from "react";
import styled from "styled-components";

interface ContactFormFeatureProps {
	isOpen: boolean;
	isExtended: boolean;
}

const ContactFormFeatureWrapper = styled.nav``;
const ContactFormFeatureButton = styled.button``;
const ContactFormFeatureList = styled.ul``;
const ContactFormFeatureListItem = styled.li``;
const ExtendedList = styled.ul``;

const MainManu: React.FC<ContactFormFeatureProps> = ({
	isOpen,
	isExtended,
}: ContactFormFeatureProps) => {
	return (
		<ContactFormFeatureWrapper>
			<ContactFormFeatureList>
				<ContactFormFeatureListItem>test1</ContactFormFeatureListItem>
				<ContactFormFeatureListItem>test2</ContactFormFeatureListItem>
				<ContactFormFeatureListItem>test3</ContactFormFeatureListItem>(
				{isExtended && (
					<ExtendedList>
						<ContactFormFeatureListItem>test4</ContactFormFeatureListItem>
						<ContactFormFeatureListItem>test5</ContactFormFeatureListItem>
					</ExtendedList>
				)}
				)
			</ContactFormFeatureList>
		</ContactFormFeatureWrapper>
	);
};

export default MainManu;
