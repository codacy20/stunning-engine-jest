import IResource from "../../typings/IResource";
import MoviesApi from "../../api/MovieApi";
import { movieData, movieData2 } from "../../mocks/movies";

const moviesApi: IResource = new MoviesApi();

describe("Movies API", () => {
  test("should create a new movie", () => {
    moviesApi.create(movieData);
    moviesApi.create(movieData2);
    expect(moviesApi.findMany()).toContainEqual({ name: "Pirates of the caribbean", rating: 8.5 });
  });
});
