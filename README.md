# NextGenAI — Corporate Web Platform

> **Empowering Careers. Accelerating Business. Engineering the Future.**  
> *Connecting Global Talent. Driving Business Growth. Delivering Intelligent Technology.*

A complete, modern, premium, animated, and fully responsive corporate website for **NextGenAI**, engineered specifically for seamless deployment on **GitHub Pages**.

---

## 🚀 Live Demo & Repository
- **Production URL:** [https://murtuzadeveloper.github.io/](https://murtuzadeveloper.github.io/)
- **Platform Architecture:** React 18 / TypeScript / Vite / Tailwind CSS / Lucide Icons / HTML5 Canvas

---

## 🌟 Key Sections & Features

1. **Brand Identity & Executive Positioning:**
   - Dark cyberpunk-inspired corporate aesthetics (midnight blue `#070b19`, deep navy `#0b1124`, electric cyan `#00f0ff`, and violet `#8b5cf6`).
   - Pure abstract AI graphics, vector circuits, and interactive mathematical canvas animations with **zero decorative human background photos**.

2. **Sticky Responsive Navigation Bar:**
   - Brand logo mark with glowing neural SVG nexus.
   - Smooth anchor scrolling across Home, About Us, Services, Industries, Pricing, How It Works, and Contact.
   - Transparent header that dynamically transitions to frosted glass (`backdrop-blur-md`) on scroll.
   - Prominent gradient CTA button: **"Let's Connect"**.
   - Fully accessible mobile drawer menu.

3. **High-Impact Hero Section:**
   - Interactive 3D abstract AI core visualization with rotating holographic rings, pulsing synapse nodes, and real-time telemetry chips.
   - Animated capability badges:
     - 🌐 Global Career Development
     - 📈 Intelligent Business Growth
     - ⚡ AI-Powered Technology

4. **About NextGenAI:**
   - *"One Partner. Multiple Growth Opportunities."*
   - Interactive breakdown of Global Opportunities, Business Growth, and Intelligent Technology with feature checklists and glassmorphic cards.

5. **Comprehensive Interactive Services (7 Cards):**
   - **Service 1:** Global Careers & Recruitment Support (Karachi nationwide & international job-search support with explicit regulatory disclaimers).
   - **Service 2:** Business Development & Customer Acquisition (B2B lead generation, prospecting, sales pipelines).
   - **Service 3:** Artificial Intelligence & Intelligent Automation (Generative AI, enterprise assistants, RAG, agents).
   - **Service 4:** Software Development & IT Solutions (Custom web platforms, APIs, mobile apps, cloud architectures).
   - **Service 5:** Cybersecurity & Security Technology (Hardening, authorized vulnerability assessments, zero-trust).
   - **Service 6:** Digital Transformation & Business Consulting (Strategy, process optimization, AI adoption).
   - **Service 7:** IT Consulting (Technical architecture blueprints, vendor selection, infrastructure).
   - Each card features interactive hover glows and instant inquiry pre-filling into the contact form.

6. **Industries We Serve:**
   - 14 interactive industry cards featuring domain readiness telemetry: IT, AI, Banking & FinTech, Healthcare & HealthTech, Cybersecurity, E-Commerce, Telecom, Manufacturing, Logistics, Education, Real Estate, Marketing, Recruitment, and Energy.

7. **Why Choose NextGenAI (6 Differentiators):**
   - Global Opportunities, AI-Driven Innovation, Business-Focused Strategy, Customized Solutions, Integrated Expertise, Future-Ready Technology. Strictly adheres to truth in advertising without fabricated metrics.

8. **Scope-Based Transparent Pricing:**
   - **Karachi Job Search Package:** Starting from PKR 100,000.
   - **International Job Search Package:** Starting from PKR 1,000,000.
   - **Business & Technology Solutions:** Custom Pricing based on tailored scope.
   - Clear terms stated: all deliverables, duration, and terms agreed prior to payment; career packages do not guarantee employment, offers, or visas.

9. **Structured 7-Step Engagement Protocol (How It Works):**
   - Step 1: Choose Your Service
   - Step 2: Submit Your Requirements
   - Step 3: Discuss Your Needs
   - Step 4: Review the Agreement
   - Step 5: Complete Payment
   - Step 6: Submit Your Receipt
   - Step 7: Begin the Service

10. **Verified Payment & Remittance Information:**
    - Dedicated expandable accordion section keeping marketing tidy while offering verified coordinates:
      - **Bank:** Meezan Bank
      - **Account Title:** MURTUZA KHALID
      - **Account Number:** `99330102571482`
      - **IBAN:** `PK68MEZN0099330102571482`
    - One-click copy-to-clipboard for every individual coordinate with instant feedback.
    - Verified payment safety notice and direct receipt submission channel.

11. **Client Inquiry & WhatsApp Dispatch System:**
    - Client-side validation for Name, Email, WhatsApp, Country, Service, Budget, and Requirements.
    - Generates a pre-formatted, encrypted dispatch packet directly linking to official WhatsApp (`+923060824762`).
    - Copy text modal and zero false submissions.
    - Persistent bottom-right floating WhatsApp button with quick-chat launcher.

12. **Footer Attribution:**
    - Displays the required copyright and clickable attribution:
      ```html
      <div class="footer-bottom">
        <p>
          Copyright NexGenAI © 2026 Developed by
          <a href="https://murtuzadeveloper.github.io/" target="_blank" rel="noopener noreferrer">
            <strong>Murtuza Developer</strong>
          </a>
        </p>
      </div>
      ```

13. **Live Visitor Statistics System (Footer Analytics Bar):**
    - **Total Visitors:** All-time deduplicated unique visitors, identified through an anonymous browser UUID in `localStorage`.
    - **Today's Visitors:** Deduplicated unique visitors for the current day, automatically resetting at exactly `00:00:00 Pakistan Standard Time (PKT, UTC+5)`.
    - **Online Visitors:** Real-time active visitors calculated using a 5-minute inactivity window.
    - **Total Page Views:** Total visits to the wholesale catalog and service offerings.
    - **Dual Mode Support (`visitor-counter-config.js`):**
      - **Mode A (Zero-Setup):** Powered by CountAPI (`https://countapi.mileshilliard.com/api/v1`), requiring zero API keys, server, or manual setup.
      - **Mode B (Firebase):** Optional Realtime Database integration supporting WebSockets, multi-device synchronization, and automated presence cleanup.

---

## 🛠 Local Development Setup

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Running Locally with Vite
```bash
# 1. Clone repository
git clone https://github.com/murtuzadeveloper/NextGenTechAI.git
cd NextGenTechAI

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Build production bundle
npm run build
```

---

## 🌐 GitHub Pages Deployment Guide

### Option 1: Automated Deployment via GitHub Actions (Recommended)
This repository includes a pre-configured GitHub Actions workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. Push this project to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial NextGenAI corporate website release"
   git branch -M main
   git remote add origin https://github.com/<your-username>/NextGenTechAI.git
   git push -u origin main
   ```
2. Navigate to your repository on GitHub.
3. Go to **Settings** > **Pages**.
4. Under **Build and deployment** > **Source**, select **GitHub Actions**.
5. The workflow will automatically build and publish the site.

### Option 2: Direct Static Branch Deployment
The root [`index.html`](index.html) is self-contained and pre-configured with relative assets (`./logo.svg`, `./favicon.svg`).
1. In repository **Settings** > **Pages**.
2. Under **Source**, choose **Deploy from a branch**.
3. Select branch `main` (or `master`) and folder `/(root)`.
4. Click **Save**. The website will be live in seconds without needing any CI build step!

---

## 🎨 Brand Design Tokens & Assets
- **Backgrounds:** `#030712`, `#070B19`, `#0B1124`
- **Electric Cyan:** `#00F0FF`
- **Cyber Blue:** `#3B82F6`
- **Deep Violet:** `#8B5CF6`
- **Logo Vector:** [`logo.svg`](logo.svg)
- **Favicon Vector:** [`favicon.svg`](favicon.svg)

---

## 📄 License & Attribution
Copyright NexGenAI © 2026 Developed by [Murtuza Developer](https://murtuzadeveloper.github.io/). All rights reserved.

