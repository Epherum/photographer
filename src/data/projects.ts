export interface ProjectImage {
  url: string;
  alt?: string;
  caption?: string;
}

export interface ProjectDetails {
  date: string;
  location: string;
  category: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  details?: ProjectDetails;
  images: ProjectImage[];
}

export const projects: Project[] = [
  {
    id: "wedding-sarah-john",
    title: "Sarah & John's Wedding",
    description: "A beautiful outdoor wedding ceremony capturing the love and joy of this special day.",
    thumbnail: "/images/weddings/sarah-john/thumbnail.jpg",
    details: {
      date: "June 15, 2024",
      location: "Garden Valley, CA",
      category: "Wedding Photography"
    },
    images: [
      {
        url: "/images/weddings/sarah-john/ceremony-01.jpg",
        alt: "Wedding ceremony moment",
        caption: "The couple exchanging vows under the oak tree"
      },
      {
        url: "/images/weddings/sarah-john/reception-01.jpg",
        alt: "Reception celebration",
        caption: "First dance as husband and wife"
      },
      {
        url: "/images/weddings/sarah-john/portraits-01.jpg",
        alt: "Wedding portraits",
        caption: "Intimate portraits in the garden"
      }
    ]
  },
  {
    id: "portrait-session-maria",
    title: "Maria's Portrait Session",
    description: "Professional headshots and artistic portraits for an aspiring actress.",
    thumbnail: "/images/portraits/maria/thumbnail.jpg",
    details: {
      date: "March 10, 2024",
      location: "Downtown Studio",
      category: "Portrait Photography"
    },
    images: [
      {
        url: "/images/portraits/maria/headshot-01.jpg",
        alt: "Professional headshot",
        caption: "Clean, professional headshot for casting"
      },
      {
        url: "/images/portraits/maria/artistic-01.jpg",
        alt: "Artistic portrait",
        caption: "Creative lighting for dramatic effect"
      }
    ]
  },
  {
    id: "nature-yosemite",
    title: "Yosemite National Park",
    description: "Capturing the breathtaking landscapes and wildlife of Yosemite.",
    thumbnail: "/images/nature/yosemite/thumbnail.jpg",
    details: {
      date: "September 22, 2023",
      location: "Yosemite National Park, CA",
      category: "Nature Photography"
    },
    images: [
      {
        url: "/images/nature/yosemite/half-dome.jpg",
        alt: "Half Dome at sunset",
        caption: "Half Dome illuminated by golden hour light"
      },
      {
        url: "/images/nature/yosemite/waterfalls.jpg",
        alt: "Yosemite Falls",
        caption: "The majesty of Yosemite Falls in spring"
      },
      {
        url: "/images/nature/yosemite/wildlife.jpg",
        alt: "Deer in meadow",
        caption: "A peaceful moment with local wildlife"
      }
    ]
  }
];