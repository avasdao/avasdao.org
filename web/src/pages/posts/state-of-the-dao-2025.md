---
# src/pages/posts/state-of-the-dao-2025.md

title: "Ava's State Of The DAO 2025"
pubDate: 2025-03-20
description: "A mid-year status update on Ava's DAO infrastructure upgrades and maintenance mode."
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
    Ava's State of the DAO <span class="font-bold">2025</span>
</h1>

_Last Updated: 2025-03-20_

<p class="py-10 w-2/3 text-xl leading-9">
Welcome to our 3rd State of the DAO report.
This is a special mid-year edition to formally communicate to our community that Ava's DAO has entered <strong>Maintenance Mode</strong> while we undertake a comprehensive overhaul of our core infrastructure.
</p>

---

<div class="my-10 mx-auto max-w-3xl p-8 bg-amber-50 rounded-2xl border-2 border-amber-300 shadow-md text-center">
    <p class="text-5xl mb-4">🔧</p>
    <h2 class="text-3xl font-bold text-amber-800 uppercase tracking-wide">Maintenance Mode</h2>
    <p class="mt-3 text-lg text-amber-700 leading-8">
        Ava's DAO is currently in Maintenance Mode.
        All public-facing products remain operational, but <strong>no new features</strong> are being shipped.
        Our full engineering capacity is dedicated to infrastructure upgrades.
    </p>
    <p class="mt-4 text-sm text-amber-600 font-medium">
        There is currently no ETA for returning to Production Mode.
        Progress updates will be posted in Discord and on this page as milestones are reached.
    </p>
</div>

---

<h1 class="mt-10 text-4xl font-light text-rose-500">
    What Does "Maintenance Mode" Mean?
</h1>

<p class="mt-3 px-5 text-gray-700 leading-8">
    Maintenance Mode is a deliberate operational state in which the DAO pauses all new feature development to focus exclusively on strengthening, upgrading, and future-proofing the technical foundation that every product depends on.
</p>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
    <div class="bg-emerald-50 rounded-2xl p-5 border border-emerald-200">
        <h3 class="text-lg font-bold text-emerald-800 mb-2">✅ What IS happening</h3>
        <ul class="text-sm text-gray-700 leading-7 list-disc pl-5">
            <li>Critical bug fixes and security patches</li>
            <li>Infrastructure migration and re-architecture</li>
            <li>NexScript v2 smart contract rewrites</li>
            <li>Database and indexer performance overhaul</li>
            <li>CI/CD pipeline modernization</li>
            <li>Dependency audits and upgrades across all repos</li>
            <li>Internal documentation and runbook creation</li>
        </ul>
    </div>
    <div class="bg-red-50 rounded-2xl p-5 border border-red-200">
        <h3 class="text-lg font-bold text-red-800 mb-2">⏸ What is NOT happening</h3>
        <ul class="text-sm text-gray-700 leading-7 list-disc pl-5">
            <li>New feature releases for WiserSwap, Minado, or Causes Cash</li>
            <li>New token launches or airdrop campaigns</li>
            <li>New third-party integrations or partnerships</li>
            <li>Marketing campaigns or public events</li>
            <li>Onboarding of new core contributors</li>
        </ul>
    </div>
</div>

---

<h1 class="mt-10 text-4xl font-light text-rose-500">
    Why Now?
</h1>

<p class="mt-3 px-5 text-gray-700 leading-8">
    After two years of rapid product shipping (6 products in 2023, 3 major launches in 2024), our infrastructure accumulated significant technical debt.
    The Nexa protocol upgrade that activated on March 15, 2025 introduced fundamental changes to the VM scripting engine — read-only UTXOs, script machine registers, and increased script limits — that require a ground-up rewrite of our smart contract suite.
</p>

<p class="mt-3 px-5 text-gray-700 leading-8">
    Rather than patch contracts incrementally while shipping new features (and risk introducing vulnerabilities), we made the decision to pause, rebuild properly, and return to production with a dramatically more capable and secure stack.
</p>

