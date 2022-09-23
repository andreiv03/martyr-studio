import { Head, Html, Main, NextScript } from "next/document";

const data = {
  title: "Martyr Studio — Premium marketing and branding services",
  description: "Martyr Studio — Premium markerting and branding services.Whether you need to clarify the future market position or to improve everyday experiences for your customers, we are here to serve.",
  url: "https://www.martyrstudio.com/",
  image: "https://www.martyrstudio.com/assets/thumbnail.jpg/"
};

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />

        <meta itemProp="name" content={data.title} />
        <meta name="twitter:title" content={data.title} />
        <meta property="og:title" content={data.title} />

        <meta itemProp="description" content={data.description} />
        <meta name="description" content={data.description} />
        <meta name="twitter:description" content={data.description} />
        <meta property="og:description" content={data.description} />

        <link rel="canonical" href={data.url} />
        <meta property="og:url" content={data.url} />
        <meta name="twitter:url" content={data.url} />

        <meta itemProp="image" content={data.image} />
        <meta name="twitter:image" content={data.image} />
        <meta property="og:image" content={data.image} />

        <meta name="apple-mobile-web-app-title" content="Martyr Studio" />
        <meta name="format-detection" content="telephone=no" />

        <meta name="theme-color" content="#f6f7f6" />

        <meta property="og:author" content="https://www.facebook.com/martyrstudiocom/" />
        <meta property="og:locale" content="ro_RO" />
        <meta property="og:site_name" content="martyr studio" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@martyrstudio_com" />
        <meta name="twitter:domain" content="martyrstudio.com" />
        <meta name="twitter:site" content="@martyrstudio_com" />

        <link rel="icon" href="/favicon.ico/" />
        <link rel="manifest" href="/manifest.json/" />

        <meta name="google-site-verification" content="uQsStU4EMznKnzdQHRvfhl4ccGSf8pC3diMVQInX0T8" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;