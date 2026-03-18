"use client";

import { useState } from "react";
import RoomsHero from "../../components/Rooms/RoomsHero";
import RoomGrid from "../../components/Rooms/RoomGrid";
import RoomsCTA from "@/components/Rooms/RoonmCta";

type Filters = {
  type: string;
  guests: number;
  price: string;
  checkin: string;
  checkout: string;
};

export default function RoomsClient() {

  const [filters, setFilters] = useState<Filters>({
    type: "",
    guests: 2,
    price: "",
    checkin: "",
    checkout: "",
  });

  return (
    <>
      <RoomsHero filters={filters} setFilters={setFilters} />
      <RoomGrid filters={filters} />
      <RoomsCTA />
    </>
  );
}