// app
export interface Image {
  id: string;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
  likes: number;
  downloads: number;
  user: string;
}

export interface SearchBarProps {
  onSubmit: (value: string) => void;
}

export interface ImageGalleryProps {
  images: Image[];
  openModal: (url: string, alt: string) => void;
}

export interface LoadMoreBtnProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
}

export interface ImageModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  src: string;
  alt: string;
}
export interface ImageCardProps {
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  openModal: (url: string, alt: string) => void;
}
export interface SectionProps {
  title?: string;
  children: React.ReactNode;
}

export interface LoaderProps {}

export interface SearchResponse {
  total: number;
  total_pages: number;
  results: {
    id: string;
    urls: {
      small: string;
      regular: string;
    };
    user: {
      name: string;
      username: string;
    };
  }[];
}
