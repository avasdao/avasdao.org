---
# src/pages/posts/state-of-the-dao-2023.md

title: "Ava's State Of The DAO 2023"
pubDate: 2023-12-31
description: "A recap of all Ava's activities over the course of 2023."
author: 'Shomari'
image:
    url: 'https://avasdao.org/icon.png'
    alt: "Ava's DAO logo"
tags: ["dao", "news", "official"]
---

<main class="max-w-5xl p-5 mx-auto leading-9">

<a href="/transparency" class="text-sm font-medium text-slate-500 tracking-wider hover:text-rose-400">
    ⇠ back to transparency
</a>

<h1 class="py-5 text-5xl text-center font-light text-rose-500">
    Ava's State of the DAO <span class="font-bold">2023</span>
</h1>

_Last Updated: 2023-12-31_

<p class="py-10 w-2/3 text-xl leading-9">
Welcome to our very 1st State of the DAO annual report.
You will learn about ALL of the activities that our team achieved through the year.
This report covers treasury performance, ecosystem growth, technical milestones, and our forward-looking roadmap for 2024.
</p>

---

<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 my-10">
    <div class="bg-rose-50 rounded-2xl p-5 text-center border border-rose-100">
        <p class="text-3xl font-bold text-rose-600">6</p>
        <p class="text-sm text-gray-500 mt-1">Products Shipped</p>
    </div>
    <div class="bg-rose-50 rounded-2xl p-5 text-center border border-rose-100">
        <p class="text-3xl font-bold text-rose-600">1,247</p>
        <p class="text-sm text-gray-500 mt-1">AVAS Holders</p>
    </div>
    <div class="bg-rose-50 rounded-2xl p-5 text-center border border-rose-100">
        <p class="text-3xl font-bold text-rose-600">38.4M</p>
        <p class="text-sm text-gray-500 mt-1">NEXA Staked</p>
    </div>
    <div class="bg-rose-50 rounded-2xl p-5 text-center border border-rose-100">
        <p class="text-3xl font-bold text-rose-600">12</p>
        <p class="text-sm text-gray-500 mt-1">Core Contributors</p>
    </div>
</div>

---

<h1 class="mt-10 text-4xl font-light text-rose-500">
    Treasury Overview
</h1>

<p class="mt-3 px-5 text-gray-700 leading-8">
    Ava's DAO treasury is managed entirely on-chain with full public auditability.
    Below is a summary of treasury holdings and flows for the calendar year ending December 31, 2023.
</p>

<div class="my-8 overflow-x-auto">
<table class="w-full text-left border-collapse">
    <thead>
        <tr class="border-b-2 border-rose-200">
            <th class="py-3 px-4 text-rose-800 font-semibold">Asset</th>
            <th class="py-3 px-4 text-rose-800 font-semibold text-right">Opening Balance (Jan 1)</th>
            <th class="py-3 px-4 text-rose-800 font-semibold text-right">Inflows</th>
            <th class="py-3 px-4 text-rose-800 font-semibold text-right">Outflows</th>
            <th class="py-3 px-4 text-rose-800 font-semibold text-right">Closing Balance (Dec 31)</th>
        </tr>
    </thead>
    <tbody class="text-gray-700">
        <tr class="border-b border-gray-100 bg-white">
            <td class="py-3 px-4 font-medium">NEXA</td>
            <td class="py-3 px-4 text-right">10,500,000</td>
            <td class="py-3 px-4 text-right text-emerald-600">+52,300,000</td>
            <td class="py-3 px-4 text-right text-red-500">-24,360,000</td>
            <td class="py-3 px-4 text-right font-semibold">38,440,000</td>
        </tr>
        <tr class="border-b border-gray-100 bg-rose-50/40">
            <td class="py-3 px-4 font-medium">AVAS</td>
            <td class="py-3 px-4 text-right">500,000,000</td>
            <td class="py-3 px-4 text-right text-emerald-600">+0</td>
            <td class="py-3 px-4 text-right text-red-500">-62,150,000</td>
            <td class="py-3 px-4 text-right font-semibold">437,850,000</td>
        </tr>
    </tbody>
</table>
</div>

<p class="px-5 text-sm text-gray-500 italic">
    All values denominated in native token units. AVAS outflows reflect staking reward distributions and contributor vesting.
    Full on-chain records are publicly verifiable via NexaShell explorer.
</p>

<h2 class="mt-8 text-2xl font-medium text-rose-700 uppercase">
    Expenditure Breakdown
</h2>

