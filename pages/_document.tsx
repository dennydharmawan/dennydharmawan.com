import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#f8fafc" />
          <meta name="msapplication-TileColor" content="#ffc40d" />
          <link
            media="(prefers-color-scheme: light)"
            rel="shortcut icon"
            href="/favicon.ico"
          />
          <link
            media="(prefers-color-scheme: dark)"
            rel="shortcut icon"
            href="/favicon-dark-mode.ico"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />

          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#635bff" />

          <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
