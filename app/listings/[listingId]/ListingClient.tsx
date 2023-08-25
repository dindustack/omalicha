"use client";

import { ListingCategory } from "@/app/components/Listings/Category";
import { ListingHead } from "@/app/components/Listings/Head";
import { ListingInfo } from "@/app/components/Listings/Info";
import { Container } from "@/app/components/Navbar/Container";
import { categories } from "@/app/utils/categories";
import { Listing, Reservation, User } from "@prisma/client";
import { useMemo } from "react";

interface ListingClientProps {
  reservations?: Reservation[];
  listing: Listing & {
    user: User;
  };
  currentUser?: User | null;
}
export const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  currentUser,
}) => {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  }, [listing.category]);
  return (
    <Container>
      <div className="w-full ">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          >
            <>
              {category && (
                <ListingCategory
                  icon={category.icon}
                  label={category.label}
                  description={category.description}
                />
              )}
              <ListingInfo
                user={listing.user}
                category={category}
                description={listing.description}
                clientCount={listing.clientCount}
                experience={listing.experience}
                locationValue={listing.locationValue}
              />
            </>
          </ListingHead>
        </div>
      </div>
    </Container>
  );
};
