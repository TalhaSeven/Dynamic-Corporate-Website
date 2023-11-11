import { useState } from "react";
import ImageList from "./ImageList.js"; // Resim listesi verileri
import GalleryModal from "./GalleryModal.jsx"; // Galeri modal bileşeni

function Gallery() {
  // Modal durumu ve seçilen resmin indeksini saklayan state'ler
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Modal'ı açan fonksiyon
  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  // Modal'ı kapatan fonksiyon
  const closeModal = () => {
    setSelectedImageIndex(null);
    setModalOpen(false);
  };

  return (
    <div className="sm:px-8 md:px-12 py-8 md:py-12 lg:py-16 bg-gradient-to-r from-[#fcfcfb] to-[#F1FCF8] font-fredoka">
      {/* Galeri başlık ve arkaplan */}
      <div
        className="rounded-xl overflow-hidden"
        style={{
          backgroundImage: 'url("./image/breadcrumb-bg.jpg")',
          backgroundSize: "center",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          width: "100%",
        }}
      >
        <div className="bg-[#05c0b3b3] py-30 text-white">
          {/* Galeri başlık */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-6xl font-semibold mb-3 sm:mb-5 md:mb-7 whitespace-nowrap text-center gallery-title">
            Galeri
          </h2>
          <div className="flex justify-center">
            {/* Sayfa altındaki alt başlık */}
            <p className="font-light text-sm sm:text-base md:text-lg lg:text-xl flex gap-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                >
                  <path
                    d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"
                    fill="#fff"
                  ></path>
                </svg>
              </span>
              Kindedo - Gallery
            </p>
          </div>
        </div>
      </div>
      {/* Resimlerin listesi */}
      <div className="overflow-hidden rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 p-2">
        {ImageList.map((image, index) => (
          <div
            key={image.id}
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
            className="hover:box-shadow-custom"
          >
            {/* Resimleri tıklanabilir hale getiren fonksiyon */}
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full hover:scale-95 duration-300 object-cover cursor-pointer"
              onClick={() => openModal(index)} // Resme tıklama işlevi indeksi ile çağırılıyor
            />
          </div>
        ))}
      </div>
      {/* Modal bileşeni */}
      <GalleryModal
        isOpen={modalOpen}
        onClose={closeModal}
        content={
          selectedImageIndex !== null && (
            <img
              src={ImageList[selectedImageIndex].src}
              alt={ImageList[selectedImageIndex].alt}
            />
          )
        }
        images={ImageList} // Tüm resimleri içeren dizi
        setSelectedImageIndex={setSelectedImageIndex}
      />
    </div>
  );
}

export default Gallery;
