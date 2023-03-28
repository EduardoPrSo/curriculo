import { Html, Head, Main, NextScript } from 'next/document'
import { profileConfig } from '@/config/config'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <title>{`${profileConfig.profile.name} ${profileConfig.profile.secondName}`}</title>
        <link rel="icon" href={profileConfig.profile.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
