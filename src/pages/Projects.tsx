import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from '@/components/layout/Layout';
import { useGSAPFadeIn, useGSAPStagger } from '@/hooks/useGSAP';

import heroKitchen from '@/assets/hero-kitchen.jpg';
import projectLiving from '@/assets/project-living.jpg';
import projectWardrobe from '@/assets/project-wardrobe.jpg';
import projectOffice from '@/assets/project-office.jpg';
import projectKitchen2 from '@/assets/project-kitchen-2.jpg';
import projectBedroom from '@/assets/project-bedroom.jpg';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Modern Sage Kitchen',
    category: 'Modular Kitchen',
    location: 'Mumbai',
    image: heroKitchen,
    description: 'A contemporary modular kitchen featuring sage green cabinets, white marble countertops, and gold hardware accents. Smart storage solutions maximize space efficiency.',
    highlights: ['L-shaped layout', 'Soft-close mechanisms', 'Built-in appliances', 'Premium marble countertop'],
  },
  {
    id: 2,
    title: 'Minimalist Living Space',
    category: 'Living Room',
    location: 'Delhi',
    image: projectLiving,
    description: 'A serene living room designed with clean lines and natural materials. The space balances comfort with sophisticated minimalism.',
    highlights: ['Open floor plan', 'Natural wood accents', 'Custom lighting design', 'Premium fabric upholstery'],
  },
  {
    id: 3,
    title: 'Luxury Walk-in Closet',
    category: 'Wardrobe',
    location: 'Bangalore',
    image: projectWardrobe,
    description: 'A premium walk-in closet with intelligent organization systems, LED lighting, and glass-fronted displays for accessories.',
    highlights: ['LED lighting system', 'Accessory drawers', 'Mirror integrations', 'Soft-close hardware'],
  },
  {
    id: 4,
    title: 'Contemporary Office',
    category: 'Office',
    location: 'Hyderabad',
    image: projectOffice,
    description: 'A modern commercial office space designed for productivity and collaboration, featuring ergonomic workstations and biophilic design elements.',
    highlights: ['Open workstations', 'Meeting pods', 'Biophilic elements', 'Acoustic panels'],
  },
  {
    id: 5,
    title: 'Elegant Island Kitchen',
    category: 'Modular Kitchen',
    location: 'Chennai',
    image: projectKitchen2,
    description: 'An elegant kitchen with a central island, handleless cabinets, and integrated appliances creating a seamless cooking experience.',
    highlights: ['Island counter', 'Handleless design', 'Integrated hood', 'Premium hardware'],
  },
  {
    id: 6,
    title: 'Serene Master Bedroom',
    category: 'Bedroom',
    location: 'Pune',
    image: projectBedroom,
    description: 'A peaceful master bedroom with warm neutral tones, custom headboard, and ambient lighting creating the perfect retreat.',
    highlights: ['Custom headboard', 'Cove lighting', 'Walk-in closet access', 'Premium bedding'],
  },
];

const categories = ['All', 'Modular Kitchen', 'Living Room', 'Wardrobe', 'Office', 'Bedroom'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const titleRef = useGSAPFadeIn();
  const gridRef = useGSAPStagger();

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    if (bannerRef.current) {
      gsap.to(bannerRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: bannerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Projects | Sunstar Modular Kitchen - Interior Design Portfolio</title>
        <meta name="description" content="Explore our portfolio of modular kitchens, living rooms, wardrobes, and commercial interiors. See how Sunstar transforms spaces across India." />
        <link rel="canonical" href="https://sunstarmodular.com/projects" />
      </Helmet>
      <Layout>
        {/* Hero Banner with Parallax */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <div ref={bannerRef} className="absolute inset-0 scale-110">
            <img
              src={heroKitchen}
              alt="Sunstar interior design projects showcase"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/60" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-background">
                Our Projects
              </h1>
              <p className="text-background/80 mt-4 text-lg max-w-xl mx-auto px-4">
                Explore our portfolio of stunning interior transformations
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur-sm z-30">
          <div className="container-premium">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-primary-light hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding">
          <div className="container-premium">
            <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.category} in ${project.location}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-background font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Details
                      </span>
                    </div>
                  </div>
                  <span className="text-primary text-sm">{project.category}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{project.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Parallax Banner */}
        <section className="relative h-[40vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={projectWardrobe}
              alt="Luxury wardrobe design"
              className="w-full h-full object-cover"
              style={{ transform: 'scale(1.1)' }}
            />
            <div className="absolute inset-0 bg-foreground/70" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="max-w-2xl px-4">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-background">
                Ready to Transform Your Space?
              </h2>
              <p className="text-background/80 mt-4">
                Let's create something beautiful together. Book your free consultation today.
              </p>
              <a href="/contact" className="btn-primary mt-8 inline-block">
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-background rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full aspect-video object-cover rounded-t-3xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8">
                <span className="text-primary text-sm">{selectedProject.category}</span>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mt-2">
                  {selectedProject.title}
                </h2>
                <p className="text-muted-foreground mt-1">{selectedProject.location}</p>
                <p className="text-foreground/80 mt-6 leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="mt-6">
                  <h4 className="font-semibold text-foreground mb-3">Project Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 rounded-full bg-primary-light text-primary text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="/contact"
                  className="btn-primary mt-8 inline-block"
                >
                  Start Similar Project
                </a>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default Projects;
