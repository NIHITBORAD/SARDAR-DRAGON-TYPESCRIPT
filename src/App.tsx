import { StoreContextProvider } from "./Context";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  // RedirectToSignIn,
} from "@clerk/clerk-react";

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const ClerkAuth = () => {
  return (
    <>
      <ClerkProvider publishableKey={clerkPubKey}>
        <SignedIn>
          <StoreContextProvider>
            <Navbar />
            <Outlet />
          </StoreContextProvider>
        </SignedIn>
        <SignedOut>
          <StoreContextProvider>
            <Navbar />
            <Outlet />
          </StoreContextProvider>
        </SignedOut>
      </ClerkProvider>
    </>
  );
};

const App = () => {
  return (
    // <StoreContextProvider>
    //   <Navbar />
    //   <Outlet />
    // </StoreContextProvider>
    <ClerkAuth />
  );
};

export default App;


 