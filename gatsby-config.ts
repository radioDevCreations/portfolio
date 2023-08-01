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
		{
			resolve: `gatsby-plugin-react-redux`,
			options: {
				// [required] - path to your createStore module
				pathToCreateStoreModule: "./src/state/createStore",
				// [optional] - options passed to `serialize-javascript`
				// info: https://github.com/yahoo/serialize-javascript#options
				// will be merged with these defaults:
				serialize: {
					space: 0,
					// if `isJSON` is set to `false`, `eval` is used to deserialize redux state,
					// otherwise `JSON.parse` is used
					isJSON: true,
					unsafe: false,
					ignoreFunction: true,
				},
				// [optional] - if true will clean up after itself on the client, default:
				cleanupOnClient: true,
				// [optional] - name of key on `window` where serialized state will be stored, default:
				windowKey: "__PRELOADED_STATE__",
			},
		},
	],
};

export default config;