<div class="my-6 mx-5 p-5 bg-gray-50 rounded-xl border border-gray-200 text-gray-700 leading-8">
    <strong class="text-gray-800">The honest truth:</strong>
    We could keep shipping. But we've watched other projects do that — duct-taping new features onto aging foundations until something breaks catastrophically.
    Our community trusts us to be better than that.
    Maintenance Mode is how we honor that trust.
</div>

---

<h1 class="mt-10 text-4xl font-light text-rose-500">
    Infrastructure Upgrade Scope
</h1>

<p class="mt-3 px-5 text-gray-700 leading-8">
    The following table outlines each workstream, its current status, and what it unblocks once complete.
</p>

<div class="my-8 overflow-x-auto">
<table class="w-full text-left border-collapse">
    <thead>
        <tr class="border-b-2 border-rose-200">
            <th class="py-3 px-4 text-rose-800 font-semibold">Workstream</th>
            <th class="py-3 px-4 text-rose-800 font-semibold">Description</th>
            <th class="py-3 px-4 text-rose-800 font-semibold text-center">Status</th>
            <th class="py-3 px-4 text-rose-800 font-semibold">Unblocks</th>
        </tr>
    </thead>
    <tbody class="text-gray-700">
        <tr class="border-b border-gray-100 bg-white">
            <td class="py-3 px-4 font-medium">NexScript v2 Contract Suite</td>
            <td class="py-3 px-4 text-sm">Full rewrite of all DAO smart contracts to leverage read-only UTXOs and script registers introduced in the March 2025 protocol upgrade</td>
            <td class="py-3 px-4 text-center"><span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700">In Progress</span></td>
            <td class="py-3 px-4 text-sm">WiserSwap v2, Minado v2, all future products</td>
        </tr>
        <tr class="border-b border-gray-100 bg-rose-50/40">
            <td class="py-3 px-4 font-medium">Custom Indexer (Rostrum Replacement)</td>
            <td class="py-3 px-4 text-sm">Purpose-built UTXO indexer targeting 10,000+ req/sec, replacing Rostrum's ~1,200 req/sec ceiling</td>
            <td class="py-3 px-4 text-center"><span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700">In Progress</span></td>
            <td class="py-3 px-4 text-sm">All on-chain queries, explorer, wallet backends</td>
        </tr>
        <tr class="border-b border-gray-100 bg-white">
            <td class="py-3 px-4 font-medium">NEXA.js v3 SDK</td>
            <td class="py-3 px-4 text-sm">Major version bump: tree-shakeable ESM build, native TypeScript, NexScript v2 helpers, and WebSocket-first architecture</td>
            <td class="py-3 px-4 text-center"><span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">Planning</span></td>
            <td class="py-3 px-4 text-sm">All frontend/backend apps, third-party devs</td>
        </tr>
        <tr class="border-b border-gray-100 bg-rose-50/40">
            <td class="py-3 px-4 font-medium">CI/CD & DevOps Overhaul</td>
            <td class="py-3 px-4 text-sm">Migration to containerized deployments, automated testing pipelines, staging environment parity, and reproducible builds</td>
            <td class="py-3 px-4 text-center"><span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">Complete</span></td>
            <td class="py-3 px-4 text-sm">Faster, safer deployments for all products</td>
        </tr>
        <tr class="border-b border-gray-100 bg-white">
            <td class="py-3 px-4 font-medium">Dependency Audit</td>
            <td class="py-3 px-4 text-sm">Full audit of all npm, Rust, and Python dependencies across every DAO repo; pin versions, remove unused packages, patch CVEs</td>
            <td class="py-3 px-4 text-center"><span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">Complete</span></td>
            <td class="py-3 px-4 text-sm">Reduced attack surface, smaller bundles</td>
        </tr>
        <tr class="border-b border-gray-100 bg-rose-50/40">
            <td class="py-3 px-4 font-medium">Database Migration</td>
            <td class="py-3 px-4 text-sm">Transition from single-node PostgreSQL to a replicated cluster with read replicas; schema normalization for multi-product support</td>
            <td class="py-3 px-4 text-center"><span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700">In Progress</span></td>
            <td class="py-3 px-4 text-sm">WiserSwap analytics, Minado feeds, API latency</td>
        </tr>
        <tr class="border-b border-gray-100 bg-white">
            <td class="py-3 px-4 font-medium">Internal Documentation & Runbooks</td>
            <td class="py-3 px-4 text-sm">Comprehensive ops runbooks, architecture decision records (ADRs), and onboarding guides for future contributors</td>
            <td class="py-3 px-4 text-center"><span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700">In Progress</span></td>
            <td class="py-3 px-4 text-sm">Faster onboarding, institutional knowledge preservation</td>
        </tr>
        <tr class="border-b border-gray-100 bg-rose-50/40">
            <td class="py-3 px-4 font-medium">$NXL + $STUDIO Token Migration</td>
            <td class="py-3 px-4 text-sm">Snapshot-based migration of legacy token contracts to NexScript v2 addresses with holder verification</td>
            <td class="py-3 px-4 text-center"><span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">Planning</span></td>
            <td class="py-3 px-4 text-sm">Brand consolidation, WiserSwap v2 trading pairs</td>
        </tr>
    </tbody>