<div class="my-6 overflow-x-auto">
<table class="w-full text-left border-collapse">
    <thead>
        <tr class="border-b-2 border-rose-200">
            <th class="py-3 px-4 text-rose-800 font-semibold">Category</th>
            <th class="py-3 px-4 text-rose-800 font-semibold text-right">NEXA Spent</th>
            <th class="py-3 px-4 text-rose-800 font-semibold text-right">% of Total</th>
        </tr>
    </thead>
    <tbody class="text-gray-700">
        <tr class="border-b border-gray-100 bg-white">
            <td class="py-3 px-4">Infrastructure & Hosting</td>
            <td class="py-3 px-4 text-right">8,200,000</td>
            <td class="py-3 px-4 text-right">33.7%</td>
        </tr>
        <tr class="border-b border-gray-100 bg-rose-50/40">
            <td class="py-3 px-4">Core Development</td>
            <td class="py-3 px-4 text-right">9,750,000</td>
            <td class="py-3 px-4 text-right">40.0%</td>
        </tr>
        <tr class="border-b border-gray-100 bg-white">
            <td class="py-3 px-4">Community Grants & Bounties</td>
            <td class="py-3 px-4 text-right">3,410,000</td>
            <td class="py-3 px-4 text-right">14.0%</td>
        </tr>
        <tr class="border-b border-gray-100 bg-rose-50/40">
            <td class="py-3 px-4">Marketing & Outreach</td>
            <td class="py-3 px-4 text-right">2,000,000</td>
            <td class="py-3 px-4 text-right">8.2%</td>
        </tr>
        <tr class="border-b border-gray-100 bg-white">
            <td class="py-3 px-4">Miscellaneous / Reserve</td>
            <td class="py-3 px-4 text-right">1,000,000</td>
            <td class="py-3 px-4 text-right">4.1%</td>
        </tr>
        <tr class="border-t-2 border-rose-200 font-bold">
            <td class="py-3 px-4">Total</td>
            <td class="py-3 px-4 text-right">24,360,000</td>
            <td class="py-3 px-4 text-right">100%</td>
        </tr>
    </tbody>
</table>
</div>

---

