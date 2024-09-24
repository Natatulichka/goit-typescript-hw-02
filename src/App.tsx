import getPhotos from "./apiService/photos";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import Section from "./components/Section/Section";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

interface Image {
  id: string;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
  likes: number;
  downloads: number;
  user: string;
}

interface SearchBarProps {
  onSubmit: (value: string) => void;
}

interface ImageGalleryProps {
  images: Image[];
  openModal: (url: string, alt: string) => void;
}

interface LoadMoreBtnProps {
  onClick: () => void;
  disabled: boolean;
}

interface ImageModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  src: string;
  alt: string;
}

interface Image {
  id: string;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
  likes: number;
  downloads: number;
  user: string;
}

interface SearchBarProps {
  onSubmit: (value: string) => void;
}

interface ImageGalleryProps {
  images: Image[];
  openModal: (url: string, alt: string) => void;
}

interface LoadMoreBtnProps {
  onClick: () => void;
  disabled: boolean;
}

interface ImageModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  src: string;
  alt: string;
}
function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalUrl, setModalUrl] = useState<string>("");
  const [modalAlt, setModalAlt] = useState<string>("");

  useEffect((): void => {
    if (!query) return;
    const fetchImages = async (): Promise<void> => {
      setIsLoading(true);
      setIsVisible(false);
      setError(null);
      setIsEmpty(false);
      try {
        const { results, total_pages } = await getPhotos(query, page);

        if (!results.length) {
          return setIsEmpty(true);
        }

        setImages((prevImages: Image[]) => [...prevImages, ...results]);
        setIsVisible(page < total_pages);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [page, query]);

  const handleSubmit = (value: string): void => {
    setQuery(value);
    setImages([]);
    setPage(1);
  };

  const lodeMore = (): void => {
    setPage((prevPage: number): number => prevPage + 1);
  };

  const openModal = (url: string, alt: string): void => {
    setIsOpen(true);
    setModalUrl(url);
    setModalAlt(alt);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    setModalUrl("");
    setModalAlt("");
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <Section>
        {images.length > 0 && (
          <ImageGallery images={images} openModal={openModal} />
        )}
        {isVisible && (
          <LoadMoreBtn onClick={lodeMore} disabled={isLoading}>
            {isLoading ? "Loading" : "Load more"}{" "}
          </LoadMoreBtn>
        )}
        {!images.length && isEmpty && <span>Sorry, </span>}
        {isLoading && <Loader />}
        {error && <span>error</span>}
        {isEmpty && (
          <span>
            there are no images matching your search query. Please try again!
          </span>
        )}
      </Section>
      <ImageModal
        modalIsOpen={isOpen}
        closeModal={closeModal}
        src={modalUrl}
        alt={modalAlt}
      />
    </>
  );
}

export default App;
