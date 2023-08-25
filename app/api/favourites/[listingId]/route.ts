import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";

interface IParams {
  listingId?: string;
}

export async function POST(request: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  const favouriteIds = [...(currentUser.favouriteIds || [])];

  const newFavoriteIds = favouriteIds.concat(listingId);

  const user = await prisma?.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favouriteIds: newFavoriteIds,
    },
  });

  return NextResponse.json(user);
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  const favouriteIds = [...(currentUser.favouriteIds || [])];

  const filteredFavoriteIds = favouriteIds.filter((id) => id !== listingId);

  const user = await prisma?.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favouriteIds: filteredFavoriteIds,
    },
  });

  return NextResponse.json(user);
}
