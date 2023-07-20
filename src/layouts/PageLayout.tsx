import React from "react";
import styled from "styled-components";

interface LayoutProps {
	style: React.CSSProperties;
	children: React.ReactNode;
}

const PageMain = styled.main``;

const PageLayout: React.FC<LayoutProps> = ({
	style,
	children,
}: LayoutProps) => {
	return <PageMain style={style}>{children}</PageMain>;
};

export default PageLayout;
