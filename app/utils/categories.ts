import { IconType } from "react-icons";
import { FaLeaf, FaRegSmile, FaSpa } from "react-icons/fa";
import {
  GiHairStrands,
  GiEyelashes,
  GiFingernail,
  GiWaxSeal,
  GiFootprint,
} from "react-icons/gi";
import { IoMdBrush } from "react-icons/io";
import { TbMassage } from "react-icons/tb";
import { RxScissors } from "react-icons/rx";

interface ICategory {
  label: string;
  icon: IconType;
  description: string;
}

export const categories: ICategory[] = [
  {
    label: "Facial",
    icon: FaRegSmile,
    description:
      "Enhance the health and appearance of your skin with our rejuvenating skincare services.",
  },
  {
    label: "Extensions",
    icon: GiHairStrands,
    description:
      "Discover the art of hairstyling with our range of hair services.",
  },
  {
    label: "Hair",
    icon: RxScissors,
    description:
      "Discover the art of hairstyling with our range of hair services.",
  },
  {
    label: "Facial",
    icon: FaRegSmile,
    description:
      "Discover the art of hairstyling with our range of hair services.",
  },
  {
    label: "Manicure",
    icon: GiFingernail,
    description:
      "Indulge in luxurious nail care with our manicure and pedicure services.",
  },
  {
    label: "Pedicure",
    icon: GiFootprint,
    description:
      "Indulge in luxurious nail care with our manicure and pedicure services.",
  },
  {
    label: "Makeup",
    icon: IoMdBrush,
    description:
      "Discover the artistry of professional makeup services that elevate your beauty to new heights. Our skilled makeup artists are here to create stunning looks for any occasion, whether it's a glamorous evening event, a romantic wedding, a photoshoot, or simply a day when you want to feel your best. Our makeup services are tailored to your individual style, preferences, and skin type. Our artists use top-quality products and techniques to enhance your natural features and bring out your inner confidence. From subtle and elegant to bold and dramatic, we have the expertise to transform your vision into reality.",
  },
  {
    label: "Skin",
    icon: FaLeaf,
    description: "Unleash your inner beauty with our expert makeup services.",
  },
  {
    label: "Massage",
    icon: TbMassage,
    description:
      "Experience relaxation and rejuvenation through our massage and body treatments.",
  },
  {
    label: "Spa",
    icon: FaSpa,
    description:
      "Experience relaxation and rejuvenation through our massage and body treatments.",
  },
  {
    label: "Eyelash and Eyebrow",
    icon: GiEyelashes,
    description:
      "Accentuate your eyes and frame your face with our eyelash and eyebrow services.",
  },
  {
    label: "Waxing",
    icon: GiWaxSeal,
    description:
      "Enhance thExperience smooth skin with our waxing and hair removal services.",
  },
];