</table>
</div>

---

<h1 class="mt-10 text-4xl font-light text-rose-500">
    Product Status Dashboard
</h1>

<p class="mt-3 px-5 text-gray-700 leading-8">
    All existing products remain online and functional. No services have been taken offline as part of Maintenance Mode.
    Below is the current operational status of each product.
</p>

<div class="my-8 overflow-x-auto">
<table class="w-full text-left border-collapse">
    <thead>
        <tr class="border-b-2 border-rose-200">
            <th class="py-3 px-4 text-rose-800 font-semibold">Product</th>
            <th class="py-3 px-4 text-rose-800 font-semibold text-center">Status</th>
            <th class="py-3 px-4 text-rose-800 font-semibold">Notes</th>
        </tr>
    </thead>
    <tbody class="text-gray-700">
        <tr class="border-b border-gray-100 bg-white">
            <td class="py-3 px-4 font-medium"><a href="https://wiserswap.com" class="text-blue-500 hover:underline">WiserSwap</a></td>
            <td class="py-3 px-4 text-center"><span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">Operational</span></td>
            <td class="py-3 px-4 text-sm">v1 live; swaps and LP functions working. No new pair listings until v2.</td>
        </tr>
        <tr class="border-b border-gray-100 bg-rose-50/40">
            <td class="py-3 px-4 font-medium"><a href="https://minado.io" class="text-blue-500 hover:underline">Minado</a></td>
            <td class="py-3 px-4 text-center"><span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">Operational</span></td>
            <td class="py-3 px-4 text-sm">Mining and content feeds active. No new engagement features until v2.</td>
        </tr>
        <tr class="border-b border-gray-100 bg-white">
            <td class="py-3 px-4 font-medium">Causes Cash</td>
            <td class="py-3 px-4 text-center"><span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">Operational</span></td>
            <td class="py-3 px-4 text-sm">Campaigns can be created and funded. Rainmaker and Launchpad functional.</td>
        </tr>
        <tr class="border-b border-gray-100 bg-rose-50/40">
            <td class="py-3 px-4 font-medium">NEXA.js SDK</td>
            <td class="py-3 px-4 text-center"><span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">Operational</span></td>
            <td class="py-3 px-4 text-sm">v2 stable on npm. Critical patches only until v3 begins.</td>
        </tr>
        <tr class="border-b border-gray-100 bg-white">
            <td class="py-3 px-4 font-medium">AVAS Staking</td>
            <td class="py-3 px-4 text-center"><span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">Operational</span></td>
            <td class="py-3 px-4 text-sm">Daily, monthly, and yearly reward distributions continue as scheduled.</td>
        </tr>
        <tr class="border-b border-gray-100 bg-rose-50/40">
            <td class="py-3 px-4 font-medium">CashFusion (Privacy)</td>
            <td class="py-3 px-4 text-center"><span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">Operational</span></td>
            <td class="py-3 px-4 text-sm">Fusion rounds running. Coordinator uptime: 99.8% YTD.</td>
        </tr>
    </tbody>
</table>
</div>

---

<h1 class="mt-10 text-4xl font-light text-rose-500">
    Treasury Overview (YTD through March 20, 2025)
