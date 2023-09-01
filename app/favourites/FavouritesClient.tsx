"use client";
import React from "react";
import { Container } from "../components/Navbar/Container";
import { Heading } from "../components/Heading";
import { ListingCard } from "../components/Listings/Card";
import { SafeListing, SafeUser } from "../types";

interface FavouritesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

export const FavouritesClient: React.FC<FavouritesClientProps> = ({
  listings,
  currentUser,
}) => {
  return (
    <Container>
      <Heading title="Favourites" subtitle="List of venues favourited" />
      <div
        className="
          mt-10
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
          listings.map((listing) => (
            <ListingCard currentUser={currentUser} data={listing} />
          ))
        )}
      </div>
    </Container>
  );
};
