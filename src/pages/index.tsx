import React from "react";
import "../globalStyles/normalize.css";
import type { HeadFC, PageProps } from "gatsby";
import { getTimelines } from "../firebase/timelines";
import PageLayout from "../layouts/PageLayout";
import COLORS from "../globalStyles/colors";

const pageStyles = {
	color: `${COLORS.babyPowder}`,
	padding: 0,
	fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage: React.FC<PageProps> = () => {
	const timelines: any = getTimelines();
	return <PageLayout style={pageStyles}>Home Page</PageLayout>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
