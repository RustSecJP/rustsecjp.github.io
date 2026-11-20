---
title: RustSecJP
lang: ja
---
<div class="hero" markdown="0">
  <span class="badge-un">非公式コミュニティ</span>
  <h1>RustSecJP</h1>
  <p class="lead">RustSecJP は、Rust のセキュリティに関する知見を日本語で公開する非公式のコミュニティです。脆弱性、サプライチェーン攻撃、バイナリ解析を対象とし、出典と確信度を明記して掲載します。</p>
</div>

<h2 id="activities">活動</h2>

<div class="cards" markdown="0">
  <a class="card" href="/incidents/campaigns/RSJP-C-2025-001/">
    <span class="tag">キャンペーン記録</span>
    <h3>RSJP-C-2025-001</h3>
    <p>finch を装う crate と、認証情報を盗む sha-* 依存。5 つの助言を 1 つの事件として束ねた記録。</p>
  </a>
  <a class="card" href="/incidents/">
    <span class="tag">記録</span>
    <h3>incidents</h3>
    <p>悪意のある crate による攻撃を、事件のまとまり（キャンペーン）単位で、根拠と確信度つきで整理します。</p>
  </a>
  <a class="card" href="https://github.com/RustSecJP/incidents/issues">
    <span class="tag">募集中</span>
    <h3>記事の候補</h3>
    <p>これから書く題材の一覧。出典の追加や誤りの指摘を歓迎します。</p>
  </a>
</div>

<h2 id="translations">日本語訳</h2>

英語でしか読めない Rust のセキュリティ文書の、非公式な日本語訳です。ライセンスが翻訳と公開を認めているものだけを訳し、出典と訳した版を明記しています。

<div class="cards" markdown="0">
  <a class="card" href="/rust-guide-ja/">
    <span class="tag">全 11 章</span>
    <h3>安全な Rust アプリケーション開発の指針</h3>
    <p>フランスの政府機関 ANSSI による、Rust のセキュアコーディングの規則と推奨。</p>
    <span class="orig">原文: ANSSI「Secure Rust Guidelines」</span>
  </a>
  <a class="card" href="/cargo-vet-ja/">
    <span class="tag">全 24 章</span>
    <h3>cargo-vet ガイド</h3>
    <p>依存クレートの監査を記録し、プロジェクトの間で共有するためのツールの公式ガイド。</p>
    <span class="orig">原文: Mozilla「cargo-vet book」</span>
  </a>
  <a class="card" href="/advisory-db-ja/">
    <span class="tag">全 4 文書</span>
    <h3>RustSec Advisory Database の文書</h3>
    <p>脆弱性データベース RustSec の概要、助言の書式、報告の手順。</p>
    <span class="orig">原文: rustsec/advisory-db の README・CONTRIBUTING ほか</span>
  </a>
  <a class="card" href="/trusted-publishing-ja/">
    <span class="tag">1 文書</span>
    <h3>crates.io の Trusted Publishing</h3>
    <p>API トークンを置かずに、CI からクレートを公開する仕組みの公式ドキュメント。</p>
    <span class="orig">原文: crates.io「Trusted Publishing」</span>
  </a>
</div>

<h2 id="policy">方針</h2>

1. 検証できた情報だけを公開し、確信度（高・中・低）を明記します。
2. 出典を明記します。他者の報告に拠る部分と、自分たちで確認した部分を分けて書きます。
3. マルウェアの現物は公開しません。ハッシュと説明のみを載せます。
4. 誤りが見つかった場合は、速やかに訂正します。

<h2 id="report">悪意のある crate を見つけたら</h2>

<div class="note" markdown="1">
RustSecJP は報告の窓口ではありません。疑わしい crate は [crates.io](https://crates.io/policies) へ報告してください。脆弱性は、その crate の開発元へ報告したうえで、[RustSec の手順](/advisory-db-ja/how-to-report.html)に従ってください。
</div>

<h2 id="join">関わる</h2>

質問や指摘は、各リポジトリの Issues へお願いします。誤訳の指摘や訳語の提案、記事の題材の提案を歓迎します。

- [GitHub: RustSecJP](https://github.com/RustSecJP)

<h2 id="about">RustSecJP について</h2>

RustSecJP は**非公式**のコミュニティです。RustSec（Rust Secure Code WG）、Rust Project、Rust Foundation とは提携しておらず、公式の組織ではありません。**RUSTSEC-** から始まる助言 ID の発行も行いません。
