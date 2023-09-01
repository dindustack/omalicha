import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
  userId?: string;
  capacity?: number;
  restroom?: number;
  parkingCount?: number;
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string;
}

export default async function getListings(params: IListingsParams) {
  try {
    const {
      userId,
      capacity,
      restroom,
      parkingCount,
      startDate,
      endDate,
      locationValue,
      category,
    } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    if (category) {
      query.category = category;
    }

    if (capacity) {
      query.capacity = {
        gte: +capacity,
      };
    }

    if (restroom) {
      query.restroom = {
        gte: +restroom,
      };
    }

    if (parkingCount) {
      query.parkingCount = {
        gte: +parkingCount,
      };
    }

    if (locationValue) {
      query.locationValue = locationValue;
    }

    if (startDate && endDate) {
      query.NOT = {
        reservations: {
          some: {
            OR: [
              {
                endDate: { gte: startDate },
                startDate: { lte: startDate },
              },
              {
                startDate: { lte: endDate },
                endDate: { gte: endDate },
              },
            ],
          },
        },
      };
    }

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));

    return safeListings;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        JSON.stringify({ status: "fail", message: error.message })
      );
    }
  }
}
