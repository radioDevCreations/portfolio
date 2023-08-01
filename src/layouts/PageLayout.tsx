import React from "react";
import styled from "styled-components";
import MainManu from "../components/MainMenu";

interface LayoutProps {
	style: React.CSSProperties;
	children: React.ReactNode;
}

const PageMain = styled.main``;

const PageLayout: React.FC<LayoutProps> = ({
	style,
	children,
}: LayoutProps) => {
	return (
		<PageMain style={style}>
			{children}
			<MainManu isOpen={isMenuOpen}></MainManu>
		</PageMain>
	);
};

export default PageLayout;
