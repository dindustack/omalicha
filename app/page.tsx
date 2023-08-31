import React from "react";
import getListings, { IListingParams } from "./actions/getListings";

import ClientOnly from "./components/ClientOnly";
import { EmptyState } from "./components/EmptyState";
import { Container } from "./components/Navbar/Container";
import { ListingCard } from "./components/Listings/Card";
import getCurrentUser from "./actions/getCurrentUser";

interface HomeProps {
  searchParams: IListingParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings?.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }
  return (
    <>
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
    </>
  );
};

export default Home;
