export default class GalleryManager {
  constructor(galleryElement) {
    this.galleryElement = galleryElement;
  }

  addImage(imageData) {
    const { name, url } = imageData;

    const imageBlock = document.createElement('div');
    imageBlock.className = 'image-block';

    const img = document.createElement('img');
    img.src = url;
    img.alt = name;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '&times;';
    deleteBtn.onclick = () => {
      this.galleryElement.removeChild(imageBlock);
    };

    imageBlock.appendChild(img);
    imageBlock.appendChild(deleteBtn);
    this.galleryElement.appendChild(imageBlock);
  }
}