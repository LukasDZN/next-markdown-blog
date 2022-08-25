import Layout from '../components/layout';
import '../styles/globals.css';
import Head from "next/head";

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
