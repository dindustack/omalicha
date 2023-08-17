import { IconType } from "react-icons";
import { FaRegSmile } from "react-icons/fa";
import {
  GiHairStrands,
  GiEyelashes,
  GiFingernail,
  GiWaxSeal,
} from "react-icons/gi";
import { IoMdBrush } from "react-icons/io";
import { TbMassage } from "react-icons/tb";

interface ICategory {
  label: string;
  icon: IconType;
  description: string;
}

export const categories: ICategory[] = [
  {
    label: "Skincare",
    icon: FaRegSmile,
    description:
      "Enhance the health and appearance of your skin with our rejuvenating skincare services.",
  },
  {
    label: "Hair",
    icon: GiHairStrands,
    description:
      "Discover the art of hairstyling with our range of hair services.",
  },
  {
    label: "Nail",
    icon: GiFingernail,
    description:
      "Indulge in luxurious nail care with our manicure and pedicure services.",
  },
  {
    label: "Makeup",
    icon: IoMdBrush,
    description: "Unleash your inner beauty with our expert makeup services.",
  },
  {
    label: "Massage and Body Treatments",
    icon: TbMassage,
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
    label: "Waxing and Hair Removal",
    icon: GiWaxSeal,
    description:
      "Enhance thExperience smooth skin with our waxing and hair removal services.",
  },
];
