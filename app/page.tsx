import React from "react";
import getListings from "./actions/getListings";

import ClientOnly from "./components/ClientOnly";
import { EmptyState } from "./components/EmptyState";
import { Container } from "./components/Navbar/Container";
import { ListingCard } from "./components/Listings/Card";
import getCurrentUser from "./actions/getCurrentUser";

export default async function Home() {
  const listings = await getListings();
  const currentUser = await getCurrentUser();

  if (listings?.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <Container>
        <div
          className="
          pt-20
          md:pt-28 
          grid 
          grid-cols-1 
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6 
          gap-8       
        "
        >
          {React.Children.toArray(
            listings?.map((listing) => {
              return <ListingCard currentUser={currentUser} data={listing} />;
            })
          )}
        </div>
      </Container>
    </ClientOnly>
  );
}
