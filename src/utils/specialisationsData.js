import { MdMedicalServices } from "react-icons/md";
import { FaStethoscope, FaHeart, FaXRay, FaFlask } from "react-icons/fa";
import { TbTestPipe } from "react-icons/tb";
import { BsHospital, BsShieldPlus } from "react-icons/bs";
import { CiMedicalCross } from "react-icons/ci";
import { FaBone } from "react-icons/fa6";

const specialisationsData = [
  {
    id: 1,
    title: "Dentistry",
    icon: MdMedicalServices,
  },
  {
    id: 2,
    title: "Primary Care",
    icon: FaStethoscope,
  },
  {
    id: 3,
    title: "Cardiology",
    icon: FaHeart,
  },
  {
    id: 4,
    title: "MRI Resonance",
    icon: BsHospital,
  },
  {
    id: 5,
    title: "Blood Test",
    icon: TbTestPipe,
  },
  {
    id: 6,
    title: "Piscologist",
    icon: BsShieldPlus,
  },
  {
    id: 7,
    title: "Laboratory",
    icon: FaFlask,
  },
  {
    id: 8,
    title: "X-Ray",
    icon: FaXRay,
  },
  {
    id: 9,
    icon: CiMedicalCross,
    title: "Dermatology",
  },
  {
    id: 10,
    icon: FaBone,
    title: "Orthopedics",
  },
];

export default specialisationsData;
