import getCurrentUser from "../actions/getCurrentUser";
import { EmptyState } from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import { SafeListing } from "../types";
import getListings from "../actions/getListings";
import PropertiesClient from "./PropertiesClient";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  const listings = await getListings({
    userId: currentUser.id,
  });

  if (listings?.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No Properties found"
          subtitle="Looks like you haven't registered a property"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <PropertiesClient
        listings={listings as SafeListing[]}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default PropertiesPage;
