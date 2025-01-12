import { ClerkProvider } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [clerkFrontendApi, setClerkFrontendApi] = useState(null);

  useEffect(() => {
    // Ensure the environment variable is available
    setClerkFrontendApi(process.env.NEXT_PUBLIC_CLERK_FRONTEND_API);
  }, []);

  if (!clerkFrontendApi) {
    return <div>Loading...</div>; // Show loading until the Clerk frontend API key is available
  }

  return (
    <ClerkProvider frontendApi={clerkFrontendApi}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
