import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://nomail.com.ua/api/font-face/18369.css" rel="stylesheet"/>
          <link href="https://nomail.com.ua/api/font-face/1435.css" rel="stylesheet"/>
          <link href="https://nomail.com.ua/api/font-face/1433.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument