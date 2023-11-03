import MwlImage from "../lightbox/MwlImage";
import { caption_source, selector, anti_selector as settings_anti_selector } from "../lightbox/settings";

/**
 * Reset the mwl-img class to all images matching selector/anti-selector and return the number of images.
 * @returns {number} The number of images found
 */
export const resetMwlImgClass = () => {
  document.querySelectorAll("img.mwl-img").forEach(($image) => {
    $image.classList.remove("mwl-img");
  });

  const scrapper_anti_selector = '.leaflet-tile, .leaflet-google-mutant';
  const anti_selector = settings_anti_selector
    ? [settings_anti_selector, scrapper_anti_selector].join(', ')
    : scrapper_anti_selector
  const anti_srces = ['maps.googleapis.com', 'api.mapbox.com', 'api.maptiler.com', 'openstreetmap.org']

  let index = 0;
  document.querySelectorAll(selector).forEach((selector) => {
    selector.querySelectorAll("img:not(.mwl-img)").forEach((potentialImage) => {
      if (!potentialImage.closest(anti_selector) && !anti_srces.some((src) => potentialImage.src.includes(src))) {
        potentialImage.classList.add("mwl-img");
        potentialImage.setAttribute("mwl-index", index);
        index++;
      }
    });
  });

  return index;
}

/**
 * Reads the page to add the mwl-img class to images matching selector/anti-selector
 */
export const scrapThePage = async () => {

  // Wait for the Meow Gallery rendering to finish.
  const mgl_root_selector = '.mgl-root';
  if (document.querySelector(mgl_root_selector)) {
    const mgl_roots = document.querySelectorAll(mgl_root_selector)
    let mgl_roots_rendered = false
    while (!mgl_roots_rendered) {
      mgl_roots_rendered = Array.from(mgl_roots).every((mgl_root) => mgl_root.querySelector('img'))
      if (!mgl_roots_rendered) {
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }
  }

  return resetMwlImgClass();
};

export const retrieveImageId = ($image) => {
  if ($image.getAttribute("data-mwl-img-id")) {
    return $image.getAttribute("data-mwl-img-id");
  }
  const classList = Array.from($image.classList);
  if (classList.length > 0 && classList.some(className => className.includes('wp-image-'))) {
    const className = classList.find(className => className.includes('wp-image-'));
    return className.replace('wp-image-', '');
  }
  return null;
}

/**
 * Create an MwlImage object for each images.
 */
export const retrieveImagesData = () => {
  const $images = document.querySelectorAll(".mwl-img");
  const images = [];

  $images.forEach(($image) => {
    // The image used in the thumbnail
    let current_src = $image.currentSrc;
    // Check if image is a lazy-loaded one, not yet loaded
    if (
      $image.classList.contains("mgl-lazy") &&
      !$image.classList.contains("lazyloaded")
    ) {
      current_src = false;
    }

    const img_id = retrieveImageId($image);
    if (
      img_id != null &&
      window.mwl_data &&
      window.mwl_data[img_id].success
    ) {
      const image_data = window.mwl_data[img_id];

      if (image_data.data.gps.split(",").length > 1) {
        image_data.gps = {
          lat: parseFloat(image_data.data.gps.split(",")[0]),
          lng: parseFloat(image_data.data.gps.split(",")[1]),
        };
      } else {
        image_data.gps = {
          lat: "N/A",
          lng: "N/A",
        };
      }

      let caption;

      if (caption_source == "description" && image_data.data.description) {
        caption = image_data.data.description;
      }

      if (caption_source == "caption" && image_data.data.caption) {
        caption = image_data.data.caption;
      }
      const data = {
        id: image_data.data.id,
        title: image_data.data.title,
        index: parseInt($image.getAttribute("mwl-index")),
        caption,
        img_low_res_src: current_src,
        img_src: encodeURI(image_data.file),
        img_srcset: image_data.file_srcset,
        img_sizes: image_data.file_sizes,
        dimensions: image_data.dimension,
        img_orientation:
          image_data.dimension.width > image_data.dimension.height
            ? "landscape"
            : "portrait",
        img_exifs: image_data.data,
        img_gps: image_data.gps,
        download_link: image_data.download_link,
      };

      images.push(MwlImage(data));
    } else {
      let img_src = "";
      if ($image.classList.contains("mgl-lazy")) {
        img_src = $image.getAttribute("mgl-src");
      }
      if ($image.getAttribute("data-lazy-src")) {
        img_src = $image.getAttribute("data-lazy-src");
      }
      if (!img_src) {
        img_src = $image.getAttribute("src");
      }

      let img_srcset = "";
      if ($image.getAttribute("data-lazy-srcset")) {
        img_srcset = $image.getAttribute("data-lazy-srcset");
      }
      if (!img_srcset) {
        img_srcset = $image.getAttribute("srcset");
      }

      let img_sizes = "";
      if ($image.getAttribute("data-lazy-sizes")) {
        img_sizes = $image.getAttribute("data-lazy-sizes");
      }
      if (!img_sizes) {
        img_sizes = $image.getAttribute("sizes");
      }

      const data = {
        index: parseInt($image.getAttribute("mwl-index")),
        title: '',
        img_low_res_src: current_src,
        img_src: img_src,
        img_srcset: img_srcset,
        img_sizes: img_sizes,
        caption: false,
        dimensions: false,
        img_orientation: "landscape",
        img_exifs: {
          title: "",
          caption: "",
          camera: "N/A",
          lens: "N/A",
          aperture: "N/A",
          shutter_speed: "N/A",
          iso: "N/A",
          focal_length: "N/A",
          date: "N/A",
          keywords: "N/A",
        },
      };
      images.push(MwlImage(data));
    }
  });

  return images;
};
