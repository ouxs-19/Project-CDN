# OpenCDN Frontend Application

Welcome to OpenCDN Frontend End Application, this app was made using :

 - This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
 - Tailwind CSS

## Getting Started

Before running the app, you need to install the necessary packages :

```bash
npm install
# or
yarn add
```


After that, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Endpoints

Here are the Endpoints available in the App :

 - `/` : The Ladning Page, presenting our solution
 - `/fields` : Presenting the fields of the app
 - `/fields/[id]` : Display the specific track of that field
 - `/fields/[id]/tracks/[id2]`: Dsplay the modules of that specific track
 - `/adminLogin` : Leads to the admin login
 - `/adminPanel` : After logging in as an admin, you can manage the files by adding or deleting files

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
