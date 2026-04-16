---
title: "Priver — Your message. Nobody else's."
seo:
  title: "Priver — Your message. Nobody else's."
  description: "Priver is a serverless, end-to-end encrypted messaging protocol built for the post-Chat-Control world. No accounts. No phone numbers. No central servers. No company that holds your data."
  canonical: "https://getpriver.org/"
  og_image: "/web-app-manifest-512x512.png"
  og_type: "website"
  twitter_card: "summary"
blocks:
  - _component: hero
    badge:
      text: "An open protocol — not a product"
      pulse: true
    heading: "Your message. **Nobody else's.**"
    description: "Priver is a serverless, end-to-end encrypted messaging protocol. No accounts. No phone numbers. No central servers. No company that can be subpoenaed — because there is no one in between."
    buttons:
      - text: "Download"
        href: "#download"
        variant: primary
        size: md
        icon_right: "lucide:arrow-right"
      - text: "Learn more"
        href: "#solution"
        variant: secondary
        size: md
    stats:
      - { label: "Servers", value: "0" }
      - { label: "Phone numbers", value: "None" }
      - { label: "Transport", value: "Tor" }
      - { label: "License", value: "Open" }

  - _component: feature-grid
    id: why
    background: zinc-50
    label: "Why Priver"
    heading: "The messenger that *works when the others can't.*"
    description: "Not just for privacy people. For anyone who's ever lost an account, watched a platform go down, or wondered why a messenger needs their phone number."
    columns: 3
    cards:
      - icon: "lucide:badge-check"
        title: "Your account can't be banned."
        description: "Your identity is a key on your device. Nobody can lock you out, wipe your history, or decide you broke a rule you never heard of."
      - icon: "lucide:smartphone"
        title: "Your number stays yours."
        description: "Share a QR or a link — not your phone number. No strangers finding you from a leaked contacts list. No being added to groups you didn't ask for."
      - icon: "lucide:zap"
        title: "Works when platforms don't."
        description: "Messages travel directly between your device and theirs. No servers to outage. No region to block. No company between you and the person you're talking to."
      - icon: "lucide:ban"
        title: "No ads. Ever."
        description: "Priver is a protocol, not a business. There's no feed to monetise, no attention to sell, no \"sponsored messages\" coming to a future update."
      - icon: "lucide:key-round"
        title: "Your chats are yours."
        description: "You keep your history. You keep your keys. No cloud that forgets your password or raises its price. No terms of service to change the rules later."
      - icon: "lucide:lock"
        title: "Nobody reads over your shoulder."
        description: "End-to-end encrypted by default — the same math Signal uses. Not \"we promise not to look.\" Math."

  - _component: cta-banner
    label: "Going deeper"
    heading: "Want the full threat model?"
    description: "If you're a journalist, lawyer, activist, or just curious about exactly how every mainstream messenger leaks your data — read the deep dive. Every claim sourced. Side-by-side comparison. Why Chat Control doesn't touch Priver."
    button:
      text: "Read the threat model"
      href: "/threat-model/"
      variant: primary
      size: md
      icon_right: "lucide:arrow-right"

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
      - title: "Journalists"
        description: "protecting sources."
        variant: plain
      - title: "Lawyers"
        description: "communicating with clients."
        variant: plain
      - title: "Activists"
        description: "organizing in countries that criminalize dissent."
        variant: plain
      - title: "Businesses"
        description: "discussing deals that can't leak."
        variant: plain
      - title: "Families"
        description: "who just want to talk without being a product."
        variant: plain
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
      - variant: platform
        text: "iOS"
        platform_label: "Download for"
        icon_left: "simple-icons:apple"
        href: "#"
      - variant: platform
        text: "Android"
        platform_label: "Download for"
        icon_left: "simple-icons:android"
        href: "#"
      - variant: platform
        text: "Desktop"
        platform_label: "Download for"
        icon_left: "lucide:monitor"
        href: "#"
      - variant: header
        text: "Read the Protocol"
        href: "https://github.com/priver-protocol"
        icon_right: "lucide:arrow-right"
        external: true
    footer_note: "Developed by Jetlio. Owned by no one."
---
