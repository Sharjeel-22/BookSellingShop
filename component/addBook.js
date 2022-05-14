import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function AddBooks() {
  const [bookName, setBookName] = useState("");
  const [bookPrice, setBookPrice] = useState("");
  const [chooseBook, setChooseBook] = useState("");
  const holdData = useState([null]);
  function onSubmit(e) {
    toast.success("Add Book Successfully.....", {
      position: "top-right",
    });
    e.preventDefault();
    const data = {
      bookName: bookName,
      bookPrice: bookPrice,
      chooseBook: chooseBook,
    };
    holdData.push(data);
    console.log("Check Added Book Details:", data);
    console.log("Check Book List", holdData[2]);
  }
  return (
    <Container className="wrapper">
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
      <Row className="justify-content-center mt-3">
        <Col md={6}>
          <div className="card shadow-lg p-3 mb-5 bg-white rounded">
            <div className="card-body">
              <Form>
                <Form.Group className="mb-3" controlId="formBookName">
                  <Form.Label>Book Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={bookName}
                    placeholder="Enter book name"
                    onChange={(e) => setBookName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBookPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="text"
                    value={bookPrice}
                    placeholder="Enter book price"
                    onChange={(e) => setBookPrice(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBookPrice">
                  <Form.Label>
                    Upload File (e. g. Image, Audio, Video)
                  </Form.Label>
                  <Form.Control
                    className="sign__file-upload"
                    type="file"
                    placeholder="File"
                    accept="video/mp4,video/x-m4v,video/*,.png,.jpg,.jpeg"
                    onChange={(e) => setChooseBook(e.target.files[0])}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 text-danger"
                  controlId="formBasicCheckbox"
                >
                  <Form.Check
                    type="checkbox"
                    label="Are You Agree Term And Conditions"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={onSubmit}>
                  Add
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
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
    </Container>
  );
}
export default AddBooks;
