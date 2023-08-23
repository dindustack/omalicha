import prisma from "@/app/libs/prismadb";

export default async function getListings() {
  try {
    const listings = await prisma.listing.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return listings;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        JSON.stringify({ status: "fail", message: error.message })
      );
    }
  }
}