</h1>

<p class="mt-3 px-5 text-gray-700 leading-8">
    With the DAO in Maintenance Mode, expenditures have been significantly lower than in previous years.
    Inflows continue from WiserSwap trading fees and staking reward recapture.
</p>

<div class="my-8 overflow-x-auto">
<table class="w-full text-left border-collapse">
    <thead>
        <tr class="border-b-2 border-rose-200">
            <th class="py-3 px-4 text-rose-800 font-semibold">Asset</th>
            <th class="py-3 px-4 text-rose-800 font-semibold text-right">Opening Balance (Jan 1)</th>
            <th class="py-3 px-4 text-rose-800 font-semibold text-right">Inflows (YTD)</th>
            <th class="py-3 px-4 text-rose-800 font-semibold text-right">Outflows (YTD)</th>
            <th class="py-3 px-4 text-rose-800 font-semibold text-right">Current Balance</th>
        </tr>
    </thead>
    <tbody class="text-gray-700">
        <tr class="border-b border-gray-100 bg-white">
            <td class="py-3 px-4 font-medium">NEXA</td>
            <td class="py-3 px-4 text-right">50,750,000</td>
            <td class="py-3 px-4 text-right text-emerald-600">+6,420,000</td>
            <td class="py-3 px-4 text-right text-red-500">-4,180,000</td>
            <td class="py-3 px-4 text-right font-semibold">52,990,000</td>
        </tr>
        <tr class="border-b border-gray-100 bg-rose-50/40">
            <td class="py-3 px-4 font-medium">AVAS</td>
            <td class="py-3 px-4 text-right">354,250,000</td>
            <td class="py-3 px-4 text-right text-emerald-600">+0</td>
            <td class="py-3 px-4 text-right text-red-500">-8,100,000</td>
            <td class="py-3 px-4 text-right font-semibold">346,150,000</td>
        </tr>
        <tr class="border-b border-gray-100 bg-white">
            <td class="py-3 px-4 font-medium">NXL</td>
            <td class="py-3 px-4 text-right">85,500,000</td>
            <td class="py-3 px-4 text-right text-emerald-600">+0</td>
            <td class="py-3 px-4 text-right text-red-500">-1,200,000</td>
            <td class="py-3 px-4 text-right font-semibold">84,300,000</td>
        </tr>
    </tbody>
</table>
</div>

<h2 class="mt-8 text-2xl font-medium text-rose-700 uppercase">
    YTD Expenditure Breakdown
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
            <td class="py-3 px-4 text-right">1,850,000</td>
            <td class="py-3 px-4 text-right">44.3%</td>
        </tr>
        <tr class="border-b border-gray-100 bg-rose-50/40">
            <td class="py-3 px-4">Core Development (contract rewrites)</td>
            <td class="py-3 px-4 text-right">1,600,000</td>
            <td class="py-3 px-4 text-right">38.3%</td>
        </tr>
        <tr class="border-b border-gray-100 bg-white">
            <td class="py-3 px-4">Security Audits & Patches</td>
            <td class="py-3 px-4 text-right">480,000</td>
            <td class="py-3 px-4 text-right">11.5%</td>
        </tr>
        <tr class="border-b border-gray-100 bg-rose-50/40">
            <td class="py-3 px-4">Operational / Misc</td>
            <td class="py-3 px-4 text-right">250,000</td>
            <td class="py-3 px-4 text-right">6.0%</td>
        </tr>
        <tr class="border-t-2 border-rose-200 font-bold">
            <td class="py-3 px-4">Total YTD</td>
            <td class="py-3 px-4 text-right">4,180,000</td>
            <td class="py-3 px-4 text-right">100%</td>
        </tr>
    </tbody>
</table>
</div>

<p class="px-5 text-sm text-gray-500 italic">
    Maintenance Mode has reduced the DAO's monthly burn rate by approximately 68% compared to the 2024 average.
    At the current burn rate, the NEXA treasury alone provides over 30 months of runway — before accounting for ongoing fee revenue.
</p>

---

<h1 class="mt-10 text-4xl font-light text-rose-500">
    Community & Governance
</h1>

