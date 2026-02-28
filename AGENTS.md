# AGENTS.md

## プロジェクト概要
- プロジェクト名: `Atsumori-clock-Overlay`
- 目的: OBS / XSplit など配信ソフトで使う「あつまれ どうぶつの森風」の時計オーバーレイを表示する。
- 技術スタック: Nuxt 4 + Vue 3 + TypeScript + Tailwind CSS + date-fns + Vitest
- 実行形態: `ssr: false` の SPA 構成。主に静的配信（`nuxt generate`）を想定。
- 主な画面:
1. `/` 設定UI（色と配置を選び、オーバーレイURLを生成）
2. `/clock` 実際のオーバーレイ表示（配信ソフトに貼るURL）

## ディレクトリ構造（要点）
```txt
.
|- app/
|  |- components/
|  |  |- AtsumoriClock.vue     # 時計本体UIと更新処理
|  |  |- Week.vue              # 曜日SVG表示
|  |  `- ShareButtons.vue      # SNSリンク群
|  |- composables/
|  |  `- clock.ts              # 日時 -> Clock型への変換ロジック
|  |- pages/
|  |  |- index.vue             # 設定画面、URL生成
|  |  `- clock.vue             # オーバーレイ表示画面（query反映）
|  |- types/
|  |  |- Clock.ts              # 時計表示データ型
|  |  `- PositionTypes.ts      # 位置enum
|  |- layouts/                 # default / empty レイアウト
|  `- assets/style.scss        # 共通スタイル
|- public/img/                 # サムネイル・スクリーンショット
|- test/unit/clock.spec.ts     # clock composable の単体テスト
|- nuxt.config.ts              # Nuxt全体設定
|- vitest.config.ts            # テスト設定
`- package.json                # scripts / dependencies
```

## モジュール構成
対象: `nuxt.config.ts`

### Nuxt modules
1. `@nuxtjs/tailwindcss`
- 役割: Tailwind CSS をNuxtへ統合。ユーティリティクラスで画面実装を行う。
- 主な利用箇所: `app/pages/index.vue`（レイアウト・余白・文字サイズなど）

2. `@nuxt/eslint`
- 役割: NuxtプロジェクトのLint統合。
- 補足: `eslint.config.stylistic: true` が有効化されている。

3. `@nuxt/icon`
- 役割: Iconコンポーネントを提供し、アイコンセットを利用可能にする。
- 主な利用箇所: `app/components/ShareButtons.vue` の `<Icon />`
- 補足: `icon.clientBundle.scan: true` により使用アイコンを走査してバンドル最適化。

4. `@vueuse/nuxt`
- 役割: VueUse Composables をNuxt環境で利用可能にする。
- 現状: 直接利用は限定的だが、拡張時の基盤として有効。

5. `@nuxt/test-utils/module`
- 役割: Nuxt向けテストユーティリティを組み込み、テスト環境を補助。
- 主な関連設定: `vitest.config.ts`

### モジュール間の実装上の関係
1. 画面実装: `@nuxtjs/tailwindcss` + Vue SFC（`app/pages/*`, `app/components/*`）
2. UIアイコン: `@nuxt/icon` + `@iconify-json/mdi`
3. 品質管理: `@nuxt/eslint` + `eslint` scripts
4. テスト基盤: `@nuxt/test-utils/module` + `vitest`

## 補足（保守時に重要）
- `clock.vue` の `color` クエリは厳密バリデーションしていないため、不正文字列を渡すと想定外のCSS挙動になる可能性がある。
- テストは現在 `app/composables/clock.ts` の `createClockString` 中心。クエリ解釈やURL生成は未テスト領域。
