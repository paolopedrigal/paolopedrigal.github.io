export const observer = new IntersectionObserver((entries: any[]) => {
  entries.forEach((entry: any) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
