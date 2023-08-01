import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";

const pageStyles = {
	color: "#232129",
	padding: "96px",
	fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const NotFoundPage: React.FC<PageProps> = () => {
	return <main style={pageStyles}></main>;
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
