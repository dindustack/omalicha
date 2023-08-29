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
import { MdMuseum } from "react-icons/md";
import { SiCinema4D } from "react-icons/si";
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
      "Experience luxury and comfort at our exquisite hotel, where every detail is meticulously curated to offer you an unforgettable stay. Our hotel combines modern elegance with timeless charm, providing a sanctuary for both leisure and business travelers.",
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
      "Discover a world of creativity and expression at our art gallery. Immerse yourself in a curated collection of captivating artworks that span diverse styles, mediums, and perspectives. Our gallery serves as a haven for artists and art enthusiasts alike, where every brushstroke and stroke of genius is celebrated.",
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
    description:
      "Indulge in a culinary journey at our restaurant, where delectable flavors and exceptional service come together to create a memorable dining experience. From carefully curated menus inspired by global cuisines to an inviting ambiance that exudes warmth and elegance.",
  },
  {
    label: "Outdoor",
    icon: FaTree,
    description:
      "Discover the perfect harmony of nature and celebration with our outdoor event venue. Nestled amidst lush landscapes and under open skies, our outdoor space offers a picturesque setting for your special occasions. ",
  },
  {
    label: "Golf",
    icon: FaGolfBall,
    description:
      "A golf course is a serene and picturesque landscape where the love of sport and the beauty of nature intertwine. Spanning across rolling hills and lush greens, a golf course offers a sanctuary for both seasoned golf enthusiasts and those seeking leisurely recreation. ",
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
      "Our studio is a haven for creativity and innovation, designed to inspire artists, creators, and visionaries alike. With its open layout and ample natural light, the studio provides an inviting atmosphere that fosters imagination and collaboration.",
  },

  {
    label: "Sports",
    icon: IoMdBasketball,
    description:
      "Enhance thExperience smooth skin with our waxing and hair removal services.",
  },
  {
    label: "Museum",
    icon: MdMuseum,
    description:
      "Enhance thExperience smooth skin with our waxing and hair removal services.",
  },
  {
    label: "Cinema",
    icon: SiCinema4D,
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
