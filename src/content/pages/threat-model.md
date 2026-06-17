---
blocks:
    - _component: hero
      badge:
        href: /
        pulse: true
        text: Deep dive — back to Priver home
      buttons:
        - href: '#problem'
          icon_right: lucide:arrow-down
          size: md
          text: Start with the problem
          variant: primary
        - href: '#comparison'
          size: md
          text: Jump to comparison
          variant: secondary
      description: How every mainstream messenger leaks your data, why the EU's Chat Control breaks them all, and what Priver's architecture does differently. Every claim on this page is sourced.
      heading: The threat **model.**
      stats:
        - label: Servers
          sublabel: Nothing to subpoena
          value: "0"
        - label: Phone numbers
          sublabel: Nothing to leak
          value: None
        - label: Transport
          sublabel: Nothing to trace
          value: Tor
        - label: License
          sublabel: Nothing to hide
          value: Open
    - _component: article-cards-grid
      background: zinc-50
      cards:
        - description: Your carrier logs who you text and when — retained anywhere from 60 days to 7 years. In the US, law enforcement can pull that metadata with a subpoena, no warrant required.
          source_href: https://www.aclu.org/news/national-security/how-long-your-cell-phone-company-hanging-your-data
          source_text: 'Source: ACLU / DOJ retention chart →'
          title: SMS
        - description: Google stopped scanning Gmail for ad targeting in 2017 — but their systems still process every message for spam filtering, search, and Smart Compose. Microsoft does the same. Indexed. Retained. Readable.
          source_href: https://www.npr.org/sections/thetwo-way/2017/06/26/534451513/google-says-it-will-no-longer-read-users-emails-to-sell-targeted-ads
          source_text: 'Source: NPR (2017) →'
          title: Email
        - description: 'Owned by Meta. Message bodies are end-to-end encrypted — but a leaked 2021 FBI document shows WhatsApp hands over metadata in near real time: who you talk to, when, and your address book. And Meta sells attention for a living.'
          source_href: https://www.rollingstone.com/politics/politics-features/whatsapp-imessage-facebook-apple-fbi-privacy-1261816/
          source_text: 'Source: Rolling Stone / leaked FBI doc →'
          title: WhatsApp
        - description: Not end-to-end encrypted by default. Cloud chats sit on Telegram's servers — encrypted, but with keys Telegram holds. After their CEO's arrest in France (2024), Telegram now hands IP addresses and phone numbers to law enforcement on valid legal requests.
          source_href: https://edition.cnn.com/2024/09/23/tech/telegram-ceo-durov-arrest-user-data-changes
          source_text: 'Source: CNN →'
          title: Telegram
        - description: Backed up to iCloud by default — where Apple holds the keys and can hand it over. "Advanced Data Protection" (opt-in since Dec 2022) closes this gap, but most users never enable it.
          source_href: https://support.apple.com/en-us/102651
          source_text: 'Source: Apple iCloud data security overview →'
          title: iMessage
        - description: The gold standard — until now. Still relies on centralized servers. Still requires a phone number to register. Those servers can be subpoenaed; Signal publishes every request it receives. And there's a new threat coming.
          source_href: https://signal.org/bigbrother/
          source_text: 'Source: signal.org/bigbrother →'
          title: Signal
        - description: Doesn't require a phone number, apps are open source — good. But still runs on centralized servers in Switzerland. Still a company. Still a single point that can be compelled, hacked, or shut down.
          source_href: https://threema.com/en/why-threema/open-source
          source_text: 'Source: Threema (open source) →'
          title: Threema
        - description: End-to-end encrypted, open source — but stores your contact graph on their servers. Metadata is exposed. Wire is a company with investors, meaning it answers to someone.
          source_href: https://en.wikipedia.org/wiki/Wire_(software)
          source_text: 'Source: Wikipedia / Motherboard (contact graph) →'
          title: Wire
        - description: Genuinely P2P, genuinely private. Android and desktop (Linux, Windows, macOS). No iOS, and the developers say none is planned. A tool for the few, not the many.
          source_href: https://briarproject.org/download-briar-desktop/
          source_text: 'Source: Briar download page →'
          title: Briar
      closer: '**The pattern is clear.** Every messenger you''ve heard of has a server. Every server has an owner. Every owner can be forced.'
      description: Already read, or readable tomorrow. Not maybe. Not possibly. **Certainly.**
      heading: Every message you've ever sent *has passed through someone else's hands*
      id: problem
      label: The problem
    - _component: chat-control-callout
      bullets:
        - End-to-end encryption? Broken by design.
        - Your private conversations? No longer private.
      closer: Which leaves you with nothing. **Unless you have Priver.**
      heading: The EU Chat Control regulation.
      label: Pending legislation
      paragraphs:
        - The proposed EU "CSA Regulation" — widely known as Chat Control — would require **every messaging platform** operating in Europe, including Signal, WhatsApp, iMessage and Telegram, to scan private messages for prohibited content. Negotiations between EU institutions are ongoing into 2026.
      quote_cards:
        - body: 'Signal''s president: <span class="text-zinc-900">"We will leave the EU market rather than undermine our privacy guarantees."</span>'
          href: https://x.com/mer__edith/status/1796508893822238881
          source: 'Source: Meredith Whittaker (May 2024) →'
        - body: 'WhatsApp''s head Will Cathcart: the proposal "would do away with end-to-end encryption as we know it."'
          href: https://www.eff.org/deeplinks/2025/12/after-years-controversy-eus-chat-control-nears-its-final-hurdle-what-know
          source: 'Source: EFF explainer →'
      status:
        href: https://www.patrick-breyer.de/en/posts/chat-control/
        link_text: Background (Patrick Breyer MEP) →
        text: 'Current status: Chat Control 1.0''s voluntary-scanning derogation expired 3 April 2026. Chat Control 2.0 remains under trilogue negotiation.'
    - _component: feature-grid
      bullets:
        - text: There is no server to subpoena.
        - text: There is no company that holds your data.
        - text: There is no one to comply — because there is no one in between.
      cards:
        - description: Your identity is a cryptographic key pair generated on your device. Nobody issues it. Nobody can revoke it. Nobody knows it exists.
          icon: lucide:key-round
          title: No accounts. No phone numbers.
        - description: Messages travel directly from your device to theirs — through Tor, which hides your IP, your location, and the fact that you're communicating at all.
          icon: lucide:globe-lock
          title: No central servers.
        - description: The same Double Ratchet algorithm used by Signal — but without Signal's servers. Every message gets a unique key. Past messages stay safe even if your device is compromised today.
          icon: lucide:lock
          title: End-to-end encrypted with Signal Protocol.
        - description: Finding another Priver user doesn't require a directory. It uses a distributed hash table — the same technology that powers BitTorrent — with no central point that can be shut down or seized.
          icon: lucide:network
          title: Decentralized discovery.
        - description: Every line of code is public. Any researcher, security expert, or curious developer can verify exactly what Priver does and doesn't do. No black boxes. No trust required.
          icon: lucide:code-2
          title: Open source. Always.
        - description: Not "we promise we don't look." Not "trust us." Not "we're a nonprofit." Privacy isn't a marketing claim — it's the architecture.
          icon: lucide:check
          title: By design, not by promise.
          variant: highlight
      columns: 3
      description: 'Signal proved that end-to-end encryption could be easy. Priver takes the next step: removing the servers, the phone numbers, and the single organization that could be forced to comply.'
      heading: Priver is built different. *Fundamentally different.*
      id: solution
      label: The solution
      subheading: How it works
    - _component: comparison-table
      columns:
        - SMS
        - Email
        - WhatsApp
        - Telegram
        - Signal
        - Threema
        - Wire
        - Briar
        - Priver
      heading: What others can't promise. *What Priver does by design.*
      highlight_last: true
      id: comparison
      label: The comparison
      legend: Telegram is end-to-end encrypted only in opt-in "Secret Chats" — not by default.
      rows:
        - capability: End-to-end encrypted
          verdicts:
            - "no"
            - "no"
            - "yes"
            - partial
            - "yes"
            - "yes"
            - "yes"
            - "yes"
            - "yes"
        - capability: No central servers
          verdicts:
            - "no"
            - "no"
            - "no"
            - "no"
            - "no"
            - "no"
            - "no"
            - "yes"
            - "yes"
        - capability: No phone number required
          verdicts:
            - "no"
            - "no"
            - "no"
            - "no"
            - "no"
            - "yes"
            - "yes"
            - "yes"
            - "yes"
        - capability: IP address hidden
          verdicts:
            - "no"
            - "no"
            - "no"
            - "no"
            - "no"
            - "no"
            - "no"
            - "yes"
            - "yes"
        - capability: iOS + Android support
          verdicts:
            - "yes"
            - "yes"
            - "yes"
            - "yes"
            - "yes"
            - "yes"
            - "yes"
            - "no"
            - "yes"
        - capability: Cannot comply with Chat Control
          verdicts:
            - "no"
            - "no"
            - "no"
            - "no"
            - "no"
            - "no"
            - "no"
            - "yes"
            - "yes"
        - capability: Open source protocol
          verdicts:
            - "no"
            - "yes"
            - "no"
            - "no"
            - "yes"
            - "no"
            - "yes"
            - "yes"
            - "yes"
        - capability: Self-hostable
          verdicts:
            - "no"
            - "yes"
            - "no"
            - "no"
            - "no"
            - "no"
            - "no"
            - "yes"
            - "yes"
    - _component: feature-grid
      cards:
        - description: The open standard. Published under an open license. Anyone can implement it, audit it, build on it. A communication protocol designed for the post-Chat-Control world.
          layer_number: Layer 01
          layer_subtitle: Specification
          title: Priver Protocol
        - description: The reference implementation. Available for iOS, Android, and desktop. Simple enough for anyone. Secure enough for everyone.
          layer_number: Layer 02
          layer_subtitle: Reference client
          title: Priver App
        - description: The self-hosted bridge for iOS push notifications. Because Apple requires a server to wake up sleeping apps — we made it open source, federated, and operated by the community. You can run your own. The gateway never sees your messages. It only knocks on the door.
          layer_number: Layer 03
          layer_subtitle: Federated bridge
          title: Priver Gateway
      columns: 3
      heading: Three layers. *Zero compromise.*
      id: architecture
      label: How it's built
    - _component: feature-grid
      background: zinc-50
      cards:
        - description: because a source's safety may depend on your inbox.
          href: /for/journalists/
          title: Journalists
          variant: plain
        - description: because privilege means nothing if the server can be read.
          title: Lawyers
          variant: plain
        - description: because organizing shouldn't require risking your freedom.
          title: Activists
          variant: plain
        - description: because one leaked conversation can cost more than a breach.
          title: Businesses
          variant: plain
        - description: because your dinner-table conversations aren't anyone's business model.
          title: Families
          variant: plain
      closing:
        primary: And everyone in between.
        secondary: Privacy isn't a feature for the paranoid. It's a right for everyone.
      columns: 5
      heading: Priver is for everyone who has ever **assumed their messages were private.**
      label: Who it's for
    - _component: protocol-section
      callout:
        cards:
            - label: Spec
              value: Public
            - label: Code
              value: Open
            - label: Network
              value: Distributed
        punchline: That's the point.
        quote: If **Jetlio** disappeared tomorrow, Priver would continue. Other developers would build clients. Other operators would run gateways. The protocol lives independently of the organization that created it.
      heading: Built to outlast any company — **including us.**
      id: protocol
      label: Open protocol
      paragraphs:
        - Priver is a protocol, not a platform. Like email, like HTTP, like TCP/IP — it doesn't belong to anyone. It can't be bought, shut down, or forced to comply.
        - The specification is public. The code is open. The network is distributed.
    - _component: download-cta
      buttons:
        - href: '#'
          icon_left: simple-icons:apple
          platform_label: Download for
          text: iOS
          variant: platform
        - href: '#'
          icon_left: simple-icons:android
          platform_label: Download for
          text: Android
          variant: platform
        - href: '#'
          icon_left: lucide:monitor
          platform_label: Download for
          text: Desktop
          variant: platform
        - external: true
          href: https://github.com/priver-protocol
          icon_right: lucide:arrow-right
          text: Read the Protocol
          variant: header
      description: Get Priver for iOS, Android, or desktop. Or read the protocol specification.
      footer_note: Developed by Jetlio. Owned by no one.
      heading: Start a conversation only you two can hear.
      id: download
      label: Get Priver
seo:
    canonical: https://getpriver.org/threat-model/
    description: How every mainstream messenger leaks your data, why the EU's Chat Control breaks them all, and what Priver's architecture does differently. Every claim sourced.
    og_image: /web-app-manifest-512x512.png
    og_type: article
    title: The threat model — Priver
    twitter_card: summary
title: The threat model — Priver
---
