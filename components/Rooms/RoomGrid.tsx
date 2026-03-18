"use client";

import { useState } from "react";
import RoomCard from "./RoomCard";

export type Room = {
  name: string

  basePrice: number
  category: "room" | "suite" | "villa"

  maxGuests: number
  pricePerExtraGuest: number

  bed: string
  size: string
  ac: string
  checkin: string
  checkout: string

  images: string[]
  description: string
  fullDescription: string

  features: string[]
  amenities: string[]
};

const rooms: Room[] = [

{
name:"Palm Garden Room",
category:"room",
basePrice:7500,
maxGuests:2,
pricePerExtraGuest:1200,

bed:"King Bed",
size:"32 m²",
ac:"Yes",
checkin:"2:00 PM",
checkout:"11:00 AM",

images:[
"/rooms/garden1.jpg",
"/rooms/garden2.jpg",
"/rooms/garden3.jpg"
],

description:"Garden-facing room with peaceful balcony seating.",

fullDescription:
"The Palm Garden Room offers a tranquil stay surrounded by lush greenery. Featuring natural wooden interiors and a private balcony overlooking tropical gardens.",

features:["King Bed","Garden View","Balcony","Breakfast"],

amenities:[
"Free WiFi",
"Air Conditioning",
"Private Balcony",
"Smart TV",
"Room Service",
"Daily Housekeeping"
]
},

{
name:"Backwater Deluxe Suite",
category:"suite",
basePrice:9800,
maxGuests:2,
pricePerExtraGuest:1500,

bed:"King Bed",
size:"40 m²",
ac:"Yes",
checkin:"2:00 PM",
checkout:"11:00 AM",

images:[
"/rooms/backwater1.jpg",
"/rooms/backwater2.jpg",
"/rooms/backwater3.jpg",
"/rooms/backwater4.jpg"
],

description:"Spacious suite with panoramic water views.",

fullDescription:
"This elegant suite features large windows overlooking Kerala’s serene backwaters with a spacious seating area.",

features:["Lagoon View","Luxury Suite","Breakfast","Bathtub"],

amenities:[
"Free WiFi",
"Air Conditioning",
"Bathtub",
"Breakfast Included",
"Mini Bar",
"Room Service"
]
},

{
name:"Infinity Pool Villa",
category:"villa",
basePrice:15000,
maxGuests:2,
pricePerExtraGuest:2000,

bed:"King Bed",
size:"55 m²",
ac:"Yes",
checkin:"2:00 PM",
checkout:"11:00 AM",

images:[
"/rooms/villa1.jpg",
"/rooms/villa2.jpg",
"/rooms/villa3.jpg",
"/rooms/villa4.jpg"
],

description:"Private villa with infinity pool and sunset deck.",

fullDescription:
"An exclusive private villa featuring an infinity pool, luxury lounge area, and spectacular sunset views.",

features:["Private Pool","Sunset View","Luxury Villa","Deck"],

amenities:[
"Private Infinity Pool",
"Sunset Deck",
"Luxury Bathroom",
"Breakfast Included",
"Smart TV",
"Room Service"
]
},

{
name:"Family Lagoon Suite",
category:"suite",
basePrice:11500,
maxGuests:4,
pricePerExtraGuest:1500,

bed:"2 Queen Beds",
size:"45 m²",
ac:"Yes",
checkin:"2:00 PM",
checkout:"11:00 AM",

images:[
"/rooms/family1.jpg",
"/rooms/family2.jpg",
"/rooms/family3.jpg",
"/rooms/family4.jpg"
],

description:"Perfect suite for families with lagoon views.",

fullDescription:
"A spacious suite designed for families featuring lagoon views and a comfortable living area.",

features:["2 Beds","Lagoon View","Family Space","Breakfast"],

amenities:[
"Free WiFi",
"Family Lounge Area",
"Breakfast Included",
"Smart TV",
"Air Conditioning",
"Room Service"
]
},

{
name:"Sunset Balcony Room",
category:"room",
basePrice:8900,
maxGuests:2,
pricePerExtraGuest:1200,

bed:"Queen Bed",
size:"30 m²",
ac:"Yes",
checkin:"2:00 PM",
checkout:"11:00 PM",

images:[
"/rooms/sunset1.jpg",
"/rooms/sunset2.jpg",
"/rooms/sunset3.jpg",
"/rooms/sunset4.jpg"
],

description:"Enjoy breathtaking sunset views from your balcony.",

fullDescription:
"A cozy luxury room designed for sunset lovers with a private balcony offering golden evening views.",

features:["Balcony","Sunset View","Queen Bed","Breakfast"],

amenities:[
"Private Balcony",
"Free WiFi",
"Air Conditioning",
"Smart TV",
"Breakfast Included",
"Room Service"
]
},

{
name:"Premium Backwater Suite",
category:"suite",
basePrice:12500,
maxGuests:2,
pricePerExtraGuest:1500,

bed:"King Bed",
size:"42 m²",
ac:"Yes",
checkin:"2:00 PM",
checkout:"11:00 AM",

images:[
"/rooms/premium1.jpg",
"/rooms/premium2.jpg",
"/rooms/premium3.jpg",
"/rooms/premium4.jpg"
],

description:"Elegant suite with expansive living space.",

fullDescription:
"A sophisticated suite combining spacious interiors with sweeping backwater views.",

features:["Luxury Suite","Water View","Lounge","Breakfast"],

amenities:[
"Free WiFi",
"Air Conditioning",
"Luxury Bathroom",
"Breakfast Included",
"Mini Bar",
"Room Service"
]
},

{
name:"Private Garden Villa",
category:"villa",
basePrice:14200,
maxGuests:2,
pricePerExtraGuest:2000,

bed:"King Bed",
size:"50 m²",
ac:"Yes",
checkin:"2:00 PM",
checkout:"11:00 AM",

images:[
"/rooms/gvilla1.jpg",
"/rooms/gvilla2.jpg",
"/rooms/gvilla3.jpg",
"/rooms/gvilla4.jpg"
],

description:"Villa surrounded by lush tropical gardens.",

fullDescription:
"A secluded villa surrounded by tropical greenery offering privacy and luxury.",

features:["Private Garden","Villa","Luxury","Breakfast"],

amenities:[
"Private Garden",
"Free WiFi",
"Air Conditioning",
"Luxury Bathroom",
"Breakfast Included",
"Room Service"
]
},

{
name:"Honeymoon Pool Suite",
category:"suite",
basePrice:16500,
maxGuests:2,
pricePerExtraGuest:2000,

bed:"King Bed",
size:"48 m²",
ac:"Yes",
checkin:"2:00 PM",
checkout:"11:00 AM",

images:[
"/rooms/honeymoon1.jpg",
"/rooms/honeymoon2.jpg",
"/rooms/honeymoon3.jpg",
"/rooms/honeymoon4.jpg"
],

description:"Romantic suite with private plunge pool.",

fullDescription:
"A romantic suite designed for couples featuring a private plunge pool and elegant interiors.",

features:["Private Pool","Couple Suite","Luxury","Sunset"],

amenities:[
"Private Plunge Pool",
"Romantic Balcony",
"Luxury Bathroom",
"Breakfast Included",
"Smart TV",
"Room Service"
]
}

]

type Filters = {
  type: string
  guests: number
  price: string
  checkin: string
  checkout: string
}
export default function RoomList({ filters }: { filters: Filters }) {
  // Filter rooms based on criteria
 const filteredRooms = rooms.filter(room => {

  // TYPE
  if (filters.type && room.category !== filters.type) return false;

  // FUTURE guest logic (not blocking yet)
  const requiredRooms = Math.ceil(filters.guests / room.maxGuests);

  // REAL PRICE (with extra guests)
  const extraGuests = Math.max(0, filters.guests - room.maxGuests);
  const realPrice = room.basePrice + extraGuests * room.pricePerExtraGuest;

  if (filters.price === "low" && realPrice > 8000) return false;
  if (filters.price === "mid" && (realPrice < 8000 || realPrice > 12000)) return false;
  if (filters.price === "high" && realPrice < 12000) return false;

  return true;
});

  return (
    <section className="bg-black py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {filteredRooms.length > 0 ? (
          <div className="space-y-24">
  {filteredRooms.map((room, i) => (
  <RoomCard
    key={i}
    room={room}
    guests={filters.guests}
    checkin={filters.checkin}
    checkout={filters.checkout}
  />
))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No rooms match your filters. Try adjusting your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}