// components/AwardsSection.jsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, FileText, Download, Award } from "lucide-react";

const awards = [
  {
    id: 1,
    title: "Lokmat Business Excellence Award",
    issuer: "Lokmat Media Group",
    description:
      "Founder Milind P. Rajhans was felicitated with the Lokmat Business Excellence Award, recognizing his outstanding contribution and excellence as an industrial and financial consultant.",
    highlight: "Trophy Felicitated on Stage",
    images: [
      { src: "/awards/lokmat-business-excellence-1.jpg", alt: "Milind P. Rajhans receiving the Lokmat Business Excellence Award trophy" },
      { src: "/awards/lokmat-business-excellence-2.jpg", alt: "Milind P. Rajhans being felicitated on stage at the Lokmat Business Excellence Awards" },
    ],
  },
  {
    id: 2,
    title: "Sakal Gauravgatha Samman",
    issuer: "Sakal Media Group",
    description:
      "Felicitated under Sakal Media Group's 'Gauravgatha' initiative, honoring Milind P. Rajhans' journey as a trusted industrial and financial consultant to Nashik's business community, alongside a published profile feature.",
    highlight: "Certificate of Honor & Press Feature",
    images: [
      { src: "/awards/sakal-gauravgatha-1.jpg", alt: "Milind P. Rajhans with the Sakal Gauravgatha felicitation citation" },
      { src: "/awards/sakal-gauravgatha-2.jpg", alt: "Milind P. Rajhans being felicitated on stage at Sakal Gauravgatha" },
    ],
    pdfs: [
      { src: "/awards/sakal-gauravgatha-feature.pdf", label: "Press Feature (Full Article)" },
      { src: "/awards/sakal-gauravgatha-clipping.pdf", label: "Published Newspaper Clipping" },
    ],
  },
];

export default function AwardsSection() {
  // viewer: { type: "image", awardIndex, imageIndex } | { type: "pdf", awardIndex, pdfIndex } | null
  const [viewer, setViewer] = useState(null);

  const openImage = (awardIndex, imageIndex) =>
    setViewer({ type: "image", awardIndex, imageIndex });
  const openPdf = (awardIndex, pdfIndex) =>
    setViewer({ type: "pdf", awardIndex, pdfIndex });
  const closeViewer = () => setViewer(null);

  const showImage = (delta) => {
    setViewer((prev) => {
      if (!prev || prev.type !== "image") return prev;
      const imgs = awards[prev.awardIndex].images;
      const nextIndex = (prev.imageIndex + delta + imgs.length) % imgs.length;
      return { ...prev, imageIndex: nextIndex };
    });
  };

  return (
    <section id="awards" className="py-12 sm:py-16 lg:py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Awards & Recognition
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
            Honored for Excellence & Trust
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Recognized by leading media houses for our founder's decades-long contribution to Nashik's industrial and financial landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {awards.map((award, awardIndex) => (
            <div
              key={award.id}
              className="group h-full flex flex-col bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#f97316]/20"
            >
              <button
                type="button"
                onClick={() => openImage(awardIndex, 0)}
                className="relative w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden block bg-gray-100 shrink-0"
                aria-label={`View gallery for ${award.title}`}
              >
                <Image
                  src={award.images[0].src}
                  alt={award.images[0].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs sm:text-sm font-medium">
                    View Gallery ({award.images.length} photos)
                  </span>
                </div>
              </button>

              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <span className="inline-block px-3 py-1 bg-[#f97316]/10 text-[#ea580c] rounded-full text-xs font-semibold mb-3 self-start">
                  {award.issuer}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {award.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {award.description}
                </p>

                <div className="flex flex-col items-start gap-2 pt-3 mt-auto border-t border-gray-100">
                  {award.highlight && (
                    <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-500">
                      <Award size={16} className="text-[#f97316]" />
                      {award.highlight}
                    </div>
                  )}
                  {award.pdfs &&
                    award.pdfs.map((doc, pdfIndex) => (
                      <button
                        key={doc.src}
                        type="button"
                        onClick={() => openPdf(awardIndex, pdfIndex)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#ea580c] hover:text-[#f97316] transition-colors"
                      >
                        <FileText size={16} />
                        View {doc.label}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {viewer && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8"
          onClick={closeViewer}
        >
          <button
            type="button"
            onClick={closeViewer}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {viewer.type === "image" && (
            <>
              {awards[viewer.awardIndex].images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      showImage(-1);
                    }}
                    className="absolute left-2 sm:left-6 text-white/80 hover:text-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={36} />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      showImage(1);
                    }}
                    className="absolute right-2 sm:right-6 text-white/80 hover:text-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={36} />
                  </button>
                </>
              )}

              <div
                className="relative w-full max-w-3xl h-[80vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={awards[viewer.awardIndex].images[viewer.imageIndex].src}
                  alt={awards[viewer.awardIndex].images[viewer.imageIndex].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            </>
          )}

          {viewer.type === "pdf" &&
            (() => {
              const doc = awards[viewer.awardIndex].pdfs[viewer.pdfIndex];
              return (
                <div
                  className="w-full max-w-4xl h-[85vh] flex flex-col bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-gray-100 bg-gray-50">
                    <p className="text-sm sm:text-base font-semibold text-gray-900 truncate">
                      {doc.label}
                    </p>
                    <a
                      href={doc.src}
                      download
                      className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#ea580c] hover:text-[#f97316] transition-colors"
                    >
                      <Download size={14} />
                      Download
                    </a>
                  </div>
                  <iframe src={doc.src} title={doc.label} className="flex-1 w-full" />
                </div>
              );
            })()}
        </div>
      )}
    </section>
  );
}
