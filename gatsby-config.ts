import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
	siteMetadata: {
		title: `portfoliov3`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/icon.png",
			},
		},
		{
			resolve: "gatsby-plugin-firebase",
			options: {
				credentials: {
					apiKey: "AIzaSyD5EidEOBBckR37WMbi5HXuTmzvl226bh0",
					authDomain: "radekrozmus-5ebb5.firebaseapp.com",
					projectId: "radekrozmus-5ebb5",
					storageBucket: "radekrozmus-5ebb5.appspot.com",
					messagingSenderId: "840251127077",
					appId: "1:840251127077:web:abe4e359bf20c4001796cc",
					measurementId: "G-8ZMN7X7979",
				},
			},
		},
	],
};

export default config;
