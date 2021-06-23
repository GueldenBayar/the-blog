import axios from "axios";

export default function SubmitPost() {
  // tags,title,adress,longitude,latitude,condition,popularity,picturesDescription,picturesUrl,description,supplies

  const submitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const newPost = {
      tags: form.tags.value,
      title: form.title.value,
      adress: form.adress.value,
      longitude: form.longitude.value,
      latitude: form.latitude.value,
      condition: form.condition.value,
      popularity: form.popularity.value,
      picturesDescription: form.picturesDescription.value,
      picturesUrl: form.picturesUrl.value,
      description: form.description.value,
      supplies: form.supplies.value,
    };

    axios
      .post("http://localhost:3001/api/locations", newPost)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="content-container-custom">
      <form onSubmit={submitForm}>
        <div class="mb-3">
          <label for="tags" class="form-label">
            Tags{" "}
          </label>
          <input
            type="text"
            class="form-control"
            id="tags"
            aria-describedby="emailHelp"
          />
          <div id="titleHelp" class="form-text">
            Enter the the title of your location here{" "}
          </div>
        </div>

        <div class="mb-3">
          <label for="title" class="form-label">
            Title{" "}
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
          <div id="titleHelp" class="form-text">
            Enter the the title of your location here{" "}
          </div>
        </div>

        <div class="mb-3">
          <label for="adress" class="form-label">
            Adress{" "}
          </label>
          <input
            type="text"
            class="form-control"
            id="adress"
            aria-describedby="emailHelp"
          />
        </div>

        <div class="mb-3">
          <label for="longitude" class="form-label">
            Longitude{" "}
          </label>
          <input
            type="number"
            class="form-control"
            id="longitude"
            aria-describedby="emailHelp"
          />
        </div>

        <div class="mb-3">
          <label for="latitude" class="form-label">
            Latitude{" "}
          </label>
          <input
            type="number"
            class="form-control"
            id="latitude"
            aria-describedby="emailHelp"
          />
        </div>

        <div class="mb-3">
          <label for="condition" class="form-label">
            Condition{" "}
          </label>
          <input
            type="text"
            class="form-control"
            id="condition"
            aria-describedby="emailHelp"
          />
        </div>

        <div class="mb-3">
          <label for="popularity" class="form-label">
            Popularity{" "}
          </label>
          <input
            type="text"
            class="form-control"
            id="popularity"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            Cozy or vibrant?{" "}
          </div>
        </div>

        <div class="mb-3">
          <label for="picturesDescription" class="form-label">
            Picture description
          </label>
          <input
            type="text"
            class="form-control"
            id="picturesDescription"
            aria-describedby="emailHelp"
          />
          <div id="picturesDescription" class="form-text">
            Describe your picture
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Link to picture
          </label>
          <input
            type="text"
            class="form-control"
            id="picturesUrl"
            aria-describedby="emailHelp"
          />
          <div id="picturesUrl" class="form-text">
            Add a link to your picture here
          </div>
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">
            Description
          </label>
          <input
            type="text"
            class="form-control"
            id="description"
            aria-describedby="emailHelp"
          />
          <div id="description" class="form-text">
            Describe the table for others
          </div>
        </div>
        <div class="mb-3">
          <label for="supplies" class="form-label">
            Snacks in the area
          </label>
          <input
            type="text"
            class="form-control"
            id="supplies"
            aria-describedby="emailHelp"
          />
          <div id="supplies" class="form-text">
            What snack opportunities are nearby?
          </div>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
}
