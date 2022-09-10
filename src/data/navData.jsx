import { RiCalendar2Fill } from "react-icons/ri";
import { FaMotorcycle, FaCog } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";
import {
  AiFillInfoCircle,
  AiOutlineClockCircle,
  AiFillFolder,
} from "react-icons/ai";
import { IoCloseCircle } from "react-icons/io5";
import { GrDocumentUpload } from "react-icons/gr";

const nav = [
  {
    id: 1,
    name: "Bortda",
    path: "/bortda",
    hasPath: false,
    internalPath: false,
  },
  {
    id: 2,
    name: "Düşünjeler",
    path: "/dushunjeler",
    hasPath: true,
    internalPath: true,

    sidebar: {
      titles: [
        {
          id: 1,
          text: "Gysgaça syn",
          path: "/dushunjeler/gysgacasyn",
        },
        {
          id: 2,
          text: "Amallar",
          path: "/dushunjeler/amallar",
        },
        {
          id: 3,
          text: "Müşderi bilen gatnaşygy",
          path: "/dushunjeler/gatnashyk",
        },
        {
          id: 4,
          text: "Satyş meýilleri",
          path: "/dushunjeler/satyshmeyil",
        },
        {
          id: 5,
          text: "Müşderi barada umumy syn",
          path: "/dushunjeler/mushderiumumy",
        },
        {
          id: 6,
          text: "Önümiň esasy pursatlary",
          path: "/dushunjeler/esasypursatlary",
        },
        {
          id: 7,
          text: "Hasabat",
          path: "/dushunjeler/hasabat",
        },
      ],
    },
  },
  {
    id: 3,
    name: "Sargytlar",
    path: "/sargytlar",
    hasPath: false,
    internalPath: false,

    sidebar: {
      titles: [
        {
          id: 1,
          text: "Iberildi",
          isIcon: true,
          subMenu: [
            {
              id: "ib-1",
              text: "Soňky",
              icon: <RiCalendar2Fill />,
            },
            {
              id: "ib-2",
              text: "Tranzitda",
              icon: <FaMotorcycle />,
            },
            {
              id: "ib-3",
              text: "Gowşuryldy",
              icon: <TiTickOutline />,
            },
            {
              id: "ib-4",
              text: "Gowşurylmakda mesele çykanlar",
              icon: <AiFillInfoCircle />,
            },
            {
              id: "ib-5",
              text: "Ýatyrylanlar",
              icon: <IoCloseCircle />,
            },
          ],
        },
        {
          id: 2,
          text: "Ýerine ýetirmek",
          isIcon: true,
          subMenu: [
            {
              id: "y-1",
              text: "Soňky",
              icon: <RiCalendar2Fill />,
            },
            {
              id: "y-2",
              text: "Garaşylýar",
              icon: <AiOutlineClockCircle />,
            },
            {
              id: "y-3",
              text: "Tranzitda",
              icon: <FaMotorcycle />,
            },
            {
              id: "y-4",
              text: "Gowşuryldy",
              icon: <TiTickOutline />,
            },
            {
              id: "y-5",
              text: "Gowşurylmakda mesele çykanlar",
              icon: <AiFillInfoCircle />,
            },
            {
              id: "y-6",
              text: "Ýatyrylanlar",
              icon: <IoCloseCircle />,
            },
          ],
        },
        {
          id: 3,
          text: "Daşaýjy alyp gitmek",
          isIcon: true,
        },
        {
          id: 4,
          text: "Toparlar",
          isIcon: true,
          subMenu: [
            {
              id: "tp-1",
              text: "Aç",
              icon: <AiFillFolder />,
            },
            {
              id: "tp-2",
              text: "Işlenildi",
              icon: <TiTickOutline />,
            },
            {
              id: "tp-3",
              text: "Arhiwlenen",
              icon: <GrDocumentUpload />,
            },
          ],
        },
      ],
    },
  },
  {
    id: 4,
    name: "Iberişler",
    path: "/iberishler",
    hasPath: false,
    internalPath: false,

    sidebar: {
      titles: [
        {
          id: 1,
          text: "Tölegine garaşýanlar",
          isIcon: true,
          subMenu: [
            {
              id: "tg",
              text: "El bilen sargytlar",
              icon: <FaCog />,
              color: "#0FA568",
            },
          ],
        },
        {
          id: 2,
          text: "Tutulanlar",
          isIcon: true,
          subMenu: [
            {
              id: "tu",
              text: "El bilen sargytlar",
              icon: <FaCog />,
              color: "#0FA568",
            },
          ],
        },
        {
          id: 3,
          text: "Iberilmegine garaşýanlar",
          isIcon: true,
          subMenu: [
            {
              id: "ig",
              text: "El bilen sargytlar",
              icon: <FaCog />,
              color: "#0FA568",
            },
          ],
        },
        {
          id: 4,
          text: "Iberilenler",
          isIcon: true,
        },
        {
          id: 5,
          text: "Ýatyrylanlar",
          isIcon: true,
        },
      ],
    },
  },
  {
    id: 5,
    name: "Önümler",
    path: "/onumler",
    hasPath: true,
    internalPath: true,

    sidebar: {
      titles: [
        {
          id: 1,
          text: "Önümler",
        },
        {
          id: 2,
          text: "Öňünden düzülen topar",
        },
        {
          id: 3,
          text: "Daşaýjy alyp gitmek",
        },
        {
          id: 4,
          text: "Inwentar",
        },
      ],
    },
  },
  {
    id: 6,
    name: "Müşderiler",
    path: "/mushderiler",
    hasPath: false,
    internalPath: false,
  },
];

export default nav;
