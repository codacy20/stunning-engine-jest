import IResource from "../../typings/IResource";
import MoviesApi from "../../api/MovieApi";

const moviesApi: IResource = new MoviesApi();

describe("Movies API", () => {
  test("should create a new movie", () => {
    const movieData: object = {
      name: "Pirates of the caribbean",
      rating: 8.5
    };

    moviesApi.create(movieData);

    expect(moviesApi.findMany()).toContain({ name: "Pirates of the caribbean", rating: 8.5 });
  });
});
