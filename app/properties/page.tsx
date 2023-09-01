import getCurrentUser from "../actions/getCurrentUser";
import { EmptyState } from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import { SafeListing } from "../types";
import getListings from "../actions/getListings";
import PropertiesClient from "./PropertiesClient";
import { Suspense } from "react";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const listings = await getListings({
    userId: currentUser.id,
  });

  if (listings?.length === 0) {
    return (
      <EmptyState
        title="No Properties found"
        subtitle="Looks like you haven't registered a property"
      />
    );
  }

  return (
    <Suspense>
      <PropertiesClient
        listings={listings as SafeListing[]}
        currentUser={currentUser}
      />
    </Suspense>
  );
};

export default PropertiesPage;
