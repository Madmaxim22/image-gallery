import '../css/style.css';
import GalleryManager from './GalleryManager';
import ImageApp from './ImageApp';

const galleryManager = new GalleryManager(document.getElementById('gallery'));
const imageApp = new ImageApp(galleryManager);