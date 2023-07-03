function initHelp(): void {
  const openHelp = document.getElementById('open-help');
    openHelp?.addEventListener("click", () => {
      document.querySelector('.help')?.classList.add("show");
      openHelp.classList.add("hidden");
  })
  
  const closeHelp = document.getElementById('close-help');
    closeHelp?.addEventListener("click", () => {
      document.querySelector('.help')?.classList.remove("show");
      openHelp?.classList.remove("hidden");
  })
  }
  export default initHelp;