import http from "../endpoint/ApiEndPoint";

class BookService {
  getBooks() {
    return http.get("/photos/1");
  }
}
export default new BookService();
