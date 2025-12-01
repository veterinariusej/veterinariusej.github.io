/**
 * Utility functions for navigation and scrolling
 */

export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const scrollToEnroll = (): void => {
  scrollToSection("enrollment");
};

export const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const openWhatsApp = (phoneNumber: string, message?: string): void => {
  const url = message 
    ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${phoneNumber}`;
  window.open(url, "_blank", "noopener noreferrer");
};
