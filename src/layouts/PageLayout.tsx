import React from "react";

interface LayoutProps {
	style: React.CSSProperties;
	children: React.ReactNode;
}

const PageLayout: React.FC<LayoutProps> = ({
	style,
	children,
}: LayoutProps) => {
	return <main style={style}>{children}</main>;
};

export default PageLayout;
