import { Button } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import bookService from "../services/bookService";
import BookData from "../model/book.model.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Books() {
  const [BookLists, setBookLists] = useState([]);

  useEffect(() => {
    getAllBooks();
  }, []);
  const getAllBooks = async () => {
    const list = BookData;
    setBookLists(list);
  };
  function removeBook(i) {
    setTimeout(() => {
      toast.success("Book Delete Successfully....", {
        position: "top-right",
      });

      const books = BookLists.filter((x) => {
        return i !== x.id;
      });
      setBookLists(books);
    }, 1000);
  }
  return (
    <div className="container">
      <Head>
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="card-body">
            <ul className="list-inline text-center mt-2">
              <li className="list-inline-item">
                <Link href={"/"}>
                  <a className="text-decoration-none text-info">Home</a>
                </Link>
              </li>{" "}
              <li className="list-inline-item">
                <Link href={"/addBook"}>
                  <a className="text-decoration-none text-info p-2">Add Book</a>
                </Link>
              </li>{" "}
              <li className="list-inline-item">
                <Link href={"/book"}>
                  <a className="text-decoration-none text-info p-2">
                    Book List
                  </a>
                </Link>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>
      </Head>

      <div className="row justify-content-center mt-2">
        <div className="col-md-6 mb-5">
          <div className="card shadow-lg p-3 mb-5 bg-white rounded">
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Book Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Discounts</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {BookLists &&
                    BookLists.map((x, index) => (
                      <tr key={index}>
                        <th scope="row">{x.id}</th>
                        <td>{x.bookName}</td>
                        <td>{x.bookPrice}</td>
                        <td>{x.descount}</td>
                        <td>
                          <Button
                            className="btn btn-danger bg-white border-0 text-danger"
                            onClick={() => {
                              removeBook(x.id);
                            }}
                          >
                            <MdDelete />
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{" "}
              <span className={styles.logo}>
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  width={72}
                  height={16}
                />
              </span>
            </a>
          </footer>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
export default Books;
