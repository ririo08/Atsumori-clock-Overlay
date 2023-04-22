# あつまれどうぶつの森の時計風オーバーレイ

## これは何？

これは OBS 等の配信ソフト向けのオーバーレイです。  
あつまれ どうぶつの森のプレイ中、動きを止めていると左下に出てくる時計を再現したものになります。  
実際の日時に合わせて変動するので、「配信がいつ行われているか」などの利用を想定して作っています。

## 使い方

1. OBS のソースでブラウザを用意する。
2. [こちらのリンク](https://ririo08.github.io/Atsumori-clock-Overlay/clock) をコピーして、ブラウザに貼り付ける。
3. 好きな位置へ持って行く
   （左下に配置することを考えて作成しているので、左下に置くと良いかもです。）

## カラーバリエーション

デフォルトでは本家にとても近い配色になっていますが、HEX 値(ff9600 など)を用いて色を変更することができます！  
指定方法は URL 末尾に「?color=ff9600」といった感じで追記すると指定の色になります！  
他にも「?color=white」と「?color=black」のみですが、白色と黒色に変更することが可能となっています。

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
