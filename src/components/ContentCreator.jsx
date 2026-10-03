import React, { useEffect, useState } from 'react';
import { contentCreation } from '../data/portfolioData';

// All gallery photos, bundled at build time (keyed by folder name)
const galleryModules = import.meta.glob('../assets/gallery/**/*.{jpeg,jpg,png}', { eager: true, import: 'default' });
const galleryByFolder = {};
for (const [path, src] of Object.entries(galleryModules)) {
  const folder = path.split('/')[3]; // ../assets/gallery/<folder>/<file>
  (galleryByFolder[folder] ||= []).push(src);
}

const photosFor = (gallery) => {
  const folders = Array.isArray(gallery) ? gallery : [gallery];
  return folders.flatMap((f) => galleryByFolder[f] || []);
};

const CreatorCard = ({ category, index, onOpen }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 100}
    onClick={() => onOpen(category)}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.15)] transition-all duration-500 group flex flex-col justify-between cursor-pointer"
  >
    <div>
      <div className="flex justify-between items-start mb-6">
        <span className="text-4xl p-3 bg-white/5 rounded-2xl group-hover:bg-[#ff2a2a]/10 group-hover:scale-110 transition-all duration-300">
          {category.icon}
        </span>
        <span className="text-white/30 text-xs font-mono font-bold tracking-widest uppercase py-1 px-2 border border-white/5 rounded-full">
          {category.stats}
        </span>
      </div>
      <h3 className="text-white text-xl md:text-2xl font-black mb-3 tracking-tight group-hover:text-[#ff2a2a] transition-colors">
        {category.title}
      </h3>
      <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 font-medium">
        {category.description}
      </p>
    </div>

    <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono tracking-wider font-bold text-white/40 group-hover:text-white transition-colors">
      <span>View Photos</span>
      <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  </div>
);

const GalleryModal = ({ category, onClose }) => {
  const [zoomed, setZoomed] = useState(null);
  const photos = category ? photosFor(category.gallery) : [];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') (zoomed ? setZoomed(null) : onClose());
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoomed, onClose]);

  if (!category) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="min-h-full max-w-6xl mx-auto px-6 py-10 md:py-16"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start gap-6 mb-8">
          <div>
            <div className="text-[#ff2a2a] text-xs font-mono font-black tracking-widest uppercase mb-2">
              {category.stats}
            </div>
            <h3 className="text-white text-3xl md:text-4xl font-black tracking-tight">
              {category.title}
            </h3>
            <p className="text-white/50 text-sm mt-2 font-medium">{category.description}</p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-11 h-11 rounded-full border border-white/20 text-white/70 hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center text-xl"
            aria-label="Close gallery"
          >
            ×
          </button>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pb-10">
          {photos.map((src) => (
            <button
              key={src}
              onClick={() => setZoomed(src)}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-red-500/40 transition-all duration-300"
            >
              <img
                src={src}
                alt={`${category.title} photo`}
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-mono font-bold tracking-widest uppercase bg-black/60 px-3 py-1.5 rounded-full">
                  View
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Zoomed single photo */}
      {zoomed && (
        <div
          className="fixed inset-0 z-[100000] bg-black/95 flex items-center justify-center p-6 cursor-zoom-out"
          onClick={() => setZoomed(null)}
        >
          <img
            src={zoomed}
            alt={`${category.title} photo enlarged`}
            className="max-w-full max-h-full rounded-xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

const ContentCreator = () => {
  const [openCategory, setOpenCategory] = useState(null);

  return (
    <section id="creator" className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            {contentCreation.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            {contentCreation.heading}
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl font-medium leading-relaxed">
            {contentCreation.description}
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {contentCreation.categories.map((category, index) => (
            <CreatorCard
              key={category.title}
              category={category}
              index={index}
              onOpen={setOpenCategory}
            />
          ))}
        </div>

      </div>

      {/* Gallery Lightbox */}
      <GalleryModal category={openCategory} onClose={() => setOpenCategory(null)} />
    </section>
  );
};

export default ContentCreator;
