import Layout from '../components/layout';
import '../styles/globals.css';
import Head from "next/head";
//  favicon error (it does not add basePath): https://stackoverflow.com/questions/61836949/why-is-my-favicon-not-working-in-my-next-js-app

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/next-markdown-blog/favicon.ico" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