<p class="mt-3 px-5 text-gray-700 leading-8">
    Governance remains active during Maintenance Mode. The decision to enter Maintenance Mode was itself ratified via on-chain proposal (Proposal #23, passed with 91.2% approval on January 8, 2025).
</p>

<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
    <div class="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
        <p class="text-3xl font-bold text-rose-600">4</p>
        <p class="text-sm text-gray-500 mt-1">Proposals Submitted (YTD)</p>
        <p class="text-xs text-gray-400 mt-1">3 passed · 1 under discussion</p>
    </div>
    <div class="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
        <p class="text-3xl font-bold text-rose-600">87%</p>
        <p class="text-sm text-gray-500 mt-1">Avg. Voter Participation</p>
        <p class="text-xs text-gray-400 mt-1">Highest annual rate to date</p>
    </div>
    <div class="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
        <p class="text-3xl font-bold text-rose-600">1,580</p>
        <p class="text-sm text-gray-500 mt-1">Discord Members</p>
        <p class="text-xs text-gray-400 mt-1">Up from 1,340 at year-end 2024</p>
    </div>
</div>

<h2 class="mt-5 text-2xl font-medium text-rose-700 uppercase">
    Notable Proposals
</h2>

<div class="my-6 overflow-x-auto">
<table class="w-full text-left border-collapse">
    <thead>
        <tr class="border-b-2 border-rose-200">
            <th class="py-3 px-4 text-rose-800 font-semibold">#</th>
            <th class="py-3 px-4 text-rose-800 font-semibold">Title</th>
            <th class="py-3 px-4 text-rose-800 font-semibold text-center">Result</th>
            <th class="py-3 px-4 text-rose-800 font-semibold text-right">Approval</th>
        </tr>
    </thead>
    <tbody class="text-gray-700">
        <tr class="border-b border-gray-100 bg-white">
            <td class="py-3 px-4 font-medium">23</td>
            <td class="py-3 px-4">Enter Maintenance Mode — pause feature development, redirect resources to infra</td>
            <td class="py-3 px-4 text-center"><span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">Passed</span></td>
            <td class="py-3 px-4 text-right">91.2%</td>
        </tr>
        <tr class="border-b border-gray-100 bg-rose-50/40">
            <td class="py-3 px-4 font-medium">24</td>
            <td class="py-3 px-4">Allocate 1.6M NEXA for NexScript v2 contract audit retainer</td>
            <td class="py-3 px-4 text-center"><span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">Passed</span></td>
            <td class="py-3 px-4 text-right">88.7%</td>
        </tr>
        <tr class="border-b border-gray-100 bg-white">
            <td class="py-3 px-4 font-medium">25</td>
            <td class="py-3 px-4">Extend AVAS staking reward epoch duration from 30 to 45 days during Maintenance Mode</td>
            <td class="py-3 px-4 text-center"><span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">Passed</span></td>
            <td class="py-3 px-4 text-right">79.4%</td>
        </tr>
        <tr class="border-b border-gray-100 bg-rose-50/40">
            <td class="py-3 px-4 font-medium">26</td>
            <td class="py-3 px-4">Community request: publish monthly infra progress updates in Discord</td>
            <td class="py-3 px-4 text-center"><span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">Voting</span></td>
            <td class="py-3 px-4 text-right">—</td>
        </tr>
    </tbody>
</table>
</div>

---

<h1 class="mt-10 text-4xl font-light text-rose-500">
    Year-over-Year Comparison
</h1>

<div class="my-8 overflow-x-auto">
<table class="w-full text-left border-collapse">
    <thead>
        <tr class="border-b-2 border-rose-200">
            <th class="py-3 px-4 text-rose-800 font-semibold">Metric</th>
            <th class="py-3 px-4 text-rose-800 font-semibold text-right">2023</th>
            <th class="py-3 px-4 text-rose-800 font-semibold text-right">2024</th>
            <th class="py-3 px-4 text-rose-800 font-semibold text-right">2025 (YTD)</th>
        </tr>
    </thead>
    <tbody class="text-gray-700">
        <tr class="border-b border-gray-100 bg-white">
            <td class="py-3 px-4">Products Shipped</td>
            <td class="py-3 px-4 text-right">6</td>
            <td class="py-3 px-4 text-right">3</td>
            <td class="py-3 px-4 text-right text-gray-400">0 (Maintenance Mode)</td>
        </tr>
        <tr class="border-b border-gray-100 bg-rose-50/40">
            <td class="py-3 px-4">AVAS Holders</td>
            <td class="py-3 px-4 text-right">1,247</td>
            <td class="py-3 px-4 text-right">2,860</td>
            <td class="py-3 px-4 text-right">3,140</td>
        </tr>
        <tr class="border-b border-gray-100 bg-white">
            <td class="py-3 px-4">NEXA Treasury</td>
            <td class="py-3 px-4 text-right">38.4M</td>
            <td class="py-3 px-4 text-right">50.8M</td>
            <td class="py-3 px-4 text-right">53.0M</td>
        </tr>
        <tr class="border-b border-gray-100 bg-rose-50/40">
            <td class="py-3 px-4">Monthly Burn Rate (avg)</td>
            <td class="py-3 px-4 text-right">2.03M</td>
            <td class="py-3 px-4 text-right">5.16M</td>
            <td class="py-3 px-4 text-right text-emerald-600">1.53M</td>
        </tr>
        <tr class="border-b border-gray-100 bg-white">
            <td class="py-3 px-4">Voter Participation</td>
            <td class="py-3 px-4 text-right">78%</td>
            <td class="py-3 px-4 text-right">84%</td>
            <td class="py-3 px-4 text-right">87%</td>
        </tr>
        <tr class="border-b border-gray-100 bg-rose-50/40">
            <td class="py-3 px-4">Discord Members</td>
            <td class="py-3 px-4 text-right">489</td>
            <td class="py-3 px-4 text-right">1,340</td>
            <td class="py-3 px-4 text-right">1,580</td>
        </tr>
        <tr class="border-b border-gray-100 bg-white">
            <td class="py-3 px-4">Core Contributors</td>
            <td class="py-3 px-4 text-right">12</td>
            <td class="py-3 px-4 text-right">16</td>
            <td class="py-3 px-4 text-right">16</td>
        </tr>
    </tbody>
</table>
</div>

---

<h1 class="mt-10 text-4xl font-light text-rose-500">
    Deprecation Update
</h1>

<p class="mt-3 px-5 text-gray-700 leading-8">
    The platform deprecations announced in the 2024 report are proceeding as planned.
    Maintenance Mode has not affected the deprecation timeline.
</p>

<div class="my-8 overflow-x-auto">
<table class="w-full text-left border-collapse">
    <thead>
        <tr class="border-b-2 border-rose-200">
            <th class="py-3 px-4 text-rose-800 font-semibold">Platform</th>
            <th class="py-3 px-4 text-rose-800 font-semibold">Successor</th>
            <th class="py-3 px-4 text-rose-800 font-semibold text-center">Status</th>
        </tr>
    </thead>
    <tbody class="text-gray-700">
        <tr class="border-b border-gray-100 bg-white">
            <td class="py-3 px-4">NEXA.exchange</td>
            <td class="py-3 px-4"><a href="https://wiserswap.com" class="text-blue-500 hover:underline">WiserSwap</a></td>
            <td class="py-3 px-4 text-center"><span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">Sunset Complete</span></td>
        </tr>
        <tr class="border-b border-gray-100 bg-rose-50/40">
            <td class="py-3 px-4">NexaSwap.com</td>
            <td class="py-3 px-4"><a href="https://wiserswap.com" class="text-blue-500 hover:underline">WiserSwap</a></td>
            <td class="py-3 px-4 text-center"><span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">Redirect Live</span></td>
        </tr>
        <tr class="border-b border-gray-100 bg-white">
            <td class="py-3 px-4">NEXA.garden</td>
            <td class="py-3 px-4">Causes Cash</td>
            <td class="py-3 px-4 text-center"><span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700">Migration In Progress</span></td>
        </tr>
        <tr class="border-b border-gray-100 bg-rose-50/40">
            <td class="py-3 px-4">NEXA.sh</td>
            <td class="py-3 px-4">Internal tooling</td>
            <td class="py-3 px-4 text-center"><span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700">Migration In Progress</span></td>
        </tr>
        <tr class="border-b border-gray-100 bg-white">
            <td class="py-3 px-4">NEXA.studio</td>
            <td class="py-3 px-4"><a href="https://minado.io" class="text-blue-500 hover:underline">Minado</a> dev tools</td>
            <td class="py-3 px-4 text-center"><span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">Planning</span></td>
        </tr>
    </tbody>
</table>
</div>

---

<h1 class="mt-10 text-4xl font-light text-rose-500">
    Frequently Asked Questions
</h1>

<div class="my-6 space-y-6 px-5">
    <div>
        <h3 class="text-lg font-semibold text-gray-800">When will Maintenance Mode end?</h3>
        <p class="mt-1 text-gray-600 leading-7">
            There is currently no ETA. We will not rush back to Production Mode until the infrastructure upgrades meet our quality and security standards. Progress updates will be shared regularly in Discord and on this page.
        </p>
    </div>
    <div>
        <h3 class="text-lg font-semibold text-gray-800">Are my staked AVAS tokens safe?</h3>
        <p class="mt-1 text-gray-600 leading-7">
            Yes. All staking contracts are on-chain and non-custodial. Maintenance Mode does not affect the security or accessibility of staked assets. Reward distributions continue as scheduled (now on 45-day epochs per Proposal #25).
        </p>
    </div>
    <div>
        <h3 class="text-lg font-semibold text-gray-800">Can I still use WiserSwap and Minado?</h3>
        <p class="mt-1 text-gray-600 leading-7">
            Yes. All products remain fully operational. You can swap tokens, provide liquidity, mine NXY, and create campaigns on Causes Cash. No features have been disabled.
        </p>
    </div>
    <div>
        <h3 class="text-lg font-semibold text-gray-800">Will there be new token listings on WiserSwap during Maintenance Mode?</h3>
        <p class="mt-1 text-gray-600 leading-7">
            No. New trading pair listings are paused until WiserSwap v2 launches on the upgraded NexScript v2 contracts.
        </p>
    </div>
    <div>
        <h3 class="text-lg font-semibold text-gray-800">What about the $NXL and $STUDIO token migrations?</h3>
        <p class="mt-1 text-gray-600 leading-7">
            These migrations are in the planning phase and depend on the NexScript v2 contract suite being completed. Holder snapshots will be announced well in advance. No action is required from holders at this time.
        </p>
    </div>
    <div>
        <h3 class="text-lg font-semibold text-gray-800">How can I stay updated?</h3>
        <p class="mt-1 text-gray-600 leading-7">
            Join our Discord for real-time updates. Governance proposals are publicly visible on-chain. Major milestones will also be posted on this transparency page.
        </p>
    </div>
</div>

---

<h1 class="mt-10 text-4xl font-light text-rose-500">
    Closing Remarks
</h1>

<p class="mt-3 px-5 text-gray-700 leading-8">
    Maintenance Mode is not a retreat — it's an investment. Every day we spend strengthening the foundation is a day that pays compound returns when we resume building.
</p>

<p class="mt-3 px-5 text-gray-700 leading-8">
    We know silence can be uncomfortable. In a space that rewards constant announcements and artificial hype, choosing to go quiet and focus on real work is a statement in itself. We would rather ship nothing for months and come back with infrastructure that lasts for years, than push out half-baked updates to appear busy.
</p>

<p class="mt-3 px-5 text-gray-700 leading-8">
    To our community: thank you for your patience, your continued governance participation, and your trust.
    The DAO is healthy. The treasury is strong. The team is heads-down building.
</p>

<p class="mt-6 px-5 text-lg text-rose-600 font-medium italic">
    Don't trust. Verify. And when it's time to build — build it right.
</p>

<p class="mt-10 px-5 text-sm text-gray-400">
    This report was prepared by the Ava's DAO core team and published on March 20, 2025.
    All financial figures are denominated in native token units and are verifiable on-chain.
    This is a living document — it will be updated as infrastructure milestones are reached.
    For questions or corrections, reach out in our Discord or open an issue on GitHub.
</p>

</main>
