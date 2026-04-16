---
title: "The threat model — Priver"
seo:
  title: "The threat model — Priver"
  description: "How every mainstream messenger leaks your data, why the EU's Chat Control breaks them all, and what Priver's architecture does differently. Every claim sourced."
  canonical: "https://getpriver.org/threat-model/"
  og_image: "/web-app-manifest-512x512.png"
  og_type: "article"
  twitter_card: "summary"
blocks:
  - _component: hero
    badge:
      text: "Deep dive — back to Priver home"
      href: "/"
      pulse: true
    heading: "The threat **model.**"
    description: "How every mainstream messenger leaks your data, why the EU's Chat Control breaks them all, and what Priver's architecture does differently. Every claim on this page is sourced."
    buttons:
      - text: "Start with the problem"
        href: "#problem"
        variant: primary
        size: md
        icon_right: "lucide:arrow-down"
      - text: "Jump to comparison"
        href: "#comparison"
        variant: secondary
        size: md
    stats:
      - { label: "Servers", value: "0" }
      - { label: "Phone numbers", value: "None" }
      - { label: "Transport", value: "Tor" }
      - { label: "License", value: "Open" }

  - _component: article-cards-grid
    id: problem
    background: zinc-50
    label: "The problem"
    heading: "Every message you've ever sent *has passed through someone else's hands.*"
    description: "Already read, or readable tomorrow. Not maybe. Not possibly. **Certainly.**"
    cards:
      - title: "SMS"
        description: "Your carrier logs who you text and when — retained anywhere from 60 days to 7 years. In the US, law enforcement can pull that metadata with a subpoena, no warrant required."
        source_text: "Source: ACLU / DOJ retention chart →"
        source_href: "https://www.aclu.org/news/national-security/how-long-your-cell-phone-company-hanging-your-data"
      - title: "Email"
        description: "Google stopped scanning Gmail for ad targeting in 2017 — but their systems still process every message for spam filtering, search, and Smart Compose. Microsoft does the same. Indexed. Retained. Readable."
        source_text: "Source: NPR (2017) →"
        source_href: "https://www.npr.org/sections/thetwo-way/2017/06/26/534451513/google-says-it-will-no-longer-read-users-emails-to-sell-targeted-ads"
      - title: "WhatsApp"
        description: "Owned by Meta. Message bodies are end-to-end encrypted — but a leaked 2021 FBI document shows WhatsApp hands over metadata in near real time: who you talk to, when, and your address book. And Meta sells attention for a living."
        source_text: "Source: Rolling Stone / leaked FBI doc →"
        source_href: "https://www.rollingstone.com/politics/politics-features/whatsapp-imessage-facebook-apple-fbi-privacy-1261816/"
      - title: "Telegram"
        description: "Not end-to-end encrypted by default. Cloud chats sit on Telegram's servers — encrypted, but with keys Telegram holds. After their CEO's arrest in France (2024), Telegram now hands IP addresses and phone numbers to law enforcement on valid legal requests."
        source_text: "Source: CNN →"
        source_href: "https://edition.cnn.com/2024/09/23/tech/telegram-ceo-durov-arrest-user-data-changes"
      - title: "iMessage"
        description: "Backed up to iCloud by default — where Apple holds the keys and can hand it over. \"Advanced Data Protection\" (opt-in since Dec 2022) closes this gap, but most users never enable it."
        source_text: "Source: Apple iCloud data security overview →"
        source_href: "https://support.apple.com/en-us/102651"
      - title: "Signal"
        description: "The gold standard — until now. Still relies on centralized servers. Still requires a phone number to register. Those servers can be subpoenaed; Signal publishes every request it receives. And there's a new threat coming."
        source_text: "Source: signal.org/bigbrother →"
        source_href: "https://signal.org/bigbrother/"
      - title: "Threema"
        description: "Doesn't require a phone number, apps are open source — good. But still runs on centralized servers in Switzerland. Still a company. Still a single point that can be compelled, hacked, or shut down."
        source_text: "Source: Threema (open source) →"
        source_href: "https://threema.com/en/why-threema/open-source"
      - title: "Wire"
        description: "End-to-end encrypted, open source — but stores your contact graph on their servers. Metadata is exposed. Wire is a company with investors, meaning it answers to someone."
        source_text: "Source: Wikipedia / Motherboard (contact graph) →"
        source_href: "https://en.wikipedia.org/wiki/Wire_(software)"
      - title: "Briar"
        description: "Genuinely P2P, genuinely private. Android and desktop (Linux, Windows, macOS). No iOS, and the developers say none is planned. A tool for the few, not the many."
        source_text: "Source: Briar download page →"
        source_href: "https://briarproject.org/download-briar-desktop/"
    closer: "**The pattern is clear.** Every messenger you've heard of has a server. Every server has an owner. Every owner can be forced."

  - _component: chat-control-callout
    label: "Pending legislation"
    heading: "The EU Chat Control regulation."
    paragraphs:
      - "The proposed EU \"CSA Regulation\" — widely known as Chat Control — would require **every messaging platform** operating in Europe, including Signal, WhatsApp, iMessage and Telegram, to scan private messages for prohibited content. Negotiations between EU institutions are ongoing into 2026."
    bullets:
      - "End-to-end encryption? Broken by design."
      - "Your private conversations? No longer private."
    quote_cards:
      - body: "Signal's president: <span class=\"text-zinc-900\">\"We will leave the EU market rather than undermine our privacy guarantees.\"</span>"
        source: "Source: Meredith Whittaker (May 2024) →"
        href: "https://x.com/mer__edith/status/1796508893822238881"
      - body: "WhatsApp's head Will Cathcart: the proposal \"would do away with end-to-end encryption as we know it.\""
        source: "Source: EFF explainer →"
        href: "https://www.eff.org/deeplinks/2025/12/after-years-controversy-eus-chat-control-nears-its-final-hurdle-what-know"
    status:
      text: "Current status: Chat Control 1.0's voluntary-scanning derogation expired 3 April 2026. Chat Control 2.0 remains under trilogue negotiation."
      link_text: "Background (Patrick Breyer MEP) →"
      href: "https://www.patrick-breyer.de/en/posts/chat-control/"
    closer: "Which leaves you with nothing. **Unless you have Priver.**"

  - _component: feature-grid
    id: solution
    label: "The solution"
    heading: "Priver is built different. *Fundamentally different.*"
    description: "Not \"we promise we don't look.\" Not \"trust us.\" Not \"we're a nonprofit.\""
    bullets:
      - text: "There is no server to subpoena."
      - text: "There is no company that holds your data."
      - text: "There is no one to comply — because there is no one in between."
    subheading: "How it works"
    columns: 3
    cards:
      - icon: "lucide:key-round"
        title: "No accounts. No phone numbers."
        description: "Your identity is a cryptographic key pair generated on your device. Nobody issues it. Nobody can revoke it. Nobody knows it exists."
      - icon: "lucide:globe-lock"
        title: "No central servers."
        description: "Messages travel directly from your device to theirs — through Tor, which hides your IP, your location, and the fact that you're communicating at all."
      - icon: "lucide:lock"
        title: "End-to-end encrypted with Signal Protocol."
        description: "The same Double Ratchet algorithm used by Signal — but without Signal's servers. Every message gets a unique key. Past messages stay safe even if your device is compromised today."
      - icon: "lucide:network"
        title: "Decentralized discovery."
        description: "Finding another Priver user doesn't require a directory. It uses a distributed hash table — the same technology that powers BitTorrent — with no central point that can be shut down or seized."
      - icon: "lucide:code-2"
        title: "Open source. Always."
        description: "Every line of code is public. Any researcher, security expert, or curious developer can verify exactly what Priver does and doesn't do. No black boxes. No trust required."
      - icon: "lucide:check"
        title: "By design, not by promise."
        description: "Privacy isn't a marketing claim — it's the architecture. Take any link out and the system still respects you."
        variant: highlight

  - _component: comparison-table
    id: comparison
    label: "The comparison"
    heading: "What others can't promise. *What Priver does by design.*"
    columns:
      - "SMS"
      - "Email"
      - "WhatsApp"
      - "Telegram"
      - "Signal"
      - "Threema"
      - "Wire"
      - "Briar"
      - "Priver"
    highlight_last: true
    rows:
      - capability: "End-to-end encrypted"
        verdicts: [no, no, yes, partial, yes, yes, yes, yes, yes]
      - capability: "No central servers"
        verdicts: [no, no, no, no, no, no, no, yes, yes]
      - capability: "No phone number required"
        verdicts: [no, no, no, no, no, yes, yes, yes, yes]
      - capability: "IP address hidden"
        verdicts: [no, no, no, no, no, no, no, yes, yes]
      - capability: "iOS + Android support"
        verdicts: [yes, yes, yes, yes, yes, yes, yes, no, yes]
      - capability: "Cannot comply with Chat Control"
        verdicts: [no, no, no, no, no, no, no, yes, yes]
      - capability: "Open source protocol"
        verdicts: [no, yes, no, no, yes, no, yes, yes, yes]
      - capability: "Self-hostable"
        verdicts: [no, yes, no, no, no, no, no, yes, yes]
    legend: "Telegram is end-to-end encrypted only in opt-in \"Secret Chats\" — not by default."

  - _component: feature-grid
    id: architecture
    label: "How it's built"
    heading: "Three layers. *Zero compromise.*"
    columns: 3
    cards:
      - layer_number: "Layer 01"
        layer_subtitle: "Specification"
        title: "Priver Protocol"
        description: "The open standard. Published under an open license. Anyone can implement it, audit it, build on it. A communication protocol designed for the post-Chat-Control world."
      - layer_number: "Layer 02"
        layer_subtitle: "Reference client"
        title: "Priver App"
        description: "The reference implementation. Available for iOS, Android, and desktop. Simple enough for anyone. Secure enough for everyone."
      - layer_number: "Layer 03"
        layer_subtitle: "Federated bridge"
        title: "Priver Gateway"
        description: "The self-hosted bridge for iOS push notifications. Because Apple requires a server to wake up sleeping apps — we made it open source, federated, and operated by the community. You can run your own. The gateway never sees your messages. It only knocks on the door."

  - _component: feature-grid
    background: zinc-50
    label: "Who it's for"
    heading: "Priver is for everyone who has ever **assumed their messages were private.**"
    columns: 5
    cards:
      - { title: "Journalists", description: "protecting sources.", variant: plain }
      - { title: "Lawyers", description: "communicating with clients.", variant: plain }
      - { title: "Activists", description: "organizing in countries that criminalize dissent.", variant: plain }
      - { title: "Businesses", description: "discussing deals that can't leak.", variant: plain }
      - { title: "Families", description: "who just want to talk without being a product.", variant: plain }
    closing:
      primary: "And everyone in between."
      secondary: "Privacy isn't a feature for the paranoid. It's a right for everyone."

  - _component: protocol-section
    id: protocol
    label: "Open protocol"
    heading: "Built to outlast any company — **including us.**"
    paragraphs:
      - "Priver is a protocol, not a platform. Like email, like HTTP, like TCP/IP — it doesn't belong to anyone. It can't be bought, shut down, or forced to comply."
      - "The specification is public. The code is open. The network is distributed."
    callout:
      quote: "If **Jetlio** disappeared tomorrow, Priver would continue. Other developers would build clients. Other operators would run gateways. The protocol lives independently of the organization that created it."
      punchline: "That's the point."
      cards:
        - { label: "Spec", value: "Public" }
        - { label: "Code", value: "Open" }
        - { label: "Network", value: "Distributed" }

  - _component: download-cta
    id: download
    label: "Get Priver"
    heading: "Start talking privately."
    description: "Download Priver for iOS, Android, or desktop. Or read the protocol specification."
    buttons:
      - { variant: platform, text: "iOS",     platform_label: "Download for", icon_left: "simple-icons:apple",   href: "#" }
      - { variant: platform, text: "Android", platform_label: "Download for", icon_left: "simple-icons:android", href: "#" }
      - { variant: platform, text: "Desktop", platform_label: "Download for", icon_left: "lucide:monitor",       href: "#" }
      - { variant: header,   text: "Read the Protocol", href: "https://github.com/priver-protocol", icon_right: "lucide:arrow-right", external: true }
    footer_note: "Developed by Jetlio. Owned by no one."
---
