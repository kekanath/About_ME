/**
 * Centralized asset configuration
 * 
 * This file manages all local and external asset references.
 * To add local images, place them in src/assets/images/ folder
 * and import them directly (preferred) or reference them here.
 * 
 * Example:
 * import profileImg from './images/profile.jpg'
 * export const ASSETS = {
 *   PROFILE_IMAGE: profileImg,
 * }
 */

// Local images - import and reference here
// import profileImage from './images/karthik.jpg'
// import waveGif from './images/wave.gif'
// import highFiveGif from './images/high-five.gif'
// etc.

// GitHub raw URLs - working and centralized
// TODO: Replace these with local assets in src/assets/ after downloading files
// Migration path: https://raw.githubusercontent.com → /My_personal_WEBUI/assets/
export const ASSETS = {
  // Hero Section Images
  PROFILE_IMAGE: 'https://raw.githubusercontent.com/kekanath/kekanathan/main/karthik.jpg',
  WAVE_GIF: 'https://raw.githubusercontent.com/kekanath/kekanathan/main/globle_1.gif',
  
  // About Section Images
  ABOUT_IMAGE: 'https://raw.githubusercontent.com/kekanath/kekanathan/main/ChatGPT%20Image%20Sep%2026%2C%202025%2C%2011_54_51%20PM.png',
  HIGH_FIVE_GIF: 'https://raw.githubusercontent.com/kekanath/kekanathan/main/High_five.gif',
  
  // Project Images
  PROJECT_1_IMAGE: 'https://raw.githubusercontent.com/kekanath/kekanathan/main/pcb_example.jpg',
  PROJECT_2_IMAGE: 'https://raw.githubusercontent.com/kekanath/kekanathan/main/epdu.jpg',
  PROJECT_3_IMAGE: 'https://raw.githubusercontent.com/kekanath/kekanathan/main/attiny.jpg',
  
  // Videos
  APPSEC_VIDEO: 'https://github.com/kekanath/kekanathan/raw/main/Appsec_2025.mp4',
  
  // Gallery Images (external CDN for now)
  GALLERY_PCB: 'https://cdn.pixabay.com/photo/2016/11/29/09/32/pcb-1867376_1280.jpg',
  GALLERY_SOLDERING: 'https://cdn.pixabay.com/photo/2014/04/03/00/42/soldering-309264_1280.jpg',
  GALLERY_HARDWARE: 'https://cdn.pixabay.com/photo/2015/01/08/18/25/electronics-593655_1280.jpg',
}

export default ASSETS
