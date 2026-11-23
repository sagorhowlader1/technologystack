import { lazy, Suspense } from "react";
import Banner from "./compoents/devStack/Banner";
import Footer from "./compoents/devStack/Footer";
import Navbar from "./compoents/devStack/Navbar";
import Technologies from "./compoents/devStack/Technologies";
import Skeleton from "./compoents/ui/Skeleton";
import Spinner from "./compoents/ui/Spinner";
import type { IDevStackType } from "./Type/type";

const NotFound = lazy(() => import("./compoents/ui/NotFound"));



const technologyFetch = async (): Promise<IDevStackType[]> =>{
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
};


function App() {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  const path = window.location.pathname.replace(/\/$/, "");
  const isNotFound = path !== basePath && path !== `${basePath}/index.html`;

  if (isNotFound) {
    return (
      <Suspense fallback={<Spinner />}>
        <NotFound />
      </Suspense>
    );
  }

  const technologiesPromise = technologyFetch();

  return (
    <>
        <Navbar />
        <Banner />
        <Suspense fallback={<Skeleton />}>
          <Technologies technologiesPromise={technologiesPromise} />
        </Suspense>
        <Footer />
    </>
  )
}

export default App;
