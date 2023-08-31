import React from "react";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import { EmptyState } from "../components/EmptyState";
import getFavouriteListings from "../actions/getFavouriteListings";
import { FavouritesClient } from "./FavouritesClient";
import { SafeListing } from "../types";

const FavouritesPage = async () => {
  const listings = await getFavouriteListings();
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  if (listings?.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favourites found"
          subtitle="Looks like you have no favourite listing"
        />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <FavouritesClient
        listings={listings as SafeListing[]}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default FavouritesPage;
