import { IconType } from "react-icons";
import {
  FaGlassCheers,
  FaGolfBall,
  FaHeart,
  FaHotel,
  FaPalette,
  FaShip,
  FaTree,
  FaWarehouse,
} from "react-icons/fa";
import {
  IoMdBusiness,
  IoMdBriefcase,
  IoMdColorPalette,
  IoMdFootball,
  IoMdRestaurant,
  IoMdBasketball,
} from "react-icons/io";

interface ICategory {
  label: string;
  icon: IconType;
  description: string;
}

export const categories: ICategory[] = [
  {
    label: "Hotels",
    icon: FaHotel,
    description:
      "Enhance the health and appearance of your skin with our rejuvenating skincare services.",
  },
  {
    label: "Convention",
    icon: IoMdBusiness,
    description:
      "Discover the art of hairstyling with our range of hair services.",
  },
  {
    label: "Banquet",
    icon: FaGlassCheers,
    description:
      "A banquet is a luxurious and versatile event space designed to elevate gatherings of all sizes into memorable occasions. With its grandeur and elegance, a banquet hall provides the perfect setting for weddings, galas, corporate events, and celebratory dinners. These spacious indoor venues offer a blend of opulent décor and modern amenities, creating an atmosphere of sophistication and charm.",
  },
  {
    label: "Conference",
    icon: IoMdBriefcase,
    description:
      "A conference is a curated gathering of individuals with shared interests, knowledge, and expertise, coming together to exchange insights, discuss trends, and engage in meaningful discussions. It provides a platform for professionals, academics, experts, and enthusiasts to network, learn from one another, and explore innovative ideas within a specific field or industry.",
  },
  {
    label: "Wedding",
    icon: FaHeart,
    description:
      "A wedding is a sacred union and a joyous celebration of love, commitment, and the promise of a shared future. It marks the beginning of a new chapter in the lives of two individuals, where their paths converge to create a harmonious journey forward.",
  },
  {
    label: "Gallery",
    icon: IoMdColorPalette,
    description:
      "Indulge in luxurious nail care with our manicure and pedicure services.",
  },
  {
    label: "Stadium",
    icon: IoMdFootball,
    description:
      "A stadium is an expansive and purpose-built venue that stands as a symbol of grandeur and excitement. Designed to host large-scale events, it offers an impressive stage for sports competitions, entertainment extravaganzas, and memorable gatherings.",
  },
  {
    label: "Restaurant",
    icon: IoMdRestaurant,
    description: "Unleash your inner beauty with our expert makeup services.",
  },
  {
    label: "Outdoor",
    icon: FaTree,
    description:
      "Experience relaxation and rejuvenation through our massage and body treatments.",
  },
  {
    label: "Golf",
    icon: FaGolfBall,
    description:
      "Experience relaxation and rejuvenation through our massage and body treatments.",
  },
  {
    label: "Boat",
    icon: FaShip,
    description:
      "Accentuate your eyes and frame your face with our eyelash and eyebrow services.",
  },
  {
    label: "Studio",
    icon: FaPalette,
    description:
      "Enhance thExperience smooth skin with our waxing and hair removal services.",
  },

  {
    label: "Sports",
    icon: IoMdBasketball,
    description:
      "Enhance thExperience smooth skin with our waxing and hair removal services.",
  },
  {
    label: "Warehouse",
    icon: FaWarehouse,
    description:
      "Enhance thExperience smooth skin with our waxing and hair removal services.",
  },
];
