"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

const industries = [
  {
    image: "/industries/defense.jpg",
    title: "Defense and Security",
    description: 'Drones play a crucial role in enhancing defense and security operations. They are used for surveillance, reconnaissance, search and rescue, and tactical support, offering real-time data and improved situational awareness.',
    applications: [
      "Surveillance and reconnaissance",
      "Border and coastal patrol",
      "Search and rescue operations",
      "Tactical support and intelligence gathering",
      "Disaster response and recovery (natural disasters)",
      "Emergency medical delivery (medicines and supplies)",
      "Firefighting support and assessment",
    ],
  },
  {
    image: "/industries/commercial.jpg",
    title: "Commercial and Industrial",
    description: 'In the commercial and industrial sectors, drones are used for infrastructure inspection, construction monitoring, agriculture, real estate, and more. They help improve efficiency, safety, and accuracy in various applications.',
    applications: [
      "Infrastructure inspection (bridges, pipelines, power lines)",
      "Construction site monitoring and surveying",
      "Real estate photography and videography",
      "Insurance claim assessments",
      "Precision agriculture (crop monitoring, spraying, planting)",
      "Forestry management (tree health, logging operations)",
      "Livestock monitoring",
      "Irrigation management",
      "Aerial photography and cinematography",
      "Live event broadcasting and coverage",
      "Film production and special effects",
      "Package delivery (last-mile delivery)",
      "Medical supplies and blood transport",
      "Cargo transport in remote or inaccessible areas",
    ],
  },
  {
    image: "/industries/research.jpg",
    title: "Research, Planning, and Healthcare",
    description: 'Drones are invaluable tools for research, urban planning, and healthcare. They assist in wildlife monitoring, environmental impact assessments, urban mapping, scientific research, and delivering medical supplies to remote areas.',
    applications: [
      "Wildlife monitoring and research",
      "Forest management and fire monitoring",
      "Environmental impact assessments",
      "Pollution monitoring (air and water quality)",
      "Traffic monitoring and management",
      "Urban mapping and infrastructure planning",
      "Smart city initiatives (environmental monitoring)",
      "Geospatial data collection and mapping",
      "Climate and weather monitoring",
      "Archaeological site surveying",
      "Oceanographic and marine research",
      "Medical supply delivery in remote areas",
      "Disaster relief and humanitarian aid",
      "Telemedicine support",
    ],
  },
];

const Sectors = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-12">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Image src={industry.image} alt={industry.title} width={100} height={100} quality={100} className="w-full md:w-1/3 rounded-lg shadow-lg" />
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold mb-2">{industry.title}</h2>
              <p className="mb-4">{industry.description}</p>
              <ul className="list-disc ml-5">
                {industry.applications.map((application, idx) => (
                  <li key={idx} className="mb-1">{application}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sectors;
