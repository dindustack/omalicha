import React, { Suspense } from "react";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import { EmptyState } from "../components/EmptyState";
import getFavouriteListings from "../actions/getFavouriteListings";
import { SafeListing } from "../types";
import { FavouritesClient } from "./FavouritesClient";

const FavouritesPage = async () => {
  const listings = await getFavouriteListings();
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  if (listings?.length === 0) {
    return (
      <EmptyState
        title="No favourites found"
        subtitle="Looks like you have no favourite listing"
      />
    );
  }
  return (
    <Suspense>
      <FavouritesClient
        listings={listings as SafeListing[]}
        currentUser={currentUser}
      />
    </Suspense>
  );
};

export default FavouritesPage;
