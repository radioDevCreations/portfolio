import React from "react";
import "../globalStyles/normalize.css";
import type { HeadFC, PageProps } from "gatsby";
import PageLayout from "../layouts/PageLayout";

const pageStyles = {
	color: "#232129",
	padding: 0,
	fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const BlogPage: React.FC<PageProps> = () => {
	return <PageLayout style={pageStyles}>Blog</PageLayout>;
};

export default BlogPage;

export const Head: HeadFC = () => <title>Blog Page</title>;
