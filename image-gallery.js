const gallery = document.getElementById("gallery");

  // Fetch 12 random images from Lorem Picsum
async function fetchImages() {
  try {

    // CONNECTS TO THE WEBSITE AND STORES THE RESULTS IN RES
    const res = await fetch("https://picsum.photos/v2/list?page=2&limit=50");

    //CONVERTS THE RESULTS FROM STRING FORM TO OBJECT OR DATA FORM
    const data = await res.json();

    // CONVERTS THE DATA TO HTML AND INSERTS IT INTO THE gallery ID TAG 
    gallery.innerHTML = data.map((image) => {
        return ` 
          <div>
            <img src="${image.download_url}" alt="Random image by ${image.author}" />
          </div>`;
      })

      .join("");
  } catch (error) {
    //IF THERES AN ERROR, RUN THIS CODE
    console.error("Failed to fetch images:", error);
  }
}

//ACTIVATE THE FUNCTION, FUNCTIONS DON'T RUN UNTIL THY'RE ACTIVATED
fetchImages();
