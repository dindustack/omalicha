import getCurrentUser from "../actions/getCurrentUser";
import { EmptyState } from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getReservations from "../actions/getReservations";
import { SafeReservation } from "../types";
import { BookingsClient } from "./BookingsClient";

const BookingsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({
    userId: currentUser.id,
  });

  if (reservations?.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No venues found"
          subtitle="Looks like you haven't reserved any venues."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <BookingsClient
        reservations={reservations as SafeReservation[]}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default BookingsPage;
