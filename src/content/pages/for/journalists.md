---
title: "Priver for Journalists — Protect your sources. Protect yourself."
seo:
  title: "Priver for Journalists — Protect your sources. Protect yourself."
  description: "Your source trusts you with their safety. Priver is the only messenger where there's no server to subpoena, no metadata to seize, and no company that can be compelled to hand over your conversations."
  canonical: "https://getpriver.org/for/journalists/"
  og_image: "/web-app-manifest-512x512.png"
  og_type: "website"
  twitter_card: "summary"
blocks:
  - _component: hero
    badge:
      text: "Priver for journalists"
      href: "/"
      pulse: true
    heading: "Protect your sources. **Protect yourself.**"
    description: "Every major messenger has a server. Every server has an owner. Every owner can be subpoenaed, hacked, or compelled. Priver has none of these — because there is no one in between."
    buttons:
      - text: "Get Priver"
        href: "#download"
        variant: primary
        size: md
        icon_right: "lucide:arrow-right"
      - text: "Read the threat model"
        href: "/threat-model/"
        variant: secondary
        size: md
    stats:
      - { label: "Servers", value: "0", sublabel: "Nothing to subpoena" }
      - { label: "Phone numbers", value: "None", sublabel: "Nothing to leak" }
      - { label: "Transport", value: "Tor", sublabel: "Nothing to trace" }
      - { label: "Metadata stored", value: "Zero", sublabel: "Nothing to seize" }

  - _component: split-feature
    id: problem
    label: "The problem"
    heading: "The tools you trust *are already compromised.*"
    description: "You use Signal because it's \"the gold standard.\" But Signal still requires a phone number — a number tied to your identity, your carrier, your location history. Signal still runs on centralized servers. Those servers can be subpoenaed. And the EU's proposed Chat Control regulation would force every platform operating in Europe to scan private messages before encryption."
    bullets:
      - icon: "lucide:phone"
        text: "**Signal** requires your phone number. That number links to your carrier, your billing address, and your call history."
      - icon: "lucide:server"
        text: "**WhatsApp** hands over metadata in near real time — who you talk to, when, and how often. A leaked FBI document confirmed this in 2021."
      - icon: "lucide:cloud"
        text: "**Telegram** is not end-to-end encrypted by default. After the CEO's arrest in France, it now hands IP addresses and phone numbers to law enforcement."
    callout:
      quote: "A journalist's right to protect their sources means nothing if the messenger itself is the evidence."

  - _component: scenario-cards
    id: scenarios
    background: zinc-50
    label: "Real-world scenarios"
    heading: "What happens when *someone comes looking.*"
    description: "These aren't hypotheticals. They're the situations investigative journalists face every year."
    cards:
      - icon: "lucide:scale"
        scenario: "A court orders your messaging provider to hand over records."
        without: "The provider complies. Even if message bodies are encrypted, metadata reveals who your source is, when you talked, and how often. That pattern alone is enough to identify a whistleblower."
        with_priver: "There is no provider. There is no server. There are no records. The court order has no one to serve it to."
      - icon: "lucide:scan-search"
        scenario: "A government agency surveils your communication patterns."
        without: "Your IP address connects to Signal's or WhatsApp's servers. Your phone number is registered. Metadata flows through infrastructure that can be tapped, logged, and analyzed."
        with_priver: "Messages travel through Tor — your IP is hidden, your location is masked, and the fact that you're communicating at all is concealed. No central infrastructure to tap."
      - icon: "lucide:smartphone"
        scenario: "Your phone is seized at a border crossing."
        without: "If your cloud backups are on, your full chat history is accessible. Even without backups, your contact list reveals your network. Your phone number ties to your real identity."
        with_priver: "Your identity is a cryptographic key, not a phone number. There's no cloud backup to subpoena. Even if the device is compromised, past messages can't be decrypted — every message uses a unique key that's destroyed after use."
      - icon: "lucide:shield-alert"
        scenario: "The EU Chat Control regulation passes."
        without: "Every messenger operating in Europe — Signal, WhatsApp, iMessage, Telegram — must scan messages before encryption. End-to-end encryption is broken by law. Signal has said it will leave the EU entirely."
        with_priver: "There is no company to regulate. There is no server in any jurisdiction. There is no point where scanning can be injected. The protocol cannot comply — not because it refuses to, but because it can't."

  - _component: split-feature
    id: how-it-works
    background: white
    label: "How it works"
    heading: "Built for the people who *need privacy most.*"
    description: "Priver isn't a company making promises. It's a protocol making promises impossible to break."
    reverse: true
    bullets:
      - icon: "lucide:key-round"
        text: "**No phone number, no account.** Your identity is a key pair generated on your device. Share it via QR code or link. Nobody issues it. Nobody can revoke it."
      - icon: "lucide:route"
        text: "**Messages travel through Tor.** No IP address exposed. No location metadata. No way to prove two devices communicated."
      - icon: "lucide:lock"
        text: "**Signal Protocol encryption — without Signal's servers.** The same Double Ratchet algorithm, with forward secrecy. Each message gets a unique key. Past messages stay safe even if your device is compromised today."
      - icon: "lucide:network"
        text: "**Decentralized discovery.** Find other Priver users through a distributed hash table — no central directory that can be seized or shut down."
    callout:
      quote: "Signal proved that end-to-end encryption could be easy. Priver takes the next step: removing the servers, the phone numbers, and the single organization that could be forced to comply."

  - _component: feature-grid
    background: zinc-50
    label: "What this means for your work"
    heading: "The freedoms that *matter to journalists.*"
    columns: 3
    cards:
      - icon: "lucide:user-round-x"
        title: "Source protection by architecture."
        description: "There is no metadata trail. No contact list on a server. No record that you and your source ever communicated. Protection isn't a policy — it's a mathematical guarantee."
      - icon: "lucide:globe"
        title: "Works across borders."
        description: "No region blocks. No carrier dependencies. No government can shut down a server that doesn't exist. File from anywhere, communicate from anywhere."
      - icon: "lucide:ban"
        title: "Can't be banned or restricted."
        description: "Your identity is a key on your device. No platform can suspend your account, delete your history, or decide you violated terms of service."
      - icon: "lucide:hard-drive"
        title: "You control your data."
        description: "Chat history lives on your device. No cloud backup you didn't choose. No terms of service that grant a company rights to your content."
      - icon: "lucide:code-2"
        title: "Fully open source."
        description: "Every line of code is public. Your publication's security team can audit exactly what Priver does. No black boxes. No trust required."
      - icon: "lucide:check"
        title: "By design, not by promise."
        description: "Not \"we promise we don't look.\" Not \"trust us.\" Not \"we're a nonprofit.\" There is nothing to look at, nothing to trust, and no one who could change that."
        variant: highlight

  - _component: cta-banner
    label: "Go deeper"
    heading: "Read the full threat model."
    description: "A side-by-side comparison of every major messenger — what they log, what they hand over, and why Chat Control breaks them all. Every claim sourced."
    button:
      text: "Read the threat model"
      href: "/threat-model/"
      variant: primary
      size: md
      icon_right: "lucide:arrow-right"

  - _component: download-cta
    id: download
    label: "Get Priver"
    heading: "Protect the conversation. **Protect the source.**"
    description: "Get Priver for iOS, Android, or desktop. Or read the protocol specification."
    buttons:
      - { variant: platform, text: "iOS",     platform_label: "Download for", icon_left: "simple-icons:apple",   href: "#" }
      - { variant: platform, text: "Android", platform_label: "Download for", icon_left: "simple-icons:android", href: "#" }
      - { variant: platform, text: "Desktop", platform_label: "Download for", icon_left: "lucide:monitor",       href: "#" }
      - { variant: header,   text: "Read the Protocol", href: "https://github.com/priver-protocol", icon_right: "lucide:arrow-right", external: true }
    footer_note: "Developed by Jetlio. Owned by no one."
---
