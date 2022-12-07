const loader = document.querySelector('.loader');

export function showLoader() {
  loader.classList.remove('loader--hidden');
}

export function hideLoader() {
  setTimeout(()=>{loader.classList.add('loader--hidden');}, 500);
}
