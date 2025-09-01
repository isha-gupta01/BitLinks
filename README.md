# 🔗 BitLinks – URL Shortener

**BitLinks** is a lightweight and efficient **URL shortener** built using the **Next.js App Router** and **MongoDB**.  
It lets users generate short, shareable links that redirect to the original URL in just a click.  

> 📝 Tiny URLs, Big Impact 🚀


## [Live Link](https://bit-links-beryl.vercel.app/)-<a>https://bit-links-beryl.vercel.app/</a>

---

## 🚀 Features
- ✨ Shorten long URLs into compact links  
- 🔄 Redirect short URLs to the original destination  
- 🗂️ Persistent storage using **MongoDB**  
- ⚡ Powered by **Next.js API routes**  
- 🎨 Clean UI with responsive design  

---

## 🛠️ Tech Stack
- **Frontend & Routing**: [Next.js (App Router)](https://nextjs.org/)  
- **Database**: [MongoDB](https://www.mongodb.com/)  
- **API Handling**: Next.js API Routes  
- **Styling**: CSS (globals.css)  

---

## 📂 Project Structure
```bitlinks/
│── app/ # Next.js App Router pages
│ ├── [shorturl]/ # Dynamic route for redirection
│ ├── about/ # About page
│ ├── api/generate/ # API route for generating short URLs
│ ├── fonts/ # Fonts used in the app
│ ├── shorten/ # Page to create shortened links
│ ├── globals.css # Global styles
│ ├── layout.js # Root layout component
│ └── page.js # Home page
│
│── components/ # Reusable React components
│ └── Navbar.js # Navigation bar
│
│── lib/ # Database configuration
│ └── mongodb.js # MongoDB connection file
│
│── public/ # Static assets
│── .env.local # Environment variables
│── package.json # Dependencies and scripts
│── next.config.mjs # Next.js configuration
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/bitlinks.git
   cd bitlinks
```For node_modules
npm install
# or
yarn install
```

Create a .env.local file in the root:

MONGODB_URI=your-mongodb-connection-string
NEXT_PUBLIC_BASE_URL=http://localhost:3000


📌 Usage

Go to the Shorten Page (/shorten)

- Enter a long URL and generate a short link

- Access the short link → it redirects to the original URL

🔮 Future Enhancements

- 📊 Add analytics (track number of clicks per link)

- 🔐 User authentication for managing personal links

- 🎨 Custom domains and QR code support

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
