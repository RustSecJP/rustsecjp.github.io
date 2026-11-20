---
title: RustSecJP
description: An unofficial community bringing Rust security knowledge — vulnerabilities, supply-chain attacks, binary analysis — to Japanese readers in a verifiable form.
lang: en
permalink: /en/
---
<div class="hero" markdown="0">
  <span class="badge-un">Unofficial community</span>
  <h1>RustSecJP</h1>
  <p class="lead">RustSecJP is an unofficial community that publishes Rust security material in Japanese. It covers vulnerabilities, supply-chain attacks and binary analysis, and states its sources and confidence.</p>
</div>

<h2 id="activities">Activities</h2>

Most of our content is written in Japanese.

<div class="cards" markdown="0">
  <a class="card" href="/incidents/">
    <span class="tag">Records</span>
    <h3>incidents</h3>
    <p>Malicious-crate attacks grouped by campaign, with the evidence and confidence for each link.</p>
  </a>
  <a class="card" href="/incidents/spec/severity-score.html">
    <span class="tag">Draft 0.1</span>
    <h3>RSJP Score</h3>
    <p>A Rust-specific severity scale: reachable from safe Rust? triggered at build time? how widely depended on?</p>
  </a>
  <a class="card" href="/incidents/calculator/">
    <span class="tag">Tool</span>
    <h3>Score calculator</h3>
    <p>Pick the metrics and get the score and its vector string.</p>
  </a>
</div>

<h2 id="translations">Japanese translations</h2>

Unofficial Japanese translations of Rust security documents. We only translate documents whose licenses permit it, and we state the source and the translated revision on every page.

<div class="cards" markdown="0">
  <a class="card" href="/rust-guide-ja/"><h3>Secure Rust Guidelines</h3><p>ANSSI's rules and recommendations for secure Rust development.</p><span class="orig">Source: ANSSI-FR/rust-guide</span></a>
  <a class="card" href="/cargo-vet-ja/"><h3>cargo-vet book</h3><p>Mozilla's guide to auditing and sharing audits of dependencies.</p><span class="orig">Source: mozilla/cargo-vet</span></a>
  <a class="card" href="/advisory-db-ja/"><h3>RustSec Advisory Database docs</h3><p>Overview, advisory format and how to file an advisory.</p><span class="orig">Source: rustsec/advisory-db</span></a>
  <a class="card" href="/trusted-publishing-ja/"><h3>crates.io Trusted Publishing</h3><p>Publishing crates from CI without long-lived API tokens.</p><span class="orig">Source: crates.io docs</span></a>
</div>

<h2 id="policy">Policy</h2>

1. We publish only what we have verified, and we state our confidence (high, medium, low).
2. We cite sources, and separate what we confirmed ourselves from what others reported.
3. We do not publish malware samples — only hashes and descriptions.
4. We correct mistakes promptly.

<h2 id="about">About</h2>

RustSecJP is an **unofficial** community. It is not affiliated with RustSec (the Rust Secure Code WG), the Rust Project, or the Rust Foundation, and it does not issue **RUSTSEC-** advisory IDs. To report a malicious crate, contact [crates.io](https://crates.io/policies).
