import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useGSAPFadeIn, useGSAPStagger } from '@/hooks/useGSAP';
import projectKitchen from '@/assets/hero-kitchen.jpg';
import projectLiving from '@/assets/project-living.jpg';
import projectWardrobe from '@/assets/project-wardrobe.jpg';
import projectBedroom from '@/assets/project-bedroom.jpg';

const projects = [
  {
    id: 1,
    image: projectKitchen,
    title: 'Modern Sage Kitchen',
    category: 'Modular Kitchen',
    location: 'Mumbai',
  },
  {
    id: 2,
    image: projectLiving,
    title: 'Minimalist Living Space',
    category: 'Living Room',
    location: 'Delhi',
  },
  {
    id: 3,
    image: projectWardrobe,
    title: 'Luxury Walk-in Closet',
    category: 'Wardrobe',
    location: 'Bangalore',
  },
  {
    id: 4,
    image: projectBedroom,
    title: 'Serene Master Bedroom',
    category: 'Bedroom',
    location: 'Chennai',
  },
];

const FeaturedProjects = () => {
  const titleRef = useGSAPFadeIn();
  const gridRef = useGSAPStagger();

  return (
    <section className="section-padding bg-muted">
      <div className="container-premium">
        <div ref={titleRef} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Portfolio</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4">
              Featured Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center text-primary font-medium group"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to="/projects"
              className={`group relative overflow-hidden rounded-3xl ${
                index === 0 || index === 3 ? 'md:aspect-[4/3]' : 'md:aspect-[4/3]'
              } aspect-[4/3]`}
            >
              <img
                src={project.image}
                alt={`${project.title} - ${project.category} project in ${project.location}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-primary-light text-sm">{project.category}</span>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-background mt-2">
                  {project.title}
                </h3>
                <p className="text-background/70 text-sm mt-1">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
