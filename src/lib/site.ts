export const site = {
  name: "HoxAir Heating & Cooling LLC",
  shortName: "HoxAir",
  url: "https://www.hoxair.com",
  phoneDisplay: "(623) 698-6406",
  phone: "+16236986406",
  email: "contactus@hoxair.com",
  area: "Phoenix, AZ and the West Valley",
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "ac-repair",
    name: "AC Repair",
    short: "Fast troubleshooting for cooling problems, warm air, and unexpected breakdowns.",
    description:
      "When the Arizona heat pushes your cooling system to its limit, HoxAir provides careful diagnostics and practical repair recommendations. We work to identify the cause—not just the symptom—so you can make a clear, informed decision.",
    benefits: ["Thorough system diagnostics", "Clear repair options", "Service for common AC makes and models"],
  },
  {
    slug: "ac-installation",
    name: "AC Installation & Replacement",
    short: "Right-sized, efficient cooling systems selected for the demands of desert living.",
    description:
      "A new air conditioner is a long-term investment in comfort and energy use. HoxAir helps Phoenix-area homeowners compare options and plan a clean, professional replacement around their home and priorities.",
    benefits: ["Comfort-focused system selection", "Efficient equipment options", "Removal and replacement planning"],
  },
  {
    slug: "ac-maintenance",
    name: "AC Maintenance & Tune-Ups",
    short: "Preventive care designed to improve reliability before peak cooling season.",
    description:
      "Routine AC maintenance can reveal worn components, airflow restrictions, and performance issues before they interrupt your comfort. HoxAir gives your system a detailed seasonal check for greater peace of mind.",
    benefits: ["Performance and safety checks", "Coil and airflow inspection", "Actionable system condition report"],
  },
  {
    slug: "emergency-hvac",
    name: "Emergency HVAC Service",
    short: "Responsive help when an urgent heating or cooling issue cannot wait.",
    description:
      "A failed cooling system can quickly become serious in Arizona. Call HoxAir to discuss your urgent HVAC issue, current availability, and the safest next steps for your household.",
    benefits: ["Priority scheduling when available", "Clear next-step guidance", "Focused breakdown diagnostics"],
  },
];

export type Location = {
  slug: string;
  name: string;
  label: string;
  intro: string;
  localContext: string;
  nearby: string[];
};

export const locations: Location[] = [
  {
    slug: "ahwatukee",
    name: "Ahwatukee",
    label: "Ahwatukee, Phoenix, AZ",
    intro: "desert foothill homes and neighborhoods throughout Phoenix’s southern village",
    localContext: "Ahwatukee sits against South Mountain, where intense sun exposure and long cooling cycles can put sustained demand on residential AC systems.",
    nearby: ["tempe", "phoenix", "mesa"],
  },
  {
    slug: "sun-city",
    name: "Sun City",
    label: "Sun City, AZ",
    intro: "year-round comfort needs in established homes and active-adult communities",
    localContext: "Many Sun City homes have evolved through equipment upgrades and remodels, making careful system evaluation and airflow checks especially useful.",
    nearby: ["surprise", "phoenix", "avondale"],
  },
  {
    slug: "surprise",
    name: "Surprise",
    label: "Surprise, AZ",
    intro: "growing West Valley neighborhoods, from newer systems to aging AC equipment",
    localContext: "Surprise combines established neighborhoods with rapid residential growth, so cooling needs can vary widely by home age, layout, and equipment type.",
    nearby: ["sun-city", "buckeye", "avondale"],
  },
  {
    slug: "mesa",
    name: "Mesa",
    label: "Mesa, AZ",
    intro: "homes across the East Valley facing long, demanding cooling seasons",
    localContext: "From older central neighborhoods to newer communities farther east, Mesa homes benefit from AC service that considers both equipment condition and household comfort.",
    nearby: ["gilbert", "tempe", "scottsdale"],
  },
  {
    slug: "tempe",
    name: "Tempe",
    label: "Tempe, AZ",
    intro: "single-family homes, condos, and rental properties near the heart of the Valley",
    localContext: "Tempe’s mix of established homes, compact properties, and newer infill calls for cooling recommendations matched to the building—not a one-size-fits-all answer.",
    nearby: ["ahwatukee", "mesa", "scottsdale"],
  },
  {
    slug: "scottsdale",
    name: "Scottsdale",
    label: "Scottsdale, AZ",
    intro: "home comfort systems throughout South, Central, and North Scottsdale",
    localContext: "Scottsdale stretches across distinct neighborhoods and housing styles, with cooling loads shaped by home size, exposure, insulation, and system design.",
    nearby: ["phoenix", "tempe", "mesa"],
  },
  {
    slug: "phoenix",
    name: "Phoenix",
    label: "Phoenix, AZ",
    intro: "Valley homes that depend on reliable cooling through intense summer conditions",
    localContext: "Phoenix residents face months of heavy cooling demand, making system reliability, airflow, and sensible energy use central to everyday home comfort.",
    nearby: ["ahwatukee", "scottsdale", "avondale"],
  },
  {
    slug: "buckeye",
    name: "Buckeye",
    label: "Buckeye, AZ",
    intro: "fast-growing West Valley communities and their essential home cooling systems",
    localContext: "Buckeye’s continued growth means many homes have newer equipment, but dust, constant summer runtime, and installation details can still affect performance.",
    nearby: ["avondale", "surprise", "phoenix"],
  },
  {
    slug: "gilbert",
    name: "Gilbert",
    label: "Gilbert, AZ",
    intro: "family homes across the Southeast Valley with high seasonal cooling demand",
    localContext: "Gilbert includes homes from several development eras, and each system should be assessed around its layout, age, maintenance history, and comfort concerns.",
    nearby: ["mesa", "tempe", "ahwatukee"],
  },
  {
    slug: "avondale",
    name: "Avondale",
    label: "Avondale, AZ",
    intro: "West Valley households that need dependable, efficient indoor comfort",
    localContext: "Avondale’s hot, dry summers keep air conditioners working hard, so small performance issues can become much more noticeable during peak afternoon heat.",
    nearby: ["buckeye", "phoenix", "surprise"],
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
export const getLocation = (slug: string) => locations.find((location) => location.slug === slug);
