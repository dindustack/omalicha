import { Suspense } from "react";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ClientOnly from "../components/ClientOnly";
import { EmptyState } from "../components/EmptyState";
import { SafeReservation } from "../types";
import ReservationsClient from "./ReservationsClient";

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const reservations = await getReservations({
    authorId: currentUser.id,
  });

  if (reservations?.length === 0) {
    return (
      <EmptyState
        title="No reservations found"
        subtitle="Looks like you have no reservations on your venues"
      />
    );
  }

  return (
    <Suspense>
      <ReservationsClient
        reservations={reservations as SafeReservation[]}
        currentUser={currentUser}
      />
    </Suspense>
  );
};

export default ReservationsPage;
