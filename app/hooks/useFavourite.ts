import axios from "axios";
import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";

import { useLoginModal } from "./useLoginModal";
import { toast } from "react-hot-toast";
import { SafeUser } from "../types";

interface IUseFavorite {
  listingId: string;
  currentUser?: SafeUser | null;
}

export const useFavourite = ({ listingId, currentUser }: IUseFavorite) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const hasFavourited = useMemo(() => {
    const list = currentUser?.favouriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavourite = useCallback(
    async (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        let request;

        if (hasFavourited) {
          request = () => axios.delete(`/api/favourites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favourites/${listingId}`);
        }

        await request();
        router.refresh();
        toast.success("Success");
      } catch (error) {
        toast.error("Something went wrong");
      }
    },
    [currentUser, hasFavourited, listingId, loginModal, router]
  );

  return { hasFavourited, toggleFavourite };
};
