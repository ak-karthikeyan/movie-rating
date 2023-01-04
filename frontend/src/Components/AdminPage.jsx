import { Form, Input, Button, message, Upload, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import axios from "axios"
function AdminPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onAddMovieClick = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const submit = () => {
    message.success("Movie data has been uploaded");
  };

  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState("https://placeimg.com/640/480/any");
  const [description, setDescription] = useState("");

  const addMovie = () => {
    let data = {
      id: Math.floor(Math.random() * 100),
      movieName: title,
      movieDetails: description,
      moviePoster: picture,
      movieRating: 1,
    };
    axios
      .post("http://localhost:5000/addmovie", data)
      .then((res) => {
        if (res.status === 200) {
          alert("Movie added successfully");
        }
      })
      .catch((err) => console.error(err));
  }
  return (
    <>
      <Button
        style={{ marginLeft: "80%" }}
        onClick={() => {
          onAddMovieClick();
        }}
      >
        Add Movies
      </Button>
      <div
        style={{
          display: "flex",
          justifyContent: "Center",
          alignItems: "Center",
        }}
      >
        <Modal
          title="Add a movie..."
          open={isModalOpen}
          onCancel={handleCancel}
          footer={false}
        >
          <Form className="adminForm">
            <Form.Item
              label="Movie name"
              name={"movieName"}
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Input placeholder="Movie name" onChange={(e) => setTitle(e.target.value)} />
            </Form.Item>
            <Form.Item
              label="Movie details"
              name={"details"}
              rules={[{ required: true, message: "This field is required" }]}
            >
              <TextArea placeholder="(Max. 500 characters)"  onChange={(e) => setDescription(e.target.value)}/>
            </Form.Item>
            <Form.Item
              label="Movie Poster ( jpg/png only )"
              name={"posterImage"}
            >
              <Upload.Dragger multiple accept=".png,.jpg">
                Drag image(s) here or <br />
                <Button>Click to upload</Button>
              </Upload.Dragger>
            </Form.Item>
            <Button type="primary"  block onClick={addMovie}>
              Submit
            </Button>
          </Form>
        </Modal>
      </div>
    </>
  );
}
export default AdminPage;