![What we've accomplished](/img/banners/accomplished-23.jpg)
<h1 class="mt-10 text-5xl font-light text-rose-500">
    What We've Accomplished
</h1>

<p class="mt-2 px-5 text-gray-600">
    2023 was a foundational year. We shipped six major products, established core infrastructure for the Nexa ecosystem, and grew our contributor base from 3 to 12 active members.
</p>

<ol class="mt-3 pl-10 list-decimal">
<li>
    <strong>Formation of Ava's DAO —</strong>
    Introducing the premier decentralized autonomous organization on Nexa's L1 blockchain. Managed by the $AVAS token; which serves as a staking asset for daily, monthly and yearly rewards.
</li>
<li>
    <strong>Re-launch of Causes Cash —</strong>
    A fully permissionless, non-custodial campaign management platform was brought back online with a modernized UI and two flagship modules: Rainmaker (airdrops) and Launchpad (crowdfunding). Over 340 campaigns were created by year-end.
</li>
<li>
    <strong>Introduction of NEXA.js —</strong>
    The first comprehensive JavaScript SDK for the Nexa blockchain, providing wallet management, transaction building, token operations, and smart contract interaction out of the box. Published to npm with 1,890+ weekly downloads by December.
</li>
<li>
    <strong>Nexa Studio —</strong>
    A browser-based IDE and deployment tool for Nexa smart contracts. Supports syntax highlighting, one-click testnet deployment, and integrated debugging. Used internally by all DAO contributors and opened in public beta in Q4.
</li>
<li>
    <strong>NexaShell —</strong>
    A next-generation block explorer and developer CLI for Nexa. Replaced reliance on third-party explorers and achieved 99.97% uptime across Q3–Q4 with an average query response time of 42 ms.
</li>
<li>
    <strong>Meta (EVM) Testnet —</strong>
    Launched a public EVM-compatible testnet bridged to Nexa's L1, enabling Solidity developers to experiment with cross-chain asset transfers. Processed 18,400+ test transactions during the three-month pilot period.
</li>
</ol>

<h2 class="mt-5 text-2xl font-medium text-rose-700 uppercase">
    Formation of Ava's DAO
</h2>

<p class="px-5">
    Introducing the premier decentralized autonomous organization on Nexa's L1 blockchain. Managed by the $AVAS token; which serves as a staking asset for daily, monthly and yearly rewards.
</p>

<div class="my-4 mx-5 p-4 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-600 leading-7">
    <strong class="text-gray-800">Key milestones:</strong><br/>
    • <strong>Q1 2023</strong> — DAO charter ratified by founding members; AVAS token minted with a fixed supply of 1 billion.<br/>
    • <strong>Q2 2023</strong> — First staking epoch launched; 247 unique wallets staked within the first 30 days.<br/>
    • <strong>Q4 2023</strong> — Holder count surpassed 1,200; daily reward distribution automated via on-chain script.
</div>

<h2 class="mt-5 text-2xl font-medium text-rose-700 uppercase">
    Re-launch of Causes Cash
</h2>

<p class="px-5">
    A campaign management platform for individuals and teams to use for community-based campaigns.
The platform is 100% permissionless and non-custodial. All funds are safu from any and all centralized controls.
Featured benefits of the platform include:

Rainmaker — airdrop campaign manager

Launchpad — crowdfunding campaign manager
</p>

<div class="my-4 mx-5 p-4 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-600 leading-7">
    <strong class="text-gray-800">By the numbers:</strong><br/>
    • 340 campaigns created<br/>
    • 12,600+ unique participants across all campaigns<br/>
    • 6.1M NEXA distributed through Rainmaker airdrops<br/>
    • Zero custodial incidents — all funds settled directly to recipient wallets
</div>

<h2 class="mt-5 text-2xl font-medium text-rose-700 uppercase">
    Introduction of NEXA.js
</h2>

<p class="px-5">
    The foundational JavaScript library for everything Nexa.
    NEXA.js provides a unified API surface for wallet creation, UTXO management, token minting, and script evaluation — giving developers a single dependency to build full-featured Nexa applications in Node.js or the browser.
</p>

<div class="my-4 mx-5 p-4 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-600 leading-7">
    <strong class="text-gray-800">Adoption stats (as of Dec 31, 2023):</strong><br/>
    • 1,890 weekly npm downloads<br/>
    • 74 GitHub stars / 23 forks<br/>
    • 4 community-contributed plugins<br/>
    • Integrated into Causes Cash, Nexa Studio, and NexaShell
</div>

---

<h1 class="mt-10 text-5xl font-light text-rose-500">
    Our Vision (where you are)
</h1>

Reaffirming our deployed infrastructure remains our #1 priority. After witnessing the slow degradation within the Bitcoin Cash (BCH) community that occurred over years, it's critical to maintain consistently peak performance.

NexaShell (https://nexa.sh) is the cornerstone of our plans to scale. Notably, Rostrum offers similar performance bottlenecks as its predecessors, namely Fulcrum (for Bitcoin Cash) and ElectrumX (for Bitcoin).

<div class="my-6 mx-5 p-5 bg-amber-50 rounded-xl border border-amber-200 text-gray-700 leading-8">
    <strong class="text-amber-800">⚠ Infrastructure Priority Note:</strong>
    Our internal benchmarks show Rostrum throughput plateaus at approximately 1,200 requests/sec under sustained load — comparable to Fulcrum's ceiling on BCH.
    In 2024, we plan to invest heavily in a custom indexing layer to push beyond 10,000 req/sec, ensuring the network can support the next wave of consumer-facing applications.
</div>

---

<h1 class="mt-10 text-5xl font-light text-rose-500">
    Community & Governance
</h1>

<p class="mt-3 px-5 text-gray-700 leading-8">
    Decentralized governance is the soul of Ava's DAO. In 2023, we established the foundational processes for on-chain decision making and grew an active contributor community.
</p>

<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
    <div class="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
        <p class="text-3xl font-bold text-rose-600">14</p>
        <p class="text-sm text-gray-500 mt-1">Proposals Submitted</p>
        <p class="text-xs text-gray-400 mt-1">11 passed · 2 rejected · 1 withdrawn</p>
    </div>
    <div class="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
        <p class="text-3xl font-bold text-rose-600">78%</p>
        <p class="text-sm text-gray-500 mt-1">Avg. Voter Participation</p>
        <p class="text-xs text-gray-400 mt-1">Measured by staked AVAS weight</p>
    </div>
    <div class="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
        <p class="text-3xl font-bold text-rose-600">489</p>
        <p class="text-sm text-gray-500 mt-1">Discord Members</p>
        <p class="text-xs text-gray-400 mt-1">Up from 61 in January</p>
    </div>
</div>

---

<h1 class="mt-10 text-5xl font-light text-rose-500">
    How We See The Future...
</h1>

<p class="mt-3 px-5 text-gray-700 leading-8">
Next year we're preparing to GO BIG!
Our plans include:
</p>

<ol class="pl-10 list-decimal">
    <li>
        <strong>WiserSwap: Decentralized Exchange (DEX) —</strong>
        A fully on-chain, non-custodial automated market maker (AMM) for Nexa-native tokens. Targeted for mainnet launch in Q2 2024 with initial NEXA/AVAS and NEXA/USDT pairs.
    </li>
    <li>
        <strong>Nxy Social + Token Mining —</strong>
        A decentralized social platform where content creation and curation is rewarded with mineable NXY tokens. Proof-of-engagement mining is designed to bootstrap an organic content ecosystem without centralized moderation.
    </li>

<li>
    <strong>Awesome Nexa Directory + Web Portal —</strong>
    A curated, community-maintained directory of every project, tool, and resource in the Nexa ecosystem — searchable, categorized, and open for pull-request submissions. Think "awesome-lists" meets a living web portal.
</li>
<li>
    <strong>Nexa (Instant) Swap —</strong>
    A cross-chain atomic swap service enabling trustless exchanges between NEXA and major assets (BTC, BCH, ETH) with sub-60-second settlement. Built on HTLC scripts native to Nexa's scripting engine.
</li>
<li>
    <strong>Nexa Exchange —</strong>
    A hybrid order-book exchange with on-chain settlement, targeting institutional and high-volume traders who need deterministic execution and transparent fee structures. Planned public beta in Q4 2024.
</li>

</ol>

---

<h2 class="mt-8 text-2xl font-medium text-rose-700 uppercase">
    2024 Budget Forecast
</h2>

<div class="my-6 overflow-x-auto">
<table class="w-full text-left border-collapse">
    <thead>
        <tr class="border-b-2 border-rose-200">
            <th class="py-3 px-4 text-rose-800 font-semibold">Category</th>
            <th class="py-3 px-4 text-rose-800 font-semibold text-right">Projected NEXA</th>
            <th class="py-3 px-4 text-rose-800 font-semibold text-right">% of Budget</th>
        </tr>
    </thead>
    <tbody class="text-gray-700">
        <tr class="border-b border-gray-100 bg-white">
            <td class="py-3 px-4">WiserSwap DEX Development</td>
            <td class="py-3 px-4 text-right">15,000,000</td>
            <td class="py-3 px-4 text-right">27.3%</td>
        </tr>
        <tr class="border-b border-gray-100 bg-rose-50/40">
            <td class="py-3 px-4">Infrastructure Scaling (indexer rewrite)</td>
            <td class="py-3 px-4 text-right">12,000,000</td>
            <td class="py-3 px-4 text-right">21.8%</td>
        </tr>
        <tr class="border-b border-gray-100 bg-white">
            <td class="py-3 px-4">Nxy Social + Token Mining</td>
            <td class="py-3 px-4 text-right">10,000,000</td>
            <td class="py-3 px-4 text-right">18.2%</td>
        </tr>
        <tr class="border-b border-gray-100 bg-rose-50/40">
            <td class="py-3 px-4">Community Grants & Bounties</td>
            <td class="py-3 px-4 text-right">8,000,000</td>
            <td class="py-3 px-4 text-right">14.5%</td>
        </tr>
        <tr class="border-b border-gray-100 bg-white">
            <td class="py-3 px-4">Marketing, Events & Partnerships</td>
            <td class="py-3 px-4 text-right">5,000,000</td>
            <td class="py-3 px-4 text-right">9.1%</td>
        </tr>
        <tr class="border-b border-gray-100 bg-rose-50/40">
            <td class="py-3 px-4">Operational Reserve</td>
            <td class="py-3 px-4 text-right">5,000,000</td>
            <td class="py-3 px-4 text-right">9.1%</td>
        </tr>
        <tr class="border-t-2 border-rose-200 font-bold">
            <td class="py-3 px-4">Total Projected</td>
            <td class="py-3 px-4 text-right">55,000,000</td>
            <td class="py-3 px-4 text-right">100%</td>
        </tr>
    </tbody>
</table>
</div>

---

<h1 class="mt-10 text-5xl font-light text-rose-500">
    Closing Remarks
</h1>

<p class="mt-3 px-5 text-gray-700 leading-8">
    2023 was the year we laid the foundation. Every product shipped, every line of code committed, and every AVAS token staked brought us closer to the vision of a truly decentralized, self-sustaining ecosystem on Nexa.
</p>

<p class="mt-3 px-5 text-gray-700 leading-8">
    We enter 2024 with a battle-tested treasury, a growing contributor base, and an ambitious roadmap. The road ahead is long, but the DAO is built to endure.
</p>

<p class="mt-6 px-5 text-lg text-rose-600 font-medium italic">
    Don't trust. Verify. And build.
</p>

<p class="mt-10 px-5 text-sm text-gray-400">
    This report was prepared by the Ava's DAO core team and ratified by community vote on December 31, 2023.
    All financial figures are denominated in native token units and are verifiable on-chain.
    For questions or corrections, reach out in our Discord or open an issue on GitHub.
</p>

</main>
