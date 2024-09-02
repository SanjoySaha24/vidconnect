# VidConnect

VidConnect is a video conferencing platform built with React.js, Next.js, and TypeScript. It provides a secure and seamless experience for users to manage and participate in video meetings.

## About

VidConnect enables users to securely log in, create meetings, and access various meeting functionalities, including screen sharing, managing participants, and checking call latency. It leverages a responsive design to ensure an optimal experience across all devices.

## Features

- **Authentication:** Secure login via Clerk with options for social sign-on or traditional email and password. Ensures appropriate access levels and permissions.
- **New Meeting:** Quickly start a new meeting with configurable camera and microphone settings.
- **Meeting Controls:** Comprehensive control over meeting aspects including emoji reactions, screen sharing, muting/unmuting, sound adjustments, grid layout, participant list view, and individual participant management (pinning, muting, unmuting, blocking, allowing video share).
- **Exit Meeting:** Participants can leave a meeting or creators can end it for all attendees.
- **Schedule Future Meetings:** Input meeting details (date, time) to schedule future meetings, accessible on the 'Upcoming Meetings' page for sharing the link or immediate start.
- **Past Meetings List:** Access a list of previously held meetings, including details and metadata.
- **Personal Room:** Users have a personal room with a unique meeting link for instant meetings, shareable with others.
- **Join Meetings via Link:** Easily join meetings created by others by providing a link.
- **Secure Real-time Functionality:** Secure and real-time interactions within the platform, maintaining user privacy and data integrity.
- **Responsive Design:** Adapts seamlessly to different screen sizes and resolutions for an optimal user experience.

## Tech Stack

- **Next.js**
- **TypeScript**
- **Clerk**
- **getstream**
- **shadcn**
- **Tailwind CSS**

## Challenges

- **Real-time Functionality:** Implementing real-time interactions while ensuring performance and security.
- **Responsive Design:** Ensuring a consistent user experience across various devices and screen sizes.
- **User Authentication:** Managing secure and scalable authentication and authorization using Clerk.

Thank you for checking out VidConnect! I hope you find it useful for your video conferencing needs.




## Getting Started
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
