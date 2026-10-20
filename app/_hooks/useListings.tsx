"use client";

import { useMemo, useState, useEffect } from "react";

export type ListItem = {
  id: string;
  imgUrl: string;
  price: number;
  name: string;
  description: string;
  type: "house" | "land";
  location: string;
};

// Pure utility to shuffle an array (Fisher-Yates Shuffle)
// Placed outside the hook to keep it pure
const shuffle = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const useListings = () => {
  // ---------------- MOCK DATA ARRAYS ----------------

  const houseNames = [
    "The Glass Pavilion",
    "Villa Monolith",
    "Solstice Horizon Estate",
    "The Obsidian Sanctum",
    "Aura Coastal Residence",
    "Verdant Slope Manor",
    "The Minimalist Courtyard",
    "Elysian Crest Penthouse",
    "Cascade Cliffside Villa",
  ];

  const houseDescriptions = [
    "A architectural masterpiece featuring cantilevered glass walls, infinity edge pool, and panoramic sunset views.",
    "Raw travertine stone meets modern brutalism with private subterranean spa and climate-controlled wine cellar.",
    "Perched on a coastal bluff with direct helipad access, floor-to-ceiling glass, and dual primary suites.",
    "Ultra-private sanctuary crafted with japanese charred cedar, smart automation, and private courtyard gardens.",
    "Effortless indoor-outdoor luxury with automated sliding glass panels, custom walnut millwork, and private dock.",
    "Integrated into natural hillside topography, offering eco-luxury thermal heating and double-height gallery space.",
    "Restorative architectural design framed around a central water feature, featuring curated gallery lighting.",
    "Triplex penthouse crowned with a private rooftop sky deck, outdoor kitchen, and 360-degree skyline views.",
    "Suspended over a dramatic ocean cliff, featuring custom steel engineering, teak finishes, and smart security.",
  ];

  const housePrices = [
    12500000, 18200000, 24000000, 15800000, 9750000, 21500000, 14000000,
    31000000, 27500000,
  ];

  const landNames = [
    "The Aspen Ridge Parcel",
    "Coastal Bluff Acreage",
    "High Desert Sanctuary Grounds",
    "The Valley Overlook Reserve",
    "Monte Carlo Crest Lot",
    "Emerald Cove Peninsula",
  ];

  const landDescriptions = [
    "12 prime acres of untouched alpine woodland with fully approved architectural permits and mountain views.",
    "Rare cliffside parcel with direct beach cove access, soil testing complete, and utility infrastructure ready.",
    "Expansive 45-acre private domain ideal for an equestrian estate or architectural compound amidst desert vistas.",
    "Gated elevated acreage overlooking the vineyard basin, complete with private spring and tree-lined entry drive.",
    "Unrivaled Mediterranean views on a private summit, shovel-ready for a bespoke multi-level luxury villa.",
    "Exclusive waterfront peninsula offering 300 feet of shoreline frontage and private deep-water dock authorization.",
  ];

  const landPrices = [1500000, 2500000, 3500000, 2000000, 1800000, 3000000];

  const locations = [
    "Malibu, CA",
    "Aspen, CO",
    "Beverly Hills, CA",
    "Sedona, AZ",
    "Miami Beach, FL",
    "Geneva, Switzerland",
  ];

  const housesImages = Array.from({ length: 9 }).map(
    (_, idx) => `/images/houses/house_${idx + 1}.jpg`,
  );
  const landImages = Array.from({ length: 6 }).map(
    (_, idx) => `/images/lands/land_${idx + 1}.jpg`,
  );

  // ---------------- STATIC DETEERMINISTIC BASE DATA ----------------
  // Next.js uses this array to generate stable initial HTML without errors.
  const baseListings: ListItem[] = useMemo(() => {
    const houseListings: ListItem[] = housesImages.map((img, idx) => ({
      id: `house-${idx + 1}`,
      imgUrl: img,
      name: houseNames[idx],
      description: houseDescriptions[idx],
      price: housePrices[idx],
      type: "house",
      location: locations[idx % locations.length],
    }));

    const landListings: ListItem[] = landImages.map((img, idx) => ({
      id: `land-${idx + 1}`,
      imgUrl: img,
      name: landNames[idx],
      description: landDescriptions[idx],
      price: landPrices[idx],
      type: "land",
      location: locations[(idx + 2) % locations.length],
    }));

    return [...houseListings, ...landListings];
  }, []);

  // ---------------- STATE FOR LIVE LISTINGS ----------------
  const [allListings, setAllListings] = useState<ListItem[]>(baseListings);

  // ---------------- CLIENT SIDE SHUFFLE EFFECT ----------------
  useEffect(() => {
    // This executes exclusively in the web browser after hydration.
    // Next.js build servers completely ignore this block.
    const shuffledHouseNames = shuffle(houseNames);
    const shuffledHouseDescs = shuffle(houseDescriptions);
    const shuffledHousePrices = shuffle(housePrices);

    const shuffledLandNames = shuffle(landNames);
    const shuffledLandDescs = shuffle(landDescriptions);
    const shuffledLandPrices = shuffle(landPrices);

    const houseListings: ListItem[] = housesImages.map((img, idx) => ({
      id: `house-${idx + 1}`,
      imgUrl: img,
      name: shuffledHouseNames[idx],
      description: shuffledHouseDescs[idx],
      price: shuffledHousePrices[idx],
      type: "house",
      location: locations[idx % locations.length],
    }));

    const landListings: ListItem[] = landImages.map((img, idx) => ({
      id: `land-${idx + 1}`,
      imgUrl: img,
      name: shuffledLandNames[idx],
      description: shuffledLandDescs[idx],
      price: shuffledLandPrices[idx],
      type: "land",
      location: locations[(idx + 2) % locations.length],
    }));

    setAllListings(shuffle([...houseListings, ...landListings]));
  }, []);

  // Derived filtered values update seamlessly whenever allListings updates.
  const houses = useMemo(
    () => allListings.filter((item) => item.type === "house"),
    [allListings],
  );
  const lands = useMemo(
    () => allListings.filter((item) => item.type === "land"),
    [allListings],
  );

  return {
    allListings,
    houses,
    lands,
  };
};

export default useListings;
